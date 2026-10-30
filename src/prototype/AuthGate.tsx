import { createContext, useContext, useEffect, useState, type FormEvent, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import './login.css';

type Identity = { id: string; username: string };
const IdentityContext = createContext<Identity | null>(null);
export function useIdentity() {
  const identity = useContext(IdentityContext);
  if (!identity) throw new Error('Login required');
  return identity;
}

export function AuthGate({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [identity, setIdentity] = useState<Identity | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;
    let revision = 0;
    const accept = async (next: Session | null) => {
      const current = ++revision;
      setSession(next);
      setIdentity(null);
      setLoading(true);
      setLoadError(false);
      if (next) {
        const { data, error } = await supabase.from('study_profiles').select('username').eq('id', next.user.id).single();
        if (!active || current !== revision) return;
        if (error || !data) setLoadError(true);
        else setIdentity({ id: next.user.id, username: data.username });
      }
      if (active && current === revision) setLoading(false);
    };
    // Keep database requests outside the synchronous auth callback.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, next) => {
      if (event === 'TOKEN_REFRESHED') { if (active) setSession(next); return; }
      if (active) window.setTimeout(() => { if (active) void accept(next); }, 0);
    });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);

  if (loading) return <main className="login-shell"><p role="status">로그인 정보를 확인하고 있어요…</p></main>;
  if (loadError) return <main className="login-shell"><div className="login-card"><p role="alert">계정 정보를 불러오지 못했어요. 다시 로그인해주세요.</p><button onClick={() => void supabase.auth.signOut({ scope: 'local' })}>로그인 화면으로</button></div></main>;
  if (!session || !identity) return <LoginScreen />;
  return <IdentityContext.Provider value={identity}>{children}</IdentityContext.Provider>;
}

function LoginScreen() {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  useEffect(() => { document.title = '로그인 · 스터디존'; }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (busy) return;
    const loginId = username.trim().toLowerCase();
    if (!/^[a-z][a-z0-9_]{3,19}$/.test(loginId)) {
      setError('아이디는 영문으로 시작하는 영문·숫자·밑줄 4~20자로 입력해주세요.');
      return;
    }
    setBusy(true); setError(''); setNotice('');
    try {
      if (signup) {
        const { data, error: authError } = await supabase.auth.signUp({
          email: email.trim(), password,
          options: { data: { username: loginId }, emailRedirectTo: window.location.origin },
        });
        if (authError) {
          setError(authError.code === 'user_already_exists' ? '이미 가입한 이메일입니다. 로그인해주세요.' : '가입하지 못했어요. 아이디·이메일이 이미 사용 중인지 확인하고 잠시 후 다시 시도해주세요.');
          return;
        }
        if (!data.session) {
          setSignup(false); setPassword('');
          setNotice('확인 메일을 보냈어요. 이메일 인증 후 아이디로 로그인해주세요.');
        } else window.location.hash = '/study-zone';
      } else {
        const { data, error: loginError } = await supabase.functions.invoke('study-login', { body: { username: loginId, password } });
        if (loginError || !data?.access_token || !data?.refresh_token) {
          setError('로그인하지 못했어요. 아이디·비밀번호와 이메일 인증 여부를 확인해주세요.'); return;
        }
        const { error: sessionError } = await supabase.auth.setSession({ access_token: data.access_token, refresh_token: data.refresh_token });
        if (sessionError) { setError('로그인 연결에 실패했어요. 다시 시도해주세요.'); return; }
        window.location.hash = '/study-zone';
      }
    } catch { setError('연결하지 못했어요. 인터넷 연결을 확인해주세요.'); }
    finally { setBusy(false); }
  }

  return <main className="login-shell">
    <div className="login-card">
      <div className="login-brand">EDIYA COFFEE</div>
      <div className="login-intro"><span className="login-eyebrow">STUDY ZONE</span><h1>{signup ? '함께 집중해요' : '나만의 집중을 시작해요'}</h1><p>{signup ? '나만의 아이디로 스터디존을 이용해보세요.' : '로그인하고 편안한 스터디 공간을 만나보세요.'}</p></div>
      <form onSubmit={submit}>
        <label htmlFor="login-id">아이디</label>
        <input id="login-id" value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" autoCapitalize="none" spellCheck={false} placeholder="아이디를 입력해주세요" required minLength={4} maxLength={20} disabled={busy}/>
        {signup && <><p className="login-hint">영문으로 시작하는 영문·숫자·밑줄 4~20자</p><label htmlFor="signup-email">이메일</label><input id="signup-email" type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일을 입력해주세요" required disabled={busy}/><p className="login-hint">계정 확인 메일을 보내드려요.</p></>}
        <label htmlFor="login-password">비밀번호</label>
        <input id="login-password" type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete={signup ? 'new-password' : 'current-password'} placeholder={signup ? '8자 이상 입력해주세요' : '비밀번호를 입력해주세요'} required minLength={signup ? 8 : 1} disabled={busy}/>
        {error && <p className="login-error" role="alert">{error}</p>}
        {notice && <p className="login-notice" role="status">{notice}</p>}
        <button className="login-primary" type="submit" disabled={busy || !username.trim() || !password}>{busy ? '잠시만 기다려주세요…' : signup ? '회원가입' : '로그인'}</button>
      </form>
      <div className="login-switch"><span>{signup ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?'}</span><button disabled={busy} onClick={() => { setSignup(!signup); setError(''); setNotice(''); setPassword(''); }}>{signup ? '로그인' : '회원가입'}</button></div>
      <div className="login-footer">한 잔의 커피, 더 깊은 몰입.<br/><strong>스터디존과 함께하세요.</strong></div>
    </div>
  </main>;
}

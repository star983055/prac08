import { useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useStudy } from './study-state';

export function LogoutButton() {
  const [busy, setBusy] = useState(false);
  const pending = useRef(false);
  const study = useStudy();

  async function logout() {
    if (pending.current) return;
    pending.current = true;
    setBusy(true);
    try {
      const { error } = await supabase.auth.signOut({ scope: 'local' });
      if (error) throw error;
      window.location.hash = '/study-zone';
    } catch {
      study.toast('로그아웃하지 못했어요. 다시 눌러주세요.');
      pending.current = false;
      setBusy(false);
    }
  }

  return <button type="button" onClick={() => void logout()} disabled={busy}
    style={{ minHeight: 40, padding: '8px 10px', border: '1px solid #dbe1ff', borderRadius: 10,
      background: '#eef2ff', color: '#0051d5', fontFamily: 'inherit', fontSize: 12,
      fontWeight: 600, cursor: busy ? 'wait' : 'pointer', whiteSpace: 'nowrap' }}>
    {busy ? '로그아웃 중…' : '로그아웃'}
  </button>;
}

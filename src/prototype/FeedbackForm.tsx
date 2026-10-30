import { useStudy } from './study-state';
import { useRef, useState, type FormEvent } from 'react';

// Publishable key: access is restricted by the database's grants and RLS.
const apiUrl = 'https://udjbojamuoofyxuggskc.supabase.co';
const publishableKey = 'sb_publishable__zMj55uVai364sC2BzaPBg_YCS3si-e';

export function FeedbackForm() {
  const study = useStudy();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const submitting = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = message.trim();
    if (!input || !study.data.rating || submitting.current) return;
    submitting.current = true;
    setStatus('saving');
    try {
      const response = await fetch(`${apiUrl}/rest/v1/input_db`, {
        method: 'POST',
        headers: { apikey: publishableKey, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify({ input, rating: study.data.rating, tags: study.data.tags }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error('Save failed');
      setMessage('');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  }

  return (
    <section className="study-feedback" aria-label="후기 작성">


      <form onSubmit={submit}>
        <label htmlFor="feedback-input">이용 후기</label>
        <textarea id="feedback-input" placeholder="이용하면서 좋았던 점이나 아쉬웠던 점을 남겨주세요" maxLength={1000} required disabled={status === 'saving'} value={message}
          onChange={event => { setMessage(event.target.value); setStatus('idle'); }} />
        <div className="study-feedback-footer">
          <span>{message.length}/1,000자</span>
          <button type="submit" disabled={!study.data.rating || !message.trim() || status === 'saving'}>{status === 'saving' ? '저장 중…' : '저장'}</button>
        </div>
        <p role="status" aria-live="polite" className={status === 'error' ? 'study-error' : ''}>
          {status === 'success' ? '별점과 후기가 저장되었습니다. 감사합니다!' : status === 'error' ? '저장하지 못했어요. 연결 상태를 확인하고 다시 시도해주세요.' : ''}
        </p>
      </form>
    </section>
  );
}

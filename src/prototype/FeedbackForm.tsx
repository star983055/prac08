import { useStudy } from './study-state';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export function FeedbackForm() {
  const study = useStudy();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const submitting = useRef(false);
  const result = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      result.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = message.trim();
    if (!input || !study.data.rating || submitting.current) return;
    submitting.current = true;
    setStatus('saving');
    try {
      // The database fills user_id from the verified login session.
      const { error } = await supabase.from('input_db')
        .insert({ input, rating: study.data.rating, tags: study.data.tags })
        .abortSignal(AbortSignal.timeout(15000));
      if (error) throw error;
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
        <p ref={result} role="status" aria-live="polite" aria-atomic="true"
          style={status === 'success' || status === 'error' ? {
            padding: '12px 14px', marginTop: 16, borderRadius: 10,
            background: status === 'success' ? '#edf8f0' : '#fff0f0',
            color: status === 'success' ? '#176537' : '#ba1a1a', fontWeight: 600,
          } : undefined}>
          {status === 'success' ? '✓ 후기 작성이 완료되었습니다.' : status === 'error' ? '저장하지 못했어요. 연결 상태를 확인하고 다시 저장해주세요.' : status === 'saving' ? '후기를 저장하고 있어요…' : ''}
        </p>
      </form>
    </section>
  );
}

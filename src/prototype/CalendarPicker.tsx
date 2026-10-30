import { useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { dayAt, today, useStudy } from './study-state';

export function CalendarTrigger(){
  const s=useStudy();
  return <Button type="button" variant="ghost" size="icon" className="study-calendar-trigger" aria-label="전체 달력 열기" aria-haspopup="dialog" onClick={()=>s.setPanel('calendar')}><CalendarDays aria-hidden="true" /></Button>;
}

export function CalendarPicker(){
  const s=useStudy();const selected=new Date(`${s.data.selection.date}T12:00:00`);
  const [month,setMonth]=useState(()=>new Date(selected.getFullYear(),selected.getMonth(),1,12));
  const year=month.getFullYear(),index=month.getMonth();
  const count=new Date(year,index+1,0).getDate();
  const prefix=`${year}-${String(index+1).padStart(2,'0')}`;
  function move(amount:number){setMonth(new Date(year,index+amount,1,12));}
  return <div className="study-month-picker">
    <div className="study-month-header"><Button variant="ghost" size="icon" aria-label="이전 달" onClick={()=>move(-1)}><ChevronLeft aria-hidden="true"/></Button><h3 aria-live="polite">{year}년 {index+1}월</h3><Button variant="ghost" size="icon" aria-label="다음 달" onClick={()=>move(1)}><ChevronRight aria-hidden="true"/></Button></div>
    <div className="study-month-grid" aria-label={`${year}년 ${index+1}월 날짜 선택`}>
      {'일월화수목금토'.split('').map((day,i)=><span className="study-weekday" key={day} data-weekend={i===0||i===6}>{day}</span>)}
      {Array.from({length:month.getDay()},(_,i)=><span key={`blank-${i}`} aria-hidden="true"/>)}
      {Array.from({length:count},(_,i)=>{
        const date=`${prefix}-${String(i+1).padStart(2,'0')}`;
        return <Button key={date} variant="ghost" className="study-month-day" disabled={date<today()} aria-label={`${year}년 ${index+1}월 ${i+1}일`} aria-pressed={date===s.data.selection.date} aria-current={date===today()?'date':undefined}
          onClick={()=>{s.setSelection({date});s.setWeekStart(date);s.setPanel(null);}}>{i+1}</Button>;
      })}
    </div>
    <div className="study-calendar-footer"><Button variant="outline" onClick={()=>{const d=new Date(`${today()}T12:00:00`);setMonth(new Date(d.getFullYear(),d.getMonth(),1,12));}}>이번 달</Button><span>선택한 날짜부터 7일을 표시합니다.</span></div>
    <span className="sr-only">선택 주간: {dayAt(0,s.weekStart)}부터 {dayAt(6,s.weekStart)}까지</span>
  </div>;
}

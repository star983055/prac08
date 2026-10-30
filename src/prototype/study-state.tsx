import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export const stores = [
  { id: 'daehak', name: '이디야커피 대학로점', address: '서울 종로구 대학로 120', distance: 320, available: 8, total: 16, hours: '08:00 ~ 22:00' },
  { id: 'hyehwa', name: '이디야커피 혜화역점', address: '서울 종로구 창경궁로 230', distance: 580, available: 3, total: 14, hours: '09:00 ~ 21:30' },
  { id: 'jongno', name: '이디야커피 종로3가점', address: '서울 종로구 수표로 96', distance: 1200, available: 12, total: 24, hours: '08:30 ~ 22:00' },
] as const;
export type StoreId = typeof stores[number]['id'];
export type Selection = { store: StoreId; date: string; start: number; end: number; seat: string };
export type Booking = Selection & { id: string; status: 'waiting' | 'active' | 'finished' | 'cancelled'; checkedAt?: number; dueAt?: number; endedAt?: number; rating?: number; tags?: string[]; extensionCount?: number; extensionMinutes?: number };
type Saved = { selection: Selection; booking: Booking | null; report?: Booking; history: Booking[]; favorites: StoreId[]; orders: string[]; rating: number; tags: string[]; awayUntil: number | null };
export type Panel = 'calendar' | 'alerts' | 'cancel' | 'checkout' | 'extend' | 'manual' | 'wifi' | 'order' | 'map' | 'history' | 'profile' | 'coupons' | 'stamps' | 'news' | 'gift' | 'more' | 'barcode' | null;
const KEY = 'study-zone-interactive-v2';
export function today() { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
export function dayAt(index: number, base = today()) { const d = new Date(`${base}T12:00:00`); d.setDate(d.getDate()+index); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
export function time(value: number) { return `${String(Math.floor(value / 60)).padStart(2,'0')}:${String(value % 60).padStart(2,'0')}`; }
export function dateLabel(value: string) { const d=new Date(`${value}T12:00:00`); return `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 (${'일월화수목금토'[d.getDay()]})`; }
export function go(slug: string) { if(window.location.hash===`#/${slug}`) window.scrollTo(0,0); else window.location.hash=`/${slug}`; }
const defaults: Saved = { selection: {store:'daehak',date:today(),start:840,end:960,seat:'A03'}, booking:null,history:[],favorites:['daehak'],orders:[],rating:0,tags:[],awayUntil:null };
function load(): Saved {
  try { const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw && raw.selection && stores.some(s=>s.id===raw.selection.store) && typeof raw.selection.date==='string' && Number.isFinite(raw.selection.start) && Number.isFinite(raw.selection.end) && Array.isArray(raw.history) && Array.isArray(raw.favorites)) return {...defaults,...raw};
  } catch { /* A blocked or cleared browser store starts a new demo. */ }
  return defaults;
}
type StudyValue = {
  data: Saved; setData: React.Dispatch<React.SetStateAction<Saved>>; now: number;
  panel: Panel; setPanel: (p:Panel)=>void; toast: (message:string)=>void;
  consent: boolean; setConsent: (v:boolean)=>void; policyOpen: boolean; setPolicyOpen:(v:boolean)=>void;
  query: string; setQuery:(v:string)=>void; sort: boolean; setSort:(v:boolean)=>void;
  availableOnly: boolean; setAvailableOnly:(v:boolean)=>void;
  timePicking:'start'|'end'; setTimePicking:(v:'start'|'end')=>void;
  weekStart: string; setWeekStart:(v:string)=>void;
  setSelection:(patch:Partial<Selection>)=>void; reserve:()=>void; checkIn:()=>void;
  finish:()=>void; cancel:()=>void; extend:(minutes:number)=>void; statusPage:()=>string;
  toggleFavorite:(id:StoreId)=>void; copy:(text:string)=>Promise<void>;
};
const StudyContext=createContext<StudyValue | null>(null);
export function StudyProvider({children}:{children:ReactNode}) {
  const [data,setData]=useState(load); const [now,setNow]=useState(Date.now());
  const [panel,setPanel]=useState<Panel>(null);const [message,setMessage]=useState('');
  const [consent,setConsent]=useState(false); const [policyOpen,setPolicyOpen]=useState(true);
  const [query,setQuery]=useState(''); const [sort,setSort]=useState(false);
  const [availableOnly,setAvailableOnly]=useState(false);
  const [timePicking,setTimePicking]=useState<'start'|'end'>('start');
  const [weekStart,setWeekStart]=useState(()=>data.selection.date>=today()?data.selection.date:today());
  useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(data));}catch{/* In-memory use still works. */}},[data]);
  useEffect(()=>{const id=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(id);},[]);
  useEffect(()=>{if(!message)return;const id=setTimeout(()=>setMessage(''),3500);return()=>clearTimeout(id);},[message]);
  useEffect(()=>{if(data.awayUntil && now>=data.awayUntil)setData(d=>({...d,awayUntil:null}));},[now,data.awayUntil]);
  useEffect(()=>{
    if(data.booking?.status==='active' && data.booking.dueAt && now>=data.booking.dueAt) {
      setData(d=>{if(d.booking?.status!=='active')return d;const b={...d.booking,status:'finished' as const,endedAt:d.booking.dueAt};return {...d,booking:b,history:[b,...d.history].slice(0,20),awayUntil:null};});
      setMessage('이용 시간이 종료되었습니다. 이용 내역을 확인해 주세요.');
      if(window.location.hash==='#/active')go('finished');
    }
  },[now,data.booking]);
  function setSelection(patch:Partial<Selection>){setData(d=>({...d,selection:{...d.selection,...patch}}));}
  function statusPage(){return data.booking?.status==='active'?'active':data.booking?.status==='waiting'?'waiting':'empty';}
  function reserve(){
    if(!consent){setMessage('운영 및 이용 정책에 동의해 주세요.');return;}
    if(data.booking?.status==='waiting'||data.booking?.status==='active'){setMessage('진행 중인 예약을 먼저 확인해 주세요.');go(statusPage());return;}
    const b:Booking={...data.selection,id:`ED-${Date.now().toString(36).toUpperCase()}`,status:'waiting',extensionCount:0,extensionMinutes:0};
    setData(d=>({...d,booking:b,report:undefined,rating:0,tags:[],awayUntil:null}));go('complete');
  }
  function checkIn(){
    if(data.booking?.status!=='waiting'){setMessage('체크인할 예약이 없습니다. 먼저 좌석을 예약해 주세요.');go(statusPage());return;}
    const checkedAt=Date.now();setData(d=>({...d,booking:d.booking?{...d.booking,status:'active',checkedAt,dueAt:checkedAt+(d.booking.end-d.booking.start)*60000}:null}));setPanel(null);go('checked-in');
  }
  function finish(){
    if(data.booking?.status!=='active'){setMessage('이용 중인 예약이 없습니다.');go(statusPage());return;}
    setData(d=>{const b={...d.booking!,status:'finished' as const,endedAt:Date.now()};return {...d,booking:b,report:b,history:[b,...d.history].slice(0,20),awayUntil:null};});go('finished');
  }
  function cancel(){setData(d=>{if(!d.booking)return d;const b={...d.booking,status:'cancelled' as const,endedAt:Date.now()};return {...d,booking:null,history:[b,...d.history].slice(0,20),awayUntil:null};});setPanel(null);setMessage('예약이 취소되었습니다.');go('empty');}
  function extend(minutes:number){
    const b=data.booking;if(b?.status!=='active')return;
    if((b.extensionCount||0)>=1){setMessage('이용 시간 연장은 최초 1회만 가능합니다.');return;}
    if(![30,60].includes(minutes)){setMessage('연장은 1회 최대 1시간까지 가능합니다.');return;}
    const closing=b.store==='hyehwa'?1290:1320;
    if(b.end+minutes>closing){setMessage('매장 운영시간까지만 연장할 수 있어요.');return;}
    setData(d=>{
      const current=d.booking;
      if(!current||current.status!=='active'||(current.extensionCount||0)>=1||current.end+minutes>closing)return d;
      return {...d,booking:{...current,end:current.end+minutes,dueAt:(current.dueAt||Date.now())+minutes*60000,extensionCount:1,extensionMinutes:minutes}};
    });setPanel(null);setMessage(`${minutes}분 연장되었습니다. 연장 기회 1회를 사용했어요.`);
  }
  function toggleFavorite(id:StoreId){setData(d=>({...d,favorites:d.favorites.includes(id)?d.favorites.filter(x=>x!==id):[...d.favorites,id]}));}
  async function copy(text:string){try{await navigator.clipboard.writeText(text);setMessage('복사했습니다.');}catch{setPanel('wifi');setMessage('복사 권한이 없어 정보를 표시했어요.');}}
  const value:StudyValue={data,setData,now,panel,setPanel,toast:setMessage,consent,setConsent,policyOpen,setPolicyOpen,query,setQuery,sort,setSort,availableOnly,setAvailableOnly,timePicking,setTimePicking,weekStart,setWeekStart,setSelection,reserve,checkIn,finish,cancel,extend,statusPage,toggleFavorite,copy};
  return <StudyContext.Provider value={value}>{children}<div className="study-toast" role="status" aria-live="polite">{message}</div></StudyContext.Provider>;
}
export function useStudy(){const value=useContext(StudyContext);if(!value)throw Error('StudyProvider is required');return value;}

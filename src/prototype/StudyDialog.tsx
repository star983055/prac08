import { useEffect, useRef, useState } from 'react';
import { CalendarPicker } from './CalendarPicker';
import { Button } from '../components/ui/button';
import { dateLabel, go, stores, time, useStudy } from './study-state';

export function StudyDialog(){
  const s=useStudy();const ref=useRef<HTMLDialogElement>(null);
  const [manual,setManual]=useState('');const [error,setError]=useState('');
  const [drink,setDrink]=useState('아메리카노');
  const titles={calendar:'이용 날짜 선택',alerts:'알림',cancel:'예약 취소',checkout:'이용 종료',extend:'이용 시간 연장',manual:'좌석 번호 입력',wifi:'스터디존 Wi-Fi',order:'음료 주문 체험',map:'매장 위치',history:'지난 예약 내역',profile:'마이페이지',coupons:'쿠폰함',stamps:'멤버십·스탬프',news:'스터디존 이용 소식',gift:'선물하기',more:'더보기',barcode:'멤버십 카드'};
  useEffect(()=>{if(s.panel){setError('');setManual('');ref.current?.showModal();}else ref.current?.close();},[s.panel]);
  const b=s.data.booking,store=stores.find(x=>x.id===(b?.store||s.data.selection.store))!;
  const leave=(slug:string)=>{s.setPanel(null);go(slug);};
  return <dialog ref={ref} className="study-dialog" aria-labelledby="study-dialog-title" onCancel={e=>{e.preventDefault();s.setPanel(null);}} onClick={e=>{if(e.target===ref.current){const r=ref.current.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)s.setPanel(null);}}}>
    <header><h2 id="study-dialog-title">{s.panel?titles[s.panel]:''}</h2><Button variant="ghost" aria-label="닫기" onClick={()=>s.setPanel(null)}>×</Button></header>
    {s.panel==='calendar'&&<CalendarPicker />}
    {(s.panel==='cancel'||s.panel==='checkout')&&<><p>{store.name} · {b?.seat} 좌석</p><p>{s.panel==='cancel'?'이 예약을 취소할까요?':'현재 이용을 종료하고 좌석을 반납할까요?'}</p><div className="study-dialog-actions"><Button variant="outline" onClick={()=>s.setPanel(null)}>계속 이용하기</Button><Button onClick={()=>{if(s.panel==='cancel')s.cancel();else{s.setPanel(null);s.finish();}}}>{s.panel==='cancel'?'예약 취소':'퇴실하기'}</Button></div></>}
    {s.panel==='extend'&&<><p>현재 {time(b?.start||840)} ~ {time(b?.end||960)}</p><p>연장은 예약당 최초 1회, 최대 1시간까지 가능합니다. 30분을 선택해도 추가 연장은 할 수 없으며 매장 마감 전까지만 가능합니다.</p><div className="study-dialog-actions">{[30,60].map(m=><Button key={m} disabled={!b||b.status!=='active'||(b.extensionCount||0)>=1||b.end+m>(b.store==='hyehwa'?1290:1320)} onClick={()=>s.extend(m)}>+{m}분</Button>)}</div></>}
    {s.panel==='manual'&&<form onSubmit={e=>{e.preventDefault();if(!b){setError('체크인할 예약이 없습니다.');return;}if(manual.trim().toUpperCase()!==b.seat){setError(`예약한 ${b.seat} 좌석 번호를 입력해 주세요.`);return;}s.checkIn();}}><p>예약한 좌석에 부착된 번호를 입력해 주세요.</p><label htmlFor="manual-seat">좌석 번호</label><input id="manual-seat" value={manual} onChange={e=>{setManual(e.target.value);setError('');}} placeholder="예: A03" autoComplete="off" autoFocus/><p className="study-error" role="alert">{error}</p><Button type="submit">체크인하기</Button></form>}
    {s.panel==='wifi'&&<><p>네트워크: EDIYA_STUDY_5G</p><p>비밀번호: <strong>ediya1234!</strong></p><Button onClick={()=>void s.copy('ediya1234!')}>비밀번호 복사</Button></>}
    {s.panel==='order'&&<form onSubmit={e=>{e.preventDefault();s.setData(d=>({...d,orders:[`${drink} · ${new Date().toLocaleTimeString('ko-KR')}`,...d.orders]}));s.setPanel(null);s.toast('체험 주문을 저장했어요. 실제 결제나 매장 접수는 이루어지지 않습니다.');}}><p>{store.name}</p><p>이 화면은 주문 체험입니다. 실제 결제·매장 주문은 진행되지 않아요.</p><label htmlFor="drink-select">음료 선택</label><select id="drink-select" value={drink} onChange={e=>setDrink(e.target.value)}>{['아메리카노','카페라떼','아이스티'].map(x=><option key={x}>{x}</option>)}</select><Button type="submit">체험 주문 저장</Button>{s.data.orders.length>0&&<p>최근 체험: {s.data.orders[0]}</p>}</form>}
    {s.panel==='map'&&<><p>예시 매장의 주소와 도보 거리를 확인하세요.</p>{stores.map(x=><section key={x.id} className="study-list-row"><strong>{x.name}</strong><p>{x.address}</p><p>{x.distance>=1000?`${x.distance/1000}km`:`${x.distance}m`} · {x.hours}</p><Button variant="outline" onClick={()=>void s.copy(x.address)}>주소 복사</Button><Button onClick={()=>{s.setSelection({store:x.id,seat:'A03'});leave('time');}}>이 매장 예약</Button></section>)}</>}
    {s.panel==='history'&&<>{s.data.history.length===0?<p>아직 지난 예약이 없습니다.</p>:s.data.history.map(x=><section className="study-list-row" key={x.id}><strong>{stores.find(y=>y.id===x.store)?.name} · {x.seat}</strong><p>{dateLabel(x.date)}</p><p>{time(x.start)} ~ {time(x.end)} · {x.status==='cancelled'?'취소':'이용 완료'}{x.rating?` · ${x.rating}점`:''}</p>{x.status==='finished'&&<Button variant="outline" onClick={()=>{s.setData(d=>({...d,report:x,rating:x.rating||0,tags:x.tags||[]}));leave('finished');}}>이용 리포트·평가</Button>}</section>)}</>}
    {s.panel==='alerts'&&<><p>{b?.status==='waiting'?`${store.name} ${b.seat} 좌석 예약이 체크인을 기다리고 있어요.`:b?.status==='active'?`이용 중입니다. 남은 시간 ${Math.max(0,Math.ceil(((b.dueAt||s.now)-s.now)/60000))}분`:'새로운 예약 알림이 없습니다.'}</p>{b&&(b.status==='waiting'||b.status==='active')&&<Button onClick={()=>leave(s.statusPage())}>예약현황 확인</Button>}</>}
    {s.panel==='profile'&&<><p>박한별 님 · BLUE 멤버십</p><p>즐겨찾기 {s.data.favorites.length}개 · 지난 예약 {s.data.history.length}건</p><div className="study-menu"><Button onClick={()=>leave(s.statusPage())}>예약현황</Button><Button onClick={()=>leave('favorites')}>나의 매장</Button><Button onClick={()=>s.setPanel('history')}>지난 예약 내역</Button><Button onClick={()=>s.setPanel('stamps')}>멤버십 확인</Button></div></>}
    {s.panel==='stamps'&&<><p>BLUE MEMBERSHIP</p><p>이용 완료 {s.data.history.filter(x=>x.status==='finished').length}회</p><p>실제 멤버십 적립은 매장 음료 주문 시 확인해 주세요.</p><Button onClick={()=>leave('home')}>멤버스 홈</Button></>}
    {s.panel==='coupons'&&<><p>디자인에 표시된 예시 쿠폰 3장입니다.</p><ul><li>아메리카노 할인 쿠폰</li><li>제조 음료 할인 쿠폰</li><li>멤버십 혜택 쿠폰</li></ul><p>실제 사용 가능 여부는 이디야 멤버십에서 확인해 주세요.</p></>}
    {s.panel==='news'&&<><p>스터디존은 음료 주문 후 이용할 수 있어요.</p><p>매장과 날짜·시간, 좌석을 선택한 뒤 예약하고 좌석 번호로 체크인하세요.</p><Button onClick={()=>leave('stores')}>스터디존 매장 찾기</Button></>}
    {s.panel==='gift'&&<><p>선물 구매는 이디야 앱에서 이용해 주세요.</p><Button onClick={()=>leave('home')}>멤버스 홈으로</Button></>}
    {s.panel==='more'&&<div className="study-menu"><Button onClick={()=>s.setPanel('history')}>예약 내역</Button><Button onClick={()=>leave('favorites')}>나의 매장</Button><Button onClick={()=>s.setPanel('wifi')}>Wi-Fi 정보</Button><Button onClick={()=>s.setPanel('news')}>이용 안내</Button></div>}
  </dialog>;
}

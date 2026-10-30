import { Children, cloneElement, isValidElement, useState, type HTMLAttributes, type ReactNode } from 'react';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';
import { dateLabel, dayAt, go, stores, time, today, useStudy, type StoreId } from './study-state';

export const dayIds=['35:7120','35:7129','35:7137','35:7145','35:7153','35:7161','35:7169'];
export const timeIds=['35:7225','35:7227','35:7229','35:7231','35:7233','35:7239','35:7241','35:7243','35:7245','35:7251','35:7253','35:7255','35:7257','35:7259','35:7261','35:7263'];
const seats:Record<string,string>={'35:6031':'A01','35:6036':'A02','seat-A03':'A03','35:6041':'A04','35:6071':'B01','35:6076':'B02','35:6081':'B03'};
const stars=['35:8431','35:8434','35:8437','35:8440','35:8443'];
const favoriteIds:Record<string,StoreId>={'35:6905':'daehak','35:6977':'hyehwa','35:7022':'jongno','35:7390':'daehak','35:6395':'daehak'};
type Props=HTMLAttributes<HTMLDivElement> & {'data-node-id':string; 'data-name'?:string; screen:string; label?:string};

export function Interactive({screen,label='',className,children,...props}:Props) {
  const s=useStudy();const id=props['data-node-id'];const name=props['data-name']||'';
  const [toggled,setToggled]=useState(false);
  const day=dayIds.indexOf(id),slot=timeIds.indexOf(id),seat=seats[id],rating=stars.indexOf(id);
  const favorite=favoriteIds[id];
  const disabled=slot>=0&&slot<4 || ['A01','A02','B03'].includes(seat||'') || id==='35:8274'&&(s.data.booking?.extensionCount||0)>=1;
  let selected:boolean|undefined;
  let kind='action';
  if(day>=0){kind='day';selected=s.data.selection.date===dayAt(day,s.weekStart);}
  if(slot>=0){kind='time';const minute=720+slot*30;selected=minute>=s.data.selection.start&&minute<=s.data.selection.end;}
  if(seat){kind='seat';selected=s.data.selection.seat===seat;}
  if(favorite){kind='favorite';selected=s.data.favorites.includes(favorite);}
  if(rating>=0){kind='rating';selected=rating<s.data.rating;}
  if(['35:8450','35:8454','35:8458','35:8462','35:8466'].includes(id)){kind='tag';selected=s.data.tags.includes(label);}
  if(id==='35:6776'){kind='consent';selected=s.consent;}
  if(id==='35:8220'){kind='away';selected=!!s.data.awayUntil;}
  if(id==='35:6865'){kind='filter';selected=s.availableOnly;}
  if(id==='35:7915'){kind='flash';selected=toggled;}

  function act(){
    if(day>=0){s.setSelection({date:dayAt(day,s.weekStart)});return;}
    if(slot>=0){
      const minute=720+slot*30;
      if(s.timePicking==='start'){
        s.setSelection({start:minute,end:Math.min(minute+120,1320)});s.setTimePicking('end');s.toast('이제 종료 시간을 선택해 주세요.');
      }else{
        const duration=minute-s.data.selection.start;
        if(duration<60||duration>180){s.toast('시작 시간보다 1~3시간 뒤의 종료 시간을 선택해 주세요.');return;}
        s.setSelection({end:minute});s.setTimePicking('start');s.toast(`${time(s.data.selection.start)} ~ ${time(minute)} 선택`);
      }
      return;
    }
    if(seat){s.setSelection({seat});return;}
    if(favorite){s.toggleFavorite(favorite);return;}
    if(rating>=0){
      const value=rating+1;s.setData(d=>{const id=d.report?.id||d.booking?.id;return {...d,rating:value,report:d.report?{...d.report,rating:value}:undefined,history:d.history.map(b=>b.id===id?{...b,rating:value}:b),booking:d.booking&&d.booking.id===id&&d.booking.status==='finished'?{...d.booking,rating:value}:d.booking};});s.toast(`${value}점을 선택했어요. 후기를 작성한 뒤 저장해 주세요.`);return;
    }
    if(kind==='tag'){s.setData(d=>{const tags=d.tags.includes(label)?d.tags.filter(t=>t!==label):[...d.tags,label],id=d.report?.id||d.booking?.id;return {...d,tags,report:d.report?{...d.report,tags}:undefined,history:d.history.map(b=>b.id===id?{...b,tags}:b)};});return;}
    if(id==='35:6776'){s.setConsent(!s.consent);return;}
    if(id==='35:6744'){s.setPolicyOpen(!s.policyOpen);return;}
    if(id==='35:6610'){s.setPanel('cancel');return;}
    if(id==='35:8274'){s.setPanel('extend');return;}
    if(id==='35:8220'){s.setData(d=>({...d,awayUntil:d.awayUntil?null:Date.now()+15*60000}));return;}
    if(['35:8210','35:8074'].includes(id)){void s.copy('ediya1234!');return;}
    if(id==='35:6533'){void s.copy(s.data.booking?.id||'예약 정보가 없습니다.');return;}
    if(id==='35:7915'){setToggled(!toggled);s.toast(!toggled?'스캔 화면 밝기 안내를 켰어요.':'밝기 안내를 껐어요.');return;}
    if(['35:7891','35:7892'].includes(id)){s.setPanel('manual');return;}
    if(['35:6851','35:8635'].includes(id)){s.setQuery('');return;}
    if(id==='35:6855'){s.setSort(false);s.toast('예시 매장을 거리순으로 보여드려요.');return;}
    if(id==='35:6860'){s.setSort(!s.sort);s.toast(!s.sort?'잔여 좌석이 많은 순으로 정렬했어요.':'가까운 순으로 정렬했어요.');return;}
    if(id==='35:6865'){s.setAvailableOnly(!s.availableOnly);s.toast('등록된 예시 매장은 모두 스터디존 운영 매장입니다.');return;}
    if(['35:6890','35:5888'].includes(id)){s.setPanel('map');return;}
    if(['35:5852','35:7097','35:6836','35:7495'].includes(id)){s.setQuery('');go('stores');return;}
    if(id==='35:8620'){go('favorites');return;}
    if(['35:5893','35:5911','35:7000','35:7049','35:7748'].includes(id)){
      const store=id==='35:5911'||id==='35:7000'?'hyehwa':id==='35:7049'?'jongno':'daehak';
      s.setSelection({store,seat:'A03'});go('time');return;
    }
    if(id==='35:7683'){s.setPanel('history');return;}
    if(id==='35:7678'){go(s.statusPage());return;}
    if(id==='35:6200'){s.toast('멤버십 카드를 새로고침했어요.');setToggled(!toggled);return;}
    if(/뒤로/.test(name)) {go(screen==='ScanScreen'?'waiting':screen==='CheckedInScreen'?'waiting':screen==='TimeScreen'?'stores':'study-zone');return;}
    if(/닫기/.test(name)){go('study-zone');return;}
    if(/알림/.test(name)){s.setPanel('alerts');return;}
    if(/profile/.test(id)){s.setPanel('profile');return;}
    const text=label.replace(/\s*\|\s*/g,'').replace(/\s+/g,'');
    if(text==='홈'){go('home');return;}
    if(text==='스터디존'){go('study-zone');return;}
    if(text==='예약'){go(s.statusPage());return;}
    if(/마이페이지/.test(text)){s.setPanel('profile');return;}
    if(/더보기/.test(text)){s.setPanel('more');return;}
    if(/멤버십|스탬프/.test(text)){s.setPanel('stamps');return;}
    if(/쿠폰/.test(text)){s.setPanel('coupons');return;}
    if(/이벤트|소식/.test(text)){s.setPanel('news');return;}
    if(/선물/.test(text)){s.setPanel('gift');return;}
    if(/주문|이디야오더/.test(text)){s.setPanel('order');return;}
    s.setPanel('profile');
  }
  const ariaLabel=rating>=0?`${rating+1}점`:seat?`${seat} 좌석${disabled?' 이용 불가':''}`:favorite?'즐겨찾기':label||name.replace(/^Button\s*-?\s*/, '')||'메뉴';
  return <Button asChild variant="ghost" className={cn('study-control h-auto rounded-none p-0 text-inherit hover:bg-transparent hover:text-inherit',className)}>
    <div {...props} role={kind==='consent'?'checkbox':'button'} tabIndex={disabled?-1:0} aria-label={ariaLabel}
      aria-disabled={disabled||undefined} aria-checked={kind==='consent'?selected:undefined}
      aria-pressed={selected!==undefined&&kind!=='consent'?selected:undefined}
      aria-expanded={id==='35:6744'?s.policyOpen:undefined}
      data-kind={kind} data-selected={selected} data-disabled={disabled||undefined}
      onClick={disabled?undefined:act} onKeyDown={e=>{if(!disabled&&(e.key==='Enter'||e.key===' ')){e.preventDefault();act();}}}>
      {children}
      {kind==='time'&&slot>=4&&<span className="study-time-endpoint">{720+slot*30===s.data.selection.start?'시작':720+slot*30===s.data.selection.end?'종료':''}</span>}
    </div>
  </Button>;
}

export function SearchField({className,...props}:Props){const s=useStudy();return <input data-node-id={props['data-node-id']} className={cn(className,'study-search')} aria-label="매장명 또는 지역 검색" placeholder="매장명 또는 지역 검색" value={s.query} onChange={e=>s.setQuery(e.target.value)} />;}

const cardStores:Record<string,StoreId>={'35:6895':'daehak','35:6960':'hyehwa','35:7005':'jongno'};
export function Surface({children,screen: _screen,label: _label,...props}:Props){
  const s=useStudy();const id=props['data-node-id'];const storeId=cardStores[id];const store=stores.find(x=>x.id===storeId);
  if(store){const match=`${store.name} ${store.address}`.includes(s.query.trim());return <div {...props} hidden={!match} style={{...props.style,order:s.sort?30-store.available:store.distance}}>{children}</div>;}
  if(id==='35:6752')return <div {...props} data-policy-open={s.policyOpen}>{children}</div>;
  if(id==='35:7372')return <div {...props} hidden={!s.data.favorites.includes('daehak')||!`${stores[0].name} ${stores[0].address}`.includes(s.query)}>{children}</div>;
  if(id==='35:7364'){
    const extra=stores.filter(x=>x.id!=='daehak'&&s.data.favorites.includes(x.id)&&`${x.name} ${x.address}`.includes(s.query));
    const found=stores.filter(x=>s.data.favorites.includes(x.id)&&`${x.name} ${x.address}`.includes(s.query));
    return <div {...props}>{!found.length&&<div className="study-empty-state">등록된 매장이 없어요.<Button onClick={()=>{s.setQuery('');go('stores');}}>매장 찾기</Button></div>}{children}{extra.map(store=><div className="study-extra-card" key={store.id}><h3>{store.name}</h3><p>{store.address}</p><p>잔여 {store.available}석 · {store.hours}</p><Button variant="ghost" onClick={()=>s.toggleFavorite(store.id)}>즐겨찾기 해제</Button><Button onClick={()=>{s.setSelection({store:store.id,seat:'A03'});go('time');}}>예약하기</Button></div>)}</div>;
  }
  if(id==='35:6870'){
    const found=stores.filter(x=>`${x.name} ${x.address}`.includes(s.query.trim()));
    return <div {...props}>{children}{!found.length&&<div className="study-empty-state">검색 결과가 없습니다.<Button variant="ghost" onClick={()=>{s.setQuery('');s.setAvailableOnly(false);}}>검색 초기화</Button></div>}</div>;
  }
  return <div {...props}>{children}</div>;
}

export function BoundText({nodeId,screen,controlId='',children,...props}:HTMLAttributes<HTMLParagraphElement>&{nodeId:string;screen:string;controlId?:string}){
  const s=useStudy(); const sel=s.data.selection;
  const booking=screen==='FinishedScreen'?(s.data.report||s.data.booking):s.data.booking;
  const inBooking=['WaitingScreen','ScanScreen','CheckedInScreen','ActiveScreen','CompleteScreen','FinishedScreen'].includes(screen);
  const value=inBooking&&booking?booking:sel;const store=stores.find(x=>x.id===value.store)!;
  function format(original: string): string {
    let raw=original;
    const listing=['StudyZoneScreen','StoresScreen','FavoritesScreen','MembersHomeScreen'].includes(screen);
    if(!listing){raw=raw.replace(/이디야커피 대학로점/g,store.name).replace(/대학로점/g,store.name.replace('이디야커피 ',''));raw=raw.replace(/A03/g,value.seat);}
    if(!listing&&/202[45]/.test(raw)&&/월|\.10\.|\.03\./.test(raw)) {
      const label=screen==='FinishedScreen'?`${value.date.replace(/-/g,'.')}(${'일월화수목금토'[new Date(`${value.date}T12:00:00`).getDay()]})`:dateLabel(value.date);
      raw=label+(/14:00/.test(raw)?` ${time(value.start)} ~ ${time(value.end)}`:'');
    }
    if(!listing)raw=raw.replace(/14:00\s*[~～]\s*16:00/g,`${time(value.start)} ~ ${time(value.end)}`).replace(/총 2시간(?: 00분)?|총 2시간|2시간/g,`${Math.floor((value.end-value.start)/60)}시간${(value.end-value.start)%60?' 30분':''}`);
    if(!listing&&/EDY-|BK-|ED-202/.test(raw))raw=booking?.id||'예약 전';
    if(screen==='TimeScreen'&&/^2026년/.test(raw))raw=`${new Date(`${sel.date}T12:00:00`).getFullYear()}년 ${new Date(`${sel.date}T12:00:00`).getMonth()+1}월`;
    if(nodeId==='35:6051')raw=sel.seat==='A03'?'선택됨':'가능';
    if(screen==='SeatScreen'&&nodeId==='35:6049')raw='A03';
    if(screen==='SeatScreen'&&nodeId==='35:6161')raw=`${sel.seat} 좌석으로 예약하기`;
    if(screen==='TimeScreen'&&nodeId==='35:6862')raw=s.sort?'잔여 좌석 순':'가까운 순';
    if(screen==='StoresScreen'&&raw==='가까운 순')raw=s.sort?'잔여 좌석 순':'가까운 순';
    if(screen==='StoresScreen'&&raw==='총 3곳')raw=`총 ${stores.filter(x=>`${x.name} ${x.address}`.includes(s.query.trim())).length}곳`;
    if(screen==='FavoritesScreen'&&raw==='1')raw=String(s.data.favorites.length);
    if(screen==='EmptyScreen'&&raw==='3')raw=String(s.data.history.length);
    if(screen==='ActiveScreen'&&/^01:42:29$/.test(raw)){
      const seconds=Math.max(0,Math.ceil(((booking?.dueAt||s.now)-s.now)/1000));raw=`${String(Math.floor(seconds/3600)).padStart(2,'0')}:${String(Math.floor(seconds%3600/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
    }
    if(screen==='ActiveScreen'&&raw==='안정적 이용 가능')raw=s.data.awayUntil?`자리비움 ${Math.ceil((s.data.awayUntil-s.now)/60000)}분`:'이용 중';
    if(screen==='ActiveScreen'&&raw.includes('이용 연장하기'))raw=(booking?.extensionCount||0)>=1?`연장 완료 (${booking?.extensionMinutes||0}분 · 1회 사용)`:'이용 연장하기 (최초 1회 · 최대 1시간)';
    if(screen==='TimeScreen'&&raw.includes('이용일 7일 전부터'))raw='전체 달력에서도 원하는 날짜를 선택할 수 있어요.';
    if(screen==='ActiveScreen'&&raw==='자리비움 설정')raw=s.data.awayUntil?'자리비움 해제':'자리비움 설정';
    if(screen==='ActiveScreen'&&raw.startsWith('총 120분'))raw=`총 ${value.end-value.start}분 중 ${Math.max(0,Math.floor((s.now-(booking?.checkedAt||s.now))/60000))}분 경과`;
    if(screen==='ActiveScreen'&&raw==='14:00')raw=time(value.start);
    if(screen==='ActiveScreen'&&raw==='16:00')raw=time(value.end);
    if(screen==='CheckedInScreen'&&raw.startsWith('잔여 1시간'))raw=`잔여 ${Math.max(0,Math.ceil(((booking?.dueAt||s.now)-s.now)/60000))}분`;
    if(screen==='WaitingScreen'&&raw.includes('13:50'))raw=`${time(value.start-10)} ~ ${time(value.start+15)}`;
    if(screen==='WaitingScreen'&&raw.includes('입실 24분 전'))raw='체크인 대기';
    if(screen==='ScanScreen'&&raw.includes('카메라 접근 권한'))raw='체험용 화면입니다. 실제 카메라는 사용하지 않습니다.';
    const dIndex=dayIds.indexOf(controlId);
    if(dIndex>=0){const date=dayAt(dIndex,s.weekStart),d=new Date(`${date}T12:00:00`);if(/^\d+$/.test(raw))raw=String(d.getDate());else if(raw.length===1)raw='일월화수목금토'[d.getDay()];else raw=date===today()?'오늘':date===dayAt(1)?'내일':dIndex===0?'선택일':'일월화수목금토'[d.getDay()];}
    if(timeIds.includes(controlId)&&['시작','종료'].includes(raw)) raw='';
    return raw;
  }
  function map(node: ReactNode): ReactNode {
    if(typeof node === 'string') return format(node);
    if(Array.isArray(node)) return Children.map(node, map);
    if(isValidElement<{children?: ReactNode}>(node)) return cloneElement(node, {}, map(node.props.children));
    return node;
  }
  return <p {...props}>{map(children)}</p>;
}

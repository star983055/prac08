import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { cn } from '../lib/utils';
import { prototypeLinks, screens } from './manifest';
import { go, useStudy } from './study-state';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { 'data-node-id': string };

export function PrototypeLink({ className, children, ...props }: LinkProps) {
  const s = useStudy();
  const link = prototypeLinks[props['data-node-id'] as keyof typeof prototypeLinks];
  const destination = screens.find(screen => screen.id === link.to)!;
  const id = props['data-node-id'];
  const target = ['35:8572','35:7633','35:8103'].includes(id) ? s.statusPage() : destination.slug;
  function activate(event: React.MouseEvent<HTMLAnchorElement>) {
    if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();
    if(id==='35:6794'){s.reserve();return;}
    if(id==='35:7900'){s.checkIn();return;}
    if(id==='35:8280'){s.setPanel('checkout');return;}
    if(id==='35:6604'&&s.data.booking?.status!=='waiting'){go(s.statusPage());return;}
    if(id==='35:6158'){s.setConsent(false);s.setPolicyOpen(true);}
    if(id==='35:7304'){s.setTimePicking('start');}
    if(['35:6954','35:7425','35:6415'].includes(id)){s.setSelection({store:'daehak',seat:'A03'});s.setTimePicking('start');go('time');return;}
    go(target);
  }
  return (
    <Button asChild variant="ghost" className={cn(
      'h-auto rounded-none p-0 text-inherit no-underline hover:bg-transparent hover:text-inherit',
      className,
    )}>
      <a {...props} href={`#/${target}`} onClick={activate} data-prototype-link={props['data-node-id']}>
        {children}
      </a>
    </Button>
  );
}

export function PrototypeCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <Card {...props} className={cn('rounded-none border-0 bg-transparent text-inherit shadow-none', className)} />;
}

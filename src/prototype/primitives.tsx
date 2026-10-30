import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { cn } from '../lib/utils';
import { prototypeLinks, screens } from './manifest';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { 'data-node-id': string };

export function PrototypeLink({ className, children, ...props }: LinkProps) {
  const link = prototypeLinks[props['data-node-id'] as keyof typeof prototypeLinks];
  const destination = screens.find(screen => screen.id === link.to)!;
  return (
    <Button asChild variant="ghost" className={cn(
      'h-auto rounded-none p-0 text-inherit no-underline hover:bg-transparent hover:text-inherit',
      className,
    )}>
      <a {...props} href={`#/${destination.slug}`} data-prototype-link={props['data-node-id']}>
        {children}
      </a>
    </Button>
  );
}

export function PrototypeCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <Card {...props} className={cn('rounded-none border-0 bg-transparent text-inherit shadow-none', className)} />;
}

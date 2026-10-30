import { createContext, useContext, type HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';

export const DockTargetContext = createContext<HTMLDivElement | null>(null);

/** Keep the original screen controls in a non-scrolling footer. */
export function BottomDock(props: HTMLAttributes<HTMLDivElement> & { 'data-name'?: string }) {
  const target = useContext(DockTargetContext);
  if (!target) return null;
  const kind = props['data-name'] === 'Nav' ? 'navigation' : 'actions';
  return createPortal(<div {...props} data-bottom-dock={kind} />, target);
}

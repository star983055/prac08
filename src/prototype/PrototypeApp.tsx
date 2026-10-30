import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { prototypeLinks, screens } from './manifest';
import StudyZoneScreen from './screens/StudyZoneScreen';
import SeatScreen from './screens/SeatScreen';
import MembersHomeScreen from './screens/MembersHomeScreen';
import WaitingScreen from './screens/WaitingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import StoresScreen from './screens/StoresScreen';
import TimeScreen from './screens/TimeScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import CompleteScreen from './screens/CompleteScreen';
import EmptyScreen from './screens/EmptyScreen';
import ScanScreen from './screens/ScanScreen';
import CheckedInScreen from './screens/CheckedInScreen';
import ActiveScreen from './screens/ActiveScreen';
import FinishedScreen from './screens/FinishedScreen';
import './prototype.css';
import './interactive.css';
import { useStudy } from './study-state';
import { StudyDialog } from './StudyDialog';

const components = { StudyZoneScreen, SeatScreen, MembersHomeScreen, WaitingScreen, ConfirmScreen, StoresScreen, TimeScreen, FavoritesScreen, CompleteScreen, EmptyScreen, ScanScreen, CheckedInScreen, ActiveScreen, FinishedScreen };

function currentScreen() {
  return screens.find(screen => `#/${screen.slug}` === window.location.hash) ?? screens[0];
}

export function PrototypeApp() {
  const study = useStudy();
  const [screen, setScreen] = useState(currentScreen);
  const [viewportSize, setViewportSize] = useState(() => ({ width: window.innerWidth, height: window.visualViewport?.height || window.innerHeight }));
  const viewport = useRef<HTMLElement>(null);
  const transitionDuration = useRef(0);
  const stage = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const navigate = () => setScreen(currentScreen());
    const resize = () => {
      const element = viewport.current;
      const style = element ? getComputedStyle(element) : null;
      const insetX = style ? parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) : 0;
      const insetY = style ? parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) : 0;
      setViewportSize({ width: (element?.clientWidth || window.innerWidth) - insetX, height: Math.min(element?.clientHeight || window.innerHeight, window.visualViewport?.height || window.innerHeight) - insetY });
    };
    resize();
    const observer = new ResizeObserver(resize);
    if (viewport.current) observer.observe(viewport.current);
    window.addEventListener('hashchange', navigate);
    window.addEventListener('resize', resize);
    window.visualViewport?.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('hashchange', navigate);
      window.removeEventListener('resize', resize);
      window.visualViewport?.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (window.location.hash !== `#/${screen.slug}`) return;
    const status = study.data.booking?.status;
    if ((screen.slug === 'waiting' && status !== 'waiting') ||
        (screen.slug === 'active' && status !== 'active') ||
        (screen.slug === 'scan' && status !== 'waiting') ||
        (screen.slug === 'checked-in' && status !== 'active')) {
      window.location.hash = `/${study.statusPage()}`;
    }
  }, [screen.slug, study.data.booking?.status]);

  useEffect(() => {
    document.title = `${screen.name} · 스터디존`;
    window.scrollTo(0, 0);
    if (!firstRender.current) {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && transitionDuration.current > 0) {
        stage.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: transitionDuration.current * 1000, easing: 'ease-out',
        });
      }
      stage.current?.focus({ preventScroll: true });
    }
    firstRender.current = false;
    transitionDuration.current = 0;
  }, [screen]);

  function rememberTransition(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const anchor = (event.target as Element).closest<HTMLElement>('[data-prototype-link]');
    const id = anchor?.dataset.prototypeLink as keyof typeof prototypeLinks | undefined;
    if (id) transitionDuration.current = prototypeLinks[id].duration;
  }

  const Screen = components[screen.component];
  const topOffset = screen.slug === 'stores' ? 22 : 0;
  const canvasHeight = screen.slug === 'favorites' ? 1400 : screen.height;
  const scale = Math.min(1, viewportSize.width / (screen.width + 4), viewportSize.height / (canvasHeight + topOffset));
  return (
    <main className="prototype-viewport" ref={viewport} onClickCapture={rememberTransition}>
      <div className="prototype-stage" ref={stage} tabIndex={-1} aria-label={screen.name}
        style={{ width: screen.width, height: canvasHeight + topOffset, zoom: scale }}>
        <div className="prototype-canvas" style={{ width: screen.width, height: canvasHeight, top: topOffset }}>
          <Screen key={screen.id} />
        </div>
      </div>
      <StudyDialog />
    </main>
  );
}

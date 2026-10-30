import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from 'react';
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
import { DockTargetContext } from './BottomDock';

const components = { StudyZoneScreen, SeatScreen, MembersHomeScreen, WaitingScreen, ConfirmScreen, StoresScreen, TimeScreen, FavoritesScreen, CompleteScreen, EmptyScreen, ScanScreen, CheckedInScreen, ActiveScreen, FinishedScreen };

function currentScreen() {
  return screens.find(screen => `#/${screen.slug}` === window.location.hash) ?? screens[0];
}

export function PrototypeApp() {
  const study = useStudy();
  const [screen, setScreen] = useState(currentScreen);
  const [viewportSize, setViewportSize] = useState(() => ({ width: window.innerWidth, height: window.visualViewport?.height || window.innerHeight }));
  const viewport = useRef<HTMLElement>(null);
  const scrollBody = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const [dockTarget, setDockTarget] = useState<HTMLDivElement | null>(null);
  const [measured, setMeasured] = useState({ id: '', height: 0 });
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
    scrollBody.current?.scrollTo({ top: 0, behavior: 'instant' });
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
  // A single width-based scale keeps type and controls the same size on every route.
  const scale = Math.min(1, viewportSize.width / 402);
  const canvasHeight = measured.id === screen.id ? measured.height : screen.height;

  useLayoutEffect(() => {
    const element = canvas.current;
    if (!element) return;
    let frame = 0;
    function measure() {
      if (!element) return;
      const origin = element.getBoundingClientRect();
      const ratio = origin.width / screen.width;
      if (!ratio) return;
      let bottom = 160;
      for (const leaf of element.querySelectorAll<HTMLElement>('p, input, button, [role="button"], [role="checkbox"], a')) {
        const bounds = leaf.getBoundingClientRect();
        if (!bounds.width || !bounds.height || !leaf.checkVisibility()) continue;
        bottom = Math.max(bottom, (bounds.bottom - origin.top) / ratio);
      }
      const height = Math.ceil(bottom + 24);
      setMeasured(previous => previous.id === screen.id && previous.height === height ? previous : { id: screen.id, height });
    }
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    measure();
    const changes = new MutationObserver(schedule);
    changes.observe(element, { childList: true, subtree: true });
    const sizes = new ResizeObserver(schedule);
    sizes.observe(element);
    void document.fonts.ready.then(schedule);
    return () => { cancelAnimationFrame(frame); changes.disconnect(); sizes.disconnect(); };
  }, [screen.id, screen.width, scale, dockTarget]);

  return (
    <main className="prototype-viewport" ref={viewport} onClickCapture={rememberTransition}>
      <DockTargetContext.Provider value={dockTarget}>
        <div className="prototype-phone" style={{ width: 402, height: viewportSize.height / scale, zoom: scale }}>
          <div className="prototype-scroll" ref={scrollBody}>
            <div className="prototype-stage" ref={stage} tabIndex={-1} aria-label={screen.name}
              style={{ width: screen.width, height: canvasHeight + topOffset }}>
              <div className="prototype-canvas" ref={canvas} style={{ width: screen.width, height: canvasHeight, top: topOffset }}>
                <Screen key={screen.id} />
              </div>
            </div>
          </div>
          <div className="prototype-dock" ref={setDockTarget} aria-label="하단 메뉴 및 주요 동작" />
        </div>
      </DockTargetContext.Provider>
      <StudyDialog />
    </main>
  );
}

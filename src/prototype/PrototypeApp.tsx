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

const components = { StudyZoneScreen, SeatScreen, MembersHomeScreen, WaitingScreen, ConfirmScreen, StoresScreen, TimeScreen, FavoritesScreen, CompleteScreen, EmptyScreen, ScanScreen, CheckedInScreen, ActiveScreen, FinishedScreen };

function currentScreen() {
  return screens.find(screen => `#/${screen.slug}` === window.location.hash) ?? screens[0];
}

export function PrototypeApp() {
  const [screen, setScreen] = useState(currentScreen);
  const [scale, setScale] = useState(() => Math.min(1, window.innerWidth / 402));
  const transitionDuration = useRef(0);
  const stage = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const navigate = () => setScreen(currentScreen());
    const resize = () => setScale(Math.min(1, window.innerWidth / 402));
    window.addEventListener('hashchange', navigate);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('hashchange', navigate);
      window.removeEventListener('resize', resize);
    };
  }, []);

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
  return (
    <main className="prototype-viewport" onClickCapture={rememberTransition}>
      <div className="prototype-stage" ref={stage} tabIndex={-1} aria-label={screen.name}
        style={{ width: screen.width, height: screen.height, zoom: scale }}>
        <Screen key={screen.id} />
      </div>
    </main>
  );
}

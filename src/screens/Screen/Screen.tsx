import { BottomNavigationSection } from "./sections/BottomNavigationSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { NearbyRecommendedStoresSection } from "./sections/NearbyRecommendedStoresSection/NearbyRecommendedStoresSection";
import { ReservationStatusSection } from "./sections/ReservationStatusSection";
import { SeatReservationSection } from "./sections/SeatReservationSection/SeatReservationSection";
import { UsageGuideSection } from "./sections/UsageGuideSection";

export const Screen = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#faf8ff]">
      <header className="w-full shrink-0">
        <HeaderSection />
      </header>
      <main className="flex w-full flex-1 flex-col bg-[#faf8ff]">
        <section className="w-full shrink-0">
          <SeatReservationSection />
        </section>
        <section className="w-full shrink-0">
          <ReservationStatusSection />
        </section>
        <section className="w-full shrink-0">
          <UsageGuideSection />
        </section>
        <section className="w-full shrink-0">
          <NearbyRecommendedStoresSection />
        </section>
      </main>
      <nav className="w-full shrink-0" aria-label="Bottom navigation">
        <BottomNavigationSection />
      </nav>
    </div>
  );
};

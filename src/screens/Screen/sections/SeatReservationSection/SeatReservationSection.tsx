import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SeatReservationSection = (): JSX.Element => {
  return (
    <section className="w-full px-5">
      <Card className="w-full rounded-xl border-0 bg-white shadow-[0px_1px_2px_#0000000d]">
        <CardContent className="flex flex-col gap-3 p-4">
          <header className="flex w-full items-start justify-between">
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-1.5">
                <img
                  className="h-4 w-4 shrink-0"
                  src="/container-9.svg"
                  alt=""
                  aria-hidden="true"
                />
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#0051d5]">
                  SPACE BOOKING
                </span>
              </div>
              <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-semibold leading-[26px] tracking-[-0.18px] text-[#131b2e]">
                좌석 예약하기
              </h2>
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[13px] font-normal leading-[18px] text-[#44464e]">
                원하는 매장과 좌석을 미리 고르고 바로
                <br />
                집중하세요
              </p>
            </div>
            <img
              className="h-12 w-12 shrink-0"
              src="/background-shadow-1.svg"
              alt=""
              aria-hidden="true"
            />
          </header>
          <Button
            type="button"
            className="h-[50px] w-full gap-1.5 rounded-xl bg-[#0051d5] px-4 shadow-[0px_1px_2px_#0000000d] hover:bg-[#0051d5]/90"
          >
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 tracking-[-0.07px] text-white">
              지금 좌석 예약하기
            </span>
            <img
              className="h-4 w-4 shrink-0"
              src="/container-4.svg"
              alt=""
              aria-hidden="true"
            />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

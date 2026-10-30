import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ReservationStatusSection = (): JSX.Element => {
  return (
    <section className="relative h-[178px] w-full self-stretch px-5 pt-[22px]">
      <Card className="w-full rounded-xl border-0 bg-white shadow-[0px_1px_2px_#0000000d]">
        <CardContent className="flex flex-col gap-3 p-4">
          <div className="flex h-[84px] w-full items-start justify-between">
            <div className="flex h-[84px] w-[203px] flex-col items-start gap-1">
              <div className="flex h-3.5 max-h-3.5 items-center gap-1.5">
                <img
                  className="shrink-0"
                  alt="Container"
                  src="/container-9.svg"
                />
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#0051d5]">
                  SPACE BOOKING
                </span>
              </div>
              <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-semibold leading-[26px] tracking-[-0.18px] text-[#131b2e]">
                예약 현황
              </h2>
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[13px] font-normal leading-[18px] text-[#44464e]">
                좌석 QR 확인
                <br />
                예약 정보 확인
              </p>
            </div>
            <img
              className="h-12 w-12 shrink-0"
              alt="Background shadow"
              src="/background-shadow.svg"
            />
          </div>
          <Button
            type="button"
            className="h-[50px] w-full rounded-xl bg-[#0051d5] px-0 shadow-[0px_1px_2px_#0000000d] hover:bg-[#0051d5]/90"
          >
            <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-center text-sm font-semibold leading-5 tracking-[-0.07px] text-white">
              예약 현황 확인하기
            </span>
            <img
              className="ml-1 h-3 w-3"
              alt="Container"
              src="/container-4.svg"
            />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

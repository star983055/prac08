import { Card, CardContent } from "../../../../components/ui/card";

const usageSteps = [
  {
    icon: "/margin.svg",
    step: "STEP 1",
    title: "매장 & 좌석 선택",
    description: (
      <>
        원하는 자리와
        <br />
        시간을 실시간
        <br />
        예약
      </>
    ),
  },
  {
    icon: "/margin-2.svg",
    step: "STEP 2",
    title: "음료 1잔 주문",
    description: (
      <>
        이디야오더 또는
        <br />
        카운터에서 주문
      </>
    ),
  },
  {
    icon: "/margin-1.svg",
    step: "STEP 3",
    title: "QR 체크인",
    description: (
      <>
        좌석 부착 QR 스캔
        <br />후 즉시 착석
      </>
    ),
  },
];

export const UsageGuideSection = (): JSX.Element => {
  return (
    <section className="flex h-[279px] w-full flex-col bg-[#f8f8ff] px-[17px] pt-[39px]">
      <header className="ml-5 flex h-[47px] flex-col justify-center">
        <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[11px] font-bold leading-[14px] tracking-[0.55px] text-[#0051d5]">
          HOW TO USE
        </p>
        <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-semibold leading-[26px] tracking-[-0.18px] text-[#131b2e]">
          스터디존 간편 이용 가이드
        </h2>
      </header>
      <div className="mt-[11px] grid h-[161px] grid-cols-3 gap-2">
        {usageSteps.map((step) => (
          <Card
            key={step.step}
            className="h-[161px] rounded-xl border-0 bg-white shadow-[0px_1px_2px_#0000000d]"
          >
            <CardContent className="flex h-full flex-col items-center px-1 py-3">
              <img
                className="h-11 w-10 shrink-0 object-contain"
                src={step.icon}
                alt=""
                aria-hidden="true"
              />
              <span className="mt-1 inline-flex h-6 items-center rounded bg-[#e2e7ff] px-1.5 py-0.5 [font-family:'Plus_Jakarta_Sans',Helvetica] text-[10px] font-bold leading-5 text-[#001337]">
                {step.step}
              </span>
              <h3 className="mt-[3px] text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-xs font-semibold leading-4 tracking-[0.12px] text-[#131b2e]">
                {step.title}
              </h3>
              <p className="mt-[3px] text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-[11px] font-normal leading-[13.8px] tracking-0 text-[#44464e]">
                {step.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

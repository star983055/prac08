import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const storeTags = [
  {
    icon: "/container-7.svg",
    label: "1인석 콘센트",
  },
  {
    label: "미팅룸 2실",
  },
];

export const NearbyRecommendedStoresSection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col gap-3 px-5 py-6">
      <header className="flex h-[26px] items-center justify-between">
        <div className="flex items-center gap-1.5">
          <img
            className="h-auto w-auto flex-none"
            alt="Container"
            src="/container-12.svg"
          />
          <h2 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-semibold leading-[26px] tracking-[-0.18px] text-[#131b2e]">
            가까운 추천 스터디 매장
          </h2>
        </div>
        <Button
          type="button"
          variant="ghost"
          className="h-auto gap-0.5 p-0 text-[#0051d5] hover:bg-transparent hover:text-[#0051d5]"
        >
          <span className="[font-family:'Inter',Helvetica] text-xs font-medium leading-4 tracking-[0.12px]">
            전체보기
          </span>
          <img
            className="h-auto w-auto flex-none"
            alt="Container"
            src="/container-13.svg"
          />
        </Button>
      </header>
      <Card className="rounded-xl border-0 bg-white shadow-[0px_1px_2px_#0000000d]">
        <CardContent className="flex flex-col gap-3 p-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="h-24 w-24 flex-none overflow-hidden rounded-lg bg-[#eaedff]">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/ab6axucweyttlzudtu8ej1uxdbym73bq3rtwoaicswqcqqefmtulyy9wtsg5-p9t.png)",
                }}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
              <div className="flex min-w-0 flex-col gap-0.5">
                <div className="flex min-w-0 items-center justify-between gap-2">
                  <h3 className="truncate [font-family:'Plus_Jakarta_Sans',Helvetica] text-base font-semibold leading-5 text-[#131b2e]">
                    이디야커피 대학로점
                  </h3>
                  <span className="flex-none [font-family:'Plus_Jakarta_Sans',Helvetica] text-[11px] font-bold leading-[14px] tracking-[0.22px] text-[#0051d5]">
                    320m
                  </span>
                </div>
                <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[13px] leading-[18px] text-[#44464e]">
                  서울 종로구 대학로 102 2층
                </p>
              </div>
              <div className="flex flex-wrap gap-1 pt-1">
                {storeTags.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-0.5 rounded bg-[#eaedff] px-2 py-0.5 [font-family:'Roboto',Helvetica] text-[11px] font-medium leading-5 text-[#44464e]"
                  >
                    {tag.icon && (
                      <img
                        className="h-auto w-auto flex-none"
                        alt="Container"
                        src={tag.icon}
                      />
                    )}
                    {tag.label}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="h-2 w-2 flex-none rounded-full bg-[#0051d5]" />
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-xs font-bold leading-4 tracking-[0.12px] text-[#0051d5]">
                  잔여 좌석 여유 8석
                </span>
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-[11px] leading-5 text-[#44464e]">
                  / 총 24석
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 pt-1">
            <Button
              type="button"
              variant="ghost"
              className="h-[42px] flex-1 gap-1 rounded-xl bg-[#dbe1ff] p-0 text-[#003ea8] hover:bg-[#dbe1ff] hover:text-[#003ea8]"
            >
              <img
                className="h-auto w-auto flex-none"
                alt="Container"
                src="/container-14.svg"
              />
              <span className="[font-family:'Inter',Helvetica] text-xs font-medium leading-4 tracking-[0.12px]">
                길찾기
              </span>
            </Button>
            <Button
              type="button"
              className="h-[42px] flex-1 gap-1 rounded-xl bg-[#0051d5] p-0 text-white shadow-[0px_1px_2px_#0000000d] hover:bg-[#0051d5] hover:text-white"
            >
              <img
                className="h-auto w-auto flex-none"
                alt="Container"
                src="/container-1.svg"
              />
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-xs font-semibold leading-4 tracking-[0.12px]">
                좌석 선택하기
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-xl border-0 bg-white shadow-[0px_1px_2px_#0000000d]">
        <CardContent className="flex min-h-[72px] items-center justify-between gap-3 p-3">
          <div className="flex min-w-0 items-center gap-3">
            <img
              className="h-12 w-12 flex-none"
              alt="Background"
              src="/background.svg"
            />
            <div className="min-w-0">
              <div className="flex min-w-0 items-center gap-1.5">
                <h3 className="truncate [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 tracking-[-0.07px] text-[#131b2e]">
                  이디야커피 혜화역점
                </h3>
                <span className="flex-none [font-family:'Plus_Jakarta_Sans',Helvetica] text-[11px] font-bold leading-[14px] tracking-[0.22px] text-[#44464e]">
                  540m
                </span>
              </div>
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-xs leading-5 text-[#44464e]">
                창가 1인 집중석 · 잔여 3석
              </p>
            </div>
          </div>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            aria-label="매장 상세 보기"
            className="h-9 w-9 flex-none rounded-full bg-[#eaedff] p-0 text-[#44464e] hover:bg-[#eaedff] hover:text-[#44464e]"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

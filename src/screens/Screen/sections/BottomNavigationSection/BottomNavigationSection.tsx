import { useState } from "react";
import { Button } from "../../../../components/ui/button";

type NavigationItem = {
  label: string;
  icon: string;
  active?: boolean;
  notification?: boolean;
};

const navigationItems: NavigationItem[] = [
  {
    label: "홈",
    icon: "/container-10.svg",
  },
  {
    label: "이디야오더",
    icon: "/container-3.svg",
  },
  {
    label: "스터디존",
    icon: "/container-6.svg",
    active: true,
    notification: true,
  },
  {
    label: "선물하기",
    icon: "/container-2.svg",
  },
  {
    label: "마이페이지",
    icon: "/container-15.svg",
  },
];

export const BottomNavigationSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState("스터디존");

  return (
    <nav
      aria-label="주요 메뉴"
      className="fixed inset-x-0 bottom-0 z-50 flex flex-col bg-[#ffffffe6] shadow-[0px_-2px_12px_#1428500d] backdrop-blur-xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(24px)_brightness(100%)]"
    >
      <div className="flex h-16 w-full items-center justify-around px-1">
        {navigationItems.map((item) => {
          const isActive = activeItem === item.label;

          return (
            <Button
              key={item.label}
              type="button"
              variant="ghost"
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
              onClick={() => setActiveItem(item.label)}
              className="relative flex h-11 min-w-[54px] flex-1 flex-col items-center justify-center gap-0.5 rounded-none px-0 py-0.5 hover:bg-transparent"
            >
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="h-6 w-6 shrink-0 object-contain"
              />
              <span
                className={`whitespace-nowrap text-[11px] font-medium leading-[14px] tracking-[-0.28px] [font-family:'Inter',Helvetica] ${
                  isActive ? "text-[#142850]" : "text-[#75777f]"
                }`}
              >
                {item.label}
              </span>
              {item.notification && (
                <span
                  aria-label="새 알림"
                  className="absolute right-[calc(50%-18px)] top-1 h-2 w-2 rounded-full bg-[#0051d5] shadow-[0px_0px_0px_2px_#ffffff]"
                />
              )}
            </Button>
          );
        })}
      </div>
      <div className="flex w-full items-center justify-center px-0 pb-2 pt-0.5">
        <div
          aria-hidden="true"
          className="h-1 w-36 rounded-full bg-[#131b2e4c]"
        />
      </div>
    </nav>
  );
};

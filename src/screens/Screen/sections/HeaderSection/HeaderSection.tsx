export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full flex-col items-stretch bg-[#ffffffd9] shadow-[0px_1px_8px_#1428500f] backdrop-blur-xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(24px)_brightness(100%)]">
      <div className="grid h-11 w-full grid-cols-[1fr_auto_1fr] items-center px-6">
        <time
          className="justify-self-start [font-family:'Plus_Jakarta_Sans',Helvetica] text-sm font-semibold leading-5 tracking-[-0.35px] text-[#131b2e]"
          dateTime="09:41"
        >
          9:41
        </time>
        <div className="flex h-7 w-[98px] items-center justify-end gap-1.5 rounded-full bg-[#001337] px-2.5 py-0 shadow-[0px_1px_2px_#0000000d]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0051d5cc]" />
          <span className="h-2 w-2 rounded-full bg-[#232a30]" />
        </div>
        <img
          className="justify-self-end"
          alt="System status"
          src="/container-8.svg"
        />
      </div>
      <nav className="flex h-16 w-full items-center justify-between px-5">
        <h1 className="[font-family:'Plus_Jakarta_Sans',Helvetica] text-lg font-semibold leading-[26px] tracking-[-0.45px] text-[#142850]">
          스터디존
        </h1>
        <img className="shrink-0" alt="Header actions" src="/container.svg" />
      </nav>
    </header>
  );
};

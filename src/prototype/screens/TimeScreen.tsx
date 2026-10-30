import { PrototypeLink } from '../primitives';

const imgBackground = "/prototype/35-7085-a2836.png";
const imgContainer = "/prototype/35-7085-03c1a.svg";
const imgContainer1 = "/prototype/35-7085-ff4a3.svg";
const imgContainer2 = "/prototype/35-7085-5c526.svg";
const imgContainer3 = "/prototype/35-7085-8de7a.svg";
const imgContainer4 = "/prototype/35-7085-4f658.svg";
const imgContainer5 = "/prototype/35-7085-63a0e.svg";
const imgContainer6 = "/prototype/35-7085-ea00c.svg";
const imgContainer7 = "/prototype/35-7085-607b1.svg";
const imgContainer8 = "/prototype/35-7085-59e02.svg";
const imgContainer9 = "/prototype/35-7085-77060.svg";

export default function TimeScreen() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="35:7085" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="날짜·시간 선택">
      <div className="bg-[#faf8ff] content-stretch flex flex-col items-start min-h-[780px] pb-[112px] pt-[88px] relative shrink-0 w-full" data-node-id="35:7086" data-name="Main">
        <div className="content-stretch flex flex-col gap-[24px] items-start pt-[12px] px-[20px] relative shrink-0 w-full" data-node-id="35:7087" data-name="Content Area">
          <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="35:7088" data-name="Store Summary Card with Atmosphere Photo">
            <div className="h-[112px] relative shrink-0 w-full z-[2]" data-node-id="35:7089" data-name="Background">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[170.29%] left-0 max-w-none top-[-35.14%] w-full" src={imgBackground} />
              </div>
              <div className="absolute bg-gradient-to-t from-[rgba(0,19,55,0.8)] inset-0 to-[rgba(0,19,55,0)] via-[50%] via-[rgba(0,19,55,0.3)]" data-node-id="35:7090" data-name="Gradient" />
              <div className="absolute bottom-[12px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-node-id="35:7091" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7092" data-name="Container">
                  <div className="h-[14px] relative shrink-0 w-full" data-node-id="35:7093" data-name="Container" />
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:7095" data-name="Heading 2">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7096">
                      <p className="leading-[26px]">이디야커피 대학로점</p>
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="35:7097" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#001337] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7098">
                    <p className="leading-[16px]">매장 변경</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f2f3ff] content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full z-[1]" data-node-id="35:7099" data-name="Background">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7100" data-name="Container">
                <div className="relative shrink-0 size-[15px]" data-node-id="35:7101" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7103" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7104">
                    <p>
                      <span className="leading-[18px]">{`스터디존 운영: `}</span>
                      <span className="[word-break:break-word] font-['Plus_Jakarta_Sans',Helvetica] font-bold leading-[18px] text-[#131b2e]">08:00 ~ 22:00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7105" data-name="Container">
                <div className="bg-[#0051d5] relative rounded-[9999px] shrink-0 size-[8px]" data-node-id="35:7106" data-name="Background" />
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7107" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#0051d5] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7108">
                    <p className="leading-[14px]">예약 접수중</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-node-id="35:7109" data-name="Section - Step 1: Date Selection (7-Day Quick Calendar)">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7110" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:7111" data-name="Container">
                <div className="bg-[#142850] content-stretch flex items-center justify-center pb-[3.5px] pt-[2.5px] relative rounded-[9999px] shrink-0 size-[20px]" data-node-id="35:7112" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[0.22px] whitespace-nowrap" data-node-id="35:7113">
                    <p className="leading-[14px]">1</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7114" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7115">
                    <p className="leading-[26px]">이용 날짜 선택</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7116" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7117">
                  <p className="leading-[18px]">2026년 10월</p>
                </div>
              </div>
            </div>
            <div className="h-[90px] relative shrink-0 w-full" data-node-id="35:7118" data-name="Horizontal Date Picker Chips:margin">
              <div className="absolute h-[90px] left-[-20px] overflow-auto right-[-20px] top-0" data-node-id="35:7119" data-name="Horizontal Date Picker Chips">
                <div className="absolute bg-[#001337] content-stretch flex flex-col items-center justify-center left-[20px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7120" data-name="Button - Day 1 (Selected)">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.45px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-node-id="35:7121" data-name="Button - Day 1 (Selected):shadow" />
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7122" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d9e2ff] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7123">
                      <p className="leading-[14px]">오늘</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7124" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7125" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7126">
                        <p className="leading-[26px]">24</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center opacity-90 relative shrink-0" data-node-id="35:7127" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[0.22px] whitespace-nowrap" data-node-id="35:7128">
                      <p className="leading-[14px]">목</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[84px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7129" data-name="Button - Day 2">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7130" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7131">
                      <p className="leading-[14px]">내일</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7132" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7133" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7134">
                        <p className="leading-[26px]">25</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7135" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7136">
                      <p className="leading-[14px]">금</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[148px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7137" data-name="Button - Day 3">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7138" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0051d5] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7139">
                      <p className="leading-[14px]">주말</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7140" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7141" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#0051d5] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7142">
                        <p className="leading-[26px]">26</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7143" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0051d5] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7144">
                      <p className="leading-[14px]">토</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[212px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7145" data-name="Button - Day 4">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7146" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7147">
                      <p className="leading-[14px]">휴일</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7148" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7149" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7150">
                        <p className="leading-[26px]">27</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7151" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7152">
                      <p className="leading-[14px]">일</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[276px] min-w-[56px] pl-[17.11px] pr-[17.12px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7153" data-name="Button - Day 5">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7154" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7155">
                      <p className="leading-[14px]">월</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7156" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7157" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7158">
                        <p className="leading-[26px]">28</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7159" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7160">
                      <p className="leading-[14px]">월</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[340px] min-w-[56px] pl-[17.38px] pr-[17.39px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7161" data-name="Button - Day 6">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7162" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7163">
                      <p className="leading-[14px]">화</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7164" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7165" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7166">
                        <p className="leading-[26px]">29</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7167" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7168">
                      <p className="leading-[14px]">화</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[404px] min-w-[56px] pl-[16.23px] pr-[16.24px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7169" data-name="Button - Day 7">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7170" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7171">
                      <p className="leading-[14px]">수</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7172" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7173" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7174">
                        <p className="leading-[26px]">30</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7175" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7176">
                      <p className="leading-[14px]">수</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[6px] items-center pl-[4px] relative shrink-0 w-full" data-node-id="35:7177" data-name="Container">
              <div className="relative shrink-0 size-[13.333px]" data-node-id="35:7178" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7180" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7181">
                  <p className="leading-[18px]">이용일 7일 전부터 예약이 가능합니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7182" data-name="Section - Step 2: Time Slot Selection">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7183" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:7184" data-name="Container">
                <div className="bg-[#142850] content-stretch flex items-center justify-center pb-[3.5px] pt-[2.5px] relative rounded-[9999px] shrink-0 size-[20px]" data-node-id="35:7185" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[0.22px] whitespace-nowrap" data-node-id="35:7186">
                    <p className="leading-[14px]">2</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7187" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7188">
                    <p className="leading-[26px]">이용 시간대 선택</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#dbe1ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="35:7189" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#00174b] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7190">
                  <p className="leading-[14px]">30분 단위 선택</p>
                </div>
              </div>
            </div>
            <div className="bg-[#e2e7ff] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="35:7191" data-name="Time Interval Summary Card (Interactive Output)">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7192" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7193" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:7194" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#44464e] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7195">
                      <p className="leading-[14px]">선택된 이용 구간</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-node-id="35:7196" data-name="Margin">
                    <div className="content-stretch flex items-end relative shrink-0 w-full" data-node-id="35:7197" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#001337] text-[22px] tracking-[-0.33px] whitespace-nowrap" data-node-id="35:7198">
                        <p className="leading-[30px]">14:00 ~ 16:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-node-id="35:7201" data-name="Background+Shadow">
                  <div className="relative shrink-0 size-[20px]" data-node-id="35:7202" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="35:7204" data-name="Overlay">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7205" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7206">
                    <p className="leading-[18px]">최소 1시간 ~ 최대 3시간 이용 가능</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="35:7211" data-name="Time Slot Grid">
              <div className="content-stretch flex items-center justify-between pl-[4px] pr-[3.99px] relative shrink-0 w-full" data-node-id="35:7212" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7213" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="35:7214">
                    <p className="leading-[16px]">오후 타임 슬롯</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="35:7215" data-name="Container">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7216" data-name="Container">
                    <div className="bg-[#0051d5] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="35:7217" data-name="Background" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7218" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#44464e] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7219">
                        <p className="leading-[14px]">선택 구간</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7220" data-name="Container">
                    <div className="bg-[#d2d9f4] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="35:7221" data-name="Background" />
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7222" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#44464e] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7223">
                        <p className="leading-[14px]">예약 마감</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[____36px_47px_47px_36px] pt-[4px] relative shrink-0 w-full" data-node-id="35:7224" data-name="Container">
                <div className="bg-[#eaedff] col-1 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 px-[23.83px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7225" data-name="Button - 12:00 ~ 13:30 (Disabled Past/Full)">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7226">
                    <p className="leading-[16px]">12:00</p>
                  </div>
                </div>
                <div className="bg-[#eaedff] col-2 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 pl-[24.45px] pr-[24.47px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7227" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7228">
                    <p className="leading-[16px]">12:30</p>
                  </div>
                </div>
                <div className="bg-[#eaedff] col-3 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 pl-[23.75px] pr-[23.77px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7229" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7230">
                    <p className="leading-[16px]">13:00</p>
                  </div>
                </div>
                <div className="bg-[#eaedff] col-4 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 pl-[24.38px] pr-[24.39px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7231" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7232">
                    <p className="leading-[16px]">13:30</p>
                  </div>
                </div>
                <div className="bg-[#001337] col-1 content-stretch flex flex-col items-center justify-self-start pl-[23.55px] pr-[23.54px] py-[10px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7233" data-name="Button - 14:00 (Start: Active Navy/Blue)">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-node-id="35:7234" data-name="Button - 14:00 (Start: Active Navy/Blue):shadow" />
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7235">
                    <p className="leading-[16px]">14:00</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="35:7236" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7237" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4c6f7] text-[9px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7238">
                        <p className="leading-[9px]">시작</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0051d5] col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pt-[15px] px-[24.17px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7239" data-name="Button - 14:30 (In-Range Active)">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7240">
                    <p className="leading-[16px]">14:30</p>
                  </div>
                </div>
                <div className="bg-[#0051d5] col-3 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[23.72px] pr-[23.73px] pt-[15px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7241" data-name="Button - 15:00 (In-Range Active)">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7242">
                    <p className="leading-[16px]">15:00</p>
                  </div>
                </div>
                <div className="bg-[#0051d5] col-4 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pt-[15px] px-[24.36px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7243" data-name="Button - 15:30 (In-Range Active)">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7244">
                    <p className="leading-[16px]">15:30</p>
                  </div>
                </div>
                <div className="bg-[#001337] col-1 content-stretch flex flex-col items-center justify-self-start pl-[23.88px] pr-[23.87px] py-[10px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7245" data-name="Button - 16:00 (End: Active Navy/Blue)">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-node-id="35:7246" data-name="Button - 16:00 (End: Active Navy/Blue):shadow" />
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7247">
                    <p className="leading-[16px]">16:00</p>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="35:7248" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7249" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4c6f7] text-[9px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7250">
                        <p className="leading-[9px]">종료</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[24.5px] pr-[24.52px] pt-[15px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7251" data-name="Button - 16:30 ~ Available">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7252">
                    <p className="leading-[16px]">16:30</p>
                  </div>
                </div>
                <div className="bg-white col-3 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[24.09px] pr-[24.1px] pt-[15px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7253" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7254">
                    <p className="leading-[16px]">17:00</p>
                  </div>
                </div>
                <div className="bg-white col-4 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[24.72px] pr-[24.73px] pt-[15px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7255" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7256">
                    <p className="leading-[16px]">17:30</p>
                  </div>
                </div>
                <div className="bg-white col-1 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pl-[23.63px] pr-[23.64px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7257" data-name="Button - 18:00 ~ Available">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7258">
                    <p className="leading-[16px]">18:00</p>
                  </div>
                </div>
                <div className="bg-white col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pl-[24.27px] pr-[24.26px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7259" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7260">
                    <p className="leading-[16px]">18:30</p>
                  </div>
                </div>
                <div className="bg-white col-3 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start px-[23.81px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7261" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7262">
                    <p className="leading-[16px]">19:00</p>
                  </div>
                </div>
                <div className="bg-white col-4 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pl-[24.44px] pr-[24.45px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7263" data-name="Button">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7264">
                    <p className="leading-[16px]">19:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[24px] bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(20,40,80,0.06)] top-0 w-[402px]" data-node-id="35:7312" data-name="Header">
        <div className="content-stretch flex items-center pb-[4px] pt-[12px] px-[24px] relative shrink-0 w-full" data-node-id="35:7313" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7314" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[14px] tracking-[-0.35px] whitespace-nowrap" data-node-id="35:7315" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[20px]">9:41</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[20px] items-center min-w-[96px] px-[78.672px] relative" data-node-id="35:7316" data-name="Margin">
            <div className="bg-[#0e161b] h-[20px] relative rounded-[9999px] shrink-0 w-[96px]" data-node-id="35:7317" data-name="Background" />
          </div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="35:7318" data-name="Container">
            <div className="h-[10.667px] relative shrink-0 w-[10px]" data-node-id="35:7319" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
            </div>
            <div className="h-[11.333px] relative shrink-0 w-[16px]" data-node-id="35:7321" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
            </div>
            <div className="h-[15px] relative shrink-0 w-[7.5px]" data-node-id="35:7323" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[56px] items-center justify-between px-[20px] relative shrink-0 w-full" data-node-id="35:7325" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7326" data-name="Container">
            <PrototypeLink className="block cursor-pointer h-[44px] relative shrink-0 w-[40px]" data-node-id="35:7327" data-name="Button - 뒤로 가기:margin" aria-label="뒤로 가기">
              <div className="absolute content-stretch flex items-center justify-center left-[-4px] rounded-[9999px] size-[44px] top-0" data-node-id="35:7328" data-name="Button - 뒤로 가기">
                <div className="h-[18.333px] relative shrink-0 w-[10.794px]" data-node-id="35:7329" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                </div>
              </div>
            </PrototypeLink>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="35:7332" data-name="Heading 1">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#142850] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7333">
                <p className="leading-[26px]">스터디존 예약</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7334" data-name="Container">
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-node-id="35:7335" data-name="Button - 알림">
              <div className="h-[20px] relative shrink-0 w-[16px]" data-node-id="35:7336" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
              </div>
            </div>
            <div className="bg-[#001337] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="35:7338" data-name="Background">
              <div className="relative shrink-0 size-[12px]" data-node-id="35:7339" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[24px] bg-[rgba(255,255,255,0.9)] bottom-0 content-stretch flex flex-col items-start left-0 px-[20px] py-[12px] right-0 shadow-[0px_-4px_16px_0px_rgba(20,40,80,0.06)]" data-node-id="35:7297" data-name="Sticky Bottom Action Bar">
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[448px] relative shrink-0 w-full" data-node-id="35:7298" data-name="Container">
          <PrototypeLink className="bg-[#001337] content-stretch cursor-pointer flex gap-[7.99px] h-[52px] items-center justify-center relative rounded-[12px] shrink-0 w-full" data-node-id="35:7304" data-name="Primary Action CTA Button" aria-label="좌석 선택하기">
            <div className="absolute bg-[rgba(255,255,255,0)] h-[52px] left-0 right-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-node-id="35:7305" data-name="Primary Action CTA Button:shadow" />
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7306" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[-0.07px] whitespace-nowrap" data-node-id="35:7307">
                <p className="leading-[20px]">좌석 선택하기</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[13.333px]" data-node-id="35:7308" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
            </div>
          </PrototypeLink>
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] px-[111px] relative shrink-0 w-[350px]" data-node-id="35:7310" data-name="iOS Home Indicator Spacing:margin">
            <div className="bg-[rgba(19,27,46,0.2)] h-[4px] relative rounded-[9999px] shrink-0 w-[128px]" data-node-id="35:7311" data-name="iOS Home Indicator Spacing" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { CalendarTrigger } from '../CalendarPicker';
import { BoundText, Interactive } from '../controls';
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
    return (<div className="content-stretch flex flex-col items-start relative size-full" data-node-id="35:7085" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="날짜·시간 선택">
      <div className="bg-[#faf8ff] content-stretch flex flex-col items-start min-h-[780px] pb-[112px] pt-[88px] relative shrink-0 w-full" data-node-id="35:7086" data-name="Main">
        <div className="content-stretch flex flex-col gap-[24px] items-start pt-[12px] px-[20px] relative shrink-0 w-full" data-node-id="35:7087" data-name="Content Area">
          <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="35:7088" data-name="Store Summary Card with Atmosphere Photo">
            <div className="h-[112px] relative shrink-0 w-full z-[2]" data-node-id="35:7089" data-name="Background">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[170.29%] left-0 max-w-none top-[-35.14%] w-full" src={imgBackground}/>
              </div>
              <div className="absolute bg-gradient-to-t from-[rgba(0,19,55,0.8)] inset-0 to-[rgba(0,19,55,0)] via-[50%] via-[rgba(0,19,55,0.3)]" data-node-id="35:7090" data-name="Gradient"/>
              <div className="absolute bottom-[12px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-node-id="35:7091" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7092" data-name="Container">
                  <div className="h-[14px] relative shrink-0 w-full" data-node-id="35:7093" data-name="Container"/>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:7095" data-name="Heading 2">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7096">
                      <BoundText className="leading-[26px]" nodeId="35:7096" screen="TimeScreen" controlId="">이디야커피 대학로점</BoundText>
                    </div>
                  </div>
                </div>
                <Interactive className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="35:7097" data-name="Button" screen="TimeScreen" label="매장 변경">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#001337] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7098">
                    <BoundText className="leading-[16px]" nodeId="35:7098" screen="TimeScreen" controlId="35:7097">매장 변경</BoundText>
                  </div>
                </Interactive>
              </div>
            </div>
            <div className="bg-[#f2f3ff] content-stretch flex items-center justify-between p-[16px] relative shrink-0 w-full z-[1]" data-node-id="35:7099" data-name="Background">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7100" data-name="Container">
                <div className="relative shrink-0 size-[15px]" data-node-id="35:7101" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer}/>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7103" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7104">
                    <BoundText nodeId="35:7104" screen="TimeScreen" controlId="">
                      <span className="leading-[18px]">{`스터디존 운영: `}</span>
                      <span className="[word-break:break-word] font-['Plus_Jakarta_Sans',Helvetica] font-bold leading-[18px] text-[#131b2e]">08:00 ~ 22:00</span>
                    </BoundText>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7105" data-name="Container">
                <div className="bg-[#0051d5] relative rounded-[9999px] shrink-0 size-[8px]" data-node-id="35:7106" data-name="Background"/>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7107" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#0051d5] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7108">
                    <BoundText className="leading-[14px]" nodeId="35:7108" screen="TimeScreen" controlId="">예약 접수중</BoundText>
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
                    <BoundText className="leading-[14px]" nodeId="35:7113" screen="TimeScreen" controlId="">1</BoundText>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7114" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7115">
                    <BoundText className="leading-[26px]" nodeId="35:7115" screen="TimeScreen" controlId="">이용 날짜 선택</BoundText>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7116" data-name="Container">
                <div className="study-month-label [word-break:break-word] flex font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7117">
                  <BoundText className="leading-[18px]" nodeId="35:7117" screen="TimeScreen" controlId="">2026년 10월</BoundText>
                  <CalendarTrigger />
                </div>
              </div>
            </div>
            <div className="h-[90px] relative shrink-0 w-full" data-node-id="35:7118" data-name="Horizontal Date Picker Chips:margin">
              <div className="absolute h-[90px] left-[-20px] overflow-auto right-[-20px] top-0" data-node-id="35:7119" data-name="Horizontal Date Picker Chips">
                <Interactive className="absolute bg-[#001337] content-stretch flex flex-col items-center justify-center left-[20px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7120" data-name="Button - Day 1 (Selected)" screen="TimeScreen" label="오늘 | 24 | 목">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.45px_0_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-node-id="35:7121" data-name="Button - Day 1 (Selected):shadow"/>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7122" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d9e2ff] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7123">
                      <BoundText className="leading-[14px]" nodeId="35:7123" screen="TimeScreen" controlId="35:7120">오늘</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7124" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7125" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7126">
                        <BoundText className="leading-[26px]" nodeId="35:7126" screen="TimeScreen" controlId="35:7120">24</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center opacity-90 relative shrink-0" data-node-id="35:7127" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white tracking-[0.22px] whitespace-nowrap" data-node-id="35:7128">
                      <BoundText className="leading-[14px]" nodeId="35:7128" screen="TimeScreen" controlId="35:7120">목</BoundText>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[84px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7129" data-name="Button - Day 2" screen="TimeScreen" label="내일 | 25 | 금">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7130" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7131">
                      <BoundText className="leading-[14px]" nodeId="35:7131" screen="TimeScreen" controlId="35:7129">내일</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7132" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7133" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7134">
                        <BoundText className="leading-[26px]" nodeId="35:7134" screen="TimeScreen" controlId="35:7129">25</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7135" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7136">
                      <BoundText className="leading-[14px]" nodeId="35:7136" screen="TimeScreen" controlId="35:7129">금</BoundText>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[148px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7137" data-name="Button - Day 3" screen="TimeScreen" label="주말 | 26 | 토">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7138" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0051d5] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7139">
                      <BoundText className="leading-[14px]" nodeId="35:7139" screen="TimeScreen" controlId="35:7137">주말</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7140" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7141" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#0051d5] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7142">
                        <BoundText className="leading-[26px]" nodeId="35:7142" screen="TimeScreen" controlId="35:7137">26</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7143" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0051d5] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7144">
                      <BoundText className="leading-[14px]" nodeId="35:7144" screen="TimeScreen" controlId="35:7137">토</BoundText>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[212px] min-w-[56px] pl-[16.77px] pr-[16.78px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7145" data-name="Button - Day 4" screen="TimeScreen" label="휴일 | 27 | 일">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7146" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7147">
                      <BoundText className="leading-[14px]" nodeId="35:7147" screen="TimeScreen" controlId="35:7145">휴일</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7148" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7149" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#ba1a1a] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7150">
                        <BoundText className="leading-[26px]" nodeId="35:7150" screen="TimeScreen" controlId="35:7145">27</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7151" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7152">
                      <BoundText className="leading-[14px]" nodeId="35:7152" screen="TimeScreen" controlId="35:7145">일</BoundText>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[276px] min-w-[56px] pl-[17.11px] pr-[17.12px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7153" data-name="Button - Day 5" screen="TimeScreen" label="월 | 28 | 월">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7154" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7155">
                      <BoundText className="leading-[14px]" nodeId="35:7155" screen="TimeScreen" controlId="35:7153">월</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7156" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7157" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7158">
                        <BoundText className="leading-[26px]" nodeId="35:7158" screen="TimeScreen" controlId="35:7153">28</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7159" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7160">
                      <BoundText className="leading-[14px]" nodeId="35:7160" screen="TimeScreen" controlId="35:7153">월</BoundText>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[340px] min-w-[56px] pl-[17.38px] pr-[17.39px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7161" data-name="Button - Day 6" screen="TimeScreen" label="화 | 29 | 화">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7162" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7163">
                      <BoundText className="leading-[14px]" nodeId="35:7163" screen="TimeScreen" controlId="35:7161">화</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7164" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7165" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7166">
                        <BoundText className="leading-[26px]" nodeId="35:7166" screen="TimeScreen" controlId="35:7161">29</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7167" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7168">
                      <BoundText className="leading-[14px]" nodeId="35:7168" screen="TimeScreen" controlId="35:7161">화</BoundText>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="absolute bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center left-[404px] min-w-[56px] pl-[16.23px] pr-[16.24px] py-[12px] rounded-[12px] top-[4px]" data-node-id="35:7169" data-name="Button - Day 7" screen="TimeScreen" label="수 | 30 | 수">
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7170" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7171">
                      <BoundText className="leading-[14px]" nodeId="35:7171" screen="TimeScreen" controlId="35:7169">수</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-node-id="35:7172" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7173" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] text-center tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7174">
                        <BoundText className="leading-[26px]" nodeId="35:7174" screen="TimeScreen" controlId="35:7169">30</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7175" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44464e] text-[11px] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7176">
                      <BoundText className="leading-[14px]" nodeId="35:7176" screen="TimeScreen" controlId="35:7169">수</BoundText>
                    </div>
                  </div>
                </Interactive>
              </div>
            </div>
            <div className="content-stretch flex gap-[6px] items-center pl-[4px] relative shrink-0 w-full" data-node-id="35:7177" data-name="Container">
              <div className="relative shrink-0 size-[13.333px]" data-node-id="35:7178" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1}/>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7180" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7181">
                  <BoundText className="leading-[18px]" nodeId="35:7181" screen="TimeScreen" controlId="">이용일 7일 전부터 예약이 가능합니다.</BoundText>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="35:7182" data-name="Section - Step 2: Time Slot Selection">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7183" data-name="Container">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="35:7184" data-name="Container">
                <div className="bg-[#142850] content-stretch flex items-center justify-center pb-[3.5px] pt-[2.5px] relative rounded-[9999px] shrink-0 size-[20px]" data-node-id="35:7185" data-name="Background">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-center text-white tracking-[0.22px] whitespace-nowrap" data-node-id="35:7186">
                    <BoundText className="leading-[14px]" nodeId="35:7186" screen="TimeScreen" controlId="">2</BoundText>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7187" data-name="Heading 3">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7188">
                    <BoundText className="leading-[26px]" nodeId="35:7188" screen="TimeScreen" controlId="">이용 시간대 선택</BoundText>
                  </div>
                </div>
              </div>
              <div className="bg-[#dbe1ff] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="35:7189" data-name="Background">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#00174b] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7190">
                  <BoundText className="leading-[14px]" nodeId="35:7190" screen="TimeScreen" controlId="">30분 단위 선택</BoundText>
                </div>
              </div>
            </div>
            <div className="bg-[#e2e7ff] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-node-id="35:7191" data-name="Time Interval Summary Card (Interactive Output)">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7192" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7193" data-name="Container">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:7194" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#44464e] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7195">
                      <BoundText className="leading-[14px]" nodeId="35:7195" screen="TimeScreen" controlId="">선택된 이용 구간</BoundText>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-node-id="35:7196" data-name="Margin">
                    <div className="content-stretch flex items-end relative shrink-0 w-full" data-node-id="35:7197" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#001337] text-[22px] tracking-[-0.33px] whitespace-nowrap" data-node-id="35:7198">
                        <BoundText className="leading-[30px]" nodeId="35:7198" screen="TimeScreen" controlId="">14:00 ~ 16:00</BoundText>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-node-id="35:7201" data-name="Background+Shadow">
                  <div className="relative shrink-0 size-[20px]" data-node-id="35:7202" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2}/>
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex items-center justify-between px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="35:7204" data-name="Overlay">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7205" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7206">
                    <BoundText className="leading-[18px]" nodeId="35:7206" screen="TimeScreen" controlId="">최소 1시간 ~ 최대 3시간 이용 가능</BoundText>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="35:7211" data-name="Time Slot Grid">
              <div className="content-stretch flex items-center justify-between pl-[4px] pr-[3.99px] relative shrink-0 w-full" data-node-id="35:7212" data-name="Container">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7213" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] tracking-[0.12px] whitespace-nowrap" data-node-id="35:7214">
                    <BoundText className="leading-[16px]" nodeId="35:7214" screen="TimeScreen" controlId="">오후 타임 슬롯</BoundText>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="35:7215" data-name="Container">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7216" data-name="Container">
                    <div className="bg-[#0051d5] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="35:7217" data-name="Background"/>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7218" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#44464e] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7219">
                        <BoundText className="leading-[14px]" nodeId="35:7219" screen="TimeScreen" controlId="">선택 구간</BoundText>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7220" data-name="Container">
                    <div className="bg-[#d2d9f4] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="35:7221" data-name="Background"/>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7222" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#44464e] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7223">
                        <BoundText className="leading-[14px]" nodeId="35:7223" screen="TimeScreen" controlId="">예약 마감</BoundText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[____36px_47px_47px_36px] pt-[4px] relative shrink-0 w-full" data-node-id="35:7224" data-name="Container">
                <Interactive className="bg-[#eaedff] col-1 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 px-[23.83px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7225" data-name="Button - 12:00 ~ 13:30 (Disabled Past/Full)" screen="TimeScreen" label="12:00">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7226">
                    <BoundText className="leading-[16px]" nodeId="35:7226" screen="TimeScreen" controlId="35:7225">12:00</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-[#eaedff] col-2 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 pl-[24.45px] pr-[24.47px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7227" data-name="Button" screen="TimeScreen" label="12:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7228">
                    <BoundText className="leading-[16px]" nodeId="35:7228" screen="TimeScreen" controlId="35:7227">12:30</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-[#eaedff] col-3 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 pl-[23.75px] pr-[23.77px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7229" data-name="Button" screen="TimeScreen" label="13:00">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7230">
                    <BoundText className="leading-[16px]" nodeId="35:7230" screen="TimeScreen" controlId="35:7229">13:00</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-[#eaedff] col-4 content-stretch flex flex-col items-center justify-center justify-self-start opacity-50 pl-[24.38px] pr-[24.39px] py-[10px] relative rounded-[8px] row-1 self-start shrink-0" data-node-id="35:7231" data-name="Button" screen="TimeScreen" label="13:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#75777f] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7232">
                    <BoundText className="leading-[16px]" nodeId="35:7232" screen="TimeScreen" controlId="35:7231">13:30</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-[#001337] col-1 content-stretch flex flex-col items-center justify-self-start pl-[23.55px] pr-[23.54px] py-[10px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7233" data-name="Button - 14:00 (Start: Active Navy/Blue)" screen="TimeScreen" label="14:00 | 시작">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-node-id="35:7234" data-name="Button - 14:00 (Start: Active Navy/Blue):shadow"/>
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7235">
                    <BoundText className="leading-[16px]" nodeId="35:7235" screen="TimeScreen" controlId="35:7233">14:00</BoundText>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="35:7236" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7237" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4c6f7] text-[9px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7238">
                        <BoundText className="leading-[9px]" nodeId="35:7238" screen="TimeScreen" controlId="35:7233">시작</BoundText>
                      </div>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="bg-[#0051d5] col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pt-[15px] px-[24.17px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7239" data-name="Button - 14:30 (In-Range Active)" screen="TimeScreen" label="14:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7240">
                    <BoundText className="leading-[16px]" nodeId="35:7240" screen="TimeScreen" controlId="35:7239">14:30</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-[#0051d5] col-3 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[23.72px] pr-[23.73px] pt-[15px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7241" data-name="Button - 15:00 (In-Range Active)" screen="TimeScreen" label="15:00">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7242">
                    <BoundText className="leading-[16px]" nodeId="35:7242" screen="TimeScreen" controlId="35:7241">15:00</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-[#0051d5] col-4 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pt-[15px] px-[24.36px] relative rounded-[8px] row-2 self-start shrink-0" data-node-id="35:7243" data-name="Button - 15:30 (In-Range Active)" screen="TimeScreen" label="15:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7244">
                    <BoundText className="leading-[16px]" nodeId="35:7244" screen="TimeScreen" controlId="35:7243">15:30</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-[#001337] col-1 content-stretch flex flex-col items-center justify-self-start pl-[23.88px] pr-[23.87px] py-[10px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7245" data-name="Button - 16:00 (End: Active Navy/Blue)" screen="TimeScreen" label="16:00 | 종료">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-node-id="35:7246" data-name="Button - 16:00 (End: Active Navy/Blue):shadow"/>
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7247">
                    <BoundText className="leading-[16px]" nodeId="35:7247" screen="TimeScreen" controlId="35:7245">16:00</BoundText>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0" data-node-id="35:7248" data-name="Margin">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7249" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Inter',Helvetica] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4c6f7] text-[9px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7250">
                        <BoundText className="leading-[9px]" nodeId="35:7250" screen="TimeScreen" controlId="35:7245">종료</BoundText>
                      </div>
                    </div>
                  </div>
                </Interactive>
                <Interactive className="bg-white col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[24.5px] pr-[24.52px] pt-[15px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7251" data-name="Button - 16:30 ~ Available" screen="TimeScreen" label="16:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7252">
                    <BoundText className="leading-[16px]" nodeId="35:7252" screen="TimeScreen" controlId="35:7251">16:30</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-white col-3 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[24.09px] pr-[24.1px] pt-[15px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7253" data-name="Button" screen="TimeScreen" label="17:00">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7254">
                    <BoundText className="leading-[16px]" nodeId="35:7254" screen="TimeScreen" controlId="35:7253">17:00</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-white col-4 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pb-[16px] pl-[24.72px] pr-[24.73px] pt-[15px] relative rounded-[8px] row-3 self-start shrink-0" data-node-id="35:7255" data-name="Button" screen="TimeScreen" label="17:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7256">
                    <BoundText className="leading-[16px]" nodeId="35:7256" screen="TimeScreen" controlId="35:7255">17:30</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-white col-1 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pl-[23.63px] pr-[23.64px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7257" data-name="Button - 18:00 ~ Available" screen="TimeScreen" label="18:00">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7258">
                    <BoundText className="leading-[16px]" nodeId="35:7258" screen="TimeScreen" controlId="35:7257">18:00</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-white col-2 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pl-[24.27px] pr-[24.26px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7259" data-name="Button" screen="TimeScreen" label="18:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7260">
                    <BoundText className="leading-[16px]" nodeId="35:7260" screen="TimeScreen" controlId="35:7259">18:30</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-white col-3 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start px-[23.81px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7261" data-name="Button" screen="TimeScreen" label="19:00">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7262">
                    <BoundText className="leading-[16px]" nodeId="35:7262" screen="TimeScreen" controlId="35:7261">19:00</BoundText>
                  </div>
                </Interactive>
                <Interactive className="bg-white col-4 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center justify-self-start pl-[24.44px] pr-[24.45px] py-[10px] relative rounded-[8px] row-4 self-start shrink-0" data-node-id="35:7263" data-name="Button" screen="TimeScreen" label="19:30">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7264">
                    <BoundText className="leading-[16px]" nodeId="35:7264" screen="TimeScreen" controlId="35:7263">19:30</BoundText>
                  </div>
                </Interactive>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[24px] bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col items-start left-0 shadow-[0px_1px_8px_0px_rgba(20,40,80,0.06)] top-0 w-[402px]" data-node-id="35:7312" data-name="Header">
        <div className="content-stretch flex items-center pb-[4px] pt-[12px] px-[24px] relative shrink-0 w-full" data-node-id="35:7313" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7314" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[14px] tracking-[-0.35px] whitespace-nowrap" data-node-id="35:7315" style={{ fontVariationSettings: '"wdth" 100' }}>
              <BoundText className="leading-[20px]" nodeId="35:7315" screen="TimeScreen" controlId="">9:41</BoundText>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[20px] items-center min-w-[96px] px-[78.672px] relative" data-node-id="35:7316" data-name="Margin">
            <div className="bg-[#0e161b] h-[20px] relative rounded-[9999px] shrink-0 w-[96px]" data-node-id="35:7317" data-name="Background"/>
          </div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="35:7318" data-name="Container">
            <div className="h-[10.667px] relative shrink-0 w-[10px]" data-node-id="35:7319" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3}/>
            </div>
            <div className="h-[11.333px] relative shrink-0 w-[16px]" data-node-id="35:7321" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4}/>
            </div>
            <div className="h-[15px] relative shrink-0 w-[7.5px]" data-node-id="35:7323" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5}/>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[56px] items-center justify-between px-[20px] relative shrink-0 w-full" data-node-id="35:7325" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7326" data-name="Container">
            <PrototypeLink className="block cursor-pointer h-[44px] relative shrink-0 w-[40px]" data-node-id="35:7327" data-name="Button - 뒤로 가기:margin" aria-label="뒤로 가기">
              <div className="absolute content-stretch flex items-center justify-center left-[-4px] rounded-[9999px] size-[44px] top-0" data-node-id="35:7328" data-name="Button - 뒤로 가기">
                <div className="h-[18.333px] relative shrink-0 w-[10.794px]" data-node-id="35:7329" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6}/>
                </div>
              </div>
            </PrototypeLink>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="35:7332" data-name="Heading 1">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[#142850] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7333">
                <BoundText className="leading-[26px]" nodeId="35:7333" screen="TimeScreen" controlId="">스터디존 예약</BoundText>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7334" data-name="Container">
            <Interactive className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-node-id="35:7335" data-name="Button - 알림" screen="TimeScreen" label="">
              <div className="h-[20px] relative shrink-0 w-[16px]" data-node-id="35:7336" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7}/>
              </div>
            </Interactive>
            <Interactive className="bg-[#001337] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background" data-node-id="profile-35:7338" screen="TimeScreen" label="마이페이지">
              <div className="relative shrink-0 size-[12px]" data-node-id="35:7339" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8}/>
              </div>
            </Interactive>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[24px] bg-[rgba(255,255,255,0.9)] bottom-0 content-stretch flex flex-col items-start left-0 px-[20px] py-[12px] right-0 shadow-[0px_-4px_16px_0px_rgba(20,40,80,0.06)]" data-node-id="35:7297" data-name="Sticky Bottom Action Bar">
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[448px] relative shrink-0 w-full" data-node-id="35:7298" data-name="Container">
          <PrototypeLink className="bg-[#001337] content-stretch cursor-pointer flex gap-[7.99px] h-[52px] items-center justify-center relative rounded-[12px] shrink-0 w-full" data-node-id="35:7304" data-name="Primary Action CTA Button" aria-label="좌석 선택하기">
            <div className="absolute bg-[rgba(255,255,255,0)] h-[52px] left-0 right-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-node-id="35:7305" data-name="Primary Action CTA Button:shadow"/>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7306" data-name="Container">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans',Helvetica] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[-0.07px] whitespace-nowrap" data-node-id="35:7307">
                <BoundText className="leading-[20px]" nodeId="35:7307" screen="TimeScreen" controlId="">좌석 선택하기</BoundText>
              </div>
            </div>
            <div className="relative shrink-0 size-[13.333px]" data-node-id="35:7308" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9}/>
            </div>
          </PrototypeLink>
          <div className="content-stretch flex flex-col h-[8px] items-center pt-[4px] px-[111px] relative shrink-0 w-[350px]" data-node-id="35:7310" data-name="iOS Home Indicator Spacing:margin">
            <div className="bg-[rgba(19,27,46,0.2)] h-[4px] relative rounded-[9999px] shrink-0 w-[128px]" data-node-id="35:7311" data-name="iOS Home Indicator Spacing"/>
          </div>
        </div>
      </div>
    </div>);
}

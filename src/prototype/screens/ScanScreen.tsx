import { PrototypeLink } from '../primitives';

const imgCameraSimulatedBackgroundImagery = "/prototype/35-7862-de103.png";
const imgContainer = "/prototype/35-7862-a7665.svg";
const imgContainer1 = "/prototype/35-7862-d0d76.svg";
const imgMargin = "/prototype/35-7862-1fc74.svg";
const imgContainer2 = "/prototype/35-7862-ac9f6.svg";
const imgContainer3 = "/prototype/35-7862-3238e.svg";
const imgContainer4 = "/prototype/35-7862-bb1d9.svg";
const imgContainer5 = "/prototype/35-7862-1d928.svg";
const imgContainer6 = "/prototype/35-7862-86307.svg";
const imgContainer7 = "/prototype/35-7862-bf939.svg";
const imgContainer8 = "/prototype/35-7862-63a0e.svg";
const imgContainer9 = "/prototype/35-7862-b64b4.svg";
const imgContainer10 = "/prototype/35-7862-8e794.svg";
const imgContainer11 = "/prototype/35-7862-59e02.svg";

export default function Qr() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="35:7862" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 255) 0%, rgb(250, 248, 255) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="좌석 QR 스캔">
      <div className="bg-[#faf8ff] content-stretch flex flex-col items-start pb-[40px] pt-[102px] relative shrink-0 w-full" data-node-id="35:7863" data-name="Main">
        <div className="h-[796px] relative shrink-0 w-full" data-node-id="35:7864" data-name="Container">
          <div className="absolute content-stretch flex flex-col items-start left-0 max-h-[484px] py-[12px] right-0 top-[114px]" data-node-id="35:7865" data-name="Camera Viewfinder Section:margin">
            <div className="bg-[#0e161b] content-stretch flex items-center justify-center max-h-[460px] overflow-clip py-[102px] relative shrink-0 w-full" data-node-id="35:7866" data-name="Camera Viewfinder Section">
              <div className="absolute flex inset-[-11.5px_-9.75px] items-center justify-center" data-node-id="35:7867" style={{ containerType: "size" }}>
                <div className="flex-none h-[100cqh] w-[100cqw]">
                  <div className="opacity-40 relative size-full" data-name="Camera Simulated Background Imagery">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-full left-[-58.23%] max-w-none top-0 w-[216.45%]" src={imgCameraSimulatedBackgroundImagery} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient-to-b from-[rgba(0,19,55,0.7)] inset-0 to-[rgba(0,19,55,0.8)] via-[50%] via-[rgba(0,19,55,0)]" data-node-id="35:7868" data-name="Dark Vignette Mask Over Viewfinder" />
              <div className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[256px]" data-node-id="35:7869" data-name="Center Reticle / QR Target Frame">
                <div className="border border-[rgba(219,225,255,0.3)] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-node-id="35:7870" data-name="Target Center Crosshair / Micro Guide">
                  <div className="relative shrink-0 size-[13.5px]" data-node-id="35:7871" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                  </div>
                </div>
                <div className="absolute bg-[rgba(255,255,255,0)] inset-[-200px] rounded-[16px] shadow-[0px_0px_0px_9999px_rgba(0,19,55,0.65)]" data-node-id="35:7873" data-name="Outer Dimming Mask around Reticle" />
                <div className="absolute bg-gradient-to-r from-[rgba(49,107,243,0)] h-[3px] left-[12px] opacity-90 right-[12px] rounded-[9999px] shadow-[0px_0px_12px_0px_#316bf3] to-[rgba(49,107,243,0)] top-[126.5px] via-[50%] via-[#316bf3]" data-node-id="35:7874" data-name="Animated Scanning Line" />
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#dbe1ff] border-l-[3px] border-solid border-t-[3px] left-0 rounded-tl-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[24px] top-0" data-node-id="35:7875" data-name="4 Corner Brackets" />
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#dbe1ff] border-r-[3px] border-solid border-t-[3px] right-0 rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[24px] top-0" data-node-id="35:7876" data-name="Overlay+Border+Shadow" />
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#dbe1ff] border-b-[3px] border-l-[3px] border-solid bottom-0 left-0 rounded-bl-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[24px]" data-node-id="35:7877" data-name="Overlay+Border+Shadow" />
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#dbe1ff] border-b-[3px] border-r-[3px] border-solid bottom-0 right-0 rounded-br-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-[24px]" data-node-id="35:7878" data-name="Overlay+Border+Shadow" />
              </div>
              <div className="absolute bottom-[16px] content-stretch flex flex-col items-center left-0 px-[16px] right-0" data-node-id="35:7879" data-name="Instruction Subtitle floating under Frame">
                <div className="backdrop-blur-[12px] bg-[rgba(0,19,55,0.8)] content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[9999px] shrink-0" data-node-id="35:7880" data-name="Overlay+OverlayBlur">
                  <div className="relative shrink-0 size-[13.333px]" data-node-id="35:7881" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                  </div>
                  <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7883" data-name="Container">
                    <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap" data-node-id="35:7884" style={{ fontVariationSettings: '"wdth" 100' }}>
                      <p>
                        <span className="leading-[16px]">{`테이블에 부착된 `}</span>
                        <span className="[word-break:break-word] font-['Inter',Helvetica] font-bold leading-[16px] not-italic text-[#dbe1ff]">A03 QR 코드</span>
                        <span className="leading-[16px]">를 맞춰주세요</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 content-stretch flex flex-col gap-[12px] items-start left-0 pb-[24px] px-[20px] right-0" data-node-id="35:7885" data-name="Bottom Guidance and Controls Section">
            <div className="bg-[rgba(226,231,255,0.6)] content-stretch flex gap-[4px] items-start p-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="35:7886" data-name="Seat mismatch warning banner">
              <div className="h-[17px] relative shrink-0 w-[15px]" data-node-id="35:7887" data-name="Margin">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMargin} />
              </div>
              <div className="content-stretch flex flex-col items-start pr-[3.22px] relative shrink-0" data-node-id="35:7889" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[#44464e] text-[13px] whitespace-nowrap" data-node-id="35:7890" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="mb-0">
                    <span className="leading-[18px]">{`예약하신 `}</span>
                    <span className="[word-break:break-word] font-['Inter',Helvetica] font-bold leading-[18px] not-italic text-[#131b2e]">A03 좌석 외 다른 좌석 QR 스캔 시</span>
                    <span className="leading-[18px]">{` 체크인이`}</span>
                  </p>
                  <p className="leading-[18px]">정상 처리되지 않으며 이용 시간이 시작되지 않습니다.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center py-[4px] relative shrink-0 w-full" data-node-id="35:7891" data-name="Alternative Action / Manual Input Link">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7892" data-name="Button">
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7893" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#0051d5] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7894" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[16px]">카메라 인식이 잘 안 되시나요?</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7895" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#0051d5] text-[12px] text-center tracking-[0.12px] whitespace-nowrap" data-node-id="35:7896" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-[1px] decoration-solid leading-[16px] underline">좌석 번호 직접 입력하기</p>
                  </div>
                </div>
                <div className="h-[7.5px] relative shrink-0 w-[4.625px]" data-node-id="35:7897" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start pt-[4px] relative shrink-0 w-full" data-node-id="35:7899" data-name="Test Simulator Action Button">
              <PrototypeLink className="bg-[#0051d5] content-stretch cursor-pointer flex gap-[8px] h-[52px] items-center justify-center relative rounded-[14px] shrink-0 w-full" data-node-id="35:7900" data-name="Button" aria-label="A03 좌석 QR 인식 완료 (테스트 시뮬레이션)">
                <div className="absolute bg-[rgba(255,255,255,0)] h-[52px] left-0 right-0 rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0" data-node-id="35:7901" data-name="Button:shadow" />
                <div className="relative shrink-0 size-[15px]" data-node-id="35:7902" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                </div>
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="35:7904" data-name="Container">
                  <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[-0.07px] whitespace-nowrap" data-node-id="35:7905" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[20px]">A03 좌석 QR 인식 완료 (테스트 시뮬레이션)</p>
                  </div>
                </div>
              </PrototypeLink>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="35:7906" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(68,70,78,0.7)] text-center tracking-[0.22px] whitespace-nowrap" data-node-id="35:7907" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <p className="leading-[14px]">카메라 접근 권한이 유지되어 실시간 감지 중입니다</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-start left-0 pt-[4px] px-[20px] right-0 top-0" data-node-id="35:7908" data-name="Top Floating Reservation Info Pill Card">
            <div className="backdrop-blur-[24px] bg-[rgba(0,19,55,0.95)] content-stretch flex flex-col gap-[4px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full" data-node-id="35:7909" data-name="Background+OverlayBlur">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-node-id="35:7910" data-name="Overlay+Shadow" />
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7911" data-name="Container">
                <div className="bg-[rgba(49,107,243,0.2)] content-stretch flex gap-[6px] items-center px-[4px] py-[2px] relative rounded-[9999px] shrink-0" data-node-id="35:7912" data-name="Overlay">
                  <div className="bg-[#dbe1ff] relative rounded-[9999px] shrink-0 size-[6px]" data-node-id="35:7913" data-name="Background" />
                  <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#dbe1ff] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="35:7914" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[14px]">체크인 대기 중 (15분 이내)</p>
                  </div>
                </div>
                <div className="bg-[rgba(218,226,253,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="35:7915" data-name="Button">
                  <div className="h-[16.308px] relative shrink-0 w-[15.675px]" data-node-id="35:7916" data-name="Container">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-node-id="35:7918" data-name="Margin">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="35:7919" data-name="Container">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-node-id="35:7920" data-name="Container">
                    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="35:7921" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7922" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[26px]">이디야커피 대학로점 • 2층 A03</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="35:7923" data-name="Container">
                      <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(218,226,253,0.8)] whitespace-nowrap" data-node-id="35:7924" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[18px]">오늘 14:00 ~ 16:00 (2시간)</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[40px] items-start pl-[8px] relative shrink-0 w-[48px]" data-node-id="35:7925" data-name="Margin">
                    <div className="bg-[rgba(218,226,253,0.15)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-node-id="35:7926" data-name="Overlay">
                      <div className="h-[14.667px] relative shrink-0 w-[18.311px]" data-node-id="35:7927" data-name="Container">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 right-0" data-node-id="35:7929" data-name="Footer">
        <div className="content-stretch flex items-start justify-center pb-[8px] pt-[4px] relative shrink-0 w-full" data-node-id="35:7930" data-name="Container">
          <div className="bg-[rgba(19,27,46,0.2)] h-[4px] relative rounded-[9999px] shrink-0 w-[144px]" data-node-id="35:7931" data-name="Overlay" />
        </div>
      </div>
      <div className="absolute backdrop-blur-[24px] bg-[rgba(250,248,255,0.85)] content-stretch flex flex-col items-start left-0 right-0 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.03)] top-0" data-node-id="35:7932" data-name="Header">
        <div className="content-stretch flex h-[44px] items-center justify-between px-[28px] relative shrink-0 w-full" data-node-id="35:7933" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="35:7934" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[11px] tracking-[-0.275px] whitespace-nowrap" data-node-id="35:7935" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[14px]">9:41</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="35:7936" data-name="Container">
            <div className="relative shrink-0 size-[12.5px]" data-node-id="35:7937" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
            </div>
            <div className="h-[10.625px] relative shrink-0 w-[15px]" data-node-id="35:7939" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer7} />
            </div>
            <div className="h-[15px] relative shrink-0 w-[7.5px]" data-node-id="35:7941" data-name="Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer8} />
            </div>
          </div>
          <div className="-translate-x-1/2 absolute bg-[#001337] content-stretch flex h-[34px] items-center justify-between left-1/2 px-[12px] rounded-[9999px] top-[8px] w-[120px]" data-node-id="35:7943" data-name="Background">
            <div className="bg-[#232a30] relative rounded-[9999px] shrink-0 size-[12px]" data-node-id="35:7944" data-name="Background" />
            <div className="bg-[rgba(0,81,213,0.7)] relative rounded-[9999px] shrink-0 size-[10px]" data-node-id="35:7945" data-name="Overlay" />
          </div>
        </div>
        <div className="content-stretch flex h-[56px] items-center justify-between px-[20px] relative shrink-0 w-full" data-node-id="35:7946" data-name="Container">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7947" data-name="Container">
            <div className="h-[44px] relative shrink-0 w-[36px]" data-node-id="35:7948" data-name="Button - 뒤로가기:margin">
              <div className="absolute content-stretch flex items-center justify-center left-[-8px] rounded-[9999px] size-[44px] top-0" data-node-id="35:7949" data-name="Button - 뒤로가기">
                <div className="h-[20px] relative shrink-0 w-[11.775px]" data-node-id="35:7950" data-name="Container">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer9} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="35:7952" data-name="Heading 1">
              <div className="[word-break:break-word] flex flex-col font-['Roboto',Helvetica] font-bold justify-center leading-[0] relative shrink-0 text-[#131b2e] text-[18px] tracking-[-0.18px] whitespace-nowrap" data-node-id="35:7953" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[26px]">좌석 QR 선택</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="35:7954" data-name="Container">
            <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-node-id="35:7955" data-name="Button - 닫기 또는 안내">
              <div className="relative shrink-0 size-[12.833px]" data-node-id="35:7956" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer10} />
              </div>
            </div>
            <div className="bg-[#001337] content-stretch drop-shadow-[0px_2px_3px_rgba(0,19,55,0.18)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-node-id="35:7958" data-name="Background+Shadow">
              <div className="relative shrink-0 size-[12px]" data-node-id="35:7959" data-name="Container">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

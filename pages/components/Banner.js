import { useState } from "react";
import CardSlider from "./CardSlider";
const Banner = ({ exploreFirstEvent }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="relative w-[448px] h-[687px] text-38xl mx-auto">
        <div className="absolute top-0 left-0 flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="left-10 w-[500px] relative tracking-[-0.25px] leading-[64px] font-bold inline-block h-[142px] shrink-0">
              {exploreFirstEvent ? "Explore Your First Event" : "Explore Your First Collection"}
            </div>
            <b className="left-9 w-[255px] relative text-5xl leading-[32px] inline-block">
              Live in Astrix
            </b>
            <div className="left-9 w-[316px] relative text-base tracking-[0.15px] leading-[24px] font-semibold inline-block h-[104px] shrink-0">
              {`Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. `}
            </div>
          </div>
          <div className="left-9 w-[286px] relative h-11 text-xl text-palette-pac-man-50">
            <img
              className="absolute top-[2px] left-[0px] w-[150px] h-10"
              alt=""
              src="/frame-1261154678.svg"
            />
            <div className="absolute top-[0px] left-[164px] leading-[44px] font-medium">
              22k people interested
            </div>
          </div>
        </div>
        
        <div className="absolute top-[427px] left-[35px] text-sm font-bold">
          Collectibles
        </div>
        <div className="absolute top-[492px] left-[35px] w-full h-[385px] mx-auto">
          {/* Placeholder for another component */}
          <CardSlider />
          <div className="absolute top-[462px] left-[25px] w-[448px] h-[385px] overflow-x-auto">
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

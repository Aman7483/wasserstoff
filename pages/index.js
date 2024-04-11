import { useCallback, useState } from "react";
import Image from "next/image";
import Banner from "./components/Banner";


const RollIcon = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-[91px] overflow-hidden roll-icon">
    <img
      className="h-full w-full object-contain"
      alt=""
      src="/roll@2x.png"
    />
  </div>
  );
};

const CollectionLanding = () => {
  const [selectedOption, setSelectedOption] = useState("Events");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const onFrameClick = useCallback(() => {
    console.log("Frame clicked");
    // Perform any action here when the frame is clicked
  }, []);

  return (
    <div className="w-full relative bg-palette-noble-black-700 h-[1024px] overflow-hidden text-left text-109xl text-white font-astrix-beta-title-m">
      <Image
        src="/astrix-branding@2x.png"
        alt="Astrix Logo"
        width={100}
        height={100}
        className="absolute top-0 left-2"
      />

      <div className="absolute top-[23px] left-[89px] w-[163px] h-16 flex flex-col items-center justify-start text-21xl text-palette-pac-man-500">
        <div className="relative tracking-[-0.25px] leading-[64px] font-extrabold">
          Astrix.
        </div>
      </div>

      <b className="absolute top-[159px] left-[90px] leading-[118px] flex text-gray-200 items-center w-[361px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">ASTRIX</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{selectedOption.toUpperCase()}</p>
        </span>
      </b>

      <div className="absolute bottom-6 left-4 w-[240px] h-[54px] text-center text-xl text-palette-pac-man-50 font-astrix-beta-title-m">
        <div className="relative w-full h-full">
          <div className="absolute h-full w-[100.45%] top-0 right-0 bottom-0 left-0">
            <div className="absolute h-full w-[98.77%] top-0 right-0 bottom-0 left-[1.23%] rounded-81xl bg-gray-100" />
            <div className="absolute h-full w-[49.28%] top-0 right-[50.72%] bottom-0 left-0 rounded-81xl bg-darkslategray" />
            <b
              className="absolute h-[80%] w-[40%] top-[20%] left-[5%] leading-[24px] inline-block text-white cursor-pointer"
              onClick={() => handleOptionChange("EVENTS")}
            >
              Events
            </b>
            <b
              className="absolute h-[80%] w-[40%] top-[20%] left-[50%] leading-[24px] inline-block text-palette-noble-black-50 cursor-pointer"
              onClick={() => handleOptionChange("COLLECTIBLES")}
            >
              Collections
            </b>
          </div>
          <div
            className="absolute h-[100%] w-[50%] top-5 right-[5%] bottom-[0.57%] left-[65%] cursor-pointer"
            onClick={onFrameClick}
          />
        </div>
      </div>

    

      {/* Placeholder for the component on the right */}
      <div className="absolute top-0 right-0 w-[40%] h-full">
          {/* Ribbon Component */}
          <div className="absolute top-0 bottom-0 left-0 w-[91px] overflow-hidden ribbon-container">
            {/* Adjust height and content of your ribbon here */}
            <RollIcon />
          </div>
          
        {/* Content for the component on the right goes here */}
        <Banner />
      </div>
    </div>
  );
};

export default CollectionLanding;

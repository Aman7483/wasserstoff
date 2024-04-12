// SplashScreenSlide1Collect.js
import React from "react";

const SplashScreenSlide1Collect = ({ onClick }) => {
  const handleClick = () => {
    // Scroll the page up smoothly when the component is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={handleClick} className="w-full relative bg-antiquewhite h-[1080px] overflow-hidden text-left text-45xl text-black font-astrix-beta-title-m" onClick={onClick}>
      {/* Your splash screen content */}
      
      <div className="w-full relative bg-antiquewhite h-[1080px] overflow-hidden text-left text-45xl text-black font-astrix-beta-title-m">
      <div className="absolute top-[279px] left-[215px] w-[1089px] h-[521px]">
        <div className="absolute top-[5px] left-[5px] leading-[44px] font-medium">
          WE
        </div>
        <div className="absolute top-[5px] left-[407px] leading-[44px] font-medium">
          ORGANIZE THE
        </div>
        <div className="absolute top-[113px] left-[0px] leading-[44px] font-medium">
          CONNECTION
        </div>
        <div className="absolute top-[232px] left-[361px] leading-[44px] font-medium">
          BETWEEN
        </div>
        <div className="absolute top-[232px] left-[869px] leading-[44px] font-medium">
          MUSIC
        </div>
        <div className="absolute top-[343px] left-[0px] leading-[44px] font-medium">
          ARTIST
        </div>
        <div className="absolute top-[341px] left-[474px] leading-[44px] font-medium">
          CULTURE
        </div>
        <div className="absolute top-[452px] left-[242px] leading-[44px] font-medium">
          ART
        </div>
        <div className="absolute top-[457px] left-[554px] leading-[44px] font-medium">{`& COLLECTIONS`}</div>
        <div className="absolute top-[0px] left-[120px] w-[276px] h-[61px] overflow-hidden bg-[url('/frame-12611546511@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[-20px] left-[0px] w-[371px] h-[120px] object-cover"
            alt=""
            src="/image-1401@2x.png"
          />
          <img
            className="absolute top-[-144px] left-[-77px] w-[523px] h-[349px] object-cover"
            alt=""
            src="/image-143@2x.png"
          />
        </div>
        <img
          className="absolute top-[98px] left-[464px] w-[391px] h-[74px] overflow-hidden object-cover"
          alt=""
          src="/frame-12611546521@2x.png"
        />
        <img
          className="absolute top-[221px] left-[5px] w-[341px] h-[74px] overflow-hidden object-cover"
          alt=""
          src="/frame-12611546531@2x.png"
        />
        <div className="absolute top-[446px] left-[5px] w-[227px] h-[74px] overflow-hidden bg-[url('/frame-12611546631@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[-67px] left-[0px] w-[158px] h-[141px] object-cover"
            alt=""
            src="/image-138@2x.png"
          />
          <img
            className="absolute top-[-219px] left-[-131px] w-[414px] h-[654px] object-cover"
            alt=""
            src="/image-1391@2x.png"
          />
        </div>
        <img
          className="absolute top-[447px] left-[377px] w-[151px] h-[74px] overflow-hidden object-cover"
          alt=""
          src="/frame-1261154664@2x.png"
        />
        <img
          className="absolute top-[330px] left-[249px] w-[203px] h-[74px] overflow-hidden object-cover"
          alt=""
          src="/frame-12611546611@2x.png"
        />
        <img
          className="absolute top-[330px] left-[781px] w-[307px] h-[74px] overflow-hidden object-cover"
          alt=""
          src="/frame-12611546621@2x.png"
        />
        <img
          className="absolute top-[221px] left-[691px] w-[167px] h-[74px] overflow-hidden object-cover"
          alt=""
          src="/frame-1261154660@2x.png"
        />
      </div>
      <div className="absolute top-[88px] left-[50px] w-[406px] flex flex-row items-center justify-start gap-[20px] text-25xl font-space-grotesk">
        <img
          className="w-[57px] relative h-[50.9px] object-contain"
          alt=""
          src="/emlblem@2x.png"
        />
        <b className="relative">Astrix.</b>
      </div>
    </div>
    </div>
  );
};

export default SplashScreenSlide1Collect;

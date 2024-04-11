import React from "react";

const CardCollections = ({ card }) => {
  return (
    <div className="w-[130.1px] relative rounded-[8.96px] bg-mediumpurple h-[224.6px] overflow-hidden shrink-0">
      <div className="absolute top-[10.6px] left-[10.1px] rounded-[8.96px] bg-black w-[29.7px] h-[9.5px] overflow-hidden text-white">
        <b className="absolute top-[0.6px] left-[6.2px]">{card.year}</b>
      </div>
      <div className="absolute top-[10.6px] left-[121px] text-5xs-8">
        <span className="font-medium">By</span>
        <span className="font-semibold">{` `}</span>
        <b>{card.author}</b>
      </div>
      <div className="absolute top-[29.7px] left-[35.3px] text-xs-2 font-medium font-astrix-beta-title-m">
        {card.name}
      </div>
      <img
        className="absolute top-[50.4px] left-[10.1px] rounded-[8.96px] w-[143.9px] h-[164.1px] overflow-hidden object-cover"
        alt=""
        src={card.imageSrc}
      />
    </div>
  );
};

export default CardCollections;

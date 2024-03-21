import React, { useState } from "react";
import cardBackground from "./assets/bg-card-back.png";
import cardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";

const CreditCard = ({ name, number, save, year, month, cvc }) => {
  return (
    <div className="bg-[url('./assets/bg-main-mobile.png')] h-64 bg-no-repeat bg-cover max-[320px]:h-56 min-[820px]:bg-[url('./assets/bg-main-desktop.png')] min-[768px]:h-80 min-[1114px]:h-screen ">
      <div>
        <img
          src={cardBackground}
          alt="The back of a credit card"
          className="w-3/4 h-2/4 pt-9 translate-x-20 max-[320px]:translate-x-16 min-[414px]:translate-y-2 min-[768px]:w-[28rem] min-[768px]:translate-x-80 min-[1280px]:translate-x-48 min-[1280px]:translate-y-[18rem] min-[1280px]:w-[25rem]"
        />
        <p className="font-bold translate-x-80 -translate-y-24  text-slate-100  max-[320px]:translate-x-60  max-[320px]:-translate-y-20 max-[320px]:text-md min-[360px]:translate-x-[17.5rem] min-[360px]:-translate-y-[5.65rem] min-[412px]:translate-x-[20rem] min-[412px]:-translate-y-[6rem] min-[768px]:translate-x-[42rem] min-[768px]:-translate-y-[7.7rem] min-[1280px]:translate-y-[10.1rem] min-[1280px]:translate-x-[32rem]">
          {save ? cvc : "000"}
        </p>
      </div>
      <div className="min-[768px]:translate-x-56 min-[768px]:-translate-y-6">
        <img
          src={cardFront}
          alt="Front of a credit card"
          className="w-3/4 -translate-y-20 translate-x-5 max-[320px]:-translate-y-16 max-[320px]:translate-x-4 min-[768px]:w-[28rem] min-[1280px]:-translate-y-[12rem] min-[1280px]:-translate-x-[8rem] min-[1280px]:w-[25rem]"
        />
        <div className="-translate-y-56 flex flex-col gap-8 max-[320px]:-translate-y-48 max-[320px]:gap-5 max-[360px]:gap-7 max-[360px]:-translate-y-[13.5rem] max-[375px]:-translate-y-[13.6rem] max-[375px]:-translate-x-[.5rem] min-[768px]:-translate-y-[16rem] min-[768px]:gap-10 min-[1280px]:translate-y-[-24rem] min-[1280px]:translate-x-[-9rem] min-[1440px]:translate-y-[-24rem]">
          <img
            src={cardLogo}
            alt=""
            className="ml-10 w-14 max-[320px]:ml-7 min-[1280px]:w-20"
          />
          <div className="flex flex-col translate-x-9 gap-4 max-[320px]:gap-3 max-[320px]:translate-x-5 min-[360px]:translate-x-7 min-[360px]:gap-2 min-[360px]:translate-y-1 min-[768px]:gap-6 ">
            <p className=" ml-3 text-slate-100 font-bold text-xl tracking-wider max-[320px]:text-[1.1rem] min-[768px]:text-3xl min-[1440px]:text-2xl">
              {save ? number : "0000 0000 0000 0000"}
            </p>
            <p className="flex flex-row uppercase tracking-wider gap-28 text-slate-200 ml-2 text-[0.8rem] font-semibold max-[320px]:gap-20 max-[320px]:text-[.7rem] max-[320px]:ml-4 max-[360px]:gap-24 min-[768px]:gap-[15rem] min-[1280px]:gap-52 min-[1440px]:gap-48">
              <span className=" w-[6.5rem] min-[768px]:text-sm tracking-widest">
                {save ? name : "Felicia Leire"}
              </span>
              <span>
                {save ? month : "00"}/{save ? year : "00"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

import React from "react";
import cardBackground from "./assets/bg-card-back.png";
import cardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";

const CreditCard = () => {
  return (
    <div className="bg-[url('src/assets/bg-main-mobile.png')] h-64 bg-no-repeat bg-cover">
      <div>
        <img
          src={cardBackground}
          alt="The back of a credit card"
          className="w-3/4 pt-9 translate-x-20 h-auto"
        />
        <p className=" absolute top-[6.7rem] right-16 mb-3 font-bold text-slate-100">
          000
        </p>
      </div>
      <div>
        <img
          src={cardFront}
          alt="Front of a credit card"
          className="w-3/4 -translate-y-16 translate-x-5"
        />
        <div className="-translate-y-52 flex flex-col gap-8">
          <img src={cardLogo} alt="" className="ml-11 w-16" />
          <div className="flex flex-col translate-x-9 gap-2">
            <p className="flex flex-row gap-2 ml-3 text-slate-100 font-semibold">
              {" "}
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>{" "}
            </p>
            <p className="flex flex-row gap-24 text-slate-200 ml-2 text-[0.7rem] font-semibold">
              <span>Joshua Chris</span> <span>00/00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

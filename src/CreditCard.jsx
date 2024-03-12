import React, { useState } from "react";
import cardBackground from "./assets/bg-card-back.png";
import cardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";

const CreditCard = ({ name, number, save, year, month, cvc }) => {
  return (
    <div className="bg-[url('src/assets/bg-main-mobile.png')] h-64 bg-no-repeat bg-cover">
      <div>
        <img
          src={cardBackground}
          alt="The back of a credit card"
          className="w-3/4 h-2/4 pt-9 translate-x-20"
        />
        <p className="  font-bold translate-x-80 -translate-y-24  text-slate-100">
          {save ? cvc : "XXX"}
        </p>
      </div>
      <div>
        <img
          src={cardFront}
          alt="Front of a credit card"
          className="w-3/4 -translate-y-20 translate-x-5"
        />
        <div className="-translate-y-56 flex flex-col gap-8">
          <img src={cardLogo} alt="" className="ml-10 w-14" />
          <div className="flex flex-col translate-x-9 gap-4">
            <p className="flex flex-row gap-2 ml-3 text-slate-100 font-bold text-xl tracking-wider">
              {save ? number : "XXXX XXXX XXXX XXXX"}{" "}
            </p>

            <p className="flex flex-row uppercase tracking-wider gap-28 text-slate-200 ml-2 text-[0.8rem] font-semibold">
              <span>{save ? name : "Joshua Chris"}</span>{" "}
              <span>
                {save ? month : "XX"}/{save ? year : "XX"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

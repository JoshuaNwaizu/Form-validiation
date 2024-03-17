import React, { useState } from "react";
import cardBackground from "./assets/bg-card-back.png";
import cardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";

const CreditCard = ({ name, number, save, year, month, cvc }) => {
  return (
    <div className="bg-[url('./assets/bg-main-mobile.png')] h-64 bg-no-repeat bg-cover max-[320px]:h-56">
      <div>
        <img
          src={cardBackground}
          alt="The back of a credit card"
          className="w-3/4 h-2/4 pt-9 translate-x-20 max-[320px]:translate-x-16"
        />
        <p className="font-bold translate-x-80 -translate-y-24  text-slate-100  max-[320px]:translate-x-60  max-[320px]:-translate-y-20 max-[320px]:text-md min-[360px]:translate-x-[17.5rem] min-[360px]:-translate-y-[5.4rem] max-[414px]:-translate-y-24">
          {save ? cvc : "XXX"}
        </p>
      </div>
      <div>
        <img
          src={cardFront}
          alt="Front of a credit card"
          className="w-3/4 -translate-y-20 translate-x-5 max-[320px]:-translate-y-16 max-[320px]:translate-x-4"
        />
        <div className="-translate-y-56 flex flex-col gap-8 max-[320px]:-translate-y-48 max-[320px]:gap-5 max-[360px]:gap-7 max-[360px]:-translate-y-[13.5rem] max-[375px]:-translate-y-[13.6rem] max-[375px]:-translate-x-[.5rem]">
          <img src={cardLogo} alt="" className="ml-10 w-14 max-[320px]:ml-7" />
          <div className="flex flex-col translate-x-9 gap-4 max-[320px]:gap-3 max-[320px]:translate-x-5 max-[360px]:translate-x-6">
            <p className=" ml-3 text-slate-100 font-bold text-xl tracking-wider max-[320px]:text-[1.1rem]">
              {save ? number : "XXXX XXXX XXXX XXXX"}{" "}
            </p>

            <p className="flex flex-row uppercase tracking-wider gap-28 text-slate-200 ml-2 text-[0.8rem] font-semibold max-[320px]:gap-20 max-[320px]:text-[.7rem] max-[320px]:ml-4 max-[360px]:gap-24">
              <span>{save ? name : "Felicia Leire"}</span>{" "}
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

import React from "react";
import iconComplete from "./assets/icon-complete.svg";
import Button from "./Validiation Form/Button";

const Compliment = ({ onClick }) => {
  return (
    <div className="flex flex-col gap-7 mt-32">
      <div className="flex flex-col items-center gap-8">
        <img src={iconComplete} alt="check" />
        <div className="flex flex-col items-center gap-3">
          <h1 className="uppercase text-3xl tracking-widest">Thank You!</h1>
          <p className="text-stone-500">We've added your card details</p>
        </div>
      </div>
      <div className="mx-7">
        <Button name="Continue" onClick={onClick} />
      </div>
    </div>
  );
};

export default Compliment;

import React from "react";
import iconComplete from "./assets/icon-complete.svg";
import Button from "./Validiation Form/Button";

const Compliment = ({ onClick }) => {
  return (
    <div className="flex flex-col gap-7 mt-32 max-[360px]:mt-20 min-[768px]:mt-44 min-[1280px]:mx-auto">
      <div className="flex flex-col items-center gap-8 ">
        <img src={iconComplete} alt="check" />
        <div className="flex flex-col items-center gap-3">
          <h1 className="uppercase text-3xl tracking-widest">Thank You!</h1>
          <p className="text-stone-500">We've added your card details.</p>
        </div>
      </div>
      <div>
        <div className="mx-7 min-[768px]:mx-28 min-[1280px]:mx-0 min-[1280px]:w-[20rem]">
          <Button name="Continue" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Compliment;

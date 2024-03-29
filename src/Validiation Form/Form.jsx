import React, { useRef, useState } from "react";
import Inputs from "./Inputs";
import DateInputs from "./DateInputs";
import Button from "./Button";

const classes =
  " p-1 border-2 text-stone-600 border-stone-500 py-3 px-4 rounded-xl focus:outline-none focus:border-stone-600";

const Form = ({
  onChange,
  value,
  onChangeNumber,
  onChangeNumVal,
  onClick,
  year,
  handleYear,
  month,
  handleMonth,
  handleCvc,
  validiationMessage,
}) => {
  return (
    <div className="flex items-center justify-center min-[1280px]:-mt-36 min-[1280px]:w-[45%]  min-[1280px]:mx-auto">
      <div className="mt-24 ml-7 flex flex-col gap-6 mr-7 max-[320px]:mt-20 min-[768px]:flex min-[820px]:justify-center min-[820px]:-mt-30 min-[768px]:mt-48 min-[768px]:w-2/3 min-[768px]:justify-center">
        <Inputs
          label="Cardholder's name"
          placeholder="e.g. Felicia Leire"
          className={classes}
          value={value}
          onChange={onChange}
          validiationMessage={validiationMessage}
          name={value}
        />

        <Inputs
          label="Card number"
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength="19"
          className={classes}
          value={onChangeNumVal}
          validiationMessage={validiationMessage}
          onChange={onChangeNumber}
        />

        <div className="">
          <DateInputs
            className={classes}
            label="exp. date(MM/YY)"
            year={year}
            month={month}
            handleYear={handleYear}
            handleMonth={handleMonth}
            handleCvc={handleCvc}
          />
          <Button onClick={onClick} name="Confirm" />
        </div>
      </div>
    </div>
  );
};

export default Form;

import React, { useRef, useState } from "react";
import Inputs from "./Inputs";
const classes =
  "w-full p-1 border-2 text-stone-600 border-stone-500 py-3 px-4 rounded-xl focus:outline-none focus:border-stone-600";

const DateInputs = ({
  label,
  value,
  month,
  year,
  handleYear,
  handleMonth,
  handleCvc,
}) => {
  return (
    <div className="flex flex-row max-[320px]:flex-col max-[320px]:gap-2">
      <div className="flex flex-col gap-2 w-full">
        <label className="uppercase tracking-widest text-sm">{label}</label>
        <div className="flex flex-row gap-3 w-3/4">
          <input
            type="text"
            placeholder="MM"
            autoComplete="off"
            maxLength="2"
            value={month}
            required
            className={classes}
            onChange={handleMonth}
          />

          <input
            type="text"
            placeholder="YY"
            autoComplete="off"
            maxLength="2"
            required
            value={year}
            className={classes}
            onChange={handleYear}
          />
        </div>
      </div>
      <Inputs
        label="cvv"
        placeholder="e.g. 123"
        className="w-full p-1 border-2 text-stone-600 border-stone-500 py-3 px-5 rounded-xl focus:outline-none focus:border-stone-600"
        maxLength="3"
        onChange={handleCvc}
      />
    </div>
  );
};

export default DateInputs;

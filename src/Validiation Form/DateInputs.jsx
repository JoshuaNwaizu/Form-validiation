import React, { useRef, useState } from "react";
import Inputs from "./Inputs";
const classes =
  "w-full p-1 border-2 text-stone-600 border-stone-500 py-3 px-4 rounded-xl focus:outline-none focus:border-stone-600";

const DateInputs = ({ label }) => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col gap-2 w-full">
        <label className="uppercase tracking-widest text-sm">{label}</label>
        <div className="flex flex-row gap-3 w-3/4">
          <input
            type="text"
            placeholder="MM"
            autoComplete="off"
            maxLength="2"
            required
            className={classes}
          />
          <input
            type="text"
            placeholder="YY"
            autoComplete="off"
            maxLength="2"
            required
            className={classes}
          />
        </div>
      </div>
      <Inputs
        label="cvv"
        placeholder="e.g. 123"
        className="w-full p-1 border-2 text-stone-600 border-stone-500 py-3 px-5 rounded-xl focus:outline-none focus:border-stone-600"
        maxLength="3"
      />
    </div>
  );
};

export default DateInputs;

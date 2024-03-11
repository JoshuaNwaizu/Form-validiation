import React, { useRef, useState } from "react";
import Inputs from "./Inputs";
import DateInputs from "./DateInputs";
import Button from "./Button";

const classes =
  " p-1 border-2 text-stone-600 border-stone-500 py-3 px-4 rounded-xl focus:outline-none focus:border-stone-600";

const Form = () => {
  const [nameCard, setNameCard] = useState("");

  const cardName = useRef();
  const cardNumber = useRef();

  const handleSave = () => {
    const theCardName = cardName.current.value;
    const theCardNumber = cardNumber.current.value;
    if (theCardName.trim() === "" || theCardNumber.trim() === "") {
      <p>No name</p>;
    }
  };
  return (
    <div className="mt-24 ml-7 flex flex-col gap-6 mr-7">
      <Inputs
        label="Cardholder name"
        placeholder="e.g. Joshua Chris"
        className={classes}
        ref={cardName}
      />
      <Inputs
        label="Card number"
        placeholder="e.g. 1234 5678 9123 0000"
        className={classes}
        ref={cardNumber}
      />
      <div className="">
        <DateInputs className={classes} label="exp. date(MM/YY)" />
        <Button onClick={handleSave} />
      </div>

      <div></div>
    </div>
  );
};

export default Form;

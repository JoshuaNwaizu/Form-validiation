import { useRef, useState } from "react";
import CreditCard from "./CreditCard";
import Form from "./Validiation Form/Form";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [save, setSave] = useState(false);
  const [cvc, setCvc] = useState("");
  const [validiationMessage, setValidiationMessage] = useState("");

  const handleSave = () => {
    if (
      name.trim() === "" ||
      number.trim() === "" ||
      month.trim() === "" ||
      year.trim() === "" ||
      cvc.trim() === ""
    ) {
      setSave(false);
      setValidiationMessage("Invalid input,please Enter a valid input");
      return;
    } else {
      setSave(true);
    }
  };

  const handleChangeName = (e) => {
    setSave(false);
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setSave(false);
    let value = e.target.value;
    value = value.trim();
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1 ");

    setNumber(value);
  };
  const handleChangeMnt = (e) => {
    setMonth(e.target.value);
  };
  const handleChangeyear = (e) => {
    setSave(false);
    setYear(e.target.value);
  };
  const handleChangeCvc = (e) => {
    setSave(false);
    setCvc(e.target.value);
  };

  return (
    <>
      <main className="h-screen overflow-x-hidden">
        <CreditCard
          name={name}
          number={number}
          year={year}
          month={month}
          save={save}
          cvc={cvc}
        />
        <Form
          onChange={handleChangeName}
          value={name}
          onChangeNumber={handleChangeNumber}
          onChangeNumVal={number}
          onClick={handleSave}
          year={year}
          handleYear={handleChangeyear}
          handleMonth={handleChangeMnt}
          month={month}
          cvc={cvc}
          handleCvc={handleChangeCvc}
          save={save}
          validiationMessage={validiationMessage}
        />
      </main>
    </>
  );
}

export default App;

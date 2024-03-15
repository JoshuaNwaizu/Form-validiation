import { useState } from "react";
import CreditCard from "./CreditCard";
import Form from "./Validiation Form/Form";
import "./index.css";
import Compliment from "./Compliment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [save, setSave] = useState(false);
  const [cvc, setCvc] = useState("");
  const [validiationMessage, setValidiationMessage] = useState("");

  const handleSave = () => {
    const regex = /\d/;
    if (name.trim() === "") {
      setValidiationMessage("Please fill all Inputs!");
      setSave(false);
      toast.error("Input field is empty!", { position: "top-right" });
      return;
    } else if (regex.test(name)) {
      setValidiationMessage("CARDHOLDER NAME - Wrong format, letters only!");
      setSave(false);
      toast.error("CARD NAME - Wrong format, letters only!", {
        position: "top-right",
      });
      return;
    }
    if (number.trim() === "") {
      setSave(false);
      toast.error("Card Number is empty", { position: "top-right" });
      return;
    } else if (number.trim().length < 17) {
      setSave(false);
      toast.error("Card Number is not complete", { position: "top-right" });
      return;
    }
    if (month.trim() === "" || year.trim() === "" || cvc.trim() === "") {
      setSave(false);
      toast.error("Please fill all input", { position: "top-right" });
      return;
    } else {
      setSave(true);
      const projectToast = `Your credentials added`;
      toast.success(projectToast, { position: "top-right" });
    }
  };

  const handleReset = () => {
    setSave(false);
    setName("");
    setMonth("");
    setCvc("");
    setYear("");
    setMonth("");
    setNumber("");
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
          validiationMessage={validiationMessage}
        />

        {save ? (
          <Compliment onClick={handleReset} />
        ) : (
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
            validiationMessage={validiationMessage}
          />
        )}
      </main>

      <ToastContainer />
    </>
  );
}

export default App;

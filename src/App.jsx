import { useState } from "react";
import CreditCard from "./CreditCard";
import Form from "./Validiation Form/Form";
import "./index.css";
function App() {
  const [isInput, setIsInput] = useState("");

  return (
    <>
      <main className="h-screen overflow-x-hidden">
        <CreditCard />
        <Form />
      </main>
    </>
  );
}

export default App;

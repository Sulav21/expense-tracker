import "./App.css";
import { useState } from "react";
import { Balance } from "./components/balance/Balance";
import { Header } from "./components/header/Header";
import { History } from "./components/history/History";
import { IncomeExpense } from "./components/incomeExpense/IncomeExpense";
import { NewTran } from "./components/newTransaction/NewTran";

function App() {

  const [allValue, setAllValue] = useState([
    { id: 1, text: "Cricket", amount: -100 },
    { id: 2, text: "Job", amount: 300 },
    { id: 3, text: "Selling Books", amount: 130 },
    { id: 4, text: "Shopping", amount: -230 },
  ])

  const handleOnDelete=(index)=>{
    setAllValue(allValue.filter((value)=>value.id !== index))
  }
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleOnText = (e) => {
    const text1 = e.target.value;
    setText(text1);
  };
  const handleOnAmount = (e) => {
    const amount1 = e.target.value;
    setAmount(amount1);
  };

  const handleOnSubmit=(e)=>{
    e.preventDefault()
    const newTransaction = 
      {
        id : Math.floor(Math.random()*100000),
        text,
        amount: +amount

      }
    
      setAllValue((values)=>{
       return [...values, newTransaction]
      })
     setText("")
     setAmount(0)
    }

  return (
    <>
      <Header />
      <div className="container">
        <Balance transactions={allValue} />
        <History transactions={allValue} />
        <IncomeExpense transactions={allValue} handleOnDelete={handleOnDelete} />
        <NewTran handleOnText={handleOnText} handleOnAmount={handleOnAmount} text={text}
        amount={amount} handleOnSubmit={handleOnSubmit} />
      </div>
    </>
  );
}

export default App;

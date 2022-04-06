import React from "react";

export const Balance = ({transactions}) => {
  const amount = transactions.map(tran=>tran.amount)
  const balance = amount.reduce((acc,cur)=>{
    return acc+cur
  },0)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
};

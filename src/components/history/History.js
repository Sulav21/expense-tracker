import React from 'react'

export const History = ({transactions}) => {
  const amount = transactions.map(tran=>tran.amount)
  const income = amount.filter(item=>item>0)
  .reduce((acc,cur)=> (acc+=cur),0)
  console.log(income)
  const expense = amount.filter(item=>item<0).reduce((acc,cur)=> (acc+=cur),0)
  console.log(expense)
  return (
    
        <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
        
  )
}

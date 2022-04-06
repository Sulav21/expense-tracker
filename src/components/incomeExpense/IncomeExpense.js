import React from 'react'

export const IncomeExpense = ({transactions,handleOnDelete}) => {
  return (
   <>
     <h3>History</h3>
      <ul  className="list">
        {transactions.map((tran) =>(
          <li key={tran.id} className={tran.amount<0?'minus':'plus'}>
          {tran.text} <span>{tran.amount<0?'-':'+'}${Math.abs(tran.amount)}</span><button className="delete-btn" onClick={()=>handleOnDelete(tran.id)} >x</button>
        </li>)
        )}
       
      </ul>
   </>
  )
}

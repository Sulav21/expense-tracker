import React from 'react'

export const NewTran = ({handleOnText, handleOnAmount,text,amount,handleOnSubmit}) => {
  return (
    <>
    <h3>Add new transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={handleOnText} id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label HtmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={handleOnAmount} id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn" onClick={handleOnSubmit}>Add transaction</button>
      </form>
    
    </>
  )
}

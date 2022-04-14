import React, { useState } from 'react'

const Credit = () => {


  const [state,setState] = useState({
    number : '',
  });
  const { number } = state;
  const handleInputChange = e => {
 
    setState({ ...state, [e.target.number]: e.target.value });
  }

const handleSubmit = (e) =>{
  e.preventDefault()
}
  return (
    <div> 


    <form onSubmit={handleSubmit}>
        <label>
            Credit Card Number* :
        </label>
        <input type="text" id='credit' name='Credit' value={number} onChange={handleInputChange} />
        {/* <input type="text" id='credit' name='Credit' value='' />
        <input type="text" id='credit' name='Credit' value='' />
        <input type="text" id='credit' name='Credit' value='' /> */}
    </form>
</div>
  )
}

export default Credit
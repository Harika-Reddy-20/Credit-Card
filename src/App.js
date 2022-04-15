import React, { useState } from 'react'
import InputFild from './Components/InputFild';

const App = () => {
    let [data,setData]=useState('');
    let [list,setList]=useState('');
    const [display,setDisplay]=useState(true);

    
    const handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
          // eslint-disable-next-line no-unused-vars
       
    
        let fieldIntIndex = parseInt(fieldIndex, 16);
    
        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {
    
        // It should not be last input field
        if (fieldIntIndex < 7) {
            setList(e.target.value);
            setData(data+list);
            // Get the next input field using it's name
            const nextfield = document.querySelector(
            `input[name=field-${fieldIntIndex + 1}]`
            );
    
            // If found, focus the next field
            if (nextfield !== null) {
            nextfield.focus();
            }
        }
        }
    };
    
    const printdata=()=>{
        setDisplay(false)
        console.log(data);
       
    }
    
    const deleteData=()=>{
        // setData('');
        setDisplay(true);
    }


    
  return (
    <>
        <div>
            <h2>Card Number *: </h2>
            <input name="field-1" length="4" 
                    handleChange={handleChange} />
            <InputFild name="field-2" length="4"
                    handleChange={handleChange} />
            <InputFild name="field-3" length="4"
                    handleChange={handleChange} />
            <InputFild name="field-4" length="4"
                    handleChange={handleChange} />
            <br /><br />
            <button type="submit" onClick={printdata}  >submit</button>
            <button onClick={deleteData} >Delete</button>
            {
                display ? null
                :
                <div>
                
                <h3>{data}</h3>
                <br />
                </div>
            }
        </div>
    </>
  )
}


export default App
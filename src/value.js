import React from 'react';


function change(){
}
function MyForm() {
  return (
        <form>
        <h1>Hello </h1>
        <p>Enter the number</p>
        <input
          type='NUMBER'
          onChange = {change}
        />
        </form>
      );
    }
  
  export default MyForm;

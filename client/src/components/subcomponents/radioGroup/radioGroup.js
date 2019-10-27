import React from 'react';
import './radioGroup.css'

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const radioGroup = props => {
  let {radio} = props;
  console.log(radio)
  let rgroup = radio.map((prop, i) => {
    let { id, name, value } = prop;
    return(
      <div className="radio-group__input" key={id + i}>
        <input 
          type="radio"
          className="radio-group__button" 
          id={ id + i } 
          name={ name }
          value={ value }
        />
        <label htmlFor={ id + i }> {value.capitalize()} </label>
      </div>
      )
    })
  
  return(
  <div className="radio-group__container">
    {rgroup}
  </div>
  )
}


export default radioGroup;
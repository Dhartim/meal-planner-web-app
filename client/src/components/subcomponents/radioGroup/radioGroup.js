import React from 'react';
import './radioGroup.css'


String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function getLabel(prop, i) {
  let { id, value, label } = prop;
  if (label) {
    return label && <label htmlFor={id + i}> {label} </label>;
  } else {
    return <label htmlFor={id + i}> {value.capitalize()} </label>
  }
}


const radioGroup = props => {
  let { radio, state } = props;
  // console.log('props====', props)
  let rgroup = radio.map((prop, i) => {
    let { id, name, value, checked, onClick } = prop;
    return (
      <div className="radio-group__input" key={id + i}>
        <input
          type="radio"
          className="radio-group__button"
          id={id + i}
          name={name}
          value={value}
          onClick={onClick}
          defaultChecked={checked}
        />
        {getLabel(prop, i)}
      </div>
    )
  })

  return (
    <div className="radio-group__container">
      {rgroup}
    </div>
  )
}


export default radioGroup;
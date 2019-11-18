import React from "react";
import './detailsComponent.scss'


const detailsComponent = props => {
  const { preference } = props;
  console.log(preference)
  
  let preferences = Object.keys(preference).map((key, index)=>{
    console.log("key", key)
    if (key!=='updatedAt' && key!=='createdAt' && key!=='userId'){
      return (
        <div 
        className='details__text-container' 
        key={index}
      >
        <div className='details__key'>
          {key}
        </div>
        <div className='details__value'>
          {preference[key]}
        </div>
      </div>
      );  
    }
  })
  
  return(
    <div className="details__container">
      <div className="details__preferences">
        { preferences }
      </div>
      <a href='/preferences' className='details__button' >Update Preferences</a>
    </div>
  )
}

export default detailsComponent

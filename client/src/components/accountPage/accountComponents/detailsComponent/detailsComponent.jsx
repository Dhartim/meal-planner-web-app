import React from "react";
import { withRouter } from 'react-router-dom';
import './detailsComponent.scss'

function decamelize(str, separator){
  console.log(str)
	separator = typeof separator === 'undefined' ? '_' : separator;
	let str2 = str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

  return str2.charAt(0).toUpperCase() + str2.slice(1);
}

function addPrefixSuffix(key, num) {
  //toDo
} 

const detailsComponent = props => {
  const { preference } = props;
  
  let preferences = Object.keys(preference).map((key, index)=>{
    if (key!=='updatedAt' && key!=='createdAt' && key!=='userId'){
      return (
        <div 
        className='details__text-container' 
        key={index}
      >
        <div className='details__key'>
          {decamelize(key, " ")}
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
      <button 
        className='details__button'
        onClick={()=> props.history.push("/preferences")}
      >
        Update Preferences
      </button>
    </div>
  )
}

export default withRouter(detailsComponent)

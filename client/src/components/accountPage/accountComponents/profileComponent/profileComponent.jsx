import React from "react";
import './profileComponent.scss'


const ProfileComponent = props => {
  const { state, message } = props;
  
  return(
    <div className="profile__container">
      <div className="profile__image-container"/>
      {/* <img className={'centered-image'} src={require('./headshot.jpg')}/> */}
      <h3 className="profile__intro">
        <p>
          Welcome back {state.firstName} {state.lastName}!
        </p>
        <br/>
        <p>
          Your current email is {state.email}
        </p>
        { message }
      </h3>
      
    </div>
  )
}

export default ProfileComponent

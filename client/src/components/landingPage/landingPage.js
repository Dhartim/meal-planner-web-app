import React from 'react';

import './landingPage.css';

const landingPage = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="landing-page__container">
          <div className="landing-page__meal-box">
            <h1>Meal Planner</h1>
          </div>
          <div className="landing-page__user-auth">
            <button className="auth-btn">Sign Up</button>
            <button className="auth-btn">Login</button>
          </div>
        </div>
      </div>
      <div className="landing-page__text">
        <h1>Let Eat Healthy</h1>
      </div>
    </div>
  );
}

export default landingPage;
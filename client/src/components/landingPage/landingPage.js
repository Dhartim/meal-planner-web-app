import React from 'react';
import Email from '../subcomponents/email';

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
            <a
              className="auth-btn" 
              href="/register"
            >
              Sign Up
            </a>
            <a 
              className="auth-btn" 
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
      <div className="landing-page__contact-us">
        <Email/>
      </div>
    </div>
  );
}

export default landingPage;
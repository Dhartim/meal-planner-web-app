import React, {useContext} from 'react';
import Email from '../subcomponents/email';

import './landingPage.css';
import UserContext from "../../context/usercontext";
import {Redirect} from "react-router-dom";
import Spinner from "../subcomponents/spinner";

export function LandingPage() {

  const userContext = useContext(UserContext);
  const authorized = userContext.authorized;
  const loading = userContext.loading;

  var toRender;

  if (authorized && !loading) {
    toRender = <Redirect to="/dashboard"/>;
  } else if(loading) {
    toRender = <Spinner />;
  } else {
    toRender =
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
  }

  return (toRender);
}

export default LandingPage;
import React, { useContext } from 'react';
import Email from '../subcomponents/email';

import './landingPage.css';

import UserContext from "../../context/usercontext";
import { Redirect } from "react-router-dom";
import Spinner from "../subcomponents/spinner";
import { Button, Image } from "react-bootstrap";

export function LandingPage() {

  const userContext = useContext(UserContext);
  const authorized = userContext.authorized;
  const loading = userContext.loading;

  var toRender;

  if (authorized && !loading) {
    toRender = <Redirect to="/dashboard" />;
  } else if (loading) {
    toRender = <Spinner />;
  } else {
    toRender =
      <div className={'landing-page-container'}>
        <div className="landing-page">
          <div className="landing-page__container">
            <div className="landing-page__meal-box">
              {/*<h1>Meal Planner</h1>*/}
              <Image className={"full-logo"} src={require("../../assets/images/new-logo.png")} />
              <div className="landing-page__user-auth">
                <Button
                  className="btn-primary"
                  href="/register"
                >
                  SIGN UP
                            </Button>
              </div>
              <div className="landing-page__user-auth">
                <Button
                  className="btn-primary"
                  href="/login"
                >
                  LOGIN
                            </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={"about db"}>
          <div className={"about-header"}>
            <h1>What is Meal Planner?</h1>
          </div>
          <hr className={"about-divider"} />
          <div className={"about-text"}>
            <p>Meal Planner is an app to get you in the habit of eating healthy. It does this by tracking and
                managing your meals according to your diet requirements. Every week Meal Planner will deliver
                your personalized weekly meal plan to you. Meal Planner is the easier way to start eating
                        healthy.</p>
          </div>
        </div>
        <div className={"about wb"}>
          <div className={"about-header"}>
            <h1>Why Meal Planner?</h1>
          </div>
          <hr className={"about-divider"} />
          <div className={"about-text"}>
            <p>The diet industry is a multi-billion dollar industry and Americans are dieting at the highest
                rate in history. We want to make it easier for you to live your life. No more weekend planning
                        session, just log in and go.</p>
          </div>
        </div>
        <div className={"about db"}>
          <div className={"about-header"}>
            <h1>Features</h1>
          </div>
          <hr className={"about-divider"} />
          <div className={"about-text-container"}>
            <div className={"about-text"}>
              <p className={"about-features"}>Get your weekly meal plan delivered to you.
                        </p>
              <p className={"about-features"}>View your personalized dashboard.
                        </p>
              <p className={"about-features"}>Keep track of your favorite meals.
                        </p>
            </div>
            <div className={"about-text"}>
              <img alt={"calendar"} className={"about-image"} src={require("../../assets/images/ calendar.png")} />
              <img alt={"dashboard"} className={"about-image"} src={require("../../assets/images/dashboard.png")} />
              <img alt={"bowl"} className={"about-image"} src={require("../../assets/images/bowl.png")} />
            </div>
          </div>
        </div>
        <div className="landing-page__contact-us">
          <div className={'email-container'}>
            <Email />
          </div>
        </div>
      </div>
  }

  return (toRender);
}

export default LandingPage;
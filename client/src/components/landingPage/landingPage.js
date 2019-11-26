import React from 'react';
import Email from '../subcomponents/email';

import './landingPage.css';
import {Button, Image} from "react-bootstrap";

const landingPage = () => {
    return (
        <div className={'landing-page-container'}>
            <div className="landing-page">
                <div className="landing-page__container">
                    <div className="landing-page__meal-box">
                        {/*<h1>Meal Planner</h1>*/}
                        <Image className={"full-logo"} src={require("../../assets/images/new-logo.png")}/>
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
            <div className="landing-page__contact-us">
                <div className={'email-container'}>
                    <Email/>
                </div>
            </div>
        </div>
    );
}

export default landingPage;
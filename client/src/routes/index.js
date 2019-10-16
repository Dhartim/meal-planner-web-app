import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Routes
import Signup from '../components/signup';
import Home from '../components/home';
import MealCard from '../components/mealCard'
import BadRequest from '../components/badrequest';
import Navbar from "../components/navbar/navbar";
import NavbarAuthCheck from "../components/auth";
import Login from "../components/login";
import Stripe from "../components/stripe";


// <Route exact path={'/profiles'} components={Profiles} /* Profile list route *//>
// ErrorBoundaries catch any non-event handler queries. Use try/catch for event-handlers (ex. button or onclick events)
// Can use regex to check query params. Allows app to throw a 400 Bad Request as the url would be invalid
//     <Route path="*" component={BadRequest} />
class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route component={NavbarAuthCheck(Navbar)} />
        <div>
          <Switch>
            <Redirect from={'/home'} to={'/'}/>
            <Route exact path={'/'} component={Home} />
            <Route path={'/register'} component={Signup} /* Signup route *//>
            <Route exact path={'/home'} components={Home} /* Home route *//>
            <Route exact path={'/register'} component={Signup} /* Signup route *//>
            <Route exact path={'/mealCard'} component={MealCard} /*showing meal card *//>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/stripe'} component={Stripe}/>
            <Route path="*" component={BadRequest} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default AppRouter;
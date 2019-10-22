import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Routes
import BadRequest from '../components/badrequest';
import Favorites from "../components/favorites";
import Home from '../components/home';
import Login from "../components/login";
import MealCard from '../components/mealCard'
import Navbar from "../components/navbar/navbar";
import NavbarAuthCheck from "../components/auth";
import Stripe from "../components/stripe";
import Signup from '../components/signup';


// <Route exact path={'/profiles'} components={Profiles} /* Profile list route *//>
// ErrorBoundaries catch any non-event handler queries. Use try/catch for event-handlers (ex. button or onclick events)
// Can use regex to check query params. Allows app to throw a 400 Bad Request as the url would be invalid
class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route component={NavbarAuthCheck(Navbar)} />
        <div>
          <Switch>
            <Redirect from={'/home'} to={'/'}/>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/favorites'} component={Favorites} /* Home route *//>
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
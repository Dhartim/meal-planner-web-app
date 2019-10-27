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
import Questionnaire from "../components/questionnaire";
import Stripe from "../components/stripe";
<<<<<<< HEAD
import AccountPage from "../components/accountPage";
=======
import Signup from '../components/signup';
>>>>>>> 3e6def30011756a5a49be27f01a046319393ade7


// <Route exact path={'/profiles'} components={Profiles} /* Profile list route *//>
// ErrorBoundaries catch any non-event handler queries. Use try/catch for event-handlers (ex. button or onclick events)
// Can use regex to check query params. Allows app to throw a 400 Bad Request as the url would be invalid
class AppRouter extends Component {
  constructor(props) {
    super(props);

    // TODO - figure out how to set these routes as children so that they render correctly under the navbar
    this.state = {
      AuthorizedNavbar: NavbarAuthCheck(Navbar),
    }
  }


  render() {
    const { AuthorizedNavbar } = this.state;
    return (
      <div>
        <AuthorizedNavbar>
          <div>
            <Switch>
              <Redirect from={'/home'} to={'/'}/>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/favorites'} component={Favorites} /* Home route *//>
              <Route exact path={'/register'} component={Signup} /* Signup route *//>
              <Route exact path={'/mealCard'} component={MealCard} /*showing meal card *//>
              <Route exact path={'/login'} component={Login}/>
              <Route exact path={'/stripe'} component={Stripe}/>
              <Route exact path={'/preferences'} component={Questionnaire}/>
              <Route exact path={'/account'} component={AccountPage} />
              <Route path="*" component={BadRequest} />
            </Switch>
          </div>
        </AuthorizedNavbar>
      </div>
    )
  }
}
export default AppRouter;
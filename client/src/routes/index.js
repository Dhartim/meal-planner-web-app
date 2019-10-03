import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Routes
import Signup from '../components/signup';
import Home from '../components/home';
import BadRequest from '../components/badrequest';
import Navbar from "../components/navbar/navbar";


// <Route exact path={'/profiles'} components={Profiles} /* Profile list route *//>
// ErrorBoundaries catch any non-event handler queries. Use try/catch for event-handlers (ex. button or onclick events)
// Can use regex to check query params. Allows app to throw a 400 Bad Request as the url would be invalid
//     <Route path="*" component={BadRequest} />
class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route component={Navbar} />
        <Switch>
          <Redirect from='/home' to='/' />
          <Route exact path={'/'} components={Home} /* Home route *//>
          <Route exact path={'/register'} component={Signup} /* Signup route *//>
          <Route path="*" component={BadRequest} />
        </Switch>
      </div>
    )
  }
}
export default AppRouter;
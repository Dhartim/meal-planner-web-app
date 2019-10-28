import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import BadRequest from '../components/badrequest';
import Favorites from "../components/favorites";
import Home from '../components/home';
import Login from "../components/login";
import MealCard from '../components/mealCard'
import Navbar from "../components/navbar/navbar";
import Questionnaire from "../components/questionnaire";
import Stripe from "../components/stripe";
import AccountPage from "../components/accountPage";
import Signup from '../components/signup';
import LandingPage from '../components/landingPage';

import {UserProvider} from "../context/usercontext";
import axios from "axios";

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.changeUser = (userId, authorized, loading) => {
      this.setState({
        userId: userId,
        authorized: authorized,
        loading: loading,
      })
    };

    this.state = {
      userId: 0,
      authorized: false,
      loading: true,
      changeUser: this.changeUser,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('jwtToken');
    console.log("token=%s", token);
    if(token !== null) {
      axios
        .get('/checkauth', {
          headers: {
            'x-access-token': token
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.changeUser(res.data.userId, res.data.authorized, false);
            console.log("Authorized.")
          } else {
            this.changeUser(0, false, false);
            console.log(res.error);
          }
        })
        .catch(err => {
          console.log("auth error: %s", err);
        });
    } else {
      this.changeUser(0, false, false);
    }
  }

  render() {
    return (
      <div>
        <UserProvider value={this.state}>
          <div>
            <Navbar {...this.props}>
              <Switch>
                <Route exact path={'/'} component={LandingPage}/>
                <Route exact path={'/dashboard'} component={Home} />
                <Route exact path={'/favorites'} component={Favorites} /* Home route *//>
                <Route exact path={'/register'} component={Signup} /* Signup route *//>
                <Route exact path={'/mealCard'} component={MealCard} /*showing meal card *//>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/stripe'} component={Stripe}/>
                <Route exact path={'/preferences'} component={Questionnaire}/>
                <Route exact path={'/account'} component={AccountPage} />
                <Route component={BadRequest}/>
              </Switch>
            </Navbar>
          </div>
        </UserProvider>
      </div>
    )
  }
}
export default AppRouter;
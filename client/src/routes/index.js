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
import Signup from '../components/signup';

import {UserProvider} from "../context/usercontext";
import axios from "axios";
// import {UserConsumer} from "../context/usercontext";

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

  /*

              <Route exact path={'/'}>
                <UserProvider value={this.state}>
                  <Home/>
                </UserProvider>
              </Route>
              <Route exact path={'/favorites'}>
                <UserProvider value={this.state}>
                  <Favorites/>
                </UserProvider>
              </Route>
              <Route exact path={'/register'}>
                <UserProvider value={this.state}>
                  <Signup/>
                </UserProvider>
              </Route>
              <Route exact path={'/mealCard'}>
                <UserProvider value={this.state}>
                  <MealCard/>
                </UserProvider>
              </Route>
              <Route exact path={'/login'}>
                <UserProvider value={this.state}>
                  <Login/>
                </UserProvider>
              </Route>
              <Route exact path={'/stripe'}>
                <UserProvider value={this.state}>
                  <Stripe/>
                </UserProvider>
              </Route>
              <Route exact path={'/preferences'}>
                <UserProvider value={this.state}>
                  <Questionnaire/>
                </UserProvider>
              </Route>
              <Route path="*" component={BadRequest}/>
   */
  render() {
    // const AuthorizedNavbar = this.AuthorizedNavbar;

    return (
      <div>
        <UserProvider value={this.state}>
          <div>
            <Switch>
              <Navbar {...this.props}>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/favorites'} component={Favorites} /* Home route *//>
                <Route exact path={'/register'} component={Signup} /* Signup route *//>
                <Route exact path={'/mealCard'} component={MealCard} /*showing meal card *//>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/stripe'} component={Stripe}/>
                <Route exact path={'/preferences'} component={Questionnaire}/>
                <Route component={BadRequest}/>
              </Navbar>
            </Switch>
          </div>
        </UserProvider>
      </div>
    )
  }
}
export default AppRouter;
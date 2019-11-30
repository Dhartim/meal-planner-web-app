import React, { Component } from "react";
import Axios from "axios";

import Stripe from "../stripe";
import ProfileComponent from './accountComponents/profileComponent';
import DetailComponent from './accountComponents/detailsComponent';
import BarChartComponent from './accountComponents/chartsComponents'
import './accountPage.scss'

// const defaultIcon = require('./headshot.png');

export default class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      userId: "",
      customerId: "",
      expiresAt: "",
      createdAt: "",
      updatedAt: "",
      preferences: {},
      userMeals: {},
      dayData: {},
      weekData: {},
      monthData: {}
    };
  }

  getAccountInfo(jwtToken) {
    Axios.get('/account', {
      headers: {"x-access-token" : jwtToken}
    })
    .then((response) => {
      if (response.status === 200) {
        let account = response.data.account;
        let customer = account.Customer;
        let preferences = account.Preference;
        let userMeals = account.UserAte;
        if (!account.id) {

        }
        this.setState({
          email: account.email,
          firstName: account.firstName,
          lastName: account.lastName,
          userId: account.id
        });
        if (customer) {
          this.setState({
            customerId: customer.id,
            expiresAt: customer.expiresAt,
            createdAt: customer.createdAt,
            updatedAt: customer.updatedAt,
          });
        }
        if (preferences) {
          this.setState({
            preferences: preferences,
          })
        }
        if (userMeals) {
          this.setState({
            userMeals: userMeals
          })
        }
      }
    })
    .catch(error => {
        console.log(error);
    })
  }

  setData(data) {
    let today = new Date();
  }

  getGraphData(jwtToken) {
    Axios.get('/ates', {
      headers: {"x-access-token" : jwtToken}
    }).then(response => {
      console.log(response)
      if (response.status===200) {
        let data = response.data;
        setData(data)
      }
    }).catch(error => {
      console.log(error);
  })
  }

  componentDidMount() {
    const jwtToken = localStorage.getItem('jwtToken');
    // this.getAccountInfo(jwtToken)
    this.getGraphData(jwtToken)
  };

  render() {

      let currTime = new Date();
      let message;
      console.log(this.state)
      if (this.state.customerId && new Date(this.state.expiresAt) > currTime) {
          let expired = new Date(this.state.expiresAt);
          console.log(expired)
          message = <div>
              <p>
                  Your subscription is current.
              </p>
              <p>
                  It will expire {expired.toString()}
              </p>
          </div>
      } else {
          message = <Stripe />;
      }

      return (
          <div>
              <ProfileComponent state = {this.state}  message = { message } />
              <div className='info__container'>
                <div className="sideBar__container"></div>
                <div  className="chart">
                  <span className="chart__title">Macros for the day</span>
                  <BarChartComponent  data={''}/>
                </div>
                <DetailComponent preference = {this.state.preferences} />

              </div>
          </div>
      )
  }
}
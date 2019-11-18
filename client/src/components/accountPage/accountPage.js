import React, { Component } from "react";
import Axios from "axios";

import Stripe from "../stripe";
import ProfileComponent from './accountComponents/profileComponent';
import DetailComponent from './accountComponents/detailsComponent';
import './accountPage.scss'

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
    };
  }

  componentDidMount() {
    const jwtToken = localStorage.getItem('jwtToken');
    Axios.get('/account', {
      headers: {"x-access-token" : jwtToken}
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(response.status);
        let account = response.data.account;
        let customer = account.Customer;
        let preferences = account.Preference;
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
      }
    })
    .catch(error => {
        console.log(error);
    })
  };

  render() {

      let currTime = new Date();
      let message;

      // console.log(this.state);
      // console.log(this.state.expiresAt)
      // console.log(currTime)
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
                <DetailComponent preference = {this.state.preferences} />

              </div>
          </div>
      )
  }
}
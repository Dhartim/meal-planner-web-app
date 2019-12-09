import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import UserContext from "../../context/usercontext";

export default class Stripe extends Component {
  //4242424242424242	Visa	Any 3 digits	Any future date
  static contextType = UserContext;

  onToken = (token) => {
    const userContext = this.context;
    const userId = userContext.userId
    axios.post('/charge', {
      stripeToken: token.id, userId: userId
    }).then(res => {
      window.location.reload();
      console.log('result: ', res)
    }).catch(err => {
      console.log('error: ', err)
    })
  }

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_mpwQoAkuTb1cHrD5zQMkhN1V00yoEdUff5"
      />
    )
  }
}
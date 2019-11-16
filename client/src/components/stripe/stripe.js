import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class Stripe extends React.Component {
  //4242424242424242	Visa	Any 3 digits	Any future date
  onToken = (token) => {
    axios.post('/charge', {
      stripeToken: token.id, userId: "3" // hard coded userid need to change after redux
    }).then(res => {
      console.log('result: ', res)
    }).catch(err => {
      console.log('error: ', err)
    })
  }

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_mpwQoAkuTb1cHrD5zQMkhN1V00yoEdUff5"
      />
    )
  }
}
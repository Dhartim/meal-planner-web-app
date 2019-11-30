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
  
  sameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }
  
  setDay(today, data) {
    
    for (let i = 0; i< data.length; i++){
      if (this.sameDay(new Date(data[i].createdAt), new Date())){

      }
      return
    }
  }
  // data: {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //       ],
 
  setWeek(today, dateData) {
    let dates = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let data = []
    let startDate = new Date (today.getDate() - today.getDay());
    let endDate = new Date (today.getDate() + (7 - today.getDay()));
    for(let i = 0; i < dates.length; i++ ) {
      let day = new Date(dateData[i])
      
      if (startDate<=day && day >= endDate){
        data.push(day.getDay())
      }
    }
    this.setState({
      weekData: {
        labels: dates, 
        datasets: [
          {
            label: `Week ${startDate.getDate} / ${startDate.getMonth} / ${startDate.getFullYear}`,
            data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ]
          }
        ]
      }
    })
  }

  setMonth(today, data) {

  }

  setData(data) {
    let today = new Date();
    // this.setDay(today, data)
    this.setWeek(today, data);
    // this.setMonth(today, data);
  }

  getGraphData(jwtToken) {
    Axios.get('/ates', {
      headers: {"x-access-token" : jwtToken}
    }).then(response => {
      console.log(response)
      if (response.status===200) {
        let data = response.data;
        this.setData(data)
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
                  <BarChartComponent  data={this.state.weekData}/>
                </div>
                <DetailComponent preference = {this.state.preferences} />

              </div>
          </div>
      )
  }
}
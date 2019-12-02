import React, { Component } from "react";
import Axios from "axios";

import Stripe from "../stripe";
import ProfileComponent from './accountComponents/profileComponent';
import DetailComponent from './accountComponents/detailsComponent';
import BarChartComponent from './accountComponents/chartsComponents';
import DonutChart from './accountComponents/chartsComponents';
import RadioGroup from '../subcomponents/radioGroup';
import { Pie } from 'react-chartjs-2';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import './accountPage.scss'
const date = require('date-and-time');

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
      monthData: {},
      kind:'price'
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
  
  setDay(today, data) {
    let nutrition = {}
    let label = date.format(today, 'MM DD YYYY')
    for (let i = 0; i< data.length; i++){
      let day = new Date(data[i].createdAt)
      if (date.isSameDay(day, new Date())){
        if (Object.keys(nutrition).length === 0 && nutrition.constructor === Object){
          Object.assign(nutrition, data[i].Meal)
        }else{
          nutrition = this.mergeMeals(nutrition, data[i].Meal)
        }
      }
    }
    let labels=[]
    let values = []
    let totalCalories = 0;

    for(let key in nutrition.Nutrition){
      if(typeof(nutrition.Nutrition[key])==='number'){
        if ( key!=='calories') {
          if (key==='totalFat'){
            totalCalories += nutrition.Nutrition[key] * 9
          } else {
            totalCalories += nutrition.Nutrition[key] * 7
          }
        }
      }
    }
    for(let key in nutrition.Nutrition){
      if(typeof(nutrition.Nutrition[key])==='number'){
        if ( key!=='calories') {
          labels.push(key)
          let cal = 0;
          if (key==='totalFat'){
            cal = nutrition.Nutrition[key] * 9
          } else {
            cal = nutrition.Nutrition[key] * 7
          }
          values.push(Math.round((cal/totalCalories)*100))
        }
      }
    }
    this.setState({
      dayData: {
        labels: labels,
        datasets: [
          {
          label,
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ]
        }
      ]
      }
    })
  }

  mergeMeals(meal, newMeal) {
    meal.price = meal.price +  newMeal.price;
    for (let key in meal.Nutrition) {
      if ( typeof(meal.Nutrition[key]) === "number" ) {
        meal.Nutrition[key] += newMeal.Nutrition[key];
      }
    }
    return meal;
  }
 
  setWeek(today, dateData) {
    let dates = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let data = [undefined *7]
    let rawToday = new Date(date.format(today, 'MM DD YYYY'));
    let startDate = date.addDays(rawToday, -today.getDay())
    let endDate = date.addDays(rawToday, 7-today.getDay());
    let label = this.state.kind;
    // let label = `Week of ${date.format(startDate, 'MMM. DD YYYY')}`;
    for(let i = 0; i < dates.length; i++ ) {
      let day = new Date(dateData[i].createdAt)
      if (startDate<=day && day <= endDate) {
        if (!data[day.getDay()]){
          data[day.getDay()] = dateData[i].Meal

        } else {
          let meal = data[day.getDay()]
          let newMeal = dateData[i].Meal
          data[day.getDay()] = this.mergeMeals(meal, newMeal)
        }
      } 

    }

    let datum = data.map(d=>{
      return d ? d : 0
    })

    this.setState({
      weekData: {
        labels: dates, 
        datasets: [
          {
            label,
            data:datum,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.2)',
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
    this.setDay(today, data)
    this.setWeek(today, data);
    // this.setMonth(today, data);
  }

  getGraphData(jwtToken) {
    Axios.get('/ates', {
      headers: {"x-access-token" : jwtToken}
    }).then(response => {
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
    this.getAccountInfo(jwtToken)
    this.getGraphData(jwtToken)
  };

  onRadioClick = kind => {
    this.setState({
      kind: kind
    })
  }
  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom',
  }

  render() {
      let currTime = new Date();
      let message;
      if (this.state.customerId && new Date(this.state.expiresAt) > currTime) {
          let expired = new Date(this.state.expiresAt);
          // console.log(expired)
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

      let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

      return (
          <div>
              <ProfileComponent state = {this.state}  message = { message } />
              <div className='info__container'>
                <div className="details-container">
                  <DetailComponent preference = {this.state.preferences} />
                </div>
                <div className="chart__container">
                <div  className="chart">
                  <Slider {...settings}>
                  <div className="dayChart">
                    <Pie
                      data={this.state.dayData}
                      options={{
                        title:{
                          display:"stuff",
                          text:"Today's Macros",
                          fontSize:25,
                          fontColor: 'white'
                        },
                        legend:{
                          display:true,
                          position:'bottom',
                          labels: {
                            fontSize: 25,
                            fontColor: 'white'
                          }
                        },
                        label: {
                          fontSize: 25
                        },
                        tooltips: {
                          titleFontSize: 20,
                          bodyFontSize: 20
                        }
                      }
                    }
                    height={300}
                    ></Pie>
                  </div>
                  <div className="weekChart">
                    <BarChartComponent  data={this.state.weekData} kind={this.state.kind}/>
                    <RadioGroup
                      radio={[
                        {id: "weekChart", name: "weekChart", value: "price", label: "Price", onClick:this.onRadioClick.bind(this, 'price'), checked:"true"},
                        {id: "weekChart", name: "weekChart", value: "calories", label: "Calories", onClick:this.onRadioClick.bind(this, 'calories')},
                        {id: "weekChart", name: "weekChart", value: "totalFat", label: "Fat", onClick:this.onRadioClick.bind(this, 'totalFat')},
                        {id: "weekChart", name: "weekChart", value: "totalCarbohydrates", label: "Carbs", onClick:this.onRadioClick.bind(this, 'totalCarbohydrates')},
                        {id: "weekChart", name: "weekChart", value: "protein", label: "Protein", onClick:this.onRadioClick.bind(this, 'protein')},
                      ]}
                      state={this.state.kind}
                      />
                  </div>
                  </Slider>
                  
                </div>
                </div>
                
                
              </div>
          </div>
      )
  }
}

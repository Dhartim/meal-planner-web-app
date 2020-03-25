import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barData: this.props.data,
    }
  }

  decamelize(str, separator){
    separator = typeof separator === 'undefined' ? '_' : separator;
    let str2 = str
      .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
      .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
      .toLowerCase();
  
    return str2.charAt(0).toUpperCase() + str2.slice(1);
  }

  componentWillReceiveProps(props) {
    let colors = {
      'price': 'rgba(255, 99, 132, 0.2)',
      'calories':'rgba(54, 162, 235, 0.6)',
      'totalFat':'rgba(75, 192, 192, 0.6)',
      'totalCarbohydrates':'rgba(255, 206, 86, 0.6)',
      'protein': 'rgba(255, 159, 64, 0.6)'
    }
    let temp = []
    if(props.data.datasets.length>0){
      let datasets = props.data.datasets[0];
      let label = props.kind;

      datasets.data.forEach(day =>{
        if(day === 0 ){
          temp.push(0);
        }else{
          props.kind === 'price' ? temp.push(day[props.kind]) : temp.push(day.Nutrition[props.kind])
        }
      })
      this.setState({
        barData: {
          labels: props.data.labels,
          datasets:[{
            label,
            data: temp,
            backgroundColor: [
              colors[props.kind],
              colors[props.kind],
              colors[props.kind],
              colors[props.kind],
              colors[props.kind],
              colors[props.kind],
              colors[props.kind]
            ]
          }]
        }
      })
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'bottom',
  }

  render() {
    const { barData } = this.state;
    return (
      <div className='chart'>
        <Bar
          data={barData}
          options={
            {
              title:{
                display:"stuff",
                text:this.decamelize(this.props.kind, " ") + ' for the week',
                fontSize:25,
                fontColor: 'white'
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition,
                labels: {
                  fontSize: 25,
                  fontColor: 'white'
                }
              },
              label: {
                fontSize: 25

              },
              scales: { 
                yAxes: [
                { 
                  ticks: { 
                    beginAtZero: true, 
                    fontSize: 22, 
                    fontColor:'white' 
                  } 
                }
              ], 
              xAxes: [
                { 
                  ticks: { 
                    beginAtZero: true, 
                    fontSize: 22,
                    fontColor:'white' 
                  } 
                }
              ]} 
            }
          }
          height={300}
          width={300}
        />
      </div>
    )
  }
}
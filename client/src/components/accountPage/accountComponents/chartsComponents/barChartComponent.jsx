import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barData: this.props.data
    }
  }

  componentWillReceiveProps(props) {
    let temp = []
    
    if(props.data.datasets.length>0){
      let dataset = props.data.datasets[0];
      let label = dataset.label

      dataset.data.forEach(day =>{
        if(day === undefined ){
          temp.push(0);
        }else{
          props.kind === 'price' ? temp.push(day[props.kind]) : temp.push(day.Nutrition[props.kind])
        }
      })
      console.log('setting state')
      this.setState({
        barData: {
          labels: props.data.labels,
          dataset:{
            label: props.data.datasets[0],
            data: temp,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ]
          }
        }
      })
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }

  render() {
    const options = { scales: { yAxes: [{ ticks: { beginAtZero: true, fontSize: 16, fontColor:'white' } }], xAxes: [{ ticks: { beginAtZero: true, fontSize: 16,fontColor:'white' } }] } }
    return (
      <div className='chart'>
        {console.log('bardata', this.props.barData)}
        <Bar
          data={this.state.barData}
          options={options}
          height={300}
          width={300}
        />
      </div>
    )
  }
}
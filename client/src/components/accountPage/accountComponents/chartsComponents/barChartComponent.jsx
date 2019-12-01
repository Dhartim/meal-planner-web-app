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
      let datasets = props.data.datasets[0];
      let label = datasets.label

      console.log('datasets', datasets)

      datasets.data.forEach(day =>{
        if(day === undefined ){
          temp.push(0);
        }else{
          props.kind === 'price' ? temp.push(day[props.kind]) : temp.push(day.Nutrition[props.kind])
        }
      })
      console.log('setting state: data: ', temp)
      this.setState({
        barData: {
          labels: props.data.labels,
          datasets:[{
            label,
            data: temp,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ]
          }]
        }
      })
      console.log('after state: ', this.state.barData.datasets)
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }

  render() {
    const options = { scales: { yAxes: [{ ticks: { beginAtZero: true, fontSize: 16, fontColor:'white' } }], xAxes: [{ ticks: { beginAtZero: true, fontSize: 16,fontColor:'white' } }] } }
    const { barData } = this.state;
    // console.log('render state: ', this.state)
    return (
      <div className='chart'>
        {/* {console.log('bardata', barData)} */}
        <Bar
          data={barData}
          options={options}
          height={300}
          width={300}
        />
      </div>
    )
  }
}
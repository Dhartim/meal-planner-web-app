import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class DonutChart extends Component {
  constructor(props) {
    console.log('props', props)
    super(props);
    this.state = {
      donutData: this.props.data
    }
  }

  render() {
    // const options = { scales: { yAxes: [{ ticks: { beginAtZero: true, fontSize: 16, fontColor:'white' } }], xAxes: [{ ticks: { beginAtZero: true, fontSize: 16,fontColor:'white' } }] } }
    const { donutData } = this.state;
    console.log('render state: ', this.state)
    return (
      <div className='chart'>
        {/* {console.log('bardata', barData)} */}
        <Pie
          data={donutData}
          options={options}
          height={300}
          width={300}
        />
      </div>
    )
  }
}
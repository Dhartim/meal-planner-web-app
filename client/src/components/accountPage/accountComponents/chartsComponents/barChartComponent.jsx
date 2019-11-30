import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      barData: this.props.data
    }
  }
  render() {
    return (
      <div className='chart'>
        <Bar
          data={this.state.barData}
          width={300}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    )
  }
}





// import {
//     XYPlot,
//     XAxis, // Shows the values on x axis
//     YAxis, // Shows the values on y axis
//     VerticalBarSeries,
//     LabelSeries
// } from 'react-vis';
// export default class BarChart extends React.Component {
//     render() {
//         const data = this.props.data;
//         const chartWidth = 800;
//         const chartHeight = 500;
//         const chartDomain = [0, chartHeight];
//         return (
//             <XYPlot 
//                 xType="ordinal" 
//                 width={chartWidth} 
//                 height={chartHeight} 
//                 yDomain={chartDomain}
//             >
//                 <XAxis />
//                 <YAxis />
//                 <VerticalBarSeries
//                     data={data}
//                         labelsStyle={{
//                             textAnchor: 'middle',
//                             fontSize: 12,
//                             fontWeight: 500,
//                             fill: '#e9e9e9'
//                         }}
//                 />
//                 <LabelSeries
//                     data={data.map(obj => {
//                         return { ...obj, label: obj.y.toString() }
//                     })}
//                     labelAnchorX="middle"
//                     labelAnchorY="text-after-edge"
                  
//                 />
//             </XYPlot>
//         );
//     }
// }

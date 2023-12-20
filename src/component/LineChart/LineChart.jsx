import React from 'react';
import "./LineChart.css"
import ReactApexChart from 'react-apexcharts';

function LineChart() {
          
        const series = [{
            name: "Desktops",
            data: [10, 27, 70, 28, 34, 23, 40, 33, 50]
        }]

        const options = {
          chart: {
            type: 'line',
            zoom: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        }

    return (
        <div className="LineChart">
            <ReactApexChart options={options} series={series} type="line" width="100%" height="100%"/>
        </div>
    );
}

export default LineChart

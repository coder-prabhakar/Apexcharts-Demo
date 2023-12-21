import React from 'react';
import "./LineChart.css"
import ReactApexChart from 'react-apexcharts';

function LineChart() {
          
  const series = [
    {
      name: "Desktops",
      data: [10, 27, 70, 28, 34, 23, 40, 33, 50]
    },
    {
      name: "Laptop",
      data: [7, 17, 38, 66, 45, 21, 40, 44, 49]
    }
  ]

  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    legend: {
      position: 'top',
      fontSize: '20px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      markers: {
        width: 20,
        height: 20,
        radius: 0,
        offsetX: -3,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 10
      },
    },
  }

  return (
    <div className="LineChart container">
        <ReactApexChart options={options} series={series} width="100%" height="100%"/>
    </div>
  );
}

export default LineChart
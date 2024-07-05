
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const data = {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
    datasets: [
      {
        label: 'انجام شده ها',
        backgroundColor: 'rgb(144, 238, 144)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55],
      },
      {
        label: 'انجام نشده ها',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 86, 27],
      },
    ],
  };

  const options = {
    indexAxis: 'y', 
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Yekan', 
            size: 14, 
            style: 'normal', 
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'میزان',
          font: {
            family: 'Yekan', 
            size: 16, 
            style: 'normal', 
          },
        },
        ticks: {
          font: {
            family: 'Yekan', 
            size: 12, 
            style: 'normal', 
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'روزهای هفته',
          font: {
            family: 'Yekan', 
            size: 16, 
            style: 'normal', 
          },
        },
        ticks: {
          font: {
            family: 'Yekan', 
            size: 12, 
            style: 'normal', 
          },
        },
      },
    },
  };

  return (
    <div className='mtfont' style={{ width: '70%', maxWidth: '1200px', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const datasets = [
  { label: 'فروردین', data: [102046, 435990, 2417655, 217343, 2430352, 15149, 100000], borderColor: 'rgb(93, 63, 211)' },
  { label: 'اردیبهشت', data: [1146591, 2678425, 404509, 214476, 1070103, 2076517, 2569924], borderColor: 'rgb(191, 64, 191)' },
  { label: 'خرداد', data: [1199839, 2840460, 133011, 2658087, 23193, 412230, 2860463], borderColor: 'rgb(207, 159, 255)' },
  { label: 'تیر', data: [522644, 2518125, 2702348, 2677074, 1054134, 558875, 252180], borderColor: 'rgb(255, 192, 0)' },
  { label: 'مرداد', data: [1582274, 1205900, 1207485, 720754, 320848, 474922, 1205768], borderColor: 'rgb(255, 234, 0)' },
  { label: 'شهریور', data: [943639, 2120935, 1360588, 1558972, 2505200, 335548, 2862783], borderColor: 'rgb(252, 245, 95)' },
  { label: 'مهر', data: [1547321, 2317691, 433862, 1648635, 1608339, 952168, 2812915], borderColor: 'rgb(204, 119, 34)' },
  { label: 'آبان', data: [2125375, 1572886, 2040858, 339565, 1112818, 249414, 681331], borderColor: 'rgb(255, 165, 0)' },
  { label: 'آذر', data: [2052414, 2948119, 1912572, 56597, 890514, 2420381, 1024931], borderColor: 'rgb(255, 191, 0)' },
  { label: 'دی', data: [1458072, 324712, 2590238, 45227, 2837278, 1707186, 400849], borderColor: 'rgb(31, 81, 255)' },
  { label: 'بهمن', data: [2709020, 1091600, 1996622, 2643337, 261081, 1667235, 1609972], borderColor: 'rgb(100, 149, 237)' },
  { label: 'اسفند', data: [2957932, 845065, 2868121, 739986, 2494259, 1210415, 1137011], borderColor: 'rgb(173, 216, 230)' },
];

const LineChart = () => {
  const data = {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
    datasets: datasets.map(dataset => ({ ...dataset, fill: false, hidden: true })),
  };

  const options = {
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
        onClick: (e, legendItem, legend) => {
          const index = legendItem.datasetIndex;
          const ci = legend.chart;
          ci.getDatasetMeta(index).hidden = !ci.getDatasetMeta(index).hidden;
          ci.update();
        },
      },
      title: {
        display: true,
        font: {
          family: 'Yekan', 
          size: 16, 
          style: 'normal', 
        },
      },
    },
    scales: {
      x: {
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
      y: {
        title: {
          display: true,
          text: 'خرجکرد',
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
    <div className='mtfont' style={{ width: '80%', margin: 'auto', height: '200px', fontFamily: 'Yekan' }}>
      <Line className='mtfont' data={data} options={options} />
    </div>
  );
};

export default LineChart;

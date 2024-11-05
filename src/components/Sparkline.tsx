import React from 'react';
import ApexChart from 'react-apexcharts';

interface SparklineProps {
  visitorsPerDay: Map<string, number>;
  visitor : string
}

const Sparkline: React.FC<SparklineProps> = ({ visitorsPerDay ,visitor }) => {
  const values = Array.from(visitorsPerDay.values());
  const sum = values.reduce((total, value) => total + value, 0);
    
  const series = [
    {
      name: 'Adult Visitors',
      data: Array.from(visitorsPerDay.values()),
      labels: {
        style: {
          colors: '#000',
        },
      },     
      
    },
  ];

  const options = {
    chart: {
      type: 'area',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: Array.from(visitorsPerDay.keys()),
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0, 
      show: false,    
    },
    title: {
      text: sum,
      offsetX: 0,
      style: {
        fontSize: '25px',
        color : "#ffffff",
      },
    },
    subtitle: {
      text: visitor,
      offsetX: 0,
      style: {
        fontSize: '15px',
        color : "#ffffff",
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '15px',
        color: '#ffffff',
        background: '#333',
      },
    },
  };



  return (
    <div>
      <ApexChart options={options as any} series={series} type="area" height={350} width={350} />
    </div>
  );
};

export default Sparkline;

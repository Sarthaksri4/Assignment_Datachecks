import React from 'react';
import ApexChart from "react-apexcharts";

interface ColumnChartProps {
    visitorsPerCountry: Map<string, number>;
  }

const ColumnChart: React.FC<ColumnChartProps> = ({visitorsPerCountry}) => {
  const state = {
    series: [{
      name: 'Visitor',
      data: Array.from(visitorsPerCountry.values())
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },
      xaxis: {
        categories: Array.from(visitorsPerCountry.keys()),
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            fontSize: '12px',
            colors: '#fff',
          },
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: number) {
            return val;
          }
        }
      },
      title: {
        text: 'Monthly visitors Per Counrty',
        align: 'center',
        style: {
          fontSize : "15px",
          color: '#fff'
        }
      },
      tooltip: {
        theme: 'dark',
        style: {
          fontSize: '15px',
          color: '#ffffff',
          background: '#333',
        },
      },
      
    },
  };

  return (
    <div className="charts">
      <div className="chart">
        <h2>Column Chart</h2>
        <ApexChart options={state.options as any} series={state.series} type="bar" height={400} width={800}/>
      </div>
    </div>
  );
};

export default ColumnChart;

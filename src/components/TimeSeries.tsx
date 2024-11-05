import ApexChart from "react-apexcharts";

interface TimeSeriesProps {
  visitorsPerDay: Map<string, number>;
}

const TimeSeries: React.FC<TimeSeriesProps> = ({ visitorsPerDay }) => {
  const parseDate = (dateStr: string, count: any) => {
    const parts = dateStr.split("/");
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10) + 1;
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      console.log(day, month, count);

      return new Date(year, month, day);
    }
    return null;
  };

  const state = {
    series : [
      {
        name: "Visitors Per Day",
        data: Array.from(visitorsPerDay).map(([date, count]) => ({
          x: parseDate(date, count)?.getTime(),
          y: count,
        })),
        color: "#F44336",
      },
    ],
    options : {
      chart: {
        type: "line",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Daily Visitor Graph",
        align: "center",
        style: {
          fontSize: '15px',
          color : "#ffffff",
          margin: 30,
        },
      },
      fill: {
        type: "solid",
        // colors: ["#F44336"],
        colors: ["#FF0000"],
      },
      stroke: {
        curve: "smooth",
      },
      yaxis: {
        title: {
          text: "Visitor Count",
          style: {
            fontSize: '15px',
            color : "#ffffff",
          },
        },
        labels: {
          style: {
            fontSize: '12px',
            colors: '#fff',
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          datetimeFormatter: {
            year: "yyyy",
            month: 'MMM "yy',
            day: "dd/MM/yyyy",
          },
          style: {
            fontSize: '12px',
            colors: '#fff',
          },
        },
      },
      tooltip: {
        shared: true,
        theme: 'dark',
        style: {
          fontSize: '15px',
          color: '#ffffff',
          background: '#333',
        },
      },
    }

  }


  return (
    <div className="charts">
      <div className="chart">
        <h2>Time Series Chart</h2>
        <ApexChart
          options={state.options as any}
          series={state.series}
          type="line"
          height={400}
          width={800}
        />
      </div>
    </div>
  );
};

export default TimeSeries;

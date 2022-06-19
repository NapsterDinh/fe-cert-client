import { faTruckMonster } from "@fortawesome/free-solid-svg-icons";
import ReactApexChart from "react-apexcharts";

const Chart = ({ series, labels, width }) => {
  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            className="chart-container"
            options={{
              chart: {
                width: width,
                type: "donut",
              },
              labels: labels,
              dataLabels: {
                enabled: faTruckMonster,
              },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200,
                    },
                    legend: {
                      show: true,
                    },
                  },
                },
              ],
              legend: {
                position: "right",
                offsetY: 0,
                height: 230,
              },
            }}
            series={series}
            type="donut"
            width={width}
          />
        </div>
      </div>
    </div>
  );
};

export const LineChart = ({ series, title, xaxis, yaxis, annotations }) => {
  return (
    <div id="chart">
      <ReactApexChart
        options={{
          chart: {
            height: 350,
            type: "line",
            dropShadow: {
              enabled: true,
              color: "#000",
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2,
            },
            toolbar: {
              show: true,
              autoSelected: "zoom",
            },
          },
          colors: ["#77B6EA", "#545454"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          title: {
            text: title,
            align: "left",
          },
          grid: {
            borderColor: "#e7e7e7",
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          annotations: annotations,
          markers: {
            size: 1,
          },
          xaxis: xaxis,
          yaxis: yaxis,
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5,
          },
        }}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Chart;

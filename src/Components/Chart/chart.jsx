import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

const Chart = ({ data, country }) => {
  console.log(data.confirmed);
  //declaring state with hooks : stateName , the function used to chnage it and it's initial value {}
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log(dailyData);

    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        //this a map : mapping the dailyData array
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgb(255 , 0 , 0 , 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const BarChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: ["orange", "green", "red"],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? BarChart : lineChart}</div>
  );
};

export default Chart;

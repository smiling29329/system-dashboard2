import React, { useState, useEffect } from "react";
import * as echarts from "echarts";

const DynamicChart: React.FC = () => {
  const [data, setData] = useState<{ key: string; value: number }[]>([]);

  // Fetch data from the backend API
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data") // Replace with your Flask backend URL
      .then((res) => res.json())
      .then((jsonData) => {
        console.log("Fetched data:", jsonData); // Debugging fetched data
        setData(jsonData);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Initialize and update the ECharts instance
  useEffect(() => {
    if (data.length === 0) return; // Wait until data is fetched

    const chartDom = document.getElementById("chart")!;
    const chart = echarts.init(chartDom);

    // Chart options
    const option = {
      title: { text: "IT System Metrics", left: "center" },
      tooltip: { trigger: "item" },
      xAxis: { type: "category", data: data.map((d) => d.key) }, // Ensure "key" exists
      yAxis: { type: "value" },
      series: [
        {
          data: data.map((d) => d.value), // Ensure "value" exists
          type: "bar",
          color: "#4F46E5",
        },
      ],
    };

    chart.setOption(option);

    // Cleanup chart instance on component unmount
    return () => chart.dispose();
  }, [data]);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Dynamic IT Metrics
      </h2>
      <div
        id="chart"
        className="w-full h-96"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      ></div>
    </div>
  );
};

export default DynamicChart;

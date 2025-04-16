import React, { useEffect } from "react";
import * as echarts from "echarts";

interface Props {
  data: { key: string; value: number }[]; // Data should have a "key" for x-axis and "value" for y-axis
}

const ChartContainer: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    if (!data.length) return;

    const chartDom = document.getElementById("chart");
    if (!chartDom) return; // Ensure the chart container exists

    const chart = echarts.init(chartDom as HTMLElement);

    const option = {
      title: { text: "Dynamic Data Chart", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: {
        type: "category",
        data: data.map((d) => d.key), // Use "key" as the x-axis categories
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Metric",
          type: "bar",
          data: data.map((d) => d.value), // Use "value" as the y-axis data
          itemStyle: {
            color: "#4F46E5", // Bar color
          },
        },
      ],
    };

    chart.setOption(option);

    // Cleanup chart instance on component unmount
    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div id="chart" style={{ width: "100%", height: "400px" }}></div>;
};

export default ChartContainer;

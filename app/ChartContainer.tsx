import React from "react";
import * as echarts from "echarts";

interface Props {
  data: { key: string; value: number }[];
}

const ChartContainer: React.FC<Props> = ({ data }) => {
  useEffect(() => {
    if (!data.length) return;

    const chartDom = document.getElementById("chart");
    const chart = echarts.init(chartDom as HTMLElement);

    const option = {
      title: { text: "Dynamic Data Chart", left: "center" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: data.map((d) => d.key) },
      yAxis: { type: "value" },
      series: [
        {
          name: "Metric",
          type: "bar",
          data: data.map((d) => d.value),
          color: "#4F46E5",
        },
      ],
    };

    chart.setOption(option);

    return () => chart.dispose();
  }, [data]);

  return <div id="chart" style={{ width: "100%", height: "400px" }}></div>;
};

export default ChartContainer;

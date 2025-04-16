// import React, { useState, useEffect } from "react";
// import * as echarts from "echarts";

// const DynamicChart: React.FC = () => {
//   const [data, setData] = useState<{ key: string; value: number }[]>([]);

//   // Fetch data from the backend API
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/api/data") // Replace with your Flask backend URL
//       .then((res) => res.json())
//       .then((jsonData) => {
//         console.log("Fetched data:", jsonData); // Debugging fetched data
//         setData(jsonData);
//       })
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   // Initialize and update the ECharts instance
//   useEffect(() => {
//     if (data.length === 0) return; // Wait until data is fetched

//     const chartDom = document.getElementById("chart")!;
//     const chart = echarts.init(chartDom);

//     // Chart options
//     const option = {
//       title: { text: "IT System Metrics", left: "center" },
//       tooltip: { trigger: "item" },
//       xAxis: { type: "category", data: data.map((d) => d.key) }, // Ensure "key" exists
//       yAxis: { type: "value" },
//       series: [
//         {
//           data: data.map((d) => d.value), // Ensure "value" exists
//           type: "bar",
//           color: "#4F46E5",
//         },
//       ],
//     };

//     chart.setOption(option);

//     // Cleanup chart instance on component unmount
//     return () => chart.dispose();
//   }, [data]);

//   return (
//     <div className="bg-white p-4 rounded-md shadow-md">
//       <h2 className="text-lg font-semibold text-gray-700 mb-4">
//         Dynamic IT Metrics
//       </h2>
//       <div
//         id="chart"
//         className="w-full h-96"
//         style={{
//           maxWidth: "800px",
//           margin: "0 auto",
//         }}
//       ></div>
//     </div>
//   );
// };

// export default DynamicChart;


















// import React from "react";
// import { Bar } from "react-chartjs-2"; // Bar chart
// import { Line } from "react-chartjs-2"; // Line chart
// import { Pie } from "react-chartjs-2"; // Pie chart
// import { Scatter } from "react-chartjs-2"; // Scatter chart

// interface Props {
//   chartType: string;
//   data: { key: string; value: number }[];
// }

// const DynamicChart: React.FC<Props> = ({ chartType, data }) => {
//   // Prepare data for chart.js
//   const chartData = {
//     labels: data.map((item) => item.key),
//     datasets: [
//       {
//         label: "Dataset",
//         data: data.map((item) => item.value),
//       },
//     ],
//   };

//   // Return chart based on selected type
//   if (chartType === "bar") {
//     return <Bar data={chartData} />;
//   }
//   if (chartType === "line") {
//     return <Line data={chartData} />;
//   }
//   if (chartType === "pie") {
//     return <Pie data={chartData} />;
//   }
//   if (chartType === "scatter") {
//     return <Scatter data={chartData} />;
//   }

//   // Default chart type (Bar)
//   return <Bar data={chartData} />;
// };

// export default DynamicChart;






















// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2"; // Bar chart
// import { Line } from "react-chartjs-2"; // Line chart
// import { Pie } from "react-chartjs-2"; // Pie chart
// import { Scatter } from "react-chartjs-2"; // Scatter chart

// interface Props {
//   chartType: string;
// }

// const DynamicChart: React.FC<Props> = ({ chartType }) => {
//   const [data, setData] = useState<{ key: string; value: number }[]>([]);

//   // Fetch data from the backend API
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/api/data") // Replace with your Flask backend URL
//       .then((res) => res.json())
//       .then((jsonData) => {
//         console.log("Fetched data:", jsonData); // Debugging fetched data
//         setData(jsonData);
//       })
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   // Prepare chart data for Chart.js
//   const chartData = {
//     labels: data.map((item) => item.key),
//     datasets: [
//       {
//         label: "Dataset",
//         data: data.map((item) => item.value),
//       },
//     ],
//   };

//   // Return chart based on selected type
//   if (chartType === "bar") {
//     return <Bar data={chartData} />;
//   }
//   if (chartType === "line") {
//     return <Line data={chartData} />;
//   }
//   if (chartType === "pie") {
//     return <Pie data={chartData} />;
//   }
//   if (chartType === "scatter") {
//     return <Scatter data={chartData} />;
//   }

//   // Default chart type (Bar)
//   return <Bar data={chartData} />;
// };

// export default DynamicChart;









// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2"; // Bar chart
// import { Line } from "react-chartjs-2"; // Line chart
// import { Pie } from "react-chartjs-2"; // Pie chart
// import { Scatter } from "react-chartjs-2"; // Scatter chart

// interface Props {
//   chartType: string;
// }

// const DynamicChart: React.FC<Props> = ({ chartType }) => {
//   const [data, setData] = useState<{ key: string; value: number }[]>([]);

//   // Fetch data from the backend API
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/api/data") // Replace with your Flask backend URL
//       .then((res) => res.json())
//       .then((jsonData) => {
//         console.log("Fetched data:", jsonData); // Debugging fetched data
//         setData(jsonData);
//       })
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   // Prepare chart data for Chart.js
//   const chartData = {
//     labels: data.map((item) => item.key),
//     datasets: [
//       {
//         label: "Dataset",
//         data: data.map((item) => item.value),
//       },
//     ],
//   };

//   // Return chart based on selected type
//   if (chartType === "bar") {
//     return <Bar data={chartData} />;
//   }
//   if (chartType === "line") {
//     return <Line data={chartData} />;
//   }
//   if (chartType === "pie") {
//     return <Pie data={chartData} />;
//   }
//   if (chartType === "scatter") {
//     return <Scatter data={chartData} />;
//   }

//   // Default chart type (Bar)
//   return <Bar data={chartData} />;
// };

// export default DynamicChart;








// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2"; // Bar chart
// import { Line } from "react-chartjs-2"; // Line chart
// import { Pie } from "react-chartjs-2"; // Pie chart
// import { Scatter } from "react-chartjs-2"; // Scatter chart

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";

// // Registering the necessary Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// interface Props {
//   chartType: string;
// }

// const DynamicChart: React.FC<Props> = ({ chartType }) => {
//   const [data, setData] = useState<{ key: string; value: number }[]>([]);

//   // Fetch data from the backend API
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/api/data") // Replace with your Flask backend URL
//       .then((res) => res.json())
//       .then((jsonData) => {
//         console.log("Fetched data:", jsonData); // Debugging fetched data
//         setData(jsonData);
//       })
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   // Prepare chart data for Chart.js
//   const chartData = {
//     labels: data.map((item) => item.key),
//     datasets: [
//       {
//         label: "Datas",
//         data: data.map((item) => item.value),
//       },
//     ],
//   };

//   // Return chart based on selected type
//   if (chartType === "bar") {
//     return <Bar data={chartData} />;
//   }
//   if (chartType === "line") {
//     return <Line data={chartData} />;
//   }
//   if (chartType === "pie") {
//     return <Pie data={chartData} />;
//   }
//   if (chartType === "scatter") {
//     return <Scatter data={chartData} />;
//   }

//   // Default chart type (Bar)
//   return <Bar data={chartData} />;
// };

// export default DynamicChart;












// import React, { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2"; // Bar chart
// import { Line } from "react-chartjs-2"; // Line chart
// import { Pie } from "react-chartjs-2"; // Pie chart
// import { Scatter } from "react-chartjs-2"; // Scatter chart

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";

// // Registering the necessary Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// interface Props {
//   chartType: string;
// }

// const DynamicChart: React.FC<Props> = ({ chartType }) => {
//   const [data, setData] = useState<{ key: string; value: number }[]>([]);

//   // Fetch data from the backend API
//   useEffect(() => {
//     fetch("http://127.0.0.1:5000/api/data") // Replace with your Flask backend URL
//       .then((res) => res.json())
//       .then((jsonData) => {
//         console.log("Fetched data:", jsonData); // Debugging fetched data
//         setData(jsonData);
//       })
//       .catch((err) => console.error("Error fetching data:", err));
//   }, []);

//   // Prepare chart data for Chart.js
//   const chartData = {
//     labels: data.map((item) => item.key),
//     datasets: [
//       {
//         label: "Datas",
//         data: data.map((item) => item.value),
//         // Add random colors for each chart type
//         backgroundColor: chartType === "pie" 
//           ? [
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)",
//               "rgba(75, 192, 192, 0.2)",
//               "rgba(153, 102, 255, 0.2)",
//               "rgba(255, 159, 64, 0.2)"
//             ]
//           : // For bar, line, and scatter, set a solid color scheme
//             [
//               "rgba(255, 99, 132, 0.6)",
//               "rgba(54, 162, 235, 0.6)",
//               "rgba(255, 206, 86, 0.6)",
//               "rgba(75, 192, 192, 0.6)",
//               "rgba(153, 102, 255, 0.6)",
//               "rgba(255, 159, 64, 0.6)"
//             ],
//         borderColor: chartType === "pie"
//           ? [
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(75, 192, 192, 1)",
//               "rgba(153, 102, 255, 1)",
//               "rgba(255, 159, 64, 1)"
//             ]
//           : [
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(75, 192, 192, 1)",
//               "rgba(153, 102, 255, 1)",
//               "rgba(255, 159, 64, 1)"
//             ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Return chart based on selected type
//   if (chartType === "bar") {
//     return <Bar data={chartData} options={{ responsive: true }} />;
//   }
//   if (chartType === "line") {
//     return <Line data={chartData} options={{ responsive: true }} />;
//   }
//   if (chartType === "pie") {
//     return <Pie data={chartData} options={{ responsive: true }} />;
//   }
//   if (chartType === "scatter plot") {
//     return <Scatter data={chartData} options={{ responsive: true }} />;
//   }

//   // Default chart type (Bar)
//   return <Bar data={chartData} options={{ responsive: true }} />;
// };

// export default DynamicChart;























import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2"; // Bar chart
import { Line } from "react-chartjs-2"; // Line chart
import { Pie } from "react-chartjs-2"; // Pie chart
import { Scatter } from "react-chartjs-2"; // Scatter chart

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Registering the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface Props {
  chartType: string;
}

const DynamicChart: React.FC<Props> = ({ chartType }) => {
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

  // Prepare chart data for Chart.js
  const chartData = {
    labels: data.map((item) => item.key),
    datasets: [
      {
        label: "Datas",
        data:
          chartType === "scatter plot"
            ? data.map((item, index) => ({
                x: index,  // x-axis is the index of the item
                y: item.value,  // y-axis is the value
              }))
            : data.map((item) => item.value), // For other chart types, use the value directly
        backgroundColor:
          chartType === "pie"
            ? [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ]
            : [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
        borderColor:
          chartType === "pie"
            ? [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ]
            : [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
        borderWidth: 1,
      },
    ],
  };

  // Return chart based on selected type
  if (chartType === "bar") {
    return <Bar data={chartData} options={{ responsive: true }} />;
  }
  if (chartType === "line") {
    return <Line data={chartData} options={{ responsive: true }} />;
  }
  if (chartType === "pie") {
    return <Pie data={chartData} options={{ responsive: true }} />;
  }
  if (chartType === "scatter plot") {
    return <Scatter data={chartData} options={{ responsive: true }} />;
  }

  // Default chart type (Bar)
  return <Bar data={chartData} options={{ responsive: true }} />;
};

export default DynamicChart;





















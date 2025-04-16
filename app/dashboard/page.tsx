"use client"; // Ensures the component runs on the client side
// import React, { useState, useEffect } from "react";
// import * as echarts from "echarts";
// import { useRouter } from "next/navigation"; // Import useRouter to handle redirection

// const DashboardPage = () => {
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState("");
//   const router = useRouter(); // Initialize useRouter

//   useEffect(() => {
//     // Fetch data for charts
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("http://127.0.0.1:5000/api/data", {
//           headers: {
//             Authorization: `Bearer ${token}`, // Pass token for authentication
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch chart data");
//         }

//         const data = await response.json();
//         setChartData(data);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (!chartData.length) return;

//     const chartDom = document.getElementById("chart");
//     const chart = echarts.init(chartDom as HTMLElement);

//     const option = {
//       title: { text: "Dynamic Chart Data", left: "center" },
//       tooltip: { trigger: "axis" },
//       xAxis: { type: "category", data: chartData.map((d: any) => d.key) },
//       yAxis: { type: "value" },
//       series: [
//         {
//           name: "Metric",
//           type: "bar",
//           data: chartData.map((d: any) => d.value),
//         },
//       ],
//     };

//     chart.setOption(option);

//     return () => chart.dispose();
//   }, [chartData]);

//   const handleLogout = () => {
//     // Clear token from localStorage
//     localStorage.removeItem("token");

//     // Redirect to the login page
//     router.push("/login");
//   };

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
//         >
//           Logout
//         </button>
//       </div>
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div id="chart" style={{ width: "100%", height: "400px" }}></div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;













// import React, { useState, useEffect } from "react";
// import * as echarts from "echarts";
// import { useRouter } from "next/navigation";

// const DashboardPage = () => {
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState("");
//   const [userEmail, setUserEmail] = useState<string | null>(null); // Store user email
//   const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch user email from localStorage
//     const email = localStorage.getItem("email");
//     setUserEmail(email);

//     // Fetch chart data
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("http://127.0.0.1:5000/api/data", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch chart data");
//         }

//         const data = await response.json();
//         setChartData(data);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (!chartData.length) return;

//     const chartDom = document.getElementById("chart");
//     const chart = echarts.init(chartDom as HTMLElement);

//     const option = {
//       title: { text: "Dynamic Chart Data", left: "center" },
//       tooltip: { trigger: "axis" },
//       xAxis: { type: "category", data: chartData.map((d: any) => d.key) },
//       yAxis: { type: "value" },
//       series: [
//         {
//           name: "Metric",
//           type: "bar",
//           data: chartData.map((d: any) => d.value),
//         },
//       ],
//     };

//     chart.setOption(option);

//     return () => chart.dispose();
//   }, [chartData]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//     router.push("/login");
//   };



//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//         <div className="relative">
//           <button
//             onClick={() => setDropdownVisible(!dropdownVisible)}
//             className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//           >
//             <span className="mr-2">👤</span>
//             {userEmail}
//           </button>
//           <button onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
//           >
//           Logout
//          </button>
        
//         </div>
//       </div>
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div id="chart" style={{ width: "100%", height: "400px" }}></div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;































// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import DynamicChart from "./DynamicChart"; // Import DynamicChart component

// const DashboardPage = () => {
//   const [chartData, setChartData] = useState<{ key: string; value: number }[]>([]);
//   const [error, setError] = useState("");
//   const [userEmail, setUserEmail] = useState<string | null>(null); // Store user email
//   const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state
//   const [selectedChartType, setSelectedChartType] = useState<string | null>(null); // Selected chart type
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch user email from localStorage
//     const email = localStorage.getItem("email");
//     setUserEmail(email);

//     // Fetch chart data
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("http://127.0.0.1:5000/api/data", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch chart data");
//         }

//         const data = await response.json();
//         setChartData(data);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//     router.push("/login");
//   };

//   const chartTypes = ["bar", "line", "pie", "scatter"]; // Chart options

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <div className="relative">
//           <button
//             onClick={() => setDropdownVisible(!dropdownVisible)}
//             className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//           >
//             <span className="mr-2">👤</span>
//             {userEmail || "User"}
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white ml-4"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : selectedChartType ? (
//         // Render DynamicChart when a chart is selected
//         <div>
//           <button
//             onClick={() => setSelectedChartType(null)}
//             className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
//           >
//             Back to Dashboard
//           </button>
//           <DynamicChart chartType={selectedChartType} data={chartData} />
//         </div>
//       ) : (
//         // Render four interactive boxes
//         <div className="grid grid-cols-2 gap-4">
//           {chartTypes.map((chartType) => (
//             <div
//               key={chartType}
//               onClick={() => setSelectedChartType(chartType)}
//               className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg cursor-pointer p-8 h-40"
//             >
//               <h2 className="text-xl font-semibold capitalize">{chartType} Chart</h2>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;





























// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import DynamicChart from "./DynamicChart";
// import GraphOptions from "./GraphOptions" // Import DynamicChart component

// const DashboardPage = () => {
//   const [chartData, setChartData] = useState<{ key: string; value: number }[]>([]);
//   const [error, setError] = useState("");
//   const [userEmail, setUserEmail] = useState<string | null>(null); // Store user email
//   const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state
//   const [selectedChartType, setSelectedChartType] = useState<string | null>(null); // Selected chart type
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch user email from localStorage
//     const email = localStorage.getItem("email");
//     setUserEmail(email);

//     // Fetch chart data
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("http://127.0.0.1:5000/api/data", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch chart data");
//         }

//         const data = await response.json();
//         setChartData(data);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//     router.push("/login");
//   };

//   const chartTypes = ["bar", "line", "pie", "scatter plot"]; // Available chart types

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <div className="relative">
//           <button
//             onClick={() => setDropdownVisible(!dropdownVisible)}
//             className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//           >
//             <span className="mr-2">👤</span>
//             {userEmail || "User"}
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white ml-4"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : selectedChartType ? (
//         // Render the selected chart using DynamicChart
//         <div>
//           <button
//             onClick={() => setSelectedChartType(null)}
//             className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
//           >
//             Back to Dashboard
//           </button>
//           <DynamicChart chartType={selectedChartType} data={chartData} />
//         </div>
//       ) : (
//         // Render buttons for selecting chart types
//         <div className="grid grid-cols-2 gap-4">
//           {chartTypes.map((chartType) => (
//             <button
//               key={chartType}
//               onClick={() => setSelectedChartType(chartType)}
//               className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-8 h-40 shadow-lg"
//             >
//               <h2 className="text-xl font-semibold capitalize">{chartType} Chart</h2>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;

















// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import DynamicChart from "./DynamicChart"; // Import DynamicChart component

// const DashboardPage = () => {
//   const [chartData, setChartData] = useState<{ key: string; value: number }[]>([]);
//   const [error, setError] = useState("");
//   const [userEmail, setUserEmail] = useState<string | null>(null); // Store user email
//   const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state
//   const [selectedChartType, setSelectedChartType] = useState<string | null>(null); // Selected chart type
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch user email from localStorage
//     const email = localStorage.getItem("email");
//     setUserEmail(email);

//     // Fetch chart data
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch("http://127.0.0.1:5000/api/data", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch chart data");
//         }

//         const data = await response.json();
//         setChartData(data);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("email");
//     router.push("/login");
//   };

//   const chartTypes = ["bar", "line", "pie", "scatter plot"]; // Available chart types

//   return (
//     <div className="p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//         <div className="relative">
//           <button
//             onClick={() => setDropdownVisible(!dropdownVisible)}
//             className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//           >
//             <span className="mr-2">👤</span>
//             {userEmail || "User"}
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white ml-4"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : selectedChartType ? (
//         // Render the selected chart using DynamicChart
//         <div>
//           <button
//             onClick={() => setSelectedChartType(null)}
//             className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
//           >
//             Back to Dashboard
//           </button>
//           {/* Set the width and height of the chart container */}
//           <div style={{ width: '900px', height: '600px' }}>
//             <DynamicChart chartType={selectedChartType} data={chartData} />
//           </div>
//         </div>
//       ) : (
//         // Render buttons for selecting chart types
//         <div className="grid grid-cols-2 gap-4">
//           {chartTypes.map((chartType) => (
//             <button
//               key={chartType}
//               onClick={() => setSelectedChartType(chartType)}
//               className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-8 h-40 shadow-lg"
//             >
//               <h2 className="text-xl font-semibold capitalize">{chartType} Chart</h2>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardPage;
























import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DynamicChart from "./DynamicChart"; // Import DynamicChart component

const DashboardPage = () => {
  const [chartData, setChartData] = useState<{ key: string; value: number }[]>([]);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null); // Store user email
  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility state
  const [selectedChartType, setSelectedChartType] = useState<string | null>(null); // Selected chart type
  const router = useRouter();

  useEffect(() => {
    // Fetch user email from localStorage
    const email = localStorage.getItem("email");
    setUserEmail(email);

    // Fetch chart data
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://127.0.0.1:5000/api/data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch chart data");
        }

        const data = await response.json();
        setChartData(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/login");
  };

  const chartTypes = ["bar", "line", "pie", "scatter plot"]; // Available chart types

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="relative">
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            <span className="mr-2">👤</span>
            {userEmail || "User"}
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white ml-4"
          >
            Logout
          </button>
        </div>
      </div>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : selectedChartType ? (
        // Render the selected chart using DynamicChart
        <div>
          <button
            onClick={() => setSelectedChartType(null)}
            className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            Back to Dashboard
          </button>
          {/* Set the width and height of the chart container */}
          <div style={{ width: '600px', height: '400px' }}>
            <DynamicChart chartType={selectedChartType} data={chartData} />
          </div>
        </div>
      ) : (
        // Render buttons for selecting chart types with vibrant colors
        <div className="grid grid-cols-2 gap-4">
          {chartTypes.map((chartType) => (
            <button
              key={chartType}
              onClick={() => setSelectedChartType(chartType)}
              className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l text-white rounded-lg p-8 h-40"
            >
              <h2 className="text-xl font-semibold capitalize">{chartType} Chart</h2>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
















// import dynamic from "next/dynamic";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import DynamicChart from "@components/DynamicChart";


// const Dashboard: React.FC = () => (
//   <div className="flex min-h-screen">
//     <Sidebar />
//     <main className="flex-1 bg-gray-100">
//       <Header />
//       <div className="p-4">
//         <DynamicChart />
//       </div>
//     </main>
//   </div>
// );

// export default Dashboard;

"use client";

// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import DynamicChart from "../components/DynamicChart";

// const Dashboard: React.FC = () => (
//   <div className="flex flex-col md:flex-row min-h-screen">
//     {/* Sidebar */}
//     <Sidebar />

//     {/* Main Content */}
//     <main className="flex-1 bg-gray-100">
//       <Header />
//       <div className="p-4">
//         {/* Chart Area */}
//         <DynamicChart />
//       </div>
//     </main>
//   </div>
// );

// export default Dashboard;



// Dashboard.tsx
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import DynamicChart from "../components/DynamicChart";

// const Dashboard: React.FC = () => (
//   <div className="flex flex-col md:flex-row min-h-screen">
//     <Sidebar />
//     <div className="flex-1 flex flex-col">
//       <Header />
//       <main className="p-4 bg-gray-100 flex-1">
//         <DynamicChart />
//       </main>
//     </div>
//   </div>
// );

// export default Dashboard;

// import { useEffect, useState } from "react";
// import ChartContainer from "../components/ChartContainer";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// const Dashboard: React.FC = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch user-specific data from backend
//     fetch("http://127.0.0.1:5000/api/data")
//       .then((res) => res.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Header title="IT System Dashboard" />
//         <main className="p-6">
//           <ChartContainer data={data} />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter for redirection
// import ChartContainer from "../components/ChartContainer";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

// const Dashboard: React.FC = () => {
//   const [data, setData] = useState([]);
//   const router = useRouter(); // Initialize useRouter to handle redirects

//   useEffect(() => {
//     // Fetch the user's token from localStorage
//     const token = localStorage.getItem("token");

//     // if (!token) {
//     //   // If no token is found, redirect to the login page
//     //   router.push("/login");
//     //   return;
//     // }

//     // Fetch user-specific data from backend if token is present
//     fetch("http://127.0.0.1:5000/api/data", {
//       headers: {
//         Authorization: `Bearer ${token}`, // Use token for authentication
//       },
//     })
//       .then((res) => res.json())
//       .then((jsonData) => setData(jsonData))
//       .catch((err) => console.error(err));
//   }, [router]);

//   const handleLogout = () => {
//     // Clear token from localStorage
//     localStorage.removeItem("token");

//     // Redirect to the login page
//     router.push("/login");
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1">
//         <Header title="IT System Dashboard" onLogout={handleLogout} /> {/* Pass handleLogout as prop */}
//         <main className="p-6">
//           <ChartContainer data={data} />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;









// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import DynamicChart from "../components/DynamicChart";

// const Dashboard: React.FC = () => {
//   const [data, setData] = useState<{ key: string; value: number }[]>([]);
//   const [chartType, setChartType] = useState<string>("bar"); // Default chart type
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.push("/login");
//       return;
//     }

//     fetch("http://127.0.0.1:5000/api/data", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((jsonData) => {
//         // Assuming API returns an array of objects with 'key' and 'value'
//         const formattedData = jsonData.map((item: any) => ({
//           key: item.key,
//           value: item.value,
//         }));
//         setData(formattedData);
//       })
//       .catch((err) => console.error(err));
//   }, [router]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     router.push("/login");
//   };


















import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DynamicChart from "../components/DynamicChart";

const Dashboard: React.FC = () => {
    const [data, setData] = useState([]);
    const [chartType, setChartType] = useState<string>("bar");
    const router = useRouter(); // Initialize useRouter to handle redirects
  
    useEffect(() => {
      // Fetch the user's token from localStorage
      const token = localStorage.getItem("token");
  
      // if (!token) {
      //   // If no token is found, redirect to the login page
      //   router.push("/login");
      //   return;
      // }
  
      // Fetch user-specific data from backend if token is present
      fetch("http://127.0.0.1:5000/api/data", {
        headers: {
          Authorization: `Bearer ${token}`, // Use token for authentication
        },
      })
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData))
        .catch((err) => console.error(err));
    }, [router]);
  
    const handleLogout = () => {
      // Clear token from localStorage
      localStorage.removeItem("token");
  
      // Redirect to the login page
      router.push("/login");
    };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="IT System Dashboard" onLogout={handleLogout} />
        <main className="p-6">
          <div className="mb-4">
            <label htmlFor="chartType" className="block text-sm font-medium text-gray-700">
              Select Chart Type:
            </label>
            <select
              id="chartType"
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
              <option value="pie">Pie Chart</option>
              <option value="scatter">Scatter Plot</option>
            </select>
          </div>

          {/* DynamicChart component integration */}
          <DynamicChart chartType={chartType} data={data} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;













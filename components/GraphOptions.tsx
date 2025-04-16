// import React from "react";

// interface Props {
//   chartType: string;
//   setChartType: (type: string) => void;
// }

// const GraphOptions: React.FC<Props> = ({ chartType, setChartType }) => {
//   return (
//     <div className="mb-4">
//       <label className="block mb-2 text-gray-700 font-bold">Select Chart Type:</label>
//       <select
//         value={chartType}
//         onChange={(e) => setChartType(e.target.value)}
//         className="p-2 border rounded"
//       >
//         <option value="bar">Bar Chart</option>
//         <option value="line">Line Chart</option>
//         <option value="pie">Pie Chart</option>
//       </select>
//     </div>
//   );
// };

// export default GraphOptions;





import React from "react";

interface Props {
  chartType: string;
  setChartType: (type: string) => void;
}

const GraphOptions: React.FC<Props> = ({ chartType, setChartType }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700 font-bold">Select Chart Type:</label>
      <select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="bar">Bar Chart</option>
        <option value="line">Line Chart</option>
        <option value="pie">Pie Chart</option>
        <option value="scatter">Scatter Plot</option>
      </select>
    </div>
  );
};

export default GraphOptions;


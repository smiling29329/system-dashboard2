// // const Sidebar: React.FC = () => {
// //   return (
// //     <aside className="bg-gray-800 text-white p-4 w-64">
// //       <ul>
// //         <li>Dashboard</li>
// //         <li>Settings</li>
// //       </ul>
// //     </aside>
// //   );
// // };

// // export default Sidebar;

// const Sidebar: React.FC = () => {
//   return (
//     <aside className="bg-gray-800 text-white w-64 min-h-screen">
//       <nav>
//         <ul>
//           <li className="p-4 hover:bg-gray-700">
//             <a href="/dashboard">Dashboard</a>
//           </li>
//           <li className="p-4 hover:bg-gray-700">
//             <a href="/auth/login">Logout</a>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-6 text-xl font-bold">Dashboard</div>
      <nav className="flex-grow">
        <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
          Dashboard
        </Link>
        <Link href="/login" className="block py-2 px-4 hover:bg-gray-700">
          Login
        </Link>
        <Link href="/register" className="block py-2 px-4 hover:bg-gray-700">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;


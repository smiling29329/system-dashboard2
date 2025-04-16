// "use client";
// import React, { useState } from "react";
// import api from "../../utils/api";

// const Register: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     try {
//       await api.post("/register", { email, password });
//       setSuccess("Registration successful. You can now log in.");
//     } catch (err: any) {
//       setError(err.response?.data?.error || "Registration failed.");
//     }
//   };

//   return (
//     <form onSubmit={handleRegister} className="p-6 max-w-md mx-auto bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
//       {error && <div className="text-red-600 bg-red-100 p-2 rounded mb-4">{error}</div>}
//       {success && <div className="text-green-600 bg-green-100 p-2 rounded mb-4">{success}</div>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded"
//       />
//       <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
//         Register
//       </button>
//     </form>
//   );
// };

// export default Register;



"use client";
// import React, { useState } from "react";
// import axios from "axios"; // Assuming axios is used to handle requests to the backend

// const Register: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       // Send POST request to Flask backend
//       const response = await axios.post("http://127.0.0.1:5000/register", {
//         email,
//         password,
//       });

//       // Handle successful registration
//       setSuccess("Registration successful. You can now log in.");
//       setEmail(""); // Clear email input
//       setPassword(""); // Clear password input
//     } catch (err: any) {
//       // Handle error from the backend
//       setError(err.response?.data?.error || "Registration failed.");
//     }
//   };

//   return (
//     <form onSubmit={handleRegister} className="p-6 max-w-md mx-auto bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
//       {error && <div className="text-red-600 bg-red-100 p-2 rounded mb-4">{error}</div>}
//       {success && <div className="text-green-600 bg-green-100 p-2 rounded mb-4">{success}</div>}
      
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded"
//       />
      
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded"
//       />
      
//       <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
//         Register
//       </button>
//     </form>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import axios from "axios";

// const Register: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       // Make a POST request to your Flask backend
//       const response = await axios.post("http://127.0.0.1:5000/register", { email, password });

//       // Handle success response
//       setSuccess("Registration successful. You can now log in.");
//     } catch (err: any) {
//       // Handle error response
//       setError(err.response?.data?.error || "Registration failed.");
//     }
//   };

//   return (
//     <form onSubmit={handleRegister} className="p-6 max-w-md mx-auto bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
//       {error && <div className="text-red-600 bg-red-100 p-2 rounded mb-4">{error}</div>}
//       {success && <div className="text-green-600 bg-green-100 p-2 rounded mb-4">{success}</div>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded"
//       />
//       <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
//         Register
//       </button>
//     </form>
//   );
// };

// export default Register;


import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter(); // Initialize router

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Make a POST request to your Flask backend
      const response = await axios.post("http://127.0.0.1:5000/register", { email, password });

      // Handle success response
      setSuccess("Registration successful. Redirecting to login...");
      setTimeout(() => {
        router.push("/login"); // Redirect to login page after registration
      }, 1500); // Optional delay for better UX
    } catch (err: any) {
      // Handle error response
      setError(err.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
      {error && <div className="text-red-600 bg-red-100 p-2 rounded mb-4">{error}</div>}
      {success && <div className="text-green-600 bg-green-100 p-2 rounded mb-4">{success}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="block w-full mb-4 p-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
        Register
      </button>
    </form>
  );
};

export default Register;



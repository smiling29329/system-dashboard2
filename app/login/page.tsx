// // Add this line at the top of your file
"use client";

// import React, { useState } from "react";
// import api from "../../utils/api";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);
//     try {
//       const response = await api.post("http://127.0.0.1:5000/login", { email, password });
//       alert("Login successful");
//       localStorage.setItem("token", response.data.token);
//     } catch (error: any) {
//       const errorMessage =
//         error.response?.data?.error || "Login failed. Please try again.";
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto bg-white shadow rounded">
//       <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
//       {error && <div className="text-red-600 bg-red-100 p-2 rounded mb-4">{error}</div>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         className="block w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//         className={`w-full p-2 rounded bg-blue-600 text-white ${loading ? "opacity-50" : "hover:bg-blue-700"}`}
//         disabled={loading}
//       >
//         {loading ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// };

// export default Login;




















import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import api from "../../utils/api";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter for navigation

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await api.post("http://127.0.0.1:5000/login", { email, password });

      // Store token and user email in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", email);

      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "Login failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      {error && <div className="text-red-600 bg-red-100 p-2 rounded mb-4">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="block w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="block w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className={`w-full p-2 rounded bg-blue-600 text-white ${loading ? "opacity-50" : "hover:bg-blue-700"}`}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;





// import React, { useState } from "react";
// import axios from "axios";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/login", { email, password });
//       localStorage.setItem("token", response.data.token);
//       alert("Login successful");
//       // Redirect to dashboard
//     } catch (err: any) {
//       setError(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Login</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;

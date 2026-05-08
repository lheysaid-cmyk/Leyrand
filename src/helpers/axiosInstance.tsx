import axios from "axios";
// import { toast } from "sonner";

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: "https://leyrand.co.tz/cms/wp-json/wp/v2/", // Adjust this if your API is under a different prefix
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // withCredentials: true, // Important for CSRF protection with cookies
});

// // Global error handling (optional)
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       const { status, data } = error.response;

//       switch (status) {
//         case 401:
//           console.warn("Unauthorized! Redirecting to login...");

//           if (!window.location.pathname.startsWith("/account")) {
//             //   only for non login and signup pages, other pages redirect to login page
//             window.location.href = "/account/login"; // Redirect user to login page
//           }
//           break;

//         case 403:
//           console.error(
//             "Permission denied!",
//             data?.detail || "Access forbidden."
//           );
//           // alert("You do not have permission to perform this action.");
//           toast.error("You do not have permission to perform this action.");
//           break;

//         case 500:
//           console.error("Server error:", data);
//           // alert("A server error occurred. Please try again later.");
//           toast.error("A server error occurred. Please try again later.");
//           break;

//         default:
//           console.error(`Unhandled error (${status}):`, data);
//       }
//     } else {
//       console.error("Network error or no response from server.");
//       // alert("Unable to connect to the server. Please check your connection.");
//       toast.error(
//         "Unable to connect to the server. Please check your connection."
//       );
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;

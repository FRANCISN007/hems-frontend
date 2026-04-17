// src/api/authService.js
import axios from "axios";
import getBaseUrl from "./config";

// ✅ Stable BASE URL (NO runtime switching, NO localhost fallback)
const BASE_URL =
  getBaseUrl() ||
  process.env.REACT_APP_API_BASE_URL ||
  "https://hems-backend-nkfz.onrender.com";

console.log("✅ API BASE:", BASE_URL);

// ✅ Axios instance
const authClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ==========================
// ✅ LOGIN USER
// ==========================
export const loginUser = async (username, password) => {
  try {
    const formData = new URLSearchParams();
    formData.append("username", username);
    formData.append("password", password);

    const response = await authClient.post("/users/token", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const user = response.data;

    // ✅ Save auth data
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", user.access_token);

    return user;
  } catch (error) {
    console.error("❌ Login failed:", error);

    throw (
      error.response?.data || {
        message: "Login failed. Please check your credentials.",
      }
    );
  }
};

// ==========================
// ✅ REGISTER USER
// ==========================
export const registerUser = async ({
  username,
  password,
  roles,
  admin_password,
}) => {
  try {
    const response = await authClient.post("/users/register/", {
      username,
      password,
      roles,
      admin_password,
    });

    return response.data;
  } catch (error) {
    console.error("❌ Registration failed:", error);

    throw (
      error.response?.data || {
        message: "Registration failed",
      }
    );
  }
};

// ==========================
// ✅ GET CURRENT USER
// ==========================
export const getCurrentUser = () => {
  try {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  } catch (err) {
    console.error("❌ Error reading user:", err);
    return null;
  }
};

// ==========================
// ✅ LOGOUT USER
// ==========================
export const logoutUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

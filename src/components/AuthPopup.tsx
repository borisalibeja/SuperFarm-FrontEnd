import React, { useState } from "react";
import api from "../api/axios";
import { AxiosError } from "axios";
import { UserLoginDto, TokenResponseDto } from "../types/auth";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
  mode: "login" | "signup";
}

const AuthPopup: React.FC<Props> = ({ onClose, onSuccess, mode }) => {
  const isLogin = mode === "login";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleLogin = async () => {
    const payload: UserLoginDto = {
      username,
      password,
    };

    try {
      const response = await api.post<TokenResponseDto>("/Auth/login", payload);
      console.log("AccessToken:", response.data.accessToken);
      console.log("RefreshToken:", response.data.refreshToken);
      console.log("Login successful!");
      onSuccess();
      // Store the tokens as needed, e.g., in localStorage
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.error("Login error:", err.response?.data || err.message);
      alert("Login failed.");
    }
  };

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await api.post("/Auth/register", {
        username,
        password,
        repeatPassword,
      });
      console.log("Signup success:", response.data);
      onSuccess();
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.error("Signup error:", err.response?.data || err.message);
      alert("Signup failed.");
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 w-[450px] border rounded shadow-md z-50">
      <h2 className="text-xl font-bold mb-4">{isLogin ? "Log In" : "Sign Up"}</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      {!isLogin && (
        <input
          type="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
      )}

      <button
        className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded w-full"
        onClick={isLogin ? handleLogin : handleRegister}
      >
        {isLogin ? "Log In" : "Register"}
      </button>

      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer text-sm"
      >
        ✖
      </button>
    </div>
  );
};

export default AuthPopup;
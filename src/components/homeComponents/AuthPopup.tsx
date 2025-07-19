import React, { useState } from "react";
import api from "../../api/axios";
import axios, { AxiosError } from "axios";
import { UserLoginDto, TokenResponseDto } from "../../types/auth";
import { User } from "../../types/User";
import { useUser } from "../../hooks/useUser";

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
  const { setUser } = useUser();

  const handleLogin = async () => {
    const payload: UserLoginDto = {
      username,
      password,
    };

    try {
      const responseToken = await api.post<TokenResponseDto>(
        "/Auth/login",
        payload
      );
      console.log("AccessToken:", responseToken.data.accessToken);
      console.log("RefreshToken:", responseToken.data.refreshToken);
      console.log("Login successful!");
      onSuccess();
      // Store the tokens as needed, e.g., in localStorage
      localStorage.setItem("accessToken", responseToken.data.accessToken);
      localStorage.setItem("refreshToken", responseToken.data.refreshToken);

      const token = localStorage.getItem("accessToken");
      const response = await axios.get<User>(
        "http://localhost:5035/myUserInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));

      console.log("User data fetched and saved:", response.data);
      console.log("Auth Pop up:", response.data);
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 w-[400px] border rounded-2xl shadow-md z-50">
      <h2 className="text-xl text-white flex justify-center items-center font-bold mb-4">
        {isLogin ? "Log In" : "Sign Up"}
      </h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-2 p-2 border text-white rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded-lg text-white"
      />

      {!isLogin && (
        <input
          type="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          className="w-full mb-4 p-2 text-white border rounded-lg"
        />
      )}

      <button
        className="bg-blue-500 text-white px-4 py-2 cursor-pointer rounded w-full"
        onClick={isLogin ? handleLogin : handleRegister}
      >
        {isLogin ? "Log In" : "Register"}
      </button>

      <button
        onClick={onClose}
        className="absolute top-3 right-3 p-2  rounded-full bg-gray-700 cursor-pointer hover:bg-black  text-m"
      >
        ✖
      </button>
    </div>
  );
};

export default AuthPopup;

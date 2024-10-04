import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation after successful login

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (values.username === "" || values.password === "") {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "https://readwitha-1.onrender.com/api/v1/sign-in",
        values
      );
      // console.log(response.data.id);
      dispatch(authActions.login());
      dispatch(authActions.changeRole(response.data.role));
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      navigate("/profile");
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      alert(error.response.data.message);
    }
  };

  return (
    <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-2xl px-8 py-5 w-full md:w-3/6 lg:w-2/6">
        <p className="text-zinc-200 text-3xl font-bold mb-4">Login</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label
                htmlFor="username"
                className="text-zinc-400 text-lg font-medium"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-xl border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300 ease-in-out text-base"
                placeholder="Username"
                name="username"
                id="username"
                required
                value={values.username}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="text-zinc-400 text-lg font-medium"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full mt-2 bg-zinc-900 text-zinc-100 p-3 outline-none rounded-xl border border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300 ease-in-out text-base"
                placeholder="Password"
                name="password"
                id="password"
                required
                value={values.password}
                onChange={handleChange}
              />
            </div>

            {error && <div className="mt-4 text-red-500">{error}</div>}

            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-lg"
                onSubmit={handleSubmit}
              >
                Login
              </button>
            </div>

            <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold text-lg">
              or
            </p>
            <p className="flex mt-4 items-center justify-center text-zinc-500 font-medium text-lg">
              Don't have an account?{" "}
              <a
                className="text-blue-500 hover:underline font-semibold"
                href="/signup" // Assuming you have a route for signup
              >
                Sign Up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

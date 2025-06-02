"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  SignInStart,
  SignInSuccess,
  SignInFailure,
} from "@/lib/features/user/userSlice";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error,currentUser } = useSelector((state) => state.user);
console.log("currentUser",currentUser)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    let newErrors = { email: "", password: "" };

    // Validation
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    dispatch(SignInStart());

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        { username: formData.email, password: formData.password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        dispatch(SignInSuccess(response.data));
        window.location.href = "/";
      } else {
        setErrors({
          ...errors,
          general:
            response.data.message || "Unexpected response from the server.",
        });
      }
    } catch (error) {
      console.error(error);
      dispatch(SignInFailure("Login failed. Please check your credentials."));
    } 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="absolute">
        <Image
          src="/img/Display/background_auth.png"
          alt="alt"
          width={1440}
          height={1440}
          className="h-screen w-screen blur-sm"
        />
      </div>
      <div className="relative h-screen flex items-center py-[50px]">
        <div className="info-container flex flex-col justify-between mx-[3%] bg-white shadow-lx md:min-h-[800px] max-h-[845px] max-w-[716px] w-full px-[8%] py-[3%] rounded-2xl md:rounded-[40px] border-[1px]">
          <h1 className="md:text-[36px] text-[26px] font-semibold w-full flex justify-center text-[#192a56] mb-9 md:mb-0">
            Welcome
          </h1>
          <form
            onSubmit={handleSubmit}
            className="md:text-[20px] flex flex-col w-full items-start gap-2"
          >
            <div className="relative w-full">
              <label htmlFor="email">Email Number</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email or Phone Number"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative w-full">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px] pr-12"
                id="password"
              />
              <button
                type="button"
                className="absolute right-4 top-[58px] translate-y-[-80%] md:translate-y-[-50%] text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Image
                    src="/img/icons/open_eye.svg"
                    alt="alt"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/img/icons/closed_eye.svg"
                    alt="alt"
                    width={20}
                    height={20}
                  />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-between md:text-[20px] mt-4 w-full">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  style={{
                    accentColor: "green",
                    WebkitAppearance: "checkbox",
                  }}
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <Link href={"/"} className="text-gray-400">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`text-[24px] text-white bg-[#192a56] h-[55px] rounded-[10px] my-10 md:my-0 w-full flex justify-center items-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Loading..." : "Login"}
            </button>
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
          </form>
          <div className="flex gap-2 items-center md:text-[20px]">
            <span className="w-full h-[1px] bg-black"></span>
            <span>or</span>
            <span className="w-full h-[1px] bg-black"></span>
          </div>
          <div className="flex justify-center gap-10 my-10 md:my-0 items-center">
            <button>
              <Image
                src="/img/icons/social/_google.png"
                alt="alt"
                width={30}
                height={30}
                className="md:w-[45px] md:h-[46px]"
              />
            </button>
            <button>
              <Image
                src="/img/icons/social/_email.png"
                alt="alt"
                width={30}
                height={30}
                className="md:w-[50px] md:h-[37.45px]"
              />
            </button>
            <button>
              <Image
                src="/img/icons/social/_facebook.png"
                alt="alt"
                width={30}
                height={30}
                className="md:w-[60px] md:h-[60px]"
              />
            </button>
          </div>
          <div className="w-full flex justify-center">
            Don’t have an account?{" "}
            <Link className="text-[#192a56]" href={"/signup"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

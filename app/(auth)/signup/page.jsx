"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import EmailOTPF from "@/components/EmailOTP_MODAL/EmailOTP";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const { googleSignUp, setUser } = useContext(AuthContext);
  // console.log(name)
  const router = useRouter()
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    retypePassword: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [retypePassword, setRetypePassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    retypePassword: "",
    general: "",
  });
  const [modalOpen, setModalOpen] = useState(false); // Control modal state

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, phone, address } = formData;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      retypePassword: "",
    };

    // Validation
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!phone) newErrors.phone = "Phone Number is required.";
    if (!address) newErrors.address = "Address is required.";
    if (!password) newErrors.password = "Password is required.";
    if (password !== retypePassword)
      newErrors.retypePassword = "Passwords do not match.";

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.phone ||
      newErrors.address ||
      newErrors.password ||
      newErrors.retypePassword
    ) {
      setErrors(newErrors);
      return;
    }


    // Creating form data
    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone);
    formDataToSend.append("address", address);
    formDataToSend.append("password", password);
    formDataToSend.append("role", "user");
    try {
      // Use a placeholder image URL
      const imageResponse = await fetch("/img/icons");
      const imageBlob = await imageResponse.blob();
      formDataToSend.append("defaultPicture", imageBlob, "placeholder.png");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.status === 201) {
        setModalOpen(true); // Open OTP modal on successful signup
      }
    } catch (error) {
      console.error(error);
      setErrors({
        ...errors,
        general: "Signup failed. Please try again.",
      });
    }
  };

  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        //console.log(user);
        router.push('/')

        setUser(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // console.log(errorCode);

      });
  }

  return (
    <div>
      <div className=" absolute">
        <Image
          src="/img/Display/background_auth.png"
          alt="alt"
          width={1440}
          height={1440}
          className="h-screen w-screen blur-sm"
        />
      </div>
      <div className=" relative h-screen flex items-center py-[50px]">
        <div className="info-container flex flex-col justify-between mx-[3%] bg-white shadow-lx md:min-h-[800px]  max-w-[716px] w-full px-[8%] py-[1%] rounded-2xl md:rounded-[40px] border-[1px]">
          <h1 className="md:text-[36px] text-[26px] font-semibold w-full flex justify-center text-[#192a56] mb-9 md:mb-0 ">
            Create Account
          </h1>
          <div className="md:text-[20px] flex flex-col w-full items-start gap-2">
            <div className="relative w-full">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your username"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="relative w-full">
              <label htmlFor="">Email</label>
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
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="relative w-full">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px]"
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="relative w-full">
              <label htmlFor="password">Password</label>
              <input
                type={passwordVisibility.password ? "text" : "password"}
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
                onClick={() => togglePasswordVisibility("password")}
              >
                {passwordVisibility.password ? (
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
            <div className="relative w-full">
              <label htmlFor="retypePassword">Retype Password</label>
              <input
                type={passwordVisibility.retypePassword ? "text" : "password"}
                name="retypePassword"
                value={retypePassword}
                onChange={(e) => {
                  setRetypePassword(e.target.value);
                  setErrors({
                    ...errors,
                    [e.target.name]: "",
                  });
                }}
                placeholder="Enter your Retype password"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px] pr-12"
                id="retypePassword"
              />
              <button
                type="button"
                className="absolute right-4 top-[58px] translate-y-[-80%] md:translate-y-[-50%] text-gray-600"
                onClick={() => togglePasswordVisibility("retypePassword")}
              >
                {passwordVisibility.retypePassword ? (
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
              {errors.retypePassword && (
                <p className="text-red-500 text-sm">{errors.retypePassword}</p>
              )}
            </div>
            <div className="text-[24px] text-white w-full bg-[#192a56] h-[55px] rounded-[10px] my-5 md:my-5">
              <button
                type="submit"
                className="w-full flex justify-center items-center h-full"
                onClick={handleSubmit}
              >
                Signup
              </button>
            </div>
            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-full h-[1px] bg-black"></span>
            <span>or</span>
            <span className="w-full h-[1px] bg-black"></span>
          </div>
          <div className="flex justify-center gap-4  items-center">
            <button className="py-2 px-2 bg-[#192a56] text-white rounded flex gap-2 
            " onClick={handleGoogleSignUp} ><FaGoogle className="text-2xl" /><span>SignUp With Google</span></button>
            <button className="py-2 px-2 gap-2 bg-[#192a56] text-white rounded flex 
            "><FaFacebook className="text-2xl" /><span>SignUp With Facebook</span></button>

          </div>
          <div className="w-full flex justify-center">
            Already have an account?{" "}
            <Link className="text-[#192a56]" href={"/signin"}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <EmailOTPF modalOpen={modalOpen} email={formData.email} />
    </div>
  );
};

export default SignUp;

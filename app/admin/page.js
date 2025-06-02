"use client";
import { useSelector } from "react-redux";
import {  } from "next/router";
import { useRouter } from "next/navigation";

const AdminDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const router = useRouter();
console.log("currentUser",currentUser)  
  // Check if the user has the 'user' role and redirect if necessary
  if (currentUser?.role === "user") {
    router.push("/"); // Redirect to homepage or another page if the user role is "user"
    return null; // Prevent rendering the dashboard for non-admin users
  }

  return (
    <>
      {/* Add your admin dashboard content here */}
      <h1>Welcome to the Admin Dashboard</h1>
      {/* Add additional admin components and content */}
    </>
  );
};

export default AdminDashboard;

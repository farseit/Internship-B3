"use client";
import React, { createContext, useContext, useState } from "react";

// Create the context
const SidebarContext = createContext();

// SidebarProvider component that will wrap other components and provide the context
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Hook to access SidebarContext values in other components
export const useSidebarContext = () => useContext(SidebarContext);

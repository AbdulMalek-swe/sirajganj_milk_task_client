"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import {  usePathname } from "next/navigation";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { loggedIn } from "./service/user/authSlice";
import Navbar from "@/components/Navbar/Navbar";
 
const CustomProvider = ({ children }) => {
  
    
  return <Provider store={store}><Navbar/> {children}</Provider>;
};

export default CustomProvider;
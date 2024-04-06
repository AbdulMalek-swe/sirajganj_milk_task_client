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
  const router = useRouter()
  const path = usePathname();
   
  const local = JSON.parse(localStorage.getItem("auth"));
  
    if(local?.token){
        store.dispatch(loggedIn({accesstoken:local?.token,user:local?.user}))
    }
  if (path.includes("dashboard") && local?.user?.role !== "admin") {
   return router.push('/');
  }
  if(path.includes("auth") &&local?.token){
    return router.push('/');
  }
  return <Provider store={store}><Navbar/> {children}</Provider>;
};

export default CustomProvider;
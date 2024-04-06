"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import {  usePathname } from "next/navigation";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
const CustomProvider = ({ children }) => {
  const router = useRouter()
  const path = usePathname();
  const local = JSON.parse(localStorage.getItem("auth"));
 
  if (path.includes("dashboard") && local?.user?.role !== "admin") {
    router.push('/');
  }
  return <Provider store={store}>{children}</Provider>;
};

export default CustomProvider;
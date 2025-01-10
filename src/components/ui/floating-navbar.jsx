"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const FloatingNav = ({ className }) => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit pl-[14px] fixed top-10 right-10 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/90 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 py-2 items-center justify-center",
        className
      )}
    >
      <Link to="/signin">
        <button
          aria-label="Login"
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </Link>
    </motion.div>
  );
};

"use client";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

type PrimaryButtonProps = {
  icon?: React.ReactNode;
  className?: string;
  title: string;
  isLoading?: boolean;
};

export default function PrimaryButton({
  icon,
  title,
  className,
  isLoading = false,
}: PrimaryButtonProps) {
  return (
    <motion.button
      className={cn(
        "flex items-center gap-2 bg-main-700 text-main-600 font-[600] py-3 rounded-md px-4 hover:bg-main-600 hover:text-main-700 ease duration-300",
        className
      )}
      disabled={isLoading}
      whileTap={{ scale: 0.75 }}
    >
      {isLoading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="text-xl"
        >
          <AiOutlineLoading3Quarters />
        </motion.div>
      ) : (
        icon && icon
      )}
      <span>{isLoading ? "Loading..." : title}</span>
    </motion.button>
  );
}

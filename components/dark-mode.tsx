"use client";

import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCloudSun, FaCloudMoon } from "react-icons/fa";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function DarkMode() {
  const { darkMode, setDarkMode } = useTheme();

  const [isOn, setIsOn] = useState(darkMode);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    setDarkMode(!isOn);
  };

  useEffect(() => {
    setIsOn(darkMode);
  }, [darkMode]);

  return (
    <div
      className={`switch ${
        darkMode ? "bg-[#ffffff66]" : "bg-[#33333366]"
      } block`}
      data-ison={isOn}
      onClick={toggleSwitch}
    >
      <motion.div className="handle" layout transition={spring}>
        <div className="flex items-center justify-center h-full">
          {isOn ? <FaCloudMoon /> : <FaCloudSun />}
        </div>
      </motion.div>
    </div>
  );
}

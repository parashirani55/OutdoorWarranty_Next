"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
// Example: import AOS from "aos";
// import "aos/dist/aos.css";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ Optional one-time init
  useEffect(() => {
    // Example: Initialize libraries only once
    // AOS.init({ duration: 800, once: true });
    console.log("Client initialized 🎯");
  }, []);

  return (
    <>
      <ProgressBar
        height="4px"
        color="#59d24f"
        options={{ showSpinner: false }}
        shallowRouting
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-white"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}

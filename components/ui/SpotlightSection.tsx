"use client";
import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SpotlightSection.module.css";

/**
 * Wraps a section in an ambient spotlight effect — as the section
 * enters the viewport, a soft radial glow blooms from below,
 * then fades. Subtle enough to feel natural, visible enough
 * to signal "this is where you are now."
 */
export default function SpotlightSection({
  children,
  color = "olive",
  className,
}: {
  children: ReactNode;
  color?: "olive" | "terra" | "warm";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-15% 0px -15% 0px" });

  const glowColors = {
    olive: "rgba(130,139,110,0.28)",
    terra: "rgba(184,105,74,0.22)",
    warm: "rgba(228,221,204,0.55)",
  };

  return (
    <div ref={ref} className={`${styles.wrap} ${className ?? ""}`}>
      <motion.div
        className={styles.glow}
        // style={{
        //   background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${glowColors[color]}, transparent)`,
        // }}
        style={{ background: `radial-gradient(ellipse 90% 70% at 50% 50%, ${glowColors[color]}, transparent)` }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.92 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={styles.content}
        animate={{ opacity: isInView ? 1 : 0.85 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

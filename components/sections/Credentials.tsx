"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Credentials.module.css";

const docs = [
  {
    src: "/documents/diploma.jpeg",
    caption: "Диплом про вищу освіту",
    title: "Психологічна освіта",
  },
  {
    src: "/documents/propedeutics.jpg",
    caption: "Пропедевтика психіатрії · НАГТУ, 2026",
    title: "Пропедевтика психіатрії",
  },
  {
    src: "/documents/group-processes.jpg",
    caption: "Групові процеси у психотерапії · НАГТУ, 2026",
    title: "Групові процеси у психотерапії",
  },
  {
    src: "/documents/conference.jpg",
    caption: "XX Всеукраїнська гештальт конференція",
    title: "XX Всеукраїнська гештальт конференція",
  },
  {
    src: "/documents/identity-boundaries.jpg",
    caption: "«Грані ідентичності» · НАГТУ, 2025",
    title: "Грані ідентичності",
  },
];

export default function Credentials() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className={styles.section} id="documents">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.label}>Документи та навчання</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className={styles.intro}>
            Освіта та постійний професійний розвиток — те, на що я опираюся в
            роботі.
          </p>
        </Reveal>
        <div className={styles.scrollArea}>
          {docs.map((d, i) => (
            <div
              key={i}
              className={styles.item}
              data-cursor="дивитись"
              onClick={() => setActive(i)}
            >
              <div className={styles.thumb}>
                <Image
                  src={d.src}
                  alt={d.title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                  sizes="208px"
                />
              </div>
              <p className={styles.caption}>{d.caption}</p>
            </div>
          ))}
        </div>
        <p className={styles.hint}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          гортай, щоб переглянути всі
        </p>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(44,46,38,0.92)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              cursor: "zoom-out",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "600px",
                aspectRatio: "3/4",
              }}
            >
              <Image
                src={docs[active].src}
                alt={docs[active].title}
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

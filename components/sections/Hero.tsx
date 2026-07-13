"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.div
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span>Ірина Матлаєва · психологиня</span>
          </motion.div>

          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Іноді життя рухається так швидко, що ми перестаємо помічати...
          </motion.h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease }}
          >
            ...себе.
            <br />
            ...тих, хто поруч.
            <br />
            ...те, що для нас справді важливо.
          </motion.p>

          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
          >
            Не завжди можна змінити темп життя.
            <br />
            Але можна змінити те, як ти живеш усередині нього.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease }}
          >
            <MagneticButton
              href="#contact"
              className="btn-primary"
              cursorLabel="написати"
            >
              Записатися на консультацію
            </MagneticButton>
            <p className={styles.pause}>
              Індивідуальна терапія • Парна терапія • Терапевтичні групи
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.photoWrap}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
        >
          <Image
            src="/hero.jpg"
            alt="Ірина Матлаєва — психологиня"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              transform: "scaleX(-1)",
            }}
            priority
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}

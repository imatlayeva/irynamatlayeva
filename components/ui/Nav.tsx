"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";

const links = [
  { href: "#mirror", label: "Про кого" },
  { href: "#therapy", label: "Терапія" },
  { href: "#formats", label: "Формати" },
  { href: "#about", label: "Про мене" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          Ірина Матлаєва
        </a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <a href="#contact" className={styles.cta}>
            Записатися
          </a>
          <button
            className={styles.burger}
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            <span
              className={`${styles.burgerLine} ${open ? styles.burgerLineOpen1 : ""}`}
            />
            <span
              className={`${styles.burgerLine} ${open ? styles.burgerLineOpen2 : ""}`}
            />
            <span
              className={`${styles.burgerLine} ${open ? styles.burgerLineOpen3 : ""}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className={styles.mobileCta}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Записатися на консультацію
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Бренд з SVG-монограмою */}
          <div className={styles.brand}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              className={styles.brandIcon}
            >
              <circle cx="16" cy="16" r="16" fill="#F7F4ED" opacity="0.08" />
              <circle
                cx="16"
                cy="16"
                r="14.5"
                fill="none"
                stroke="#828B6E"
                strokeWidth="0.6"
                opacity="0.3"
              />
              <line
                x1="8"
                y1="10.5"
                x2="8"
                y2="21.5"
                stroke="#E4DDCC"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="5.5"
                y1="10.5"
                x2="10.5"
                y2="10.5"
                stroke="#E4DDCC"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="5.5"
                y1="21.5"
                x2="10.5"
                y2="21.5"
                stroke="#E4DDCC"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="13"
                y1="21.5"
                x2="13"
                y2="10.5"
                stroke="#E4DDCC"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="13"
                y1="10.5"
                x2="16"
                y2="16.5"
                stroke="#E4DDCC"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="16"
                y1="16.5"
                x2="19"
                y2="10.5"
                stroke="#E4DDCC"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="19"
                y1="10.5"
                x2="19"
                y2="21.5"
                stroke="#E4DDCC"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <circle cx="24" cy="21" r="1.5" fill="#B8694A" opacity="0.6" />
            </svg>
            <span className={styles.name}>Ірина Матлаєва</span>
          </div>

          {/* Документи */}
          {/* <div className={styles.docs}>
            <Link href="/documents/oferta" className={styles.docLink}>
              Публічна оферта
            </Link>
            <span className={styles.docSep}>·</span>
            <Link href="/documents/privacy" className={styles.docLink}>
              Політика конфіденційності
            </Link>
            <span className={styles.docSep}>·</span>
            <Link href="/documents/rules" className={styles.docLink}>
              Правила сайту
            </Link>
          </div> */}
        </div>

        {/* Disclaimer */}
        <p className={styles.disclaimer}>
          Цей сайт не є службою екстреної психологічної допомоги. У кризових
          ситуаціях звертайтеся до місцевих екстрених служб.
        </p>

        {/* Bottom */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © 2026 Ірина Матлаєва. Усі права захищені.
          </span>
          <span className={styles.ga}>
            Сайт використовує Google Analytics для аналізу відвідувань.
          </span>
        </div>
      </div>
    </footer>
  );
}

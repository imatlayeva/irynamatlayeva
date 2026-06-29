import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div>
          <p className={styles.label}>Як починається робота</p>
          <h2 className={styles.heading}>
            Іноді
            <br />
            достатньо
            <br />
            <em style={{ fontStyle: "italic", color: "var(--olive)" }}>
              написати
            </em>
          </h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div className={styles.stepText}>
                <h4>Ти пишеш мені</h4>
                <p>
                  Не обов'язково мати чіткий запит. Іноді достатньо написати:
                  "хочу дізнатися більше" або "хочу спробувати терапію".
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div className={styles.stepText}>
                <h4>Перша зустріч</h4>
                <p>
                  На першій зустрічі ми знайомимося, обговорюємо твій запит,
                  очікування від терапії та разом визначаємо, чи підходить нам
                  спільна робота.
                </p>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div className={styles.stepText}>
                <h4>Починаємо терапію</h4>
                <p>
                  Якщо нам підходить спільна робота, домовляємося про формат,
                  регулярність зустрічей і поступово будуємо терапевтичний
                  процес.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Якщо щось із написаного відгукнулося — цього вже достатньо, щоб
            написати. Не обов'язково знати, з чим саме ти хочеш працювати.
          </p>
          <p
            className={styles.ctaText}
            style={{ fontSize: "var(--text-base)", opacity: 0.7 }}
          >
            Зміни народжуються з готовності досліджувати себе, помічати нове й
            поступово пробувати інші способи бути із собою та з людьми.
          </p>

          <a
            href="https://t.me/Iryna_as"
            className="btn-primary"
            data-cursor="написати"
            target="_blank"
          >
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.35l-2.94-.916c-.64-.203-.654-.64.135-.954l11.49-4.43c.533-.194 1.0.131.84.944-.039.198-.039.198-.001.027z" />
              </svg>
              Написати мені
            </span>
          </a>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/iryna.matlayeva"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              Instagram
            </a>
            {/* <a href="https://gestalt.org.ua/author/matlaieva_iryna/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="НАГТУ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              НАГТУ
            </a> */}
          </div>

          <p className={styles.farewell}>До зустрічі 🤍</p>
        </div>
      </div>
    </section>
  );
}

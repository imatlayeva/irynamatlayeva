"use client";

import { ReactNode, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Formats.module.css";
import Reveal from "@/components/ui/Reveal";

type FormatId = "individual" | "couples" | "companies" | "groups";

type FormatCardProps = {
  id: FormatId;
  label: string;
  title: string;
  meta: string;
  delay?: number;
  dark?: boolean;
  openId: FormatId | null;
  setOpenId: (id: FormatId | null) => void;
  children: ReactNode;
};

function FormatCard({
  id,
  label,
  title,
  meta,
  delay = 0,
  dark = false,
  openId,
  setOpenId,
  children,
}: FormatCardProps) {
  const isOpen = openId === id;
  const contentId = `format-panel-${id}`;

  const cardRef = useRef<HTMLElement>(null);

  const handleToggle = () => {
    if (isOpen) {
      setOpenId(null);
      return;
    }

    setOpenId(id);

    window.setTimeout(() => {
      const element = cardRef.current;
      if (!element) return;

      const y = element.getBoundingClientRect().top + window.scrollY - 88;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 280);
  };

  return (
    <Reveal delay={delay}>
      <article
        ref={cardRef}
        className={`${styles.card} ${dark ? styles["card--dark"] : ""}`}
      >
        <button
          className={styles.railBtn}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={handleToggle}
        >
          <span className={styles.railLeft}>
            <span className={styles.cardLabel}>{label}</span>
            <span className={styles.cardTitle}>{title}</span>
          </span>

          <span className={styles.railRight}>
            <span className={styles.metaInline}>{meta}</span>
            <span
              className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
              aria-hidden="true"
            >
              ↓
            </span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key={id}
              id={contentId}
              className={styles.content}
              initial={{ height: 0, opacity: 0, y: -6 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -4 }}
              transition={{
                height: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.18, ease: "easeOut" },
                y: { duration: 0.24, ease: "easeOut" },
              }}
            >
              <div className={styles.contentInner}>{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export default function Formats() {
  const [openId, setOpenId] = useState<FormatId | null>(null);

  return (
    <section className={styles.section} id="formats">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.sectionLabel}>Формати роботи</p>
        </Reveal>

        <div className={styles.list}>
          <FormatCard
            id="individual"
            label="Індивідуально"
            title="Індивідуальна терапія"
            meta="Онлайн • Офлайн (Київ) · 50 хвилин"
            openId={openId}
            setOpenId={setOpenId}
          >
            <p className={styles.cardBody}>
              Життя людини — це не лише події, а й спосіб, у який вона їх
              проживає. З часом певні способи реагувати, будувати стосунки й
              обходитися зі своїми переживаннями закріплюються настільки, що
              перестають здаватися вибором та стають майже непомітними. Те, що
              колись допомагало пристосуватися до обставин, може продовжувати
              визначати наші реакції й тоді, коли обставини вже змінилися.
            </p>
            <p className={styles.cardBody}>
              В індивідуальній терапії ми звертаємося до ситуацій і переживань,
              які мають для тебе значення. Не лише розбираємо, що сталося, а й
              досліджуємо, як ти це проживаєш: що відчуваєш, чого хочеш, що
              залишається невисловленим або не знаходить місця у стосунках.
              Іноді важливе стає помітним просто під час нашої розмови — у
              словах, паузах, почуттях, у тому, про що складно говорити навіть
              тут.
            </p>
            <p className={styles.cardBody}>
              У цій роботі можна висловити те, що раніше не вдавалося,
              спробувати діяти інакше, попросити про важливе або по-новому
              поставитися до власного досвіду. А іноді — зустрітися з тим, чого
              вже не можна змінити, і прожити втрату чи розчарування, не
              залишаючись із ними наодинці.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className="btn-primary">
                Записатися
              </a>
            </div>
          </FormatCard>

          <FormatCard
            id="couples"
            label="Для пари"
            title="Парна терапія"
            meta="Онлайн • Офлайн (Київ)"
            delay={0.08}
            openId={openId}
            setOpenId={setOpenId}
          >
            <p className={styles.cardBody}>
              Стосунки між двома людьми — це не лише про любов чи конфлікти. Це
              місце, де зустрічаються два різні досвіди, дві історії, два
              способи бути поруч, справлятися з напругою, просити про підтримку
              чи переживати близькість.
            </p>
            <p className={styles.cardBody}>
              З часом навіть люди, які дуже цінують одне одного, можуть почати
              дедалі частіше не чути, а захищатися. Не говорити про важливе, а
              накопичувати образи. Не помічати одне одного за звичними ролями,
              обов'язками й щоденними справами.
            </p>
            <p className={styles.cardBody}>
              Парна терапія — це простір, у якому можна сповільнитися і разом
              подивитися на те, що відбувається між вами. Не для того, щоб
              знайти винного. А щоб краще зрозуміти одне одного, побачити звичні
              сценарії ваших стосунків і поступово знаходити нові способи бути
              поруч.
            </p>
            <div className={styles.comingSoon}>
              <span className={styles.comingSoonDot} />
              <p>
                Проходжу спеціалізацію «Гештальт-підхід у роботі з парами».
                Працюю з парами самостійно або в котерапії — залежно від запиту
                та потреб конкретної пари.
              </p>
            </div>
            <div className={styles.actions}>
              <a href="#contact" className="btn-primary">
                Записатися
              </a>
              {/* <button className={styles.btnDisabled} disabled>
                Скоро відкриється
              </button> */}
            </div>
          </FormatCard>

          <FormatCard
            id="companies"
            label="Для компаній"
            title="Психологічна підтримка співробітників"
            meta="Індивідуальна терапія, оплачена компанією"
            delay={0.06}
            dark
            openId={openId}
            setOpenId={setOpenId}
          >
            <p className={styles.cardBody}>
              Люди — головна частина будь-якої команди. І чим швидшим стає світ,
              тим більше значення має не лише професійна компетентність людини,
              а й те, як вона обходиться з навантаженням, невизначеністю та
              власним внутрішнім станом.
            </p>
            <p className={styles.cardBody}>
              За глобальним опитуванням DHR Global (2024), 82% офісних
              працівників повідомляли про певний рівень вигорання чи виснаження.
              За DDI Global Leadership Forecast (2025), 71% керівників
              відзначили значне зростання стресу з моменту, як обійняли поточну
              роль.
            </p>
            <p className={styles.cardBody}>
              Людина приходить на роботу не лише зі своїми навичками. Вона
              приходить зі своїм життям, переживаннями, стосунками, особистими
              кризами — з тим, що відбувається всередині неї, навіть якщо про це
              ніколи не говорять в робочих чатах. У роботі я поєдную
              гештальт-підхід і багаторічний досвід в IT — тому це не поради на
              кшталт «більше відпочивайте», а розвиток навички помічати себе
              раніше, ніж стане критично.
            </p>
            <p className={styles.cardBody}>
              Для компанії така підтримка — це спосіб подбати про людей не лише
              тоді, коли вже стало критично. А раніше: коли зростає напруга,
              падає включеність, складніше відновлюватися, тримати фокус і
              залишатися в живому контакті з роботою та командою.
            </p>
            <div className={styles.formats}>
              <div className={styles.formatItem}>
                Повна компенсація сесій (100%)
              </div>
              <div className={styles.formatItem}>
                Часткова компенсація (50%)
              </div>
              <div className={styles.formatItem}>
                Лімітовані програми підтримки на період
              </div>
            </div>
            <p className={styles.confidential}>
              Конфіденційність — базова умова роботи. Компанія не отримує
              інформації про зміст сесій, запити чи стан співробітників.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.btnDark}>
                Обговорити формат співпраці
              </a>
            </div>
          </FormatCard>

          <FormatCard
            id="groups"
            label="Групи"
            title="Групові формати"
            meta="Список очікування"
            delay={0.04}
            openId={openId}
            setOpenId={setOpenId}
          >
            <p className={styles.cardBody}>
              Багато важливого про себе ми дізнаємося не наодинці — а поруч з
              іншими. Саме в стосунках ми вчимося пристосовуватися, стримувати
              себе, бути зручними, сильними, правильними або непомітними. І саме
              в стосунках найчастіше губимо власний голос.
            </p>
            <p className={styles.cardBody}>
              Групові формати — це можливість побачити себе в живому контакті з
              іншими людьми. Помітити свої звичні реакції, способи будувати
              близькість, витримувати напругу, говорити про себе — або навпаки
              залишатися в тіні.
            </p>
            <p className={styles.cardBody}>
              Я проводжу тематичні майстерні досвіду та терапевтичні групи,
              присвячені різним аспектам нашого життя: тривозі, межам,
              стосункам, вигоранню, внутрішньому критику, контакту з собою та
              іншими людьми.
            </p>
            <p className={styles.cardBody}>
              Тут не потрібно бути правильним чи підготовленим. Достатньо прийти
              з тим, що є зараз.
            </p>

            <div className={styles.groupFormats}>
              <div className={styles.groupFormat}>
                <span className={styles.groupFormatIcon}>◎</span>
                <div>
                  <h4 className={styles.groupFormatTitle}>Майстерня досвіду</h4>
                  <p className={styles.groupFormatBody}>
                    <i className={styles.groupFormatNote}>
                      Один вечір. Один завершений досвід.
                    </i>
                  </p>
                  <p className={styles.groupFormatBody}>
                    Короткий формат: 3–3,5 години, одна тема, до 10 людей. Для
                    тих, хто хоче спробувати груповий формат або просто
                    дозволити собі кілька годин уважності до себе. Кожна
                    майстерня — завершена і самодостатня.
                  </p>
                </div>
              </div>

              <div className={styles.groupFormat}>
                <span className={styles.groupFormatIcon}>◎</span>
                <div>
                  <h4 className={styles.groupFormatTitle}>
                    Терапевтична група
                  </h4>
                  <p className={styles.groupFormatBody}>
                    <i className={styles.groupFormatNote}>
                      Один процес. Який поступово змінює спосіб бути із собою та
                      іншими.
                    </i>
                  </p>
                  <p className={styles.groupFormatBody}>
                    Тривалий формат: 10 зустрічей, раз на два тижні, по 3
                    години. Тут важлива не лише тема. Важливо те, що поступово
                    виникає між людьми. Довіра. Близькість. Напруга. Віддалення.
                    Підтримка. Саме ці моменти допомагають краще побачити власні
                    звичні способи бути поруч з іншими. Те, що неможливо
                    отримати за один вечір.
                  </p>
                </div>
              </div>
            </div>

            <p className={`${styles.cardBody} ${styles.cardBodyNote}`}>
              Нові набори відкриваються регулярно. Якщо тобі близький такий
              формат роботи — залиш заявку, і я повідомлю про найближчий старт.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className="btn-outline">
                Записатися в список очікування
              </a>
            </div>
          </FormatCard>
        </div>
      </div>
    </section>
  );
}

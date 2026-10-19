"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import styles from "./Mirror.module.css";

const symptoms = [
  {
    num: "01",
    title: "Стосунки та близькість",
    text: "Хочеться бути ближче, але знову виникають конфлікти, мовчання чи віддалення. Розмови заходять у глухий кут або завершуються однаково.",
  },
  {
    num: "02",
    title: "Тривога",
    text: "Навіть коли все начебто гаразд, тіло залишається напруженим, а думки вже в завтрашньому дні: що може піти не так і що ще потрібно передбачити.",
  },
  {
    num: "03",
    title: "Виснаження та вигорання",
    text: "Сил вистачає на потрібне, а на бажане вже ні. У вільний час теж буває складно зрозуміти, чого саме хочеться.",
  },
  {
    num: "04",
    title: "Контроль і вимоги до себе",
    text: "Важко зупинитися, поки не ідеально. Здається, що завжди можна було зробити краще, а помилки довго не відпускають.",
  },
  {
    num: "05",
    title: "Кризи та втрати",
    text: "Те, на що раніше можна було спертися, більше не тримає, а нове ще не склалося. Після втрати, розриву чи неочікуваних змін буває важко зрозуміти, як рухатися далі.",
  },
  {
    num: "06",
    title: "Межі та співзалежність",
    text: "«Так» вимовляється раніше, ніж встигаєш спитати себе, чого хочеш. А коли розумієш, що тобі не підходить, важко сказати про це вголос.",
  },
  {
    num: "07",
    title: "Повторювані сценарії",
    text: "Інші люди, інші обставини, а результат знову знайомий. Розумієш, як це відбувається, але не завжди вдається вчинити інакше.",
  },
  {
    num: "08",
    title: "Хочу чи треба?",
    text: "Легше зрозуміти, чого очікують інші й що потрібно робити, ніж відповісти собі, чого хочеться насправді. А коли потрібно обирати для себе, не завжди зрозуміло, на що спиратися.",
  },
];

function SymptomCard({
  num,
  title,
  text,
  index,
}: {
  num: string;
  title: string;
  text: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.cardHead}>
        <span className={styles.cardNum}>{num}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardText}>{text}</p>
    </motion.div>
  );
}

export default function Mirror() {
  return (
    <section className={styles.section} id="mirror">
      <div className={styles.inner}>
        {/* Header */}
        <Reveal>
          <div className={styles.header}>
            <h2 className={styles.intro}>
              Можливо, щось із цього зараз відгукується
            </h2>
            {/* <p className={styles.lead}>
              Іноді зміни починаються не з чіткого запиту, а з відчуття, що щось
              стало не зовсім твоїм.
            </p> */}
          </div>
        </Reveal>

        {/* Symptom grid */}
        <div className={styles.grid}>
          {symptoms.map((s, i) => (
            <SymptomCard
              key={s.num}
              num={s.num}
              title={s.title}
              text={s.text}
              index={i}
            />
          ))}
        </div>

        {/* Threshold passage */}
        <Reveal>
          <div className={styles.threshold}>
            <p className={styles.thresholdLabel}>
              Іноді за цими переживаннями з'являються питання:
            </p>
            <div className={styles.thresholdItems}>
              <span>Що зі мною зараз відбувається?</span>
              <span>Чого я хочу насправді?</span>
              <span>І куди хочеться рухатися далі?</span>
            </div>
            {/* <p className={styles.thresholdNote}></p> */}
          </div>
        </Reveal>

        {/* Closing */}
        <Reveal delay={0.05}>
          <div className={styles.closing}>
            <p className={styles.closingAccent}>
              У терапії можна поступово знаходити власні відповіді на ці питання
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

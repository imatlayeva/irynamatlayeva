"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import styles from "./Mirror.module.css";

const symptoms = [
  {
    num: "01",
    text: "Тіло в напрузі навіть тоді, коли нарешті є час відпочити",
  },
  {
    num: "02",
    text: "У паузі думки продовжують працювати — голова не вимикається",
  },
  {
    num: "03",
    text: "Тривога, самокритика або відчуття провини займають більше місця, ніж хотілося б",
  },
  {
    num: "04",
    text: "Відпочинок не відновлює — після вихідних так само втомлено, як до них",
  },
  {
    num: "05",
    text: "Рішення відкладаються, бо хочеться бути впевненим(ою) на сто відсотків",
  },
  {
    num: "06",
    text: "У стосунках повторюються схожі сценарії — і знову губляться межі або власний голос",
  },
  {
    num: "07",
    text: "Здається, що говорити про важливе стає дедалі складніше — навіть із найближчими людьми",
  },
  {
    num: "08",
    text: "Життя будується навколо відповідальності, контролю й функціональності — і менше навколо тебе",
  },
  {
    num: "09",
    text: "Всередині ніби є рух, але мало відчуття напрямку, сенсу чи живого бажання",
  },
];

function SymptomCard({
  num,
  text,
  index,
}: {
  num: string;
  text: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
      <span className={styles.cardNum}>{num}</span>
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
            {/* <p className={styles.intro}>Можливо, зараз це про тебе.</p> */}
            <p className={styles.intro}>
              Можливо, щось із цього зараз відгукується.
            </p>
            <p className={styles.lead}>
              Стрес не завжди виглядає як криза. Частіше — як звичне життя:
              робота, задачі, дедлайни, постійний рух уперед. Зовні все
              нормально. Ти справляєшся.
            </p>
            <p className={styles.lead}>
              Але поступово помічаєш, що за цією функціональністю стає менше
              тебе.
            </p>
          </div>
        </Reveal>

        {/* Symptom grid */}
        <div className={styles.grid}>
          {symptoms.map((s, i) => (
            <SymptomCard key={s.num} num={s.num} text={s.text} index={i} />
          ))}
        </div>

        {/* Threshold passage */}
        <Reveal>
          <div className={styles.threshold}>
            <p className={styles.thresholdLabel}>
              І в якийсь момент стає складно зрозуміти:
            </p>
            <div className={styles.thresholdItems}>
              <span>Чого ти хочеш насправді?</span>
              <span>Що для тебе важливо?</span>
              <span>І куди ти хочеш рухатися далі?</span>
            </div>
            {/* <p className={styles.thresholdNote}>
              Але це «тоді» чомусь постійно відсувається.
            </p> */}
          </div>
        </Reveal>

        {/* Closing */}
        <Reveal delay={0.05}>
          <div className={styles.closing}>
            <p>
              Можливо, це не криза — а момент, коли хочеться більше ясності,
              внутрішньої опори й живості у власному житті.
            </p>
            <p className={styles.closingAccent}>З цього вже можна почати.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import styles from "./Mirror.module.css";

const symptoms = [
  {
    num: "01",
    text: "Відпочинок не відновлює — після вихідних так само втомлено, як до них",
  },
  {
    num: "02",
    text: "Тривога, напруження, самокритика чи провина з'являються навіть тоді, коли начебто все добре",
  },
  {
    num: "03",
    text: "У паузі думки продовжують працювати — голова не вимикається",
  },
  {
    num: "04",
    text: "Хочеться краще розуміти одне одного — і знаходити близькість, не втрачаючи себе",
  },
  {
    num: "05",
    text: "Хочеться щось змінити, але страшно починати — або складно наважитися на вибір без гарантії, що він правильний",
  },
  {
    num: "06",
    text: "Життя будується навколо відповідальності, контролю й функціональності — і в ньому стає менше тебе",
  },
  {
    num: "07",
    text: "У стосунках повторюються схожі сценарії — і знову губляться межі або власний голос",
  },
  {
    num: "08",
    text: "Ніби все рухається, але незрозуміло куди — мало відчуття напрямку, сенсу чи живого бажання",
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
            <h2 className={styles.intro}>
              Можливо, щось із цього зараз відгукується
            </h2>
            <p className={styles.lead}>
              Іноді зміни починаються не з чіткого запиту, а з відчуття, що щось
              стало не зовсім твоїм.
            </p>
            {/* <p className={styles.lead}>
              Можливо, ти впізнаєш себе в одному з цих станів:
            </p> */}
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
              І тоді поступово з'являються питання:
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
              Саме з цих питань починається дослідження себе
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

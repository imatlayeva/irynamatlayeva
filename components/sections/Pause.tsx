import Reveal from "@/components/ui/Reveal";
import styles from "./Pause.module.css";

export default function Pause({ text }: { text: string }) {
  return (
    <section className={styles.section}>
      <Reveal>
        <p className={styles.text}>{text}</p>
      </Reveal>
    </section>
  );
}

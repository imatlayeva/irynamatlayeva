import Reveal from "@/components/ui/Reveal";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="therapy">
      <div className={styles.inner}>
        {/* Left column — sticky label + heading + pull quote */}
        <div className={styles.labelCol}>
          <Reveal>
            <p className={styles.sectionLabel}>Як працює терапія</p>
            <h2 className={styles.heading}>
              Помітити —<br />
              і жити більш <br />
              <em>усвідомлено</em>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className={styles.pullQuote}>
              Між тим, що відбувається, і нашою реакцією часто немає простору. Є
              лише звичний спосіб реагувати.
            </blockquote>
          </Reveal>

          <Reveal delay={0.25}>
            <div className={styles.sideNote}>
              <span className={styles.sideNoteLabel}>Підхід</span>
              <p>Гештальт</p>
            </div>
            <div className={styles.sideNote}>
              <span className={styles.sideNoteLabel}>Фокус</span>
              <p>Усвідомлення в контакті</p>
            </div>
            <div className={styles.sideNote}>
              <span className={styles.sideNoteLabel}>Що може з'явитися</span>
              <p>Більше свободи у виборі</p>
            </div>
          </Reveal>
        </div>

        {/* Right column — full text */}
        <div className={`${styles.textCol} ${styles.body}`}>
          <Reveal>
            <p>
              Більшість того, що з нами відбувається — відбувається майже
              непомітно.
            </p>
            <p>
              Ми реагуємо так, як звикли. Напружуємося — і не помічаємо цього.
              Відкладаємо свої потреби на потім. Робимо висновки про себе та
              інших так швидко, що вони починають здаватися очевидною правдою.
            </p>
            <p>
              Терапія поступово створює цей простір. Простір, у якому можна не
              лише проживати свій досвід, а й помічати, <b>як саме</b> він
              відбувається.
            </p>
            <p>
              Не просто відчувати тривогу — а бачити, як вона з'являється. Не
              просто злитися — а розуміти, на що саме спрямована ця злість і про
              що вона намагається повідомити. Не просто думати «зі мною щось не
              так» — а досліджувати, звідки з'являється цей висновок і як він
              впливає на життя.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.gestalt}>
              <p>У гештальт-підході це називається усвідомленням.</p>
              <p>
                Не просто розумінням головою. А моментом, коли думки, почуття,
                тілесні відчуття і те, що відбувається навколо, раптом
                складаються в більш цілісну картину.
              </p>
              <p>
                Те, що раніше відбувалося автоматично, поступово стає помітним.
                І саме тоді з'являється вибір — не лише реагувати звично, а
                обирати те, що більше відповідає тобі зараз.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p>
              Поступово стають помітними звичні способи бути з собою та з
              іншими. Те, як ми уникаємо складних переживань. Як витримуємо
              напругу. Як будуємо близькість. Як відмовляємося від себе або
              захищаємося там, де це вже не потрібно.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className={styles.warning}>
              <p className={styles.closing}>
                Терапія не прибирає з життя тривогу, страх чи складні почуття.
                Але допомагає краще розуміти, що з тобою відбувається — і
                знаходити більше внутрішньої опори, ясності та свободи.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

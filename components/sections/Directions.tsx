import Reveal from "@/components/ui/Reveal";
import styles from "./Directions.module.css";

const cards = [
  {
    num: "01",
    title: "Про себе",
    body: (
      <>
        <p style={{ marginBottom: "1rem" }}>
          Іноді найскладніше питання звучить дуже просто: «Який я? Яка я?»
        </p>
        <p style={{ marginBottom: "1rem" }}>
          У терапії можна поступово краще розуміти свої почуття, бажання,
          потреби й межі. Помічати звичні способи ставитися до себе: що
          допомагає справлятися, а що перетворилося на обмеження.
        </p>
        <p>
          Не для того, щоб стати іншою людиною. А щоб мати більше свободи бути
          собою.
        </p>
      </>
    ),
  },
  {
    num: "02",
    title: "Про стосунки",
    body: (
      <>
        <p style={{ marginBottom: "1rem" }}>
          Стосунки з партнером, батьками та близькими можуть давати опору, але
          водночас приносити біль, напругу й розгубленість.
        </p>

        <p style={{ marginBottom: "1rem" }}>
          В індивідуальній терапії можна досліджувати власний спосіб будувати
          близькість, переживати дистанцію, розпізнавати й позначати межі та
          помічати повторювані сценарії, зокрема й ті, що знову приводять у
          болісні стосунки чи любовні трикутники.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          У парній терапії можна дивитися на те, що відбувається між вами: як ви
          конфліктуєте, чуєте або не чуєте одне одного, зближуєтеся й
          віддаляєтеся. І поступово шукати власний спосіб близькості, у якому
          кожен лишається собою й водночас залишається поруч.
        </p>
      </>
    ),
  },
  {
    num: "03",
    title: "Про життя і темп",
    body: (
      <>
        <p style={{ marginBottom: "1rem" }}>
          Темп сучасного життя непомітно перетворює нас на людей, які добре
          справляються. Відповідальність, дедлайни й нескінченні рішення
          займають стільки місця, що власне життя іноді проходить повз.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          У терапії можна досліджувати, що забирає сили, як ти помічаєш власні
          межі й потреби та чи залишається у твоєму житті місце не лише для
          обов'язків, а й для того, що важливо саме тобі.
        </p>
        <p>
          Не лише встигати більше. А помічати, як саме ти живеш — і чи підходить
          тобі цей спосіб.
        </p>
      </>
    ),
  },
];

export default function Directions() {
  return (
  <section className={styles.section} id="directions">
    <div className={styles.inner}>
      <div className={styles.head}>
        <Reveal>
          <h2 className={styles.heading}>Що ми можемо досліджувати разом</h2>
        </Reveal>
      </div>

      <div className={styles.list}>
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.1}>
              <div className={styles.card}>
                <span className={styles.num} aria-hidden="true">
                  {c.num}
                </span>
                <h3 className={styles.title}>{c.title}</h3>
                <div className={styles.body}>{c.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className={styles.noteWrap}>
        <Reveal delay={0.2}>
          <p className={styles.note}>
            Найчастіше це не одна тема, а кілька одночасно.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
}

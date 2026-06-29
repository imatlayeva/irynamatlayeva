import styles from "./Formats.module.css";
import Reveal from "@/components/ui/Reveal";

export default function Formats() {
  return (
    <section className={styles.section} id="formats">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.sectionLabel}>Формати роботи</p>
        </Reveal>

        <div className={styles.list}>
          {/* Individual */}
          <Reveal>
            <div className={styles.card}>
              <div className={styles.rail}>
                <p className={styles.cardLabel}>Індивідуально</p>
                <h3 className={styles.cardTitle}>Індивідуальна терапія</h3>
                <p className={styles.meta}>Онлайн або Київ · 50 хвилин</p>
              </div>
              <div className={styles.content}>
                <p className={styles.cardBody}>
                  Зовні все виглядає нормально: робота, задачі, плани,
                  відповідальність. Життя рухається вперед. Але всередині стає
                  більше напруги, втоми чи відчуття, що ти більше функціонуєш,
                  ніж живеш.
                </p>
                <p className={styles.cardBody}>
                  Індивідуальна терапія — це простір, де можна ненадовго вийти з
                  постійного руху й повернути увагу до себе: до своїх
                  переживань, потреб, внутрішніх конфліктів і звичних способів
                  реагувати.
                </p>
                <p className={styles.cardBody}>
                  Ми разом досліджуємо, як ти живеш: як обходишся з напругою, де
                  тримаєш більше, ніж можеш, де давно не чуєш себе — і що за цим
                  стоїть.
                </p>
                <p className={styles.cardBody}>
                  Коли краще розумієш себе і свої реакції, поступово стає менше
                  того, що відбувається автоматично, і більше можливості
                  обирати, як жити далі.
                </p>
                <ul className={styles.changesList}>
                  <li>більше розуміння себе та своїх потреб</li>
                  <li>менше автоматичних реакцій</li>
                  <li>більше чутливості до власної втоми</li>
                  <li>більше свободи говорити «ні» без постійної провини</li>
                  <li>простіше будувати стосунки, не втрачаючи себе</li>
                  <li>
                    більше відчуття, що ти живеш власне життя, а не лише
                    справляєшся з ним
                  </li>
                </ul>
                <div className={styles.actions}>
                  <a href="#contact" className="btn-primary">
                    Записатися
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Companies */}
          <Reveal delay={0.06}>
            <div className={`${styles.card} ${styles["card--dark"]}`}>
              <div className={styles.rail}>
                <p className={styles.cardLabel}>Для компаній</p>
                <h3 className={styles.cardTitle}>
                  Психологічна підтримка співробітників
                </h3>
                <p className={styles.meta}>
                  Індивідуальна терапія, оплачена компанією
                </p>
              </div>
              <div className={styles.content}>
                <p className={styles.cardBody}>
                  Люди — головна частина будь-якої команди. І чим швидшим стає
                  світ, тим більше значення має не лише професійна
                  компетентність людини, а й те, як вона обходиться з
                  навантаженням, невизначеністю та власним внутрішнім станом.
                </p>
                <p className={styles.cardBody}>
                  За опитуванням DHR Global (2024), 82% офісних співробітників
                  повідомляли про певний рівень вигорання чи виснаження. За DDI
                  Global Leadership Forecast (2025), 71% керівників відчули
                  значне зростання стресу за останній рік — тобто це стосується
                  всієї команди, включно з тими, хто веде інших.
                </p>
                <p className={styles.cardBody}>
                  Людина приходить на роботу не лише зі своїми навичками. Вона
                  приходить зі своїм життям, переживаннями, стосунками,
                  особистими кризами — з тим, що відбувається всередині неї,
                  навіть якщо про це ніколи не говорять в робочих чатах. У
                  роботі я поєдную гештальт-підхід і багаторічний досвід в IT —
                  тому це не поради на кшталт «більше відпочивайте», а розвиток
                  навички помічати себе раніше, ніж стане критично.
                </p>
                <p className={styles.cardBody}>
                  Для компанії така підтримка — це спосіб подбати про людей не
                  лише тоді, коли вже стало критично. А раніше: коли зростає
                  напруга, падає включеність, складніше відновлюватися, тримати
                  фокус і залишатися в живому контакті з роботою та командою.
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
              </div>
            </div>
          </Reveal>

          {/* Groups */}
          <Reveal delay={0.04}>
            <div className={styles.card}>
              <div className={styles.rail}>
                <p className={styles.cardLabel}>Групово</p>
                <h3 className={styles.cardTitle}>Групові формати</h3>
                <p className={styles.meta}>Список очікування</p>
              </div>
              <div className={styles.content}>
                <p className={styles.cardBody}>
                  Багато важливого про себе ми дізнаємося не наодинці — а поруч
                  з іншими. Саме в стосунках ми вчимося пристосовуватися,
                  стримувати себе, бути зручними, сильними, правильними або
                  непомітними. І саме в стосунках найчастіше губимо власний
                  голос.
                </p>
                <p className={styles.cardBody}>
                  Групові формати — це можливість побачити себе в живому
                  контакті з іншими людьми. Помітити свої звичні реакції,
                  способи будувати близькість, витримувати напругу, говорити про
                  себе — або навпаки залишатися в тіні.
                </p>
                <p className={styles.cardBody}>
                  Я проводжу тематичні майстерні досвіду та терапевтичні групи,
                  присвячені різним аспектам нашого життя: тривозі, межам,
                  стосункам, вигоранню, внутрішньому критику, контакту з собою
                  та іншими людьми.
                </p>
                <p className={styles.cardBody}>
                  Тут не потрібно бути правильним чи підготовленим. Достатньо
                  прийти з тим, що є зараз.
                </p>

                <div className={styles.groupFormats}>
                  <div className={styles.groupFormat}>
                    <span className={styles.groupFormatIcon}>◎</span>
                    <div>
                      <h4 className={styles.groupFormatTitle}>
                        Майстерня досвіду
                      </h4>
                      <p className={styles.groupFormatBody}>
                        <i style={{ marginBottom: "0.5rem", display: "flex" }}>
                          Один вечір. Один завершений досвід.
                        </i>
                      </p>
                      <p className={styles.groupFormatBody}>
                        Короткий формат: 3–3,5 години, одна тема, до 10 людей.
                        Для тих, хто хоче спробувати груповий формат або просто
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
                        <i style={{ marginBottom: "0.5rem", display: "flex" }}>
                          Один процес. Який поступово змінює спосіб бути із
                          собою та іншими.
                        </i>
                      </p>
                      <p className={styles.groupFormatBody}>
                        Тривалий формат: 10 зустрічей, раз на два тижні, по 3
                        години. Тут важлива не лише тема. Важливо те, що
                        поступово виникає між людьми. Довіра. Близькість.
                        Напруга. Віддалення. Підтримка. Саме ці моменти
                        допомагають краще побачити власні звичні способи бути
                        поруч з іншими. Те, що неможливо отримати за один вечір.
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className={styles.cardBody}
                  style={{
                    marginTop: "var(--sp-lg)",
                    fontStyle: "italic",
                    opacity: 0.75,
                  }}
                >
                  Нові набори відкриваються регулярно. Якщо тобі близький такий
                  формат роботи — залиш заявку, і я повідомлю про найближчий
                  старт.
                </p>
                <div className={styles.actions}>
                  <a href="#contact" className="btn-outline">
                    Записатися в список очікування
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

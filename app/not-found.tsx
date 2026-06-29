import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>
          Схоже, ця сторінка<br />
          <em>загубилась у дорозі</em>
        </h1>
        <p className={styles.body}>
          Можливо, адреса змінилась або сторінки більше не існує.<br />
          Але все важливе — на головній.
        </p>
        <Link href="/" className={styles.btn}>
          Повернутися на головну
        </Link>
        <p className={styles.hint}>або напишіть мені напряму →{' '}
          <a href="https://t.me/Iryna_as" className={styles.hintLink} target='_blank'>
            @Iryna_as
          </a>
        </p>
      </div>
    </div>
  )
}
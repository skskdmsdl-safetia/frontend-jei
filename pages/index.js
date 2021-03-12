import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">react world!</a>
          </h1>
        </main>

        <footer className={styles.footer}>
          <p>by JEI</p>
        </footer>
      </div>
  )
}

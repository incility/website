import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <image className={styles.logo} src="/public/images/logo.png" alt="logo" />
      <p className={styles.description}>probably just another boring blockchain company</p>
    </div>
  )
}

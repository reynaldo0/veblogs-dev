"use client"
import { signIn, useSession } from 'next-auth/react'
import styles from './LoginPage.module.css'

const LoginPage = () => {

  const {data, status} = useSession()
  console.log(data, status)
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={()=>signIn("google")}>Login dengan Google</div>
            <div className={styles.socialButton}>Login dengan Github</div>
            <div className={styles.socialButton}>Login dengan Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage
import styles from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Login dengan Google</div>
            <div className={styles.socialButton}>Login dengan Github</div>
            <div className={styles.socialButton}>Login dengan Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage
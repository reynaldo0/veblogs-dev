import React from 'react'
import styles from './AuthLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
    const status = 'notauthenticated'
  return (
    <>
    {
        status === 'notauthenticated' ? (
            <Link href='/login'>Login</Link>
        ) : (
            <>
            <Link href='/write'>Write</Link>
            <span>Logout</span>
            </>
        )
    }
    </>
  )
}

export default AuthLinks
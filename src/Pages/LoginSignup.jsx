import React from 'react'
import styles from './LoginSignup.module.css'

const LoginSignup = () => {
  return (
    <section className={styles.loginSignup}>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form className={styles.fields}>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
        </form>
        <p className={styles.signupLogin}>
          Already have an account?
          <span>Login here</span>
        </p>
        <div className={styles.signupAgree}>
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default LoginSignup
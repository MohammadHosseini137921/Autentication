import React, { useState } from 'react'
import styles from './LoginForm.module.css'

const LoginForm = (props) => {
  const [allinputActive , setAllinputActive] = useState(false)
  const [userActive , setUserActive] = useState(false) ;
  const [passActive , setPassActive] = useState(false) ;
  const [username , setUsername] = useState("") ;
  const [password , setPassword] = useState("") ;
  const UserNameHandler = (event) => {
    setUsername(event.target.value)
    setUserActive(true) ;
  }
  const PasswordHandler = (event) => {
    setPassword(event.target.value)
    setPassActive(true) ;
    if(userActive && passActive) {
      setAllinputActive(true)
    }
  }
  const SubmitHandler = (event) => {
    event.preventDefault() ;
    if(userActive && passActive) {
      props.onLogin(username,password) ;
      setUsername("") ;
      setPassword("") ;
      setUserActive(false)
      setPassActive(false)
      setAllinputActive(false)
    }
  }
  const keyboardHandler = (event) => {
    if(event.keyCode == 13) {
      props.onLogin(username,password) ;
      setUsername("") ;
      setPassword("") ;
    }
  }

  return (
    <div className={styles.loginform}>

        <div className={styles.usernamepart}>
            <label htmlFor='usernameinput' className={styles.usernamelabel}>نام کاربری</label>
            <input type='text' className={styles.usernameinput} autoComplete='off' onChange={UserNameHandler} value={username}/>
        </div>

        <div className={styles.passowrdpart}>
            <label htmlFor='passwordinput' className={styles.passwordlabel}>رمز عبور</label>
            <input type='password' className={styles.passwordinput} autoComplete='off' onChange={PasswordHandler} value={password} onKeyUp={keyboardHandler}/>
        </div>

        <div className={styles.submitbtnpart}>
            <button 
            className={styles.submitbtn} type='submit' onClick={SubmitHandler} style={{backgroundColor:allinputActive?"#097e3d":""}}>ورود</button>
        </div>
        
    </div>
  )
}

export default LoginForm

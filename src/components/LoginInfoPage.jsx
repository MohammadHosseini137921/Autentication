import React, { useState } from 'react'
import styles from './LoginInfoPage.module.css'

const LoginInfoPage = (props) => {

    const LogoutHandler = () => {
        props.onLogout(false)
    }

  return (
    <div className={styles.infopagecontainer}>
        <p className={styles.usernotif}>کاربر گرامی به پنل کاربری خوش آمدید</p>
        <div className={styles.panelmenu}>
                <a className={styles.logoutbtn} href='#' onClick={LogoutHandler}>خروج از حساب</a>
                <a className={styles.chngprofile} href='#'>پروفایل</a>
                <a className={styles.totalbuy}>تعداد خرید های شما : 12 خرید</a>
        </div>
    </div>
  )
}

export default LoginInfoPage

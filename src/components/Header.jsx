import styles from './Header.module.css'

const Header = (props) => {
  return (
    <div className={styles.headerdiv}>
      <p className={styles.formtitle}>
        {!props.onLogin && "ورود به پنل کاربران"}
        {props.onLogin && "پنل کاربری"}
      </p>
    </div>
  )
}

export default Header

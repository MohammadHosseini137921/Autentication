import Header from "./components/Header"
import './App.css'
import { useState } from "react"
import LoginForm from './components/LoginForm'
import LoginInfoPage from "./components/LoginInfoPage"

function App() {
  var localStorageValue = localStorage.getItem("isLoggedIn") ;
  const [isLoggedIn , setIsLoggedIn] = useState(localStorageValue) ;
  debugger;
  const LoginHandler = (username , password) => {
    if(username == 'mohammad' && password == "1268") {
      setIsLoggedIn(true)
      localStorage.setItem("isLoggedIn",true) ;
    }
    else {
      alert("لطفا نام کاربری و رمز عبور خود را به صورت صحیح وارد نمایید")
    }
  }
  const logoutHandler = (UserLoggedIn) => {
    setIsLoggedIn(UserLoggedIn) ;
    localStorage.removeItem("isLoggedIn") ;
  }
  return (
    <div className="container">
      <div className="userform">
      <Header onLogin={isLoggedIn} />
        {!isLoggedIn && <LoginForm onLogin={LoginHandler} />}
        {isLoggedIn && <LoginInfoPage onLogout={logoutHandler} />}
      </div>
    </div>
  )
}

export default App

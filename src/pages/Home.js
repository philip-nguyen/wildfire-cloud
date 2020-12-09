import React, {useState} from 'react'
import LoginForm from '../pages/LoginForm.js';
import LoginFormStyle from '../components/LoginForm.css'


function Home() {

  const adminUser = {
    name: "test",
    email: "test@test.com",
    password: "123"
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)
    if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser ({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match")
      setError("Details do not match")
    }

  }

  const Logout = () => {
    setUser({name: "", email: ""})
  }

  return (
    <div classname = 'home' class = 'Home'>
      {(user.email != "") ? (
        <div className = "welcome" class = 'Welcome'>
          <h2 style>Welcome,<span>{user.name}</span></h2>
          <button onClick ={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error = {error}/>
      )}
    </div>
  )
}

export default Home

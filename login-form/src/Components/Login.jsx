import React from 'react'
import'./Login.css'
import user_icon from'..Assets/person.png'
import email_icon from'..Assets/email.png'
import password_icon from'..Assets/password.png'

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Sign up</div>  
          <div className="underline"></div>
        </div>
        
        <div className="inputs">
        <div className="input">
        <img src="{person_icon}" alt=""/>
        <input type="text"  />
        </div>
        <div className="input">
        <img src="{email_icon}" alt=""/>
        <input type="email"  />
       </div>
       <div className="input">
        <img src="{password_icon}" alt=""/>
        <input type="password"  />
       </div>
       
</div>
</div> 
        

        
    </div>
  )
}

export default Login

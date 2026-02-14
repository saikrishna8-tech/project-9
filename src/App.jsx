import React, { useState } from 'react'
import './App.css'
export default function App() {
  const IMGURL=import.meta.env.BASE_URL;
    const[isLoginView, setIsLoginView] = useState(true);   

    function switchView(){
       setIsLoginView(isLoginView===true?false:true);
    }

  return (
    <div className='app'>
      {isLoginView===true &&
      <div className='login-container'>
        <h2 className='para'>Sign in with email</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL+"message.jpg"}alt=""/>
          <input type='text' placeholder='Enter a emailID'/>
        </div>
        <div className='input-group'>
          <input type='{toggle password' placeholder='Enter a valid password'/>
        </div>
        <p className='para'>Don't have an account?<label onClick={()=>switchView()}>Sign up</label></p>
     </div>
      }
      {isLoginView===false &&
      <div className='login-container'>
        <h2>Register for a new account</h2>
        <p>If you have account already <label onClick={()=>switchView()}>Sign in</label></p>
      </div>
      }
    </div>
  );
}
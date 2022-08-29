import './Login.css';
import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='container-fluid'>
        <div className='login-background row'>
            
            <div className='col left'>
                <div className='left-side'>
                    <LoginForm />
                </div>
            </div>

            <div className='right-side-div col-7'>
                    <div className='right-side-image'></div>
            </div>
        </div>
        </div>
    </div>
    
  )
}

function LoginForm() { 
    const emailIcon = '✉️'; 
    const passwordIcon = '🕕'; 
  

    return (
        <div>
            <div className='form-container'>
                <div className='header-container'>
                    <h1 className='header-title'>Fintech.africa</h1>
                    <p className='login-message'>Hi, Welcome back</p>
                </div>
                <FormItem icon={emailIcon} name="Email" placeHolder="Enter your email" type = "email" />
                <FormItem icon={passwordIcon} name="Password" placeHolder="Enter your password" type = "password" />
                <a href='#'><span className ='forget-pw'>Forgot Password?</span></a>
                <div className='login-button'><button type='submit' className='btn'>Login</button></div>
                <div className='login'>Don't have an account? <a href='/signup'><span className ='create-account'>Create Account</span></a> </div>
            </div>    
        </div>
        
    )
}

function FormItem(props) {
    return (
       
        <div className="form-group form-item">
            <label className='form-item' htmlFor={props.name}>{props.name}</label>
            <input type={props.type} className="form-control" id={props.name}  placeholder={props.icon + "   " + props.placeHolder}/>
        </div>
      
    )

}
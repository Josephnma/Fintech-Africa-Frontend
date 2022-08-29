import './fintech.css';
import React from "react";
import { FaRegUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsShieldLock } from 'react-icons/bs';





export default function Signup() {
    return (
      <>
        <div className='container-fluid p-0 m-0'>
            <div className='signup-background row'>
                
                 <div className='col left'>
                     <div className='left-side'>
                         <SignupForm/>
                     </div>
                 </div>
    
                 <div className='right-side-div col-7 m-0'>
                         <div className='right-side-img'></div>
                 </div>
            </div>
         </div> 
          
      
      </>
      
    )
}
  
function SignupForm() {
     
      return (
        <>
          <div className='form-container'>
              <div className='header-name'>
                  <p className='header-tag'>Fintech.africa</p>
                  <p className='header-text'>Get Started with Fintech</p>
              </div>
              <div className='form-items'>
                  <FormItem Icon={FaRegUser} name="firstName" placeHolder= "Enter your first name" type = "text" label ="First Name"/>
                  <FormItem Icon={FaRegUser} name="lastName" placeHolder="Enter your last name" type = "text" label ="Last Name"/>
                  <FormItem Icon={FaEnvelope} name="email" placeHolder="Enter your email" type = "email" label ="Email"/>
                  <FormItem Icon={FaPhoneAlt} name="phoneNumber" placeHolder="Enter phone number" type = "number" label ="Phone Number"/>
                  <FormItem  name="bvn" placeHolder="Enter BVN" type = "number" label ="BVN"/>
                  <FormItem Icon={BsShieldLock} name="password" placeHolder="Enter your password" type = "password" label ="Password"/>
                  <FormItem Icon={BsShieldLock} name="confirmPassword" placeHolder="Confirm password" type = "password" label ="Confirm Password"/>
                  <FormItem name="pin" placeHolder="Enter transaction pin" type = "number" label ="Pin"/>
              </div>
              <div className='btn-container'>
                <div className='signup-button'><button type='submit' className='btn'> Sign Up</button></div>
                <div className='login'>Already have an account? <a href='/login'><span className ='login-span'>Login</span></a> </div>
              </div>
          </div>    
        </>
      )
}
  
function FormItem(props) {
      const {Icon} = props;
      return (
         
          <div className="form-group forms-items">
              <label className='forms-items' htmlFor={props.name}>{props.label}</label>
              <div className='input-container'>
                <span>
                {
                  Icon && (
                    <Icon />
                  )
                }
                </span>
                <input type={props.type} className="form-control input" id={props.name}  placeholder={props.placeHolder}/>
              </div>
          </div>
        
      )
}
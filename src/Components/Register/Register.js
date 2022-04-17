import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init'

const Register = () => {
          const navigate = useNavigate()
          const navigateLogin = () => {
                    navigate('/login')
          }
          const [
                    createUserWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

          const handleRegister = event => {
                    event.preventDefault()
                     const name = event.target.name.value;
                     const email = event.target.email.value;
                     const password = event.target.password.value;
          
                  createUserWithEmailAndPassword(email, password)

          }
          if(user){
                    navigate('/home')
          }
          return (
                    <div className='register-form'>
                          <h1 className='text-center'>Please Register</h1>    
                          <form onSubmit={handleRegister}>
                                  <input type="text" name="name" id="" placeholder='your Name'/>
                                     <br></br>
                                    <input type="email" name="email" id="" placeholder='your email' required />
                                    <br></br>
                                    <input type="password" name="password" id="" placeholder='password'  required/>
                                    <br></br>
                                    <input className='btn btn-primary mx-auto d-block' type="submit" value="Register" />

                          </form>
                          <p>Already have an account? <Link to="/login" className='text-primary' onClick={navigateLogin}> Please Login</Link></p>
                    </div>
          );
};

export default Register;
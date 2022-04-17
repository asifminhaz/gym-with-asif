import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Register = () => {
          const navigate = useNavigate()
          const navigateLogin = () => {
                    navigate('/login')
          }

          const handleRegister = event => {
                    event.preventDefault()
                    const name = event.target.name.value;
                    const email = event.target.email.value;
                    const password = event.target.password.value;

          }
          return (
                    <div className='register-form'>
                          <h1 className='text-center'>Please Register</h1>    
                          <form onSubmit={handleRegister}>
                                  <input type="text" name="" id="" placeholder='your Name'/>
                                     <br></br>
                                    <input type="email" name="" id="" placeholder='your email' required />
                                    <br></br>
                                    <input type="password" name="" id="" placeholder='password'  required/>
                                    <br></br>
                                    <input type="submit" value="Register" />

                          </form>
                          <p>Already have an account? <Link to="/login" className='text-danger' onClick={navigateLogin}> Please Login</Link></p>
                    </div>
          );
};

export default Register;
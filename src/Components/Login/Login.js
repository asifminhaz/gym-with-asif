import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {

          const emailRef = useRef('')
          const passwordRef = useRef('')
          const navigate = useNavigate();

          const location = useLocation();
          let from = location.state?.from?.pathname || "/"
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useSignInWithEmailAndPassword(auth);
                  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

          const handleSubmit = event => {
          event.preventDefault()
          const email= emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email, password);
          }
          if(user){
                    navigate(from, {replace: true});
          }
          const navigateRegister = event => {
             navigate('/register')       
          }

          const resetPassword = async () => {
                    const email= emailRef.current.value;
                    await sendPasswordResetEmail(email);
          alert('Sent email');

          }
          return (
 <div className='container w-50 mx-auto'>
  <h1 className="text-center mt-2">Please Login</h1>    
   <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password"required />
  </Form.Group>
  
  <Button variant="primary w-50 d-block mx-auto" type="submit">
    Login
  </Button>
</Form>
<p>New to Gym Freak? <Link to="/register" className='text-primary' onClick={navigateRegister}> Please Register</Link></p>
<p>Forget Pssword? <Link to="/register" className='text-primary' onClick={resetPassword}> Reset Password</Link></p>
<SocialLogin></SocialLogin>
   </div>
          );
};

export default Login;
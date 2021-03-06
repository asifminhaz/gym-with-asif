import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

          const emailRef = useRef('')
          const passwordRef = useRef('')
          const navigate = useNavigate();

          const location = useLocation();
          let from = location.state?.from?.pathname || "/"
          let errorElement;
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
          
          if (error) {
            errorElement = <div>
             <p className='text-danger'>Error: {error?.message}</p>
             </div>
            }
          if(loading || sending){
            return <Loading></Loading>
               }
          if(user){
                    navigate(from, {replace: true});
          }
          const navigateRegister = event => {
             navigate('/register')       
          }

          const resetPassword = async () => {
                    const email= emailRef.current.value;
                    if(email){
                    await sendPasswordResetEmail(email);
                  toast('Sent email');
                    }
                    else{
                      toast('please enter your email')
                    }

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
{errorElement}
<p>New to Gym Freak? <Link to="/register" className='text-primary' onClick={navigateRegister}> Please Register</Link></p>
<p>Forget Pssword? <button className='text-primary btn btn-link' onClick={resetPassword}> Reset Password</button></p>
<SocialLogin></SocialLogin>
<ToastContainer />
   </div>
          );
};

export default Login;
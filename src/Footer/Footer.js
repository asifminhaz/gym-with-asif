
import React from 'react';
import { Card } from 'react-bootstrap';



const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();

          return (
                    <footer>
 <Card className="text-center bg-dark text-white">
  <Card.Header className='text-start'></Card.Header>
  <Card.Body>
    <Card.Title className='text-start'>Gym With Asif</Card.Title>
    <Card.Text className='text-start'>
    Being fit and living healthy is what I know and love.
    </Card.Text>
    <Card.Title className='text-end'>contact me</Card.Title>
    <Card.Text className='text-end'>
    Email:  minhazurrahmanasif40@gmail.com
    
    </Card.Text>
   
  </Card.Body>
  <Card.Footer><p><small>copyright &copy; {year} all rights reserved by  by gym with asif</small></p></Card.Footer>
</Card>

                    </footer>
          );
};

export default Footer;
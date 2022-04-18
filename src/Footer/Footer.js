
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
    <Card.Title className='text-start'>Gym Freak</Card.Title>
    <Card.Text className='text-start'>
    Being fit and living healthy is what I know and love.
    </Card.Text>
   
  </Card.Body>
  <Card.Footer><p><small>copyright by gym freak @{year} all rights reserved</small></p></Card.Footer>
</Card>

                    </footer>
          );
};

export default Footer;
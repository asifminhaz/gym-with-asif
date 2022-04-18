
import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
          const today = new Date();
          const year = today.getFullYear();

          return (
                    <footer>
 <Card className="text-center bg-dark text-white">
  <Card.Header className='text-start'>Gym Freak</Card.Header>
  <Card.Body>
    <Card.Title className='text-start'>contact me</Card.Title>
    <Card.Text>
      
    </Card.Text>
   
  </Card.Body>
  <Card.Footer><p><small>copyright by gym freak @{year}</small></p></Card.Footer>
</Card>

                    </footer>
          );
};

export default Footer;
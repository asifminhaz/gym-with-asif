import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Extrapart = () => {
          return (
                    <div>
                          
                          <h1 className='text-center mt-5 text-primary'>Get A Perfect Body</h1>    
                          <h4 className='text-center'>I believe in training with intensity, eating to fuel your body and having fun while doing it. If</h4>
                          <h4 className='text-center mb-5'>you’re not enjoying fitness…what’s the point?!</h4>
                          <div>
<CardGroup className='mb-5'>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <Card.Body>
      <Card.Title>Muscle Building</Card.Title>
      <Card.Text>
           I am focused on your muscle building in this course in 15 weeks.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <Card.Body>
      <Card.Title>Fit and Healthy</Card.Title>
      <Card.Text>
       I am providing a fitness routine for you and focused on your fitness in 12 weeks.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <Card.Body>
      <Card.Title>Weight Loss</Card.Title>
      <Card.Text>
       In this course I am providing you all the best strategy for your weight loss in 14 weeks.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>
 </div>
                          
                          
   </div>
          );
};

export default Extrapart;
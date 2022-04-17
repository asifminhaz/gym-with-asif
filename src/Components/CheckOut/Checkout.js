import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
          const {serviceId} = useParams()
          return (
                    <div>
                            <h1>Welcome to checkout page:{serviceId}</h1>
                           
                    </div>
          );
};

export default Checkout;
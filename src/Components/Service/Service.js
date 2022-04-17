import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
          const {id, name, image, discription} = service;
          const navigate = useNavigate();
          const handleServiceDetail = id => {
                    navigate(`/service/${id}`)
          }
          return (
                    <div className='service'>
                           <img src={image}></img>
                           <h1>{name}</h1>   
                           <p>{discription}</p>
                           <button onClick={() => handleServiceDetail(id)} className='btn-primary'>Checkout</button>
                    </div>
          );
};

export default Service;
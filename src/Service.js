import React from 'react';
import "./Service.css";

const Service = (props) => {
    const{image,name,price,doctor}=props.post;
    return (
        <div className="service__item">
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <h2>Name:{name}</h2>
                <h3>Dr.{doctor}</h3>
                <h3>Price:{price}</h3>

            </div>
            
        </div>
    )
}

export default Service

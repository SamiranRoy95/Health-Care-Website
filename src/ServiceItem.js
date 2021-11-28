import React from 'react';

import {Link} from "react-router-dom";
import "./ServiceItem.css";
const ServiceItem = (props) => {
    const {id,name,image,price,doctor}=props.treat;
    return (
        <div>
           <div className="service__item">
               <img src={image} alt=""/>
               <h2>Name:{name}</h2>
               <h2>Price:{price}</h2>
               <h2>Dr:{doctor}</h2>
              <Link to={`/detail/${id}`}>
              <button>Detail</button>
              </Link>
           </div>
        </div>
    )
}

export default ServiceItem

import React from 'react';
import { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem';
import "./Home.css"

const Home = () => {
    const [treatment, setTreatment] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setTreatment(data))

    },[])
    return (
        <div>
            <div className="home__image__div">
                <img className="home__image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBouOZKviLM_lD4i4u-myeVkFitO-zfF8gA&usqp=CAU"/>
            </div>
            <div className="treat__wrapper">
            {
               treatment.map(treat =>  <ServiceItem
                        key={treat.id}
                        treat={treat} 
                         />
                )
            }
            </div>



            
            
        </div>
    )
}

export default Home

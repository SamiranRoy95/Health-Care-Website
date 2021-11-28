import React from 'react';
import { useState, useEffect } from 'react';
import Service from './Service';
import "./Services.css";


const Services = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())

            .then(data => {
                console.log(data)
                // const singleData=data.find(post=>post.id==moreid)

                setPosts(data)

            })


    }, [])

    return (
        <div>

            <div className="whole__services">
                {
                    posts.map(post => <Service
                        post={post}
                        key={post.id}

                    />)
                }
            </div>
        </div>
    )
}

export default Services;

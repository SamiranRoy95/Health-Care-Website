import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "./Detail.css"

const Detail = () => {
    const{detailid}=useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())

            .then(data =>{
                console.log(data)
                const singleData=data.find(post=>post.id==detailid)
                
                setPost(singleData)

            })
                 
 
    },[])
    return (
        <div className="detail__component">
            
           
            
            <img src={post.image} alt=""/>
            <h2>{post.name}</h2>
            <h2>{post.doctor}</h2>
            <h2>{post.price}</h2>
            <p>{post.description}</p>
            
            
        </div>
    )
}

export default Detail




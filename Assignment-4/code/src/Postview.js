import React from 'react';
import './Postview.css';
import React ,{ useEffect, useState} from 'react';


const Postview=()=> {
  const[Post,setPost]= useState([]);
  const getUserData = ()=>{
    fetch ("http://localhost:3004/user")
    .then(response=>response.json())
    .then(res=> setPerson(res))
    .catch(error=>console.log(error))
  }
  useEffect(() =>{
    getUserData();
  },[])
  return (
    <>
     <div className="site-container">
     </div>
    <PostTop></PostTop>
    <Post Postview={Postview}></Post>
    </>
  );
}

export default Postview;

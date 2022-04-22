import React, {useEffect,useState} from 'react';
import Post from "./Post";
import PostTop from "./PostTop";


const Postview =()=>{

  const[people,setPeople]= useState([]);
  const getUserData = ()=> {
    fetch ("http://localhost:3004/user")
    .then(response=>response.json())
    .then(res=> setPeople(res))
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
    <Post people={people}></Post>
    <div className='site-container'>
    </div>
    </>
  );
}


export default Postview;

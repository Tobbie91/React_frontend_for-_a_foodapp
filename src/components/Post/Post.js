import React, { useEffect } from 'react';
import recentpost from "../../assets/recentpost.svg";
import "./Post.css"
import {useAuth} from '../../context/authcontext'
import {Link} from 'react-router-dom'

const Post = () => {
  const {GetAllVendors, getVendors} = useAuth()

  useEffect(()=>{
     GetAllVendors()
   
// eslint-disable-next-line
  }, [])


  return (
    <div className='post'>
     <h3>Restuarant  <span><img src={recentpost} alt="" /></span></h3>
    <div className='flexDiv'>
      
     {getVendors.map((elem) => (
        
     
        <div key={elem.id}>
          <Link to={`/restuarant/${elem.id}`}>
          <img src={elem.coverImage} alt=""/>
          <h3>{elem.restuarantName}</h3>
          </Link>
     </div>
      ))
      
     }
     
    </div>
    </div>
  )
}

export default Post
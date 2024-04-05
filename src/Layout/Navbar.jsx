import React, { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';
import  { Link } from "react-router-dom"
import 'boxicons/css/boxicons.min.css'; 
import logo from '../assests/jobvaluee.png'
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import userimage from '../assests/bg-1.png'
import million from '../assests/millions.jpg'
import { Prev } from 'react-bootstrap/esm/PageItem';


export default function Navbar() {

  const { isAuthenticated ,user,logout } = useAuth0();
   
  const[openprofile,setOpenProfile] = useState({})

  return (
    <>
    { true && 
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img className='img-fluid' src={logo} alt="" width={130} />
          </Link>
          <form className="d-flex me-auto ml-5 shadow-sm">
              <input className="form-control ml-5 text-center" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" href="#"><i class='bx bxs-home-circle homes'></i>Home</Link>
                {/* <div className="divider"></div> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="#">Jobs</Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link text-dark" href="#">Network</Link>
              </li>
              <li className="nav-item"> 
                <Link className="nav-link text-dark" href="#">Messaging</Link>
              </li>
            
            </ul>
            </div>
                   <div>
                  
                   {
                    isAuthenticated &&(
                    
                      <img className='shadow-lg' src={user?.picture || million} alt="" width={40}  style={{borderRadius: "50%"}} onClick={()=>setOpenProfile((prev)=>!prev)}/>
                    )
                   }
                   
                   </div>
                   {openprofile &&
                   
            <div className='dropdown-profile shadow-lg'>
             <ul className='p-0'>
             <Link>
              <p className='text-dark fs-18 fw-bold' style={{textDecoration:'none'}}>{isAuthenticated && <p>{user.name}</p>}</p>
              </Link>

              <Link to="/"><h5>Profile</h5> </Link>
              <Link to="/" ><h5>Notification</h5> </Link>
              
              {isAuthenticated && (
  <p>
    <button className='btns' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
  </p>
) }
             </ul>

            </div>
                   }
         
          

        </div>
      </nav>
    }
    </>
  );
}

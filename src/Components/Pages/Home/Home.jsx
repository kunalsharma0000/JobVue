import React, { useState, useEffect } from 'react';
import './home.css';
import { useAuth0 } from "@auth0/auth0-react";
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import million from '../../../assests/millions.jpg'
import { Image } from 'antd';


export default function Home() {
  const { user } = useAuth0();
  const [profileview, setProfileView] = useState(0);
  const [postview, setPostView] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className='home-section' id='home-top-section'>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="user-home-heading">
                <div className="row">
                  <div className="col-xl-3">
                    <div className="user-login-deatils">
                      <div className="card m-0 shadow-sm">
                        <div className="card-header">
                        <div className="card-background" style={{background:'black',height:'50px'}}>

                       
                          <div className="user-login-image text-center" style={{ cursor: 'pointer' }}>
                            {isLoading ? (
                              <Skeleton circle={true} height={80} width={80} duration={1} />
                            ) : (
                              <Link to= 'userProfile/'>
                              <img className='img-fluid' src={user?.picture || million} alt="" style={{ borderRadius: '50%', width: '80px', cursor: 'pointer'  }} /></Link>
                            )}
                            <h4 className='pt-3'>{isLoading ? <Skeleton width={150} duration={1} style={{ background: 'linear-gradient(45deg, #d9e4dd, #f5f7f6)' }} /> : user?.name }</h4>
                            <div className='divider'></div>
                          </div>
                          </div>
                          <div className="user-profile-impression pt-5">
                            <div className="row">
                              <div className="col-xl-6 pt-5">
                                <p className='pt-2' onClick={() => setProfileView(profileview + 1)} style={{ cursor: 'pointer' }}>
                                  {isLoading ? <Skeleton width={100} duration={1} /> : 'Profile viewers'}
                                </p>
                              </div>
                              <div className="col-xl-6 pt-5">
                                <p className='pt-2'>{isLoading ? <Skeleton width={100} duration={1}/> : profileview}</p>
                              </div>
                            </div>
                          </div>

                          <div className="user-post-impression">
                            <div className="row">
                              <div className="col-xl-6">
                                <p  onClick={() => setPostView(postview + 1)} style={{ cursor: 'pointer' }}>
                                  {isLoading ? <Skeleton width={100} duration={1} /> : 'Post impression'}
                                </p>
                              </div>
                              <div className="col-xl-6">
                                <p>{isLoading ? <Skeleton width={100} duration={1}/> : postview}</p>
                              </div>
                            </div>
                          </div>

                          <div className='divider'></div>

                          <div className="user-premium pt-4">
                            <h4>{isLoading ? <Skeleton width={200} duration={1} /> : 'Try Premium for $0'}</h4>
                          </div>
                          <div className="divider"></div>
                          <div className="user-discover-more pt-4 text-center">
                            <Link to='/discover-more'>
                              <button className='user-button'>{isLoading ? <Skeleton width={150} duration={1} /> : 'Discover More'}</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9">
                       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

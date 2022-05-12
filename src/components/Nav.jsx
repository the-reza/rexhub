import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { BsCameraVideoFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

function Nav() {

      const [nav, setNav] = useState('translateX(-100%)')

      return (
            <>
                  <div className='nav-con'>
                        <div className="top-info">
                              <p>rexhub</p>
                              <p>rexhub</p>
                              <p>rexhub</p>
                              <p>rexhub</p>
                              <p>rexhub</p>
                              <p>rexhub</p>
                              <p>rexhub</p>
                        </div>
                        <div className="nav-main">
                              <Link to='/rexhub'>
                                    <img src={Logo} alt="" className="logo" />
                              </Link>
                              <div className="searchs">
                                    <div className="input">
                                          <input placeholder='search...' type="search" />
                                    </div>
                                    <button className="upload">
                                          <BsCameraVideoFill style={{ margin: "0 4px", width: '1.1rem' }} />Upload</button>
                                    <button
                                          className="upgrade"><AiFillStar style={{ margin: "0 4px", width: '1.1rem' }} />Upgrade</button>
                              </div>
                              <div className="account">
                                    <p>log in</p>
                                    <p>sign in</p>

                              </div>
                              <FaBars onClick={() => {
                                    if (nav === 'translateX(-100%)') {
                                          setNav('translateX(0)')
                                    } else if (nav === 'translateX(0)') {
                                          setNav('translateX(-100%)')
                                    }
                              }} id='menui' style={{
                                    cursor: "pointer",
                                    width: "1.5em",
                                    height: "1.5em",
                                    marginRight: "10px",
                              }} />
                        </div>
                        <div className="bottom-info">
                              <Link to="/rexhub"><p>home</p></Link>
                              <Link to="/videoplayer"><p>videos</p></Link>
                              <p>categories</p>
                              <p>live</p>
                              <p>stars</p>
                              <p>community</p>
                              <p>pics & gifs</p>
                        </div>
                  </div>
                  <ul className="nav-list" style={{ transform: nav }}>
                        <div className="searchs2">
                              <div className="input2">
                                    <input placeholder='search...' type="search" />
                              </div>
                              <button className="upload2">
                                    <BsCameraVideoFill style={{ margin: "0 4px", width: '1.1rem' }} />Upload</button>
                              <button
                                    className="upgrade2"><AiFillStar style={{ margin: "0 4px", width: '1.1rem' }} />Upgrade</button>
                        </div>
                        <div className="account2">
                              <p>log in</p>
                              <p>sign in</p>

                        </div>
                  </ul>
            </>
      )
}

export default Nav
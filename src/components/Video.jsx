import React from 'react'
import { AiFillLike, AiFillCheckCircle, AiFillStar } from 'react-icons/ai'
import { Link } from "react-router-dom"


function Videos() {
      return (

            <div className="video-con">
                  <Link to="/videoplayer">
                        <div className="img">
                              <div className="img-info">
                                    <AiFillStar style={{ color: "black", backgroundColor: "#FFA31A", width: "20px", borderRadius: "2px", margin: "0 5px" }} />
                                    <b style={{ marginRight: "5px" }}>HD</b>
                                    12:36
                              </div>
                        </div>
                  </Link>
                  <Link to="/videoplayer">
                        <p className="video-title">Lorem ipsum dolor sit amet elit ipsum dolor si Lorem ipsum dolor sitt</p>
                  </Link>
                  <p className='channel'><AiFillCheckCircle style={{ color: "#00c3ff", marginRight: "5px" }} />Channel Name</p>
                  <div className="video-account">
                        <p className="views">1M views</p>
                        <p className="likes">
                              <AiFillLike style={{ marginRight: "5px" }} />
                              100%
                        </p>
                  </div>
            </div>
      )
}

export default Videos
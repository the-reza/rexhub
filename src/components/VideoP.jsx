import React from 'react'
import Nav from "./Nav"
import Flower from '../images/videobg.jpg'
import Video from "./Video"
import { AiFillLike, AiFillDislike, AiFillCheckCircle, AiFillHeart, AiFillPlusSquare, AiOutlineShareAlt } from 'react-icons/ai'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function VideoP() {
      return (
            <>
                  <Nav />
                  <div className="videop-con">
                        <img className='video-player' src={Flower} alt="" />
                        <div className="video-info">
                              <p className='video-name'><AiFillCheckCircle style={{ color: "#00c3ff", marginRight: "5px" }} />A video About nothing / @lil_rex6905</p>
                              <div className="video-account2">
                                    <div className="infos">
                                          <p className="views">1M views | </p>
                                          <p className="likes">
                                                <AiFillLike style={{ marginRight: "5px" }} />
                                                100% |
                                          </p>
                                          <p>
                                                1 hour ago
                                          </p>
                                    </div>
                                    <div className="thingstd">
                                          <p className="like"><AiFillLike />59K</p>
                                          <p className="dislike"><AiFillDislike />1K</p>
                                          <p className="heart"><AiFillHeart />79K</p>
                                          <p className="addto"><AiFillPlusSquare />Add to</p>
                                          <p className="share"><AiOutlineShareAlt />Share</p>
                                    </div>
                              </div>
                              <div className="channel2">
                                    <div className="div6">
                                          <div className="channel-img"></div>
                                          <div className="channel-t">
                                                <p className='channeln'><b>TeaRex</b><AiFillCheckCircle style={{ color: "#00c3ff" }} /></p>
                                                <p className='info6'>100 Videos | 1M Subscribers</p>
                                          </div>
                                    </div>
                                    <div className="sub">Subscribe</div>
                              </div>

                        </div>

                        <div className="more">
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                              <Video />
                        </div>
                  </div>
                  <div className="slides">
                        <p className="num">1</p>
                        <p>2</p>
                        <p>3</p>
                        <p className="next">Next <MdOutlineArrowForwardIos /></p>
                  </div>
            </>
      )
}

export default VideoP
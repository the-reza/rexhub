import React from 'react'
import Nav from './Nav'
import Video from './Video'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

function Home() {
      return (
            <>
                  <Nav />
                  <div className='home-con'>
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
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
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

export default Home
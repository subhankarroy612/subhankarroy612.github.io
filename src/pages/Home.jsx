import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import cv from '../images/Subhankar_Roy_Resume.pdf'
import resume from '../images/resume.png'
export default function Home() {
  return (
    <div id='home'>
      <div id='homeContainer'>
        <div>
          <img src="https://avatars.githubusercontent.com/u/107605626?s=400&u=890726e31619c7b18b4cd34780bb3cf503971dda&v=4" alt="" />
        </div>
        <div id='homeText'>
          <h2>Hi There!</h2>
          <h1>I'M <span className='name1'>SUBHANKAR ROY</span></h1>
          <div id='typewriter'>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
              words={["Web Developer.", "Full Stack Web Developer.", "MERN Stack Developer"]}
            />
          </div>
          <div style={{gap: '10px',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img width='30px' height='30px' src={resume} alt="resume logo" />
            <h2><a className='name1' target='_blank' rel='noreferrer' href={cv} download >Resume</a></h2>
          </div>
        </div>
      </div>
    </div>
  )
}


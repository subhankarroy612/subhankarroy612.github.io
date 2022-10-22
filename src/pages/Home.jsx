import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <div id='home'>
      <div id='homeContainer'>
        <div>
          <img src="https://avatars.githubusercontent.com/u/107605626?s=400&u=890726e31619c7b18b4cd34780bb3cf503971dda&v=4" alt="" />
        </div>
        <div id='homeText'>
          <h2>Hi There!</h2>
          <h1>I'M SUBHANKAR ROY</h1>
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
        </div>
      </div>
    </div>
  )
}


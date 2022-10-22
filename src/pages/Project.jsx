import React from 'react'
import boat from "../images/Boat-lifestyle.png";

export default function Project() {
  return (
    <div id='project'>
      <h2 className='projectText'>Projects</h2>
      <h3 className='projectText'>Here are a few projects I've worked on recently.</h3>
      <div id='p1'>
        <div>
          <img src={boat} alt="Boat project image" />
          <h4 className='projectText'>Tech Stack</h4>
        </div>

        <div>
          <h2 className='projectText'>Boat-LifeStyle Clone</h2>
          <li className='projectUl'>BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.</li>
          <li className='projectUl'>Users and add product to the Cart</li>
          <li className='projectUl'>Users can login and SignUp</li>
          <div id='p1Btn'>
            <button><a href="https://subhankar-boat-lifestyle.netlify.app" target='_blank' >Live</a></button>
            <button><a href="https://github.com/subhankarroy612/funny-week-7983/tree/main/boat-lifestyle" target='_blank' >View Code</a> </button>
          </div>
        </div>
      </div>


    </div>
  )
}

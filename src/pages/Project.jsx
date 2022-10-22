import React from 'react'
import boat from "../images/Boat-lifestyle.png";
import geek from "../images/Geek-Buying.png";

export default function Project() {
  return (
    <div id='project'>
      <h2 className='projectText'>Projects</h2>
      <h3 className='projectText'>Here are a few projects I've worked on recently.</h3>

      <div className='p1'>
        <div>
          <img src={boat} alt="Boat project image" />
          <h2 className='projectText'>Tech Stack</h2>
          <div className='techStack'>
            <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
          </div>
        </div>

        <div>
          <h2 className='projectText'>Boat-LifeStyle Clone</h2>
          <li className='projectUl'>BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.</li>
          <li className='projectUl'>Users and add product to the Cart</li>
          <li className='projectUl'>Users can login and SignUp</li>
          <div className='p1Btn'>
            <button><a href="https://subhankar-boat-lifestyle.netlify.app" target='_blank' >Live</a></button>
            <button><a href="https://github.com/subhankarroy612/Boat-Lifestyle-Clone/tree/main/boat-lifestyle" target='_blank' >View Code</a> </button>
          </div>
        </div>
      </div>

      <div className='p1'>
        <div>
          <img src={geek} alt="Boat project image" />
          <h2 className='projectText'>Tech Stack</h2>
          <div className='techStack'>
            <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
          </div>
        </div>

        <div>
          <h2 className='projectText'>Geek-Buying Clone</h2>
          <li className='projectUl'>GeekBuying found at GeekBuying.com is an online reseller of all sorts of household and electronic gadgets including smartphones and tablets, wearable devices, computers, car accessories and hobby toys.</li>
          <li className='projectUl'>Users can login and SignUp</li>
          <li className='projectUl'>User can see the products in the Home Page</li>
          <div className='p1Btn'>
            <button><a href="https://enchanting-hamster-bb6be1.netlify.app" target='_blank' >Live</a></button>
            <button><a href="https://github.com/subhankarroy612/Geek-Buying-Clone" target='_blank' >View Code</a> </button>
          </div>
        </div>
      </div>


    </div>
  )
}

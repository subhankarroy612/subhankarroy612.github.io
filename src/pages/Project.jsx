import React from 'react'
import boat from "../images/Boat-lifestyle.png";
import geek from "../images/Geek-Buying.png";
import rel from "../images/reliance.png";
import { motion } from 'framer-motion'

export default function Project() {

  const slideLeft = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }

  const slideRight = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  }

  return (
    <div id='project'>
      <h1 className='projectText name1'>Projects</h1>
      <h3 className='projectText'>Here are a few projects I've worked on recently.</h3>

      <motion.div initial='hidden' whileInView='visible' variants={slideRight} >
        <div className='p1'>
          <div>
            <img src={boat} alt="Boat project image" />
            <h2 className='projectText name1'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className='projectText name1'>Boat-LifeStyle Clone</h2>
            <li className='projectUl'>BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.</li>
            <li className='projectUl'>Users and add product to the Cart</li>
            <li className='projectUl'>Users can login and SignUp</li>
            <div className='p1Btn'>
              <button><a href="https://subhankar-boat-lifestyle.netlify.app" target='_blank' >Live</a></button>
              <button><a href="https://github.com/subhankarroy612/Boat-Lifestyle-Clone/tree/main/boat-lifestyle" target='_blank' >View Code</a> </button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial='hidden' whileInView='visible' variants={slideLeft} >
        <div className='p1'>

          <div>
            <img src={geek} alt="Boat project image" />
            <h2 className='projectText name1'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className='projectText name1'>Geek-Buying Clone</h2>
            <li className='projectUl'>GeekBuying found at GeekBuying.com is an online reseller of all sorts of household and electronic gadgets including smartphones and tablets, wearable devices, computers, car accessories and hobby toys.</li>
            <li className='projectUl'>Users can login and SignUp</li>
            <li className='projectUl'>User can see the products in the Home Page</li>
            <div className='p1Btn'>
              <button><a href="https://enchanting-hamster-bb6be1.netlify.app" target='_blank' >Live</a></button>
              <button><a href="https://github.com/subhankarroy612/Geek-Buying-Clone" target='_blank' >View Code</a> </button>
            </div>
          </div>
        </div>
      </motion.div>


      <motion.div initial='hidden' whileInView='visible' variants={slideLeft} >
        <div className='p1'>

          <div>
            <img src={rel} alt="Boat project image" />
            <h2 className='projectText name1'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>

          <div>
            <h2 className='projectText name1'>Reliance-Digital Clone</h2>
            <li className='projectUl'>Reliance is one of the most profitable companies in India, the largest publicly traded company in India by market capitalisation.</li>
            <li className='projectUl'>Users can login and SignUp</li>
            <li className='projectUl'>Users can add product to Cart</li>
            <li className='projectUl'>User can see the products in the Home Page</li>
            <div className='p1Btn'>
              <button><a href="https://reliance-app.netlify.app" target='_blank' >Live</a></button>
              <button><a href="https://github.com/meshiv5/plastic-zephyr-2114" target='_blank' >View Code</a> </button>
            </div>
          </div>
        </div>
      </motion.div>


    </div>
  )
}

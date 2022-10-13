import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    let handleClick = () => {
        document.querySelector('#headers').classList.toggle('active')
    }

    return (<div id='navbar'>
        <div>
            <h1 id='name'>Subhankar Roy</h1>
            <img id='img' onClick={handleClick} src='https://cdn-icons-png.flaticon.com/512/7711/7711100.png' />
        </div>
        <div id='headers'>
            <h2><Link className='link'>Home</Link></h2>
            <h2><Link className='link'>About me</Link></h2>
            <h2><Link className='link'>Skills</Link></h2>
            <h2><Link className='link'>Project</Link></h2>
            <h2><Link className='link'>Contact</Link></h2>
            <h2><Link className='link'>Resume</Link></h2>
        </div>
    </div>)
}



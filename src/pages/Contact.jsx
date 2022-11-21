import React from 'react'

export default function Contact() {
  return (
    <div id='contact'>
      <h1 className='name1'>Contact</h1>
       

      <div>
        <div id='contactDetails'>

          <div style={{width:'200px'}}>
            <img style={{background:'white', borderRadius:'50px'}} width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/512/455/455604.png" alt="number logo" />
            <h2 >+919875647112</h2>
          </div>
          <div>
            <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/512/526/526901.png" alt="email logo" />
            <h2><a style={{ paddingLeft:'10px' ,textDecoration: 'none', color: 'white' }} target='_blank' href="mailto:subhankarroy612@gmail.com">subhankarroy612@gmail.com</a></h2>
          </div>
          <div>
            <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="github logo" />
            <h2> <a style={{ paddingLeft:'10px' , textDecoration: 'none', color: 'white' }} target='_blank' href="https://github.com/subhankarroy612">https://github.com/subhankarroy612</a> </h2>
          </div>
          <div>
            <img width='50px' height='50px' src="https://cdn-icons-png.flaticon.com/512/1409/1409945.png" alt="linkedin logo" />
            <h2> <a style={{paddingLeft:'10px' , textDecoration: 'none', color: 'white' }} target='_blank' href="https://www.linkedin.com/in/subhankar-roy-78b71918a/"> https://www.linkedin.com/in/subhankar-roy-78b71918a/</a></h2>
          </div>
        </div>

        <div id='gif'>
          <img src="https://static.wixstatic.com/media/fcf9f1_183add7b26954250a69bc0ac13f8ca50~mv2.gif/v1/fill/w_1600,h_900,al_c,q_90/file.jpg" alt="" />
        </div>

      </div>

      <h4 id='patent' style={{marginTop:'10vh'}}>Designed and Developed by SUBHANKAR ROY</h4>
    </div>
  )
}

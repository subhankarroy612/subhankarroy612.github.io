import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function Skills() {
  return (
    <div id='skills'>
      <h1 >Professional <span className='name1' >Skillset</span> </h1>

      <h1 className='skillDes'>Frontend</h1>
      <div className='haba'>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="javascript logo" />
          <h4>JavaScript</h4>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174854.png" alt="html logo" />
          <h4>HTML</h4>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css logo" />
          <h4>CSS</h4>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" alt="react logo" />
          <h4>React</h4>
        </div>
        <div>
          <img src="https://opencollective-production.s3.us-west-1.amazonaws.com/ada636e0-395b-11ea-8ab7-b3f0317bbc7c.png" alt="material ui logo" />
          <h4>Material UI</h4>
        </div>
      </div>

      <h1 className='skillDes'>Backend</h1>
      <div className='haba haba1' style={{ width: '34%', gap: '5vw', margin: 'auto' }}>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="nodeJS logo" />
          <h4>NodeJS</h4>
        </div>
        <div>
          <img height='80px' src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?pid=ImgDet&rs=1" alt="express logo" />
          <h4>Express</h4>
        </div>
        <div>
          <img src="https://mpng.subpng.com/20190401/zsf/kisspng-mongodb-document-oriented-database-nosql-openshift-web-app-development-servcie-in-dehradun-5ca1b8cb8a0f32.3708278115541024755655.jpg" alt="mongoDb logo" />
          <h4>MongoDB</h4>
        </div>
      </div>

      <h1 className='skillDes'> <span className='name1'>Tools</span> I use</h1>
      <div className='haba haba1' style={{ width: '34%', gap: '5vw', margin: 'auto'}}>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/906/906324.png" alt="vscode logo" />
          <h4>VS Code</h4>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png" alt="github logo" />
          <h4>GitHub</h4>
        </div>
        <div>
          <img src="https://image.pngaaa.com/42/95042-middle.png" alt="postman logo" />
          <h4>Postman</h4>
        </div>
      </div>

      <h1 className='skillDes'>My <span className='name1'>Statictics</span></h1>
      <div id='stats'>
        <img src="https://camo.githubusercontent.com/850da986bf627ad3cc0d82b62ab0b9dd0b327a109835a561db5f47e893a93503/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d73756268616e6b6172726f793631322673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="stat" />
        <img src="https://camo.githubusercontent.com/d703b28e19fb0d4ea5c3d6037a1c4311d1239864c898e0159ee18a1f63279870/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d73756268616e6b6172726f793631322673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="stat" />
      </div>

      <h1 className='skillDes'>Days I <span className='name1'>Code</span></h1>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20vh' }}>
        <GitHubCalendar username="subhankarroy612" />
      </div>
    </div>
  )
}

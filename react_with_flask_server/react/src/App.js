import React from 'react';
import csk from './static/csk.png'
import dc from './static/dc.jpeg'
import kkr from './static/kkr.jpg'
import kxip from './static/kxip.jpg'
import mi from './static/mi.jpg'
import rcb from './static/rcb.jpg'
import rr from './static/rr.jpg'
import srh from './static/srh.jpg'
import './static/style.css'
import Banner from './components/banner'
import Form from './components/form'

function App() {
  const left_banner={a:csk,b:dc,c:kkr,d:kxip,e:mi,f:rcb,g:rr,h:srh}
  const right_banner={a:rcb,b:rr,c:srh,d:mi,e:dc,f:kkr,g:kxip,h:csk}
  return (
    <div>
    <h1>Welcome to IPL predictor</h1>
    <div className="main_holder">
      <Banner {...left_banner}/>
      <Form/> 
      <Banner {...right_banner}/>
    </div>
    </div>
  );
}

export default App;

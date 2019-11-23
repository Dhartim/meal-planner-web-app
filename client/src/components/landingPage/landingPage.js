import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import Email from '../subcomponents/email';
import { avocado, cuttingBoard, stars, salad, salad2 } from '../../assets/images';

import './landingPage.scss';

// const url = (name, wrap = false, png = true) => `${wrap ? 'url(' : ''}../../assets/images/${name}.${png ? 'png' : 'png'}${wrap ? ')' : ''}`


class LandingPage extends Component {
  render() {
    return (
        <Parallax ref={ref => (this.parallax = ref)} pages={3} style ={{backgroundColor: 'grey'}}>
          <ParallaxLayer offset={0} speed={1} className="landing-page__title-container" style={{ backgroundImage: `url(${cuttingBoard})`, backgroundSize: 'cover' }}>
            <div className="landing-page__title">
            <h1>Diet Right</h1>
            <button>Get started</button>
            </div>
            
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
          {/* <ParallaxLayer offset={1.5} speed={1} style={{ backgroundColor: 'pink' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'green' }} /> */}
          {/* {console.log(url('stars', true, false))} */}

          { console.log(stars)}
          { console.log(avocado)}

  
          <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }}/>
  
         <ParallaxLayer offset={.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
           {/* <div className="landing-page__strawberry" style={{ width: '15%', marginLeft: '70%' }}></div> */}
            <img src={salad} style={{ width: '35%', marginLeft: '70%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            {/* <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} /> */}
          </ParallaxLayer>
  
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            {/* <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '20%', marginLeft: '40%' }} /> */}
          </ParallaxLayer>
  
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            {/* <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '20%', marginLeft: '75%' }} /> */}
          </ParallaxLayer>
  
          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            {/* <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '10%', marginLeft: '80%' }} /> */}
          </ParallaxLayer>
  
          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            {/* <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={'url(../../assets/images/strawberry.png)'} style={{ display: 'block', width: '15%', marginLeft: '75%' }} /> */}
          </ParallaxLayer>
  
          <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
            {/* <img src={'url(../../assets/images/strawberry.png)'} style={{ width: '60%' }} /> */}
          </ParallaxLayer> 
  
          {/* <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          />
  
          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={url('server')} style={{ width: '20%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={url('bash')} style={{ width: '40%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} />
          </ParallaxLayer> */}
        </Parallax>
    );
  }
  r
    // <div>
    //   <div className="landing-page">
    //     <div className="landing-page__container">
    //       <div className="landing-page__meal-box">
    //         <h1>Meal Planner</h1>
    //       </div>
    //       <div className="landing-page__user-auth">
    //         <a
    //           className="auth-btn" 
    //           href="/register"
    //         >
    //           Sign Up
    //         </a>
    //         <a 
    //           className="auth-btn" 
    //           href="/login"
    //         >
    //           Login
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="landing-page__contact-us">
    //     <Email/>
    //   </div>
    // </div>

}

export default LandingPage;
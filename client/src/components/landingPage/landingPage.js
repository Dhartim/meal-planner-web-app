import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import Email from '../subcomponents/email';
import { withRouter } from 'react-router'
import { avocado, cuttingBoard, stars, salad, salad2, vegetableDish, noodles, steak, yogurt, meal1 } from '../../assets/images';

import './landingPage.scss';

// const url = (name, wrap = false, png = true) => `${wrap ? 'url(' : ''}../../assets/images/${name}.${png ? 'png' : 'png'}${wrap ? ')' : ''}`


class LandingPage extends Component {
  render() {
    return (
        <Parallax ref={ref => (this.parallax = ref)} pages={2} className="landing-page__background" >
            <div className="landing-page__title">
            <h1 className="landing-page__header">Meal Planner</h1>
            <button className="landing-page__auth-btn" style={{pointerEvents: 'auto'}}  onClick={()=> this.props.history.push("/register")}>Get started</button>
            </div>

          <ParallaxLayer offset={0} speed={1} className="landing-page__title-container" style={{ backgroundImage: `url(${cuttingBoard})`, backgroundSize: 'cover'  }}>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }}/>
  
         <ParallaxLayer offset={.5} speed={2.5} horizontal='true'>
            <img src={salad} style={{ width: '35%', marginLeft: '5%' }} />
          </ParallaxLayer>
  
          <ParallaxLayer offset={1} speed={-1} style={{ opacity: 0.1 }}>
            <img src={avocado} style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
          </ParallaxLayer>
  
          
          <ParallaxLayer offset={.99} speed={1} style={{ opacity: 1 }}>
            
            <div className="text" style={{}}>
              <span>Meal Planner is dieting made simple.</span>
              <span>Find your next meal that matches your diet.</span>
            </div>
            <div className="images">
              <img src={vegetableDish} className='images-food' />
              <img src={yogurt} className='images-food'/>
              <img src={meal1} className='images-food' />
            </div>
          </ParallaxLayer>
  
          
          <ParallaxLayer offset={1.05} speed={3} style={{ opacity: .3 }}>
            <img src={avocado} style={{ display: 'block', width: '10%', marginLeft: '35%' }} />
            <img src={salad2} style={{ display: 'block', width: '20%', marginLeft: '65%' , marginTop: '15%'}} />
          </ParallaxLayer>
  
  
          <ParallaxLayer offset={1.2} speed={0.4} style={{ opacity: 0.2 }}>
          <img src={avocado} style={{ display: 'block', width: '10%', marginLeft: '55%' }} />
            <img src={noodles} style={{ display: 'block', width: '10%', marginLeft: '85%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.6} style={{ opacity: 0.3 }}>
          <img src={avocado} style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
            <img src={steak} style={{ display: 'block', width: '5%', marginLeft: '15%' }} />
          </ParallaxLayer>
        </Parallax>
    );
  }
}

export default withRouter(LandingPage);
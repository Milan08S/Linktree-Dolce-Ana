import { useState } from 'react'
import dolceAnaLogo from './assets/Dolce-Ana.webp'
import './App.css'
import './css/general.css'
import Navigator from './components/nav/nav'
import SocialButtons from './components/buttonLinks/socialButtons'

function App() {

  return (
    <>
      
      <div id='background-div'>
        <Navigator />
        <div id='trunk'>
          <div id='logoContainer'>
            <div id='logoCircle'>
              <picture className='logoPicture'>
                <source srcset={dolceAnaLogo} type="image/webp"></source>
                <img src={dolceAnaLogo} alt='Dolce Ana Logo' fetchpriority="high" width="1600" height="1600"/>
              </picture>   
            </div>
            <h1 id='logoText'>@dolce_ana18</h1>
          </div>
          <SocialButtons></SocialButtons>

        </div>
      </div>
    </>
  )
}

export default App

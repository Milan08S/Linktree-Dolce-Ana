import { useEffect } from 'react'
import dolceAnaLogo from './assets/Dolce-Ana.webp'
import './App.css'
import './css/general.css'
import Navigator from './components/nav/nav'
import SocialButtons from './components/buttonLinks/socialButtons'
import profileData from '../public/project-config.js'

function App() {
  useEffect(() => {
    document.title = profileData.profile.name;

    let root = document.getElementById('root');
    root.style.backgroundColor = profileData.profile.backgroundColor;
  }, []);

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
            <h1 id='logoText'>{profileData.profile.social_media}</h1>
          </div>
          <SocialButtons></SocialButtons>

        </div>
      </div>
    </>
  )
}

export default App

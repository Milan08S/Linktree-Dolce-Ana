import './socialButtons.css';
import profileData from '../../../public/project-config.js';
import instagram from '../../assets/instagram.svg';

const SocialButtons = () => {
  return (
    <div id="social-buttons">
      {profileData.links.map((platform) => (
        <a
          key={platform.id}
          href={platform.url}
          className="social-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={platform.icon} alt={platform.title} />
          <p>{platform.title}</p>
        </a>
      ))}
    </div>
  );
};


export default SocialButtons;

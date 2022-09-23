import { me } from '../../data/images';

import './profileScreen.css';

export default function ProfileScreen() {
  return (
    <div className='profile-screen-div'>
      <div className='profile-div'>
        <div className='about-me-div'>
          <h2 data-cy='welcome-text' className='welcome-text'>
            Hi, <br></br>where. <br></br>I`m Adriano.
          </h2>
        </div>
        <div className='profile-image-div'>
          <img
            data-cy='profile-image'
            className='profile-image'
            src={me}
            alt='Adriano Monteiro'
          />
        </div>
      </div>
      <div className='text-div'>
        <p data-cy='about-me-text' className='about-me-text'>
          A software developer passionate about learning, teaching and
          collaborating. How can I contribute to your team?
        </p>
      </div>
    </div>
  );
}

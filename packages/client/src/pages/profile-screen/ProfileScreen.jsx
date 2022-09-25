import { useTranslation } from 'react-i18next';

import { me } from '../../data/images';

import './profileScreen.css';

export default function ProfileScreen() {
  const { t } = useTranslation();
  return (
    <div className='profile-screen-div'>
      <div className='profile-div'>
        <div className='about-me-div'>
          <h2 data-cy='welcome-text' className='welcome-text'>
            {t('Hey there. I`m Adriano Monteiro.')}
          </h2>
          <p>{t('Junior Full Stack Software Developer.')}</p>
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
          {t(
            'A software developer passionate about learning, teaching and collaborating. How can I contribute to your team?'
          )}
        </p>
      </div>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './menuComponent.css';

function changeActive(link: any): void {
  document.querySelector('.active')?.classList.remove('active');

  link?.classList.add('active');
}

export default function MenuButtonComponent() {
  const { t } = useTranslation();

  return (
    <div data-cy='menu' className='menu-div'>
      <Link
        className='link active'
        to='/'
        onClick={({ target }) => changeActive(target)}
      >
        {t('Home')}
      </Link>
      <Link
        className='link'
        to='/about'
        onClick={({ target }) => changeActive(target)}
      >
        {t('About')}
      </Link>
      <Link
        className='link'
        to='/projects'
        onClick={({ target }) => changeActive(target)}
      >
        {t('Projects')}
      </Link>
      <Link
        className='link'
        to='/contacts'
        onClick={({ target }) => changeActive(target)}
      >
        {t('Contacts')}
      </Link>
    </div>
  );
}

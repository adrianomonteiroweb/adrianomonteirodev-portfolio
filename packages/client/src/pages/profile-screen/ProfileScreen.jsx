import { useTranslation } from 'react-i18next';

import { me } from '../../data/images';

import './profileScreen.css';

export default function ProfileScreen() {
  return (
    <div className='terminal-div'>
      <p className='text-terminal'>
        <span className='root'>adriano</span>@
        <span className='user'>software-developer</span> /home{' '}
        <span className='hashtag'>#</span>
        <span className='cursor'>|</span>
      </p>
    </div>
  );
}

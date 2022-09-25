import { Link } from 'react-router-dom';

import './menuComponent.css';

function changeActive(link: any): void {
  document.querySelector('.active')?.classList.remove('active');

  link?.classList.add('active');
}

export default function MenuButtonComponent() {
  console.log(window.location.href);

  return (
    <div data-cy='menu' className='menu-div'>
      <Link
        className='link active'
        to='/'
        onClick={({ target }) => changeActive(target)}
      >
        Home
      </Link>
      <Link
        className='link'
        to='/about'
        onClick={({ target }) => changeActive(target)}
      >
        About
      </Link>
      <Link
        className='link'
        to='/projects'
        onClick={({ target }) => changeActive(target)}
      >
        Projects
      </Link>
      <Link
        className='link'
        to='/contacts'
        onClick={({ target }) => changeActive(target)}
      >
        Contacts
      </Link>
    </div>
  );
}

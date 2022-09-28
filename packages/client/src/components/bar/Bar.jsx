import './bar.css';

export default function Bar() {
  return (
    <div data-cy='bar' className='bar-div'>
      <div className='cicle red'></div>
      <div className='cicle yellow'></div>
      <div className='cicle green'></div>
    </div>
  );
}

import Iframe from 'react-iframe';
import '../styles/Graphitem.css';

function Graphitem({ link, title }) {
  return (
    <div className='graph__item'>
      <div className='graph__title'>
        <h3>{title}</h3>
      </div>
      <div className='graph__image'>
        <Iframe
          width='450'
          height='260'
          style={{ border: '1px solid #cccccc' }}
          scrolling='no'
          src={link}></Iframe>
      </div>
    </div>
  );
}

export default Graphitem;

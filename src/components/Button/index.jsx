import React from 'react';
import '../../sass/button.scss';
import { useServer } from '../Contex/Server';
import { Link } from 'react-router-dom';

const Button = (props) => {
  var { ID, name } = props;

  var { valueId } = useServer();

  const onClick = () => {
    var elem = document.getElementById(ID);
    valueId(elem.id);
  };

  return (
    <div className='Button'>
      <Link to={`/nana/${ID}`}>
        <button id={ID} onClick={onClick}>
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;

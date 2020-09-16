import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/state.scss';

const State = () => {
  var { valueCapital, validatorCapital, nanas } = useServer();

  return (
    <div className='state'>
      <h4>Capital</h4>
      <form className='state__form'>
        <select className='id' id='capital' onChange={valueCapital}>
          <option value='DEFAULT'>Seleccione</option>
          {nanas !== 0 &&
            validatorCapital().map((country, index) => (
              <React.Fragment key={index}>
                <option value={country}>{country}</option>
              </React.Fragment>
            ))}
        </select>
      </form>
    </div>
  );
};

export default State;

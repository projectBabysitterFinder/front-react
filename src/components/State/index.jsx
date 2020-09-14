import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/state.scss';

const State = () => {
  var { valueState, stateColombia, stateMexico, country } = useServer();

  return (
    <div className='state'>
      <h4>Estado</h4>
      <form className='state__form'>
        <select className='id' id='state' onChange={valueState}>
          <option value='DEFAULT'>Seleccione</option>
            {country === 'Colombia' ? 
              stateColombia.map((state, index) => (
              <React.Fragment key={index}>
                {<option value={state}>{state}</option>}
              </React.Fragment>
            )) : 
            stateMexico.map((state, index) => (
              <React.Fragment key={index}>
                {<option value={state}>{state}</option>}
              </React.Fragment>
            ))
            }
        </select>
      </form>
    </div>
  );
};

export default State;

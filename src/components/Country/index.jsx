import React from 'react';
import { useServer } from '../Contex/Server';
import '../../sass/country.scss';

const Country = () => {
  var { valueCountry, countryAll } = useServer();

  return (
    <div className='country'>
      <h4>País</h4>
      <form className='country__form'>
        <select className='id' id='countryId' onChange={valueCountry}>
          <option value='DEFAULT'>Seleccione</option>
          {countryAll.length !== 0 &&
            countryAll.map((country, index) => (
              <React.Fragment key={index}>
                <option value={country}>{country}</option>
              </React.Fragment>
            ))}
        </select>
      </form>
    </div>
  );
};

export default Country;

import React from 'react';
import NanaData from '../../components/NanaData';
import { useServer } from '../../components/Contex/Server';
import CardDate from '../../components/CardDate';
import '../../sass/nanaProfile.scss';

const NanaProfile = () => {
  var { Idd, open } = useServer();

  return (
    <div className='nanaData'>
      <CardDate open={open} />
      {Idd.map((nana) => (
        <React.Fragment key={nana.id}>
          <NanaData
            id={nana.id}
            name={nana.name}
            description={nana.description}
            score={nana.score}
            averageScore={nana.averageScore}
            time={nana.time}
            studies={nana.studies}
            experiences={nana.experiences}
            skills={nana.skills}
            country={nana.country}
            state={nana.state}
            capital={nana.capital}
            specialty={nana.specialty}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default NanaProfile;

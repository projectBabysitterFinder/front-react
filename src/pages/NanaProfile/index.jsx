import React from 'react';
import NanaData from '../../components/NanaData';
import { useServer } from '../../components/Contex/Server';
import ModalDate from '../../components/ModalDate';
import ModalAddInfo from '../../components/ModalAddInfo';
import ModalCheck from '../../components/ModalCheck';
import '../../sass/nanaProfile.scss';

const NanaProfile = () => {
  var { Idd, open, openAdd, openCheck } = useServer();

  return (
    <div className='nanaData'>
      <ModalDate open={open} />
      <ModalAddInfo openAdd={openAdd} />
      <ModalCheck openCheck={openCheck} />
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

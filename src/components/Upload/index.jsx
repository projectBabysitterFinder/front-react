import React, { useState } from 'react';
import { useServer } from '../Contex/Server';
import { storage } from '../Firebase';
import '../../sass/upload.scss';

const Upload = () => {

  const [image, setImage] = useState(null);

  var { setUrl } = useServer();

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    var num = Math.random() * (10000000 - 1) + 1
    const uploadTask = storage.ref(`images/${image.name}${num}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        if(snapshot) {
          
        }
      },
      error => {
        if(error) {
        alert('Por favor seleccione la foto a subir primero')
        }
      },
      () => {
        storage.ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          setUrl(url)
        });
      }
    );
  };

  return (
    <div className='upload'>
      <div className='upload__img'>
        <input type='file' onChange={handleChange} />
        <button onClick={handleUpload}>Subir</button>
      </div>
    </div>
  );
};

export default Upload;
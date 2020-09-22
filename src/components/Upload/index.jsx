import React from 'react';
import { useServer } from '../Contex/Server';
import firebase from '../../firebase';
import '../../sass/upload.scss';

const Upload = () => {
  var { setUrl } = useServer();

  const handleChangeImages = (e) => {
    const today = new Date();
    const date = `${today.getDate()}${today.getMonth()}${today.getFullYear()}${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
    const files = e.target.files;
    const bucketName = 'users';
    const file = files[0];
    const storageRef = firebase
      .storage()
      .ref(`${bucketName}/${date}${file.name}`);
    const uploadTask = storageRef.put(file);
    uploadTask.on(
      'state_changed',
      null,
      function (error) {
        console.log('Error al subir el archivo', error);
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          setUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className='upload'>
      <label>Foto</label>
      <input
        onChange={handleChangeImages}
        className='inputForm'
        type='file'
        name='imagesData'
        value=''
      />
      <div className='formUser__error'>{}</div>
    </div>
  );
};

export default Upload;

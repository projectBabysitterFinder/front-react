import React from 'react';
import firebase from 'firebase';

const FileImages = () => {
  const handleChange = (files) => {
    console.log('files :', files); // No console log
    const bucketName = 'users';
    const file = files[0];
    const storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    const uploadTask = storageRef.put(file);
    uploadTask.on(
      'state_changed',
      null,
      function (error) {
        console.log('Error al subir el archivo', error);
      },
      function () { // Funciones o arrow Functions
        console.log('Subida completada');
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type='file' onChange={(e) => handleChange(e.target.files)} />
      <img id='new-img' />
    </div>
  );
};

export default FileImages;

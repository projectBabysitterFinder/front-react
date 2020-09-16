import React from 'react';
import { useServer } from '../Contex/Server';
// import { storage } from '../Firebase';
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

  // const [image, setImage] = useState(null);

  // const handleChange = e => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleUpload = () => {
  //   var num = Math.trunc(Math.random() * (10000000 - 1) + 1)
  //   const uploadTask = storage.ref(`${num}images/${image.name}`).put(image);
  //   uploadTask.on(
  //     'state_changed',
  //     snapshot => {
  //       if(snapshot) {

  //       }
  //     },
  //     error => {
  //       if(error) {
  //       alert('Por favor seleccione la foto a subir primero')
  //       }
  //     },
  //     () => {
  //       storage.ref('images')
  //       .child(image.name)
  //       .getDownloadURL()
  //       .then(url => {
  //         setUrl(url)
  //         console.log(url, 'Url')
  //       });
  //     }
  //   );
  // };

  return (
    <div className='upload'>
      {/* <div className='upload__img'>
        <input type='file' onChange={handleChange} />
        <button onClick={handleUpload}>Subir</button>
      </div> */}
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

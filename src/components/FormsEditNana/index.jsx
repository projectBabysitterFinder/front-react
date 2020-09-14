import React, { useState } from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import { Link } from 'react-router-dom';
import { useServer } from '../Contex/Server';
import Upload from '../Upload';
import '../../sass/formsEditNana.scss';

  var specialties0 = '';
  var specialties1 = '';
  var specialties2 = '';
  var specialties3 = '';
  var specialties4 = '';
  var specialties5 = '';
  var abilities0 = '';
  var abilities1 = '';
  var abilities2 = '';
  var abilities3 = '';
  var abilities4 = '';
  var abilities5 = '';

  var studies = {
    'TITULO': '',
    'INSTITUCIÓN': '',
    'AÑO': 0
  }
  var studies1 = {
    'TITULO': '',
    'INSTITUCIÓN': '',
    'AÑO': 0
  }
  var studies2 = {
    'TITULO': '',
    'INSTITUCIÓN': '',
    'AÑO': 0
  }
  var studies3 = {
    'TITULO': '',
    'INSTITUCIÓN': '',
    'AÑO': 0
  }
  var studies4 = {
    'TITULO': '',
    'INSTITUCIÓN': '',
    'AÑO': 0
  }
  var studies5 = {
    'TITULO': '',
    'INSTITUCIÓN': '',
    'AÑO': 0
  }
  var experience = {
    'INICIO': '',
    'TAREAS': '',
    'EMPRESA': ''
  }
  var experience1 = {
    'INICIO': '',
    'TAREAS': '',
    'EMPRESA': ''
  }
  var experience2 = {
    'INICIO': '',
    'TAREAS': '',
    'EMPRESA': ''
  }
  var experience3 = {
    'INICIO': '',
    'TAREAS': '',
    'EMPRESA': ''
  }
  var experience4 = {
    'INICIO': '',
    'TAREAS': '',
    'EMPRESA': ''
  }
  var experience5= {
    'INICIO': '',
    'TAREAS': '',
    'EMPRESA': ''
  }
  
  const editNana = {
    'ID_META': 0,
    'ID_USER': 0,
    'DES_DATA_STUDIES': [],
    'DES_DATA_SPECIALTIES': [],
    'DES_DATA_ABILITIES': [],
    'DES_DATA_EXPERIECE': [],
    'DES_DATA_SERVICE_TIME': null,
    'NUM_HOURLY_RATE': 0,
    'ID_AVAILABILITY': 0,
    'ID': 0,
    'ID_ROL': 0,
    'DES_FULLNAME': '',
    'DATE_BIRTH': '',
    'DES_URL_IMAGE': '',
    'DES_USER': '',
    'DES_PASSWORD': '',
    'DES_ADDRESS': '',
    'DES_ADDRESS_LAT': '',
    'DES_ADDRESS_LONG': '',
    'NUM_PHONE': '',
    'DES_EMAIL': '',
    'DES_COUNTRY': '',
    'DES_STATE': '',
    'DES_CITY': '',
    'NUM_STATUS': 0,
    'DES_NAME': '',
    'NUM_VALUE': 0
  }

const FormsEditNana = () => {
  var {
    // buttonCheck,
    coordinate,
    longitude,
    edit,
    postNana,
    url
  } = useServer();

  const [control, setControl] = useState();

  const startValues = () => {
    setControl();
  }

  if(control) {
    startValues();
  }
  
  if (longitude === 0) {
    coordinate();
  }

  const addStudy = () => {
    edit[0].DES_DATA_STUDIES.push(studies)
  }

  const removeStudy = () => {
    if(edit[0].DES_DATA_STUDIES.length > 1) {
      edit[0].DES_DATA_STUDIES.pop()
    }
  }

  const addSpecialties = () => {
    edit[0].DES_DATA_SPECIALTIES.push('')
  }

  const removeSpecialties = () => {
    if(edit[0].DES_DATA_SPECIALTIES.length > 1) {
      edit[0].DES_DATA_SPECIALTIES.pop()
    }
  }

  const addAbilities = () => {
    edit[0].DES_DATA_ABILITIES.push('')
  }

  const removeAbilities = () => {
    if(edit[0].DES_DATA_ABILITIES.length > 1) {
      edit[0].DES_DATA_ABILITIES.pop()
    }
  }

  const addExperience = () => {
    edit[0].DES_DATA_EXPERIECE.push(experience)
  }

  const removeExperience = () => {
    if(edit[0].DES_DATA_EXPERIECE.length > 1) {
      edit[0].DES_DATA_EXPERIECE.pop()
    }
  }

  const valueAll = () => {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var birth = document.getElementById('birth').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;

    if (edit[0].DES_DATA_STUDIES.length === 1) {
      studies.TITULO = document.getElementById('title0').value;
      studies.INSTITUCIÓN = document.getElementById('institution0').value;
      studies.AÑO = document.getElementById('year0').value;
      editNana.DES_DATA_STUDIES.push(studies);
    }

    if (edit[0].DES_DATA_STUDIES.length === 2) {
      studies.TITULO = document.getElementById('title0').value;
      studies.INSTITUCIÓN = document.getElementById('institution0').value;
      studies.AÑO = document.getElementById('year0').value;
      editNana.DES_DATA_STUDIES.push(studies);
      studies1.TITULO = document.getElementById('title1').value;
      studies1.INSTITUCIÓN = document.getElementById('institution1').value;
      studies1.AÑO = document.getElementById('year1').value;
      editNana.DES_DATA_STUDIES.push(studies1);
    }
    if (edit[0].DES_DATA_STUDIES.length === 3) {
      studies.TITULO = document.getElementById('title0').value;
      studies.INSTITUCIÓN = document.getElementById('institution0').value;
      studies.AÑO = document.getElementById('year0').value;
      editNana.DES_DATA_STUDIES.push(studies);
      studies1.TITULO = document.getElementById('title1').value;
      studies1.INSTITUCIÓN = document.getElementById('institution1').value;
      studies1.AÑO = document.getElementById('year1').value;
      editNana.DES_DATA_STUDIES.push(studies1);
      studies2.TITULO = document.getElementById('title2').value;
      studies2.INSTITUCIÓN = document.getElementById('institution2').value;
      studies2.AÑO = document.getElementById('year2').value;
      editNana.DES_DATA_STUDIES.push(studies2);
    }
    if (edit[0].DES_DATA_STUDIES.length === 4) {
      studies.TITULO = document.getElementById('title0').value;
      studies.INSTITUCIÓN = document.getElementById('institution0').value;
      studies.AÑO = document.getElementById('year0').value;
      editNana.DES_DATA_STUDIES.push(studies);
      studies1.TITULO = document.getElementById('title1').value;
      studies1.INSTITUCIÓN = document.getElementById('institution1').value;
      studies1.AÑO = document.getElementById('year1').value;
      editNana.DES_DATA_STUDIES.push(studies1);
      studies2.TITULO = document.getElementById('title2').value;
      studies2.INSTITUCIÓN = document.getElementById('institution2').value;
      studies2.AÑO = document.getElementById('year2').value;
      editNana.DES_DATA_STUDIES.push(studies2);
      studies3.TITULO = document.getElementById('title3').value;
      studies3.INSTITUCIÓN = document.getElementById('institution3').value;
      studies3.AÑO = document.getElementById('year3').value;
      editNana.DES_DATA_STUDIES.push(studies3);
    }
    if (edit[0].DES_DATA_STUDIES.length === 5) {
      studies.TITULO = document.getElementById('title0').value;
      studies.INSTITUCIÓN = document.getElementById('institution0').value;
      studies.AÑO = document.getElementById('year0').value;
      editNana.DES_DATA_STUDIES.push(studies);
      studies1.TITULO = document.getElementById('title1').value;
      studies1.INSTITUCIÓN = document.getElementById('institution1').value;
      studies1.AÑO = document.getElementById('year1').value;
      editNana.DES_DATA_STUDIES.push(studies1);
      studies2.TITULO = document.getElementById('title2').value;
      studies2.INSTITUCIÓN = document.getElementById('institution2').value;
      studies2.AÑO = document.getElementById('year2').value;
      editNana.DES_DATA_STUDIES.push(studies2);
      studies3.TITULO = document.getElementById('title3').value;
      studies3.INSTITUCIÓN = document.getElementById('institution3').value;
      studies3.AÑO = document.getElementById('year3').value;
      editNana.DES_DATA_STUDIES.push(studies3);
      studies4.TITULO = document.getElementById('title4').value;
      studies4.INSTITUCIÓN = document.getElementById('institution4').value;
      studies4.AÑO = document.getElementById('year4').value;
      editNana.DES_DATA_STUDIES.push(studies4);
    }
    if (edit[0].DES_DATA_STUDIES.length === 6) {
      studies.TITULO = document.getElementById('title0').value;
      studies.INSTITUCIÓN = document.getElementById('institution0').value;
      studies.AÑO = document.getElementById('year0').value;
      editNana.DES_DATA_STUDIES.push(studies);
      studies1.TITULO = document.getElementById('title1').value;
      studies1.INSTITUCIÓN = document.getElementById('institution1').value;
      studies1.AÑO = document.getElementById('year1').value;
      editNana.DES_DATA_STUDIES.push(studies1);
      studies2.TITULO = document.getElementById('title2').value;
      studies2.INSTITUCIÓN = document.getElementById('institution2').value;
      studies2.AÑO = document.getElementById('year2').value;
      editNana.DES_DATA_STUDIES.push(studies2);
      studies3.TITULO = document.getElementById('title3').value;
      studies3.INSTITUCIÓN = document.getElementById('institution3').value;
      studies3.AÑO = document.getElementById('year3').value;
      editNana.DES_DATA_STUDIES.push(studies3);
      studies4.TITULO = document.getElementById('title4').value;
      studies4.INSTITUCIÓN = document.getElementById('institution4').value;
      studies4.AÑO = document.getElementById('year4').value;
      editNana.DES_DATA_STUDIES.push(studies4);
      studies5.TITULO = document.getElementById('title5').value;
      studies5.INSTITUCIÓN = document.getElementById('institution5').value;
      studies5.AÑO = document.getElementById('year5').value;
      editNana.DES_DATA_STUDIES.push(studies5);
    }

    if (edit[0].DES_DATA_SPECIALTIES.length === 1) {
      specialties0 = document.getElementById('specialties0').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties0);
    }
    if (edit[0].DES_DATA_SPECIALTIES.length === 2) {
      specialties0 = document.getElementById('specialties0').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties0);
      specialties1 = document.getElementById('specialties1').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties1);
    }
    if (edit[0].DES_DATA_SPECIALTIES.length === 3) {
      specialties0 = document.getElementById('specialties0').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties0);
      specialties1 = document.getElementById('specialties1').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties1);
      specialties2 = document.getElementById('specialties2').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties2);
    }
    if (edit[0].DES_DATA_SPECIALTIES.length === 4) {
      specialties0 = document.getElementById('specialties0').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties0);
      specialties1 = document.getElementById('specialties1').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties1);
      specialties2 = document.getElementById('specialties2').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties2);
      specialties3 = document.getElementById('specialties3').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties3);
    }
    if (edit[0].DES_DATA_SPECIALTIES.length === 5) {
      specialties0 = document.getElementById('specialties0').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties0);
      specialties1 = document.getElementById('specialties1').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties1);
      specialties2 = document.getElementById('specialties2').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties2);
      specialties3 = document.getElementById('specialties3').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties3);
      specialties4 = document.getElementById('specialties4').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties4);
    }
    if (edit[0].DES_DATA_SPECIALTIES.length === 6) {
      specialties0 = document.getElementById('specialties0').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties0);
      specialties1 = document.getElementById('specialties1').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties1);
      specialties2 = document.getElementById('specialties2').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties2);
      specialties3 = document.getElementById('specialties3').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties3);
      specialties4 = document.getElementById('specialties4').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties4);
      specialties5 = document.getElementById('specialties5').value;
      editNana.DES_DATA_SPECIALTIES.push(specialties5);
    }

    if (edit[0].DES_DATA_ABILITIES.length === 1) {
      abilities0 = document.getElementById('abilities0').value;
      editNana.DES_DATA_ABILITIES.push(abilities0);
    }
    if (edit[0].DES_DATA_ABILITIES.length === 2) {
      abilities0 = document.getElementById('abilities0').value;
      editNana.DES_DATA_ABILITIES.push(abilities0);
      abilities1 = document.getElementById('abilities1').value;
      editNana.DES_DATA_ABILITIES.push(abilities1);
    }
    if (edit[0].DES_DATA_ABILITIES.length === 3) {
      abilities0 = document.getElementById('abilities0').value;
      editNana.DES_DATA_ABILITIES.push(abilities0);
      abilities1 = document.getElementById('abilities1').value;
      editNana.DES_DATA_ABILITIES.push(abilities1);
      abilities2 = document.getElementById('abilities2').value;
      editNana.DES_DATA_ABILITIES.push(abilities2);
    }
    if (edit[0].DES_DATA_ABILITIES.length === 4) {
      abilities0 = document.getElementById('abilities0').value;
      editNana.DES_DATA_ABILITIES.push(abilities0);
      abilities1 = document.getElementById('abilities1').value;
      editNana.DES_DATA_ABILITIES.push(abilities1);
      abilities2 = document.getElementById('abilities2').value;
      editNana.DES_DATA_ABILITIES.push(abilities2);
      abilities3 = document.getElementById('abilities3').value;
      editNana.DES_DATA_ABILITIES.push(abilities3);
    }
    if (edit[0].DES_DATA_ABILITIES.length === 5) {
      abilities0 = document.getElementById('abilities0').value;
      editNana.DES_DATA_ABILITIES.push(abilities0);
      abilities1 = document.getElementById('abilities1').value;
      editNana.DES_DATA_ABILITIES.push(abilities1);
      abilities2 = document.getElementById('abilities2').value;
      editNana.DES_DATA_ABILITIES.push(abilities2);
      abilities3 = document.getElementById('abilities3').value;
      editNana.DES_DATA_ABILITIES.push(abilities3);
      abilities4 = document.getElementById('abilities4').value;
      editNana.DES_DATA_ABILITIES.push(abilities4);
    }
    if (edit[0].DES_DATA_ABILITIES.length === 6) {
      abilities0 = document.getElementById('abilities0').value;
      editNana.DES_DATA_ABILITIES.push(abilities0);
      abilities1 = document.getElementById('abilities1').value;
      editNana.DES_DATA_ABILITIES.push(abilities1);
      abilities2 = document.getElementById('abilities2').value;
      editNana.DES_DATA_ABILITIES.push(abilities2);
      abilities3 = document.getElementById('abilities3').value;
      editNana.DES_DATA_ABILITIES.push(abilities3);
      abilities4 = document.getElementById('abilities4').value;
      editNana.DES_DATA_ABILITIES.push(abilities4);
      abilities5 = document.getElementById('abilities5').value;
      editNana.DES_DATA_ABILITIES.push(abilities5);
    }

    if (edit[0].DES_DATA_EXPERIECE.length === 1) {
      experience.INICIO = document.getElementById('start0').value;
      experience.TAREAS = document.getElementById('task0').value;
      experience.EMPRESA = document.getElementById('company0').value;
      editNana.DES_DATA_EXPERIECE.push(experience);
    }
    if (edit[0].DES_DATA_EXPERIECE.length === 2) {
      experience.INICIO = document.getElementById('start0').value;
      experience.TAREAS = document.getElementById('task0').value;
      experience.EMPRESA = document.getElementById('company0').value;
      editNana.DES_DATA_EXPERIECE.push(experience);
      experience1.INICIO = document.getElementById('start1').value;
      experience1.TAREAS = document.getElementById('task1').value;
      experience1.EMPRESA = document.getElementById('company1').value;
      editNana.DES_DATA_EXPERIECE.push(experience1);
    }
    if (edit[0].DES_DATA_EXPERIECE.length === 3) {
      experience.INICIO = document.getElementById('start0').value;
      experience.TAREAS = document.getElementById('task0').value;
      experience.EMPRESA = document.getElementById('company0').value;
      editNana.DES_DATA_EXPERIECE.push(experience);
      experience1.INICIO = document.getElementById('start1').value;
      experience1.TAREAS = document.getElementById('task1').value;
      experience1.EMPRESA = document.getElementById('company1').value;
      editNana.DES_DATA_EXPERIECE.push(experience1);
      experience2.INICIO = document.getElementById('start2').value;
      experience2.TAREAS = document.getElementById('task2').value;
      experience2.EMPRESA = document.getElementById('company2').value;
      editNana.DES_DATA_EXPERIECE.push(experience2);
    }
    if (edit[0].DES_DATA_EXPERIECE.length === 4) {
      experience.INICIO = document.getElementById('start0').value;
      experience.TAREAS = document.getElementById('task0').value;
      experience.EMPRESA = document.getElementById('company0').value;
      editNana.DES_DATA_EXPERIECE.push(experience);
      experience1.INICIO = document.getElementById('start1').value;
      experience1.TAREAS = document.getElementById('task1').value;
      experience1.EMPRESA = document.getElementById('company1').value;
      editNana.DES_DATA_EXPERIECE.push(experience1);
      experience2.INICIO = document.getElementById('start2').value;
      experience2.TAREAS = document.getElementById('task2').value;
      experience2.EMPRESA = document.getElementById('company2').value;
      editNana.DES_DATA_EXPERIECE.push(experience2);
      experience3.INICIO = document.getElementById('start3').value;
      experience3.TAREAS = document.getElementById('task3').value;
      experience3.EMPRESA = document.getElementById('company3').value;
      editNana.DES_DATA_EXPERIECE.push(experience3);
    }
    if (edit[0].DES_DATA_EXPERIECE.length === 5) {
      experience.INICIO = document.getElementById('start0').value;
      experience.TAREAS = document.getElementById('task0').value;
      experience.EMPRESA = document.getElementById('company0').value;
      editNana.DES_DATA_EXPERIECE.push(experience);
      experience1.INICIO = document.getElementById('start1').value;
      experience1.TAREAS = document.getElementById('task1').value;
      experience1.EMPRESA = document.getElementById('company1').value;
      editNana.DES_DATA_EXPERIECE.push(experience1);
      experience2.INICIO = document.getElementById('start2').value;
      experience2.TAREAS = document.getElementById('task2').value;
      experience2.EMPRESA = document.getElementById('company2').value;
      editNana.DES_DATA_EXPERIECE.push(experience2);
      experience3.INICIO = document.getElementById('start3').value;
      experience3.TAREAS = document.getElementById('task3').value;
      experience3.EMPRESA = document.getElementById('company3').value;
      editNana.DES_DATA_EXPERIECE.push(experience3);
      experience4.INICIO = document.getElementById('start4').value;
      experience4.TAREAS = document.getElementById('task4').value;
      experience4.EMPRESA = document.getElementById('company4').value;
      editNana.DES_DATA_EXPERIECE.push(experience4);
    }
    if (edit[0].DES_DATA_EXPERIECE.length === 6) {
      experience.INICIO = document.getElementById('start0').value;
      experience.TAREAS = document.getElementById('task0').value;
      experience.EMPRESA = document.getElementById('company0').value;
      editNana.DES_DATA_EXPERIECE.push(experience);
      experience1.INICIO = document.getElementById('start1').value;
      experience1.TAREAS = document.getElementById('task1').value;
      experience1.EMPRESA = document.getElementById('company1').value;
      editNana.DES_DATA_EXPERIECE.push(experience1);
      experience2.INICIO = document.getElementById('start2').value;
      experience2.TAREAS = document.getElementById('task2').value;
      experience2.EMPRESA = document.getElementById('company2').value;
      editNana.DES_DATA_EXPERIECE.push(experience2);
      experience3.INICIO = document.getElementById('start3').value;
      experience3.TAREAS = document.getElementById('task3').value;
      experience3.EMPRESA = document.getElementById('company3').value;
      editNana.DES_DATA_EXPERIECE.push(experience3);
      experience4.INICIO = document.getElementById('start4').value;
      experience4.TAREAS = document.getElementById('task4').value;
      experience4.EMPRESA = document.getElementById('company4').value;
      editNana.DES_DATA_EXPERIECE.push(experience4);
      experience5.INICIO = document.getElementById('start5').value;
      experience5.TAREAS = document.getElementById('task5').value;
      experience5.EMPRESA = document.getElementById('company5').value;
      editNana.DES_DATA_EXPERIECE.push(experience5);
    }

    editNana.ID_META = edit[0].ID_META;
    editNana.ID_USER = edit[0].ID_USER;
    editNana.DES_DATA_SERVICE_TIME = edit[0].DES_DATA_SERVICE_TIME;
    editNana.NUM_HOURLY_RATE = edit[0].NUM_HOURLY_RATE;
    editNana.ID_AVAILABILITY = edit[0].ID_AVAILABILITY;
    editNana.ID = edit[0].ID;
    editNana.ID_ROL = edit[0].ID_ROL;
    editNana.DES_FULLNAME = name;
    editNana.DATE_BIRTH = birth;
    editNana.DES_URL_IMAGE = url;
    editNana.DES_USER = edit[0].DES_USER;
    editNana.DES_PASSWORD = edit[0].DES_PASSWORD;
    editNana.DES_ADDRESS = address;
    editNana.DES_ADDRESS_LAT = edit[0].DES_ADDRESS_LAT;
    editNana.DES_ADDRESS_LONG = edit[0].DES_ADDRESS_LONG;
    editNana.NUM_PHONE = phone;
    editNana.DES_EMAIL = email;
    editNana.DES_COUNTRY = country;
    editNana.DES_STATE = state;
    editNana.DES_CITY = city;
    editNana.NUM_STATUS = edit[0].NUM_STATUS;
    editNana.DES_NAME = edit[0].DES_NAME;
    editNana.NUM_VALUE = edit[0].NUM_VALUE;

    if (
      name === '' ||
      email === '' ||
      birth === '' ||
      address === '' ||
      phone === 0 ||
      country === '' ||
      state === '' ||
      city === '' ||
      studies.TITULO === '' ||
      studies.INSTITUCIÓN === '' ||
      studies.AÑO === '' ||
      specialties0 === '' || 
      abilities0 === '' ||
      experience.INICIO === '' ||
      experience.TAREAS === '' ||
      experience.EMPRESA === ''
    ) {
      alert('Por favor ingrese completos los valores');
    } else {
      alert('Los datos fueron registrados con exito');
      postNana(editNana);
    }
  };

  return (
    <Form className='edit__form' id='myForm'>
      <p className='edit__form--title'>Por favor complete todos los campos del formulario para editar el contenido</p>
      <Link to='/nana/perfil/11'>
        <button className='edit__button'>Regresar</button>
      </Link>
      <div className='edit'>
        <p>Name:</p>
        <div className='edit__div'>
          <Field
            name='name'
            id='name'
            type='text'
            placeholder={edit[0].DES_FULLNAME}
            className='input'
          />
          <ErrorMessage name='name'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div className='edit'>
        <p>Correo:</p>
        <div className='edit__div'>
          <Field
            name='email'
            id='email'
            type='email'
            placeholder={edit[0].DES_EMAIL}
            className='input'
          />
          <ErrorMessage name='email'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>
      
      <div className='edit'>
        <p>Cumpleaños:</p>
        <div className='edit__div'>
          <Field
            name='birth'
            id='birth'
            type='date'
            placeholder={edit[0].DATE_BIRTH}
            className='input'
          />
          <ErrorMessage name='birth'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div className='edit'>
        <p>Dirección:</p>
        <div className='edit__div'>
          <Field
            name='address'
            id='address'
            type='text'
            placeholder={edit[0].DES_ADDRESS}
            className='input'
          />
          <ErrorMessage name='address'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div className='edit'>
        <p>Teléfono:</p>
        <div className='edit__div'>
          <Field
            name='phone'
            id='phone'
            type='tel'
            placeholder={edit[0].NUM_PHONE}
            className='input'
          />
          <ErrorMessage name='phone'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div className='edit'>
        <p>País:</p>
        <div className='edit__div'>
          <Field
            name='country'
            id='country'
            type='text'
            placeholder={edit[0].DES_COUNTRY}
            className='input'
          />
          <ErrorMessage name='country'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>
      
      <div className='edit'>
        <p>Estado:</p>
        <div className='edit__div'>
          <Field
            name='state'
            id='state'
            type='text'
            placeholder={edit[0].DES_STATE}
            className='input'
          />
          <ErrorMessage name='state'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
          </div>
      </div>

      <div className='edit'>
        <p>Ciudad:</p>
        <div className='edit__div'>
          <Field
            name='city'
            id='city'
            type='text'
            placeholder={edit[0].DES_CITY}
            className='input'
          />
          <ErrorMessage name='city'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div className='edit__study'>
      <p className='edit__study--p'>Estudios</p>
        <div className='edit__study__div'>
          {edit[0].DES_DATA_STUDIES.map((study, index) => (
          <div key={index}>
            <div className='study__online'>
              <p>Titulo</p>
              <Field
                name={`title${index}`}
                id={`title${index}`}
                type='text'
                placeholder={study.TITULO}
                value={control}
                className='input__study'
              />
              <ErrorMessage name='study'>
                {(message) => <div className='error'>{message}</div>}
              </ErrorMessage>
            </div>
            <div className='study__online'>
              <p>Institución</p>
              <Field
                name={`institution${index}`}
                id={`institution${index}`}
                type='text'
                placeholder={study.INSTITUCIÓN}
                value={control}
                className='input__study'
              />
              <ErrorMessage name='study'>
                {(message) => <div className='error'>{message}</div>}
              </ErrorMessage>
            </div>
            <div className='study__online'>
              <p>Año</p>
              <Field
                name={`year${index}`}
                id={`year${index}`}
                type='number'
                placeholder={study.AÑO}
                value={control}
                className='input__study'
              />
              <ErrorMessage name='study'>
                {(message) => <div className='error'>{message}</div>}
              </ErrorMessage>
            </div>
          </div> ))}
          <div className='button__child'>
            <button
              type='submit'
              onClick={addStudy}
              className='child__add--one'
            >
              Agregar Estudio
            </button>
            <button
              type='submit'
              onClick={removeStudy}
              className='child__add--one'
            >
              Eliminar Estudio
            </button>
          </div>
        </div>
      </div>

      <div className='edit__specialties'>
        <p className='edit__specialties--p'>Especialidad</p>
        <div className='edit__specialties__div'>
          {edit[0].DES_DATA_SPECIALTIES.map((specialty, index) => (
          <div key={index}>
          <Field
            name={`specialties${index}`}
            id={`specialties${index}`}
            type='text'
            placeholder={specialty}
            className='input__specialties'
            value={control}
          />
          <ErrorMessage name={`specialties${index}`}>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
          </div> ))}
          <div className='button__child'>
            <button
              type='submit'
              onClick={addSpecialties}
              className='child__add--one'
            >
              Agregar Especialidad
            </button>
            <button
              type='submit'
              onClick={removeSpecialties}
              className='child__add--one'
            >
              Eliminar Especialidad
            </button>
          </div>
        </div>
      </div>

      <div className='edit__abilities'>
        <p className='edit__abilities--p'>Habilidad</p>
        <div className='edit__abilities__div'>
          {edit[0].DES_DATA_ABILITIES.map((ability, index) => (
          <div key={index}>
          <Field
            name={`abilities${index}`}
            id={`abilities${index}`}
            type='text'
            placeholder={ability}
            value={control}
            className='input__abilities'
          />
          <ErrorMessage name='abilities'>
            {(message) => <div className='error'>{message}</div>}
          </ErrorMessage>
          </div> ))}
          <div className='button__child'>
            <button
              type='submit'
              onClick={addAbilities}
              className='child__add--one'
            >
              Agregar Habilidad
            </button>
            <button
              type='submit'
              onClick={removeAbilities}
              className='child__add--one'
            >
              Eliminar Habilidad
            </button>
          </div>
        </div>
      </div>

      <div className='edit__experience'>
        <p className='edit__experience--p'>Experiencia</p>
        <div className='edit__experience__div'>
          {edit[0].DES_DATA_EXPERIECE.map((expe, index) => (
          <div key={index}>
            <div className='start__only'>
              <p>Inicio</p>
              <Field
                name={`start${index}`}
                id={`start${index}`}
                type='date'
                placeholder={expe.INICIO}
                value={control}
                className='input__experience'
              />
              <ErrorMessage name='experience'>
                {(message) => <div className='error'>{message}</div>}
              </ErrorMessage>
            </div>
            <div className='start__only'>
              <p>Tarea</p>
              <Field
                name={`task${index}`}
                id={`task${index}`}
                type='text'
                placeholder={expe.TAREAS}
                value={control}
                className='input__experience'
              />
              <ErrorMessage name='experience'>
                {(message) => <div className='error'>{message}</div>}
              </ErrorMessage>
            </div>
            <div className='start__only'>
              <p>Empresa</p>
              <Field
                name={`company${index}`}
                id={`company${index}`}
                type='text'
                placeholder={expe.EMPRESA}
                value={control}
                className='input__experience'
              />
              <ErrorMessage name='experience'>
                {(message) => <div className='error'>{message}</div>}
              </ErrorMessage>
            </div>
          </div> ))}
          <div className='button__child'>
            <button
              type='submit'
              onClick={addExperience}
              className='child__add--one'
            >
              Agregar Experiencia
            </button>
            <button
              type='submit'
              onClick={removeExperience}
              className='child__add--one'
            >
              Eliminar Experiencia
            </button>
          </div>
        </div>
      </div>

      <Upload/>

      <div className='rowEdit button--edit'>      
        <button type='submit' onClick={valueAll}>
          Guardar los datos del formulario
        </button>
      </div>
      <div className='row__back'>
        <Link to='/nana/perfil/11'>
          <button>Regresar</button>
        </Link>
      </div>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      birth: '',
      address: '',
      phone: '',
      country: '',
      state: '',
      city: '',

    };
  },

  validate(values) {
    const errors = {};
    if (Object.keys(errors).length) {
      throw errors;
    }
    if (!values.name) {
      errors.name = 'El nombre es requerido';
    } else if (values.name.length < 3) {
      errors.name = 'El nombre es demasiado corto';
    } else if (!values.email) {
      errors.email = 'El correo es requerido';
    } else if (!values.birth) {
      errors.birth = 'La fecha de cumpleaños es requerida';
    } else if (!values.address) {
      errors.address = 'La dirección es requerida';
    } else if (values.address.length < 6) {
      errors.address = 'La dirección debe contener más información';
    } else if (values.phone.length < 7) {
      errors.phone = 'El teléfono debe contener más dígitos'; 
    } else if (!values.phone) {
      errors.phone = 'El teléfono es requerido';
    } else if (isNaN(values.phone)) {
      errors.phone = 'El teléfono debe ser numérico';
    } else if (values.name.country < 3) {
      errors.country = 'El direccion es demasiado corta';
    } else if (!values.country) {
      errors.country = 'El País es requerido'; 
    } else if (values.name.state < 3) {
      errors.state = 'El estado es demasiado corto';
    } else if (!values.state) {
      errors.state = 'El estado es requerido'; 
    } else if (values.name.city < 3) {
      errors.city = 'La ciudad es demasiado corta';
    } else if (!values.city) {
      errors.city = 'La ciudad es requerida'; 
    } else if (!values.title0) {
      errors.title0 = 'El titulo es requerido'
    } else if (values.name.title0 < 3) {
      errors.title0 = 'el titulo es demasiado corto';
    } else if (!values.institution0) {
      errors.title0 = 'El instituto es requerido'
    } else if (values.name.institution0 < 3) {
      errors.institution0 = 'el instituto es demasiado corto';
    } else if (!values.institution0) {
      errors.institution0 = 'El instituto es requerido'
    } else if (values.name.year0 < 3) {
      errors.year0 = 'el año es demasiado corto';
    } else if (!values.year0) {
      errors.year0 = 'El año es requerido'
    } else if (values.name.especialties0 < 3) {
      errors.especialities0 = 'La especialidad es demasiado corta'
    } else if (values.especialties0) {
      errors.especialties0 = 'La especialidad es requerida'
    } else if (!values.start0) {
      errors.start0 = 'La fecha de inicio es requerida'
    } else if (values.name.task0 < 3) {
      errors.task0 = 'La tarea es demasiado corta'
    } else if (!values.task0) {
      errors.task0 = 'La tarea es obligatoria'
    } else if (values.name.company0 < 3) {
      errors.company0 = 'El nombre de la empresa es demasiado corto'
    } else if (!values.company0) {
      errors.company0 = 'El nombre de la empresa es obligatorio'
    }


    return errors;
  },

  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(false);
  },
})(FormsEditNana);
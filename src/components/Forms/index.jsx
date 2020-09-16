import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import Child from '../Child';
import Age from '../Age';
import { useServer } from '../Contex/Server';
import '../../sass/forms.scss';

var data = [];
var clientOnly = [];

const Forms = () => {
  var {
    addChildren,
    addChild,
    removeChildren,
    setForm,
    buttonCheck,
    child,
    coordinate,
    longitude,
    users,
  } = useServer();

  if (longitude === 0) {
    coordinate();
  }

  const idClient = localStorage.getItem('id');

  if (clientOnly.length === 0) {
    clientOnly = users.filter((user) => user.ID === parseInt(idClient));
  }

  const valueAll = () => {
    data = [];
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var recommendations = document.getElementById('recommendations').value;
    data.push(name);
    data.push(email);
    data.push(phone);
    data.push(address);
    data.push(recommendations);
    setForm(data);
    // postData(email, phone, address, recommendations, Idd, longitude, latitude);

    if (recommendations === '' || child.length === 0) {
      alert('Por favor ingrese los niños y/o la recomendación');
    } else {
      buttonCheck();
    }
  };

  return (
    <Form className='formP'>
      <div className='row'>
        <p>Nombre:</p>
        <Field
          name='name'
          id='name'
          type='text'
          placeholder='Nombre y Apellido'
          className='input'
          value={clientOnly[0].DES_FULLNAME}
        />
        <ErrorMessage name='name'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      <div className='row'>
        <p>Correo:</p>
        <Field
          name='email'
          id='email'
          type='email'
          placeholder='Correo Electrónico'
          className='input'
          value={clientOnly[0].DES_EMAIL}
        />
        <ErrorMessage name='email'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      <div className='row'>
        <p>Teléfono:</p>
        <Field
          name='phone'
          id='phone'
          type='tel'
          placeholder='Teléfono Móvil'
          className='input'
          value={clientOnly[0].NUM_PHONE}
        />
        <ErrorMessage name='phone'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      {addChild.map((childAdd, index) => (
        <div key={index} className='child__add'>
          <Child indexAdd={index} />
          <Age indexAdd={index} />
        </div>
      ))}
      <div className='button__child'>
        <button type='submit' onClick={addChildren} className='child__add--one'>
          Agregar
        </button>
        <button
          type='submit'
          onClick={removeChildren}
          className='child__add--one'
        >
          Eliminar
        </button>
      </div>
      <div className='row'>
        <p>Dirección:</p>
        <Field
          name='address'
          id='address'
          type='text'
          placeholder='La dirección se validara con geolocalización'
          className='input'
          value={clientOnly[0].DES_ADDRESS}
        />
        <ErrorMessage name='address'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>
      <div className='row'>
        <p>Recomendación:</p>
        <Field
          name='recommendations'
          id='recommendations'
          type='text'
          placeholder='Recomendación'
          className='input'
        />
        <ErrorMessage name='recommendations'>
          {(message) => <div className='error'>{message}</div>}
        </ErrorMessage>
      </div>

      <div className='button--form'>
        <button type='submit' onClick={valueAll}>
          Continuar
        </button>
      </div>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      recommendations: '',
    };
  },

  validate(values) {
    const errors = {};
    if (Object.keys(errors).length) {
      throw errors;
    }
    if (!values.recommendations) {
      errors.recommendations = 'Deja una recomendación a la nana';
    } else if (values.recommendations.length < 10) {
      errors.recommendations =
        'Por favor deja una recomendación mas larga para la nana';
    }

    return errors;
  },

  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(false);
  },
})(Forms);

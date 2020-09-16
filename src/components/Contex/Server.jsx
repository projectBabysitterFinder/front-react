import React, { useState, useEffect, useMemo, useCallback } from 'react';

var dataCapital = [];
var counter = [1];
var counterRemove = 0;
var counterAdd = 0;
var hourValue = 0;
var valueCop = 60000;
var valueMx = 350;
var countryValue = [];
var arrColombia = [];
var arrMexico = [];
var arrCountry = [];
var stateValue = [];
var arrColombiaCity = [];
var arrMexicoCity = [];

var dataBoys = {
  GENERO: '',
  EDAD: 0,
};

var dataHours = {
  MODALIDAD: '',
  DISPONIBILIDAD: false,
};

var data2 = {
  ID: '',
  ID_USER_CLIENT: 0,
  ID_USER_BABYSITTER: 0,
  DES_EMAIL: '',
  DES_PHONE: '',
  DES_ADDRESS: '',
  DES_ADDRESS_LATLONG: '',
  DES_RECOMMENDATIONS: '',
  DES_DATA_BOYS: [],
  DES_DATA_HOURS: [],
  NUM_TOTAL_COST: 0,
  NUM_STATUS: 0,
  DES_ADDRESS_LONG: 0,
  DES_ADDRESS_LAT: 0,
};

// const getKilometros = (lat1,lon1,lat2,lon2) => {
//   var rad = function(x) {return x*Math.PI/180;}
//   var R = 6378.137;
//   var dLat = rad( lat2 - lat1 );
//   var dLong = rad( lon2 - lon1 );
//   var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   var d = R * c;
//   return Math.trunc(d/13.5);
// }

// console.log(getKilometros(39.9317949, 4.6786168, -21.1880429, 4.686652))

const Server = React.createContext();

export function ServerProvider(props) {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [capital, setCapital] = useState([]);
  // const [onlyCountry, setOnlyCountry] = useState([]);
  const [Idd, setIdd] = useState([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [openAdd, setOpenAdd] = useState(false);
  const [openCheck, setOpenCheck] = useState(false);
  const [flagV, setFlagV] = useState('');
  const [child, setChild] = useState([]);
  const [agee, setAge] = useState([]);
  const [addChild, setAddChild] = useState([1]);
  const [form, setForm] = useState([]);
  const [openHalfTime, setOpenHalfTime] = useState(false);
  const [openForHours, setOpenForHours] = useState(false);
  const [openNight, setOpenNight] = useState(false);
  const [openHours, setOpenHours] = useState(false);
  const [day, setDay] = useState('');
  const [hours, setHours] = useState([]);
  const [nanas, setNanas] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [edit, setEdit] = useState(0);
  const [service, setService] = useState(0);
  const [client, setClient] = useState([]);
  const [users, setUsers] = useState([]);
  const [review, setReview] = useState([]);
  const [onlyUser, setOnlyUser] = useState([]);
  const [openService2, setOpenService2] = useState(false);
  const [onlyService, setOnlyService] = useState(false);
  const [countryAll, setCountryAll] = useState([]);
  const [stateColombia, setStateColombia] = useState([]);
  const [stateColombiaCity, setStateColombiaCity] = useState([]);
  const [stateMexico, setStateMexico] = useState([]);
  const [stateMexicoCity, setStateMexicoCity] = useState([]);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [url, setUrl] = useState('');
  const [valueHours, setValueHorus] = useState(0);

  // const prueba = localStorage.getItem('role')
  // console.log(prueba, 'prueba')

  const coordinate = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      function (error) {
        if (error) {
        }
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  const removeAccents = useCallback((str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }, []);

  const validate = useCallback((e) => {
    stateValue = [];
    e.sort();
    for (let i = 0; i < e.length; i++) {
      if (i === 0) {
        stateValue.push(e[i]);
      } else if (e[i - 1] !== e[i]) {
        stateValue.push(e[i]);
      }
    }
    return stateValue;
  }, []);

  const countryOnly = useCallback((e) => {
    countryValue = [];
    arrCountry = [];
    for (let i = 0; i < e.length; i++) {
      arrCountry.push(e[i].DES_COUNTRY);
    }
    arrCountry.sort();
    for (let i = 0; i < arrCountry.length; i++) {
      if (i === 0) {
        countryValue.push(arrCountry[i]);
      } else if (arrCountry[i - 1] !== arrCountry[i]) {
        countryValue.push(arrCountry[i]);
      }
    }
    setCountryAll(countryValue);
  }, []);

  const stateOnly = useCallback(
    (e) => {
      arrColombia = [];
      arrMexico = [];
      arrColombiaCity = [];
      arrMexicoCity = [];
      for (let i = 0; i < e.length; i++) {
        if (e[i].DES_COUNTRY === 'Colombia') {
          arrColombia.push(e[i].DES_STATE);
          arrColombiaCity.push(e[i].DES_CITY);
        } else {
          arrMexico.push(e[i].DES_STATE);
          arrMexicoCity.push(e[i].DES_CITY);
        }
      }
      setStateColombia(validate(arrColombia));
      setStateMexico(validate(arrMexico));
      setStateColombiaCity(validate(arrColombiaCity));
      setStateMexicoCity(validate(arrMexicoCity));
    },
    [validate]
  );

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch('https://babys-api.herokuapp.com/api/users');
      const info = await data1.json();
      const data2 = await fetch('https://babys-api.herokuapp.com/api/users/2');
      const info2 = await data2.json();
      const data3 = await fetch('https://babys-api.herokuapp.com/api/services');
      const info3 = await data3.json();
      const data4 = await fetch('https://babys-api.herokuapp.com/api/reviews');
      const info4 = await data4.json();
      const data5 = await fetch('https://babys-api.herokuapp.com/api/users/1');
      const info5 = await data5.json();
      setUsers(info.body);
      setNanas(info2.body);
      setServices(info3.body);
      setReviews(info4.body);
      setClient(info5.body);
      countryOnly(info2.body);
      stateOnly(info2.body);
    };
    fetchData();
  }, [
    setUsers,
    setNanas,
    setServices,
    setReviews,
    setClient,
    countryOnly,
    stateOnly,
  ]);

  const order = (x) => {
    for (var i = x.length - 1; i >= 0; i--) {
      if (x.indexOf(x[i]) !== i) x.splice(i, 1);
    }
    return x;
  };

  const valueCountry = useCallback(() => {
    var select = document.getElementById('countryId');
    setCountry(select.value);
    setCapital([]);
    setState([]);
  }, []);

  const valueState = useCallback(() => {
    var select = document.getElementById('state');
    setState(select.value);
    setCapital([]);
  }, []);

  const valueCapital = useCallback(() => {
    var select = document.getElementById('capital');
    setCapital(select.value);
  }, []);

  const validatorCapital = useCallback(() => {
    dataCapital.splice(0, dataCapital.length);
    if (nanas.length !== 0) {
      for (let i = 0; i < nanas.length; i++) {
        if (nanas[i].DES_STATE === state) {
          dataCapital.push(nanas[i].DES_CITY);
        }
      }
    }
    return order(dataCapital);
  }, [nanas, state]);

  const valueId = useCallback(
    (x) => {
      setIdd(nanas.filter((nana) => nana.ID === parseInt(x)));
    },
    [nanas]
  );

  const modalOpen = useCallback(
    (e) => {
      const valueOnly = nanas.filter((only) => only.ID === parseInt(e));
      // if(valueOnly[0].DES_NAME === 2) {
      if (
        removeAccents(valueOnly[0].DES_NAME).toUpperCase() === 'TIEMPO COMPLETO'
      ) {
        setOpen(true);
      } else if (
        removeAccents(valueOnly[0].DES_NAME).toUpperCase() === 'MEDIO TIEMPO'
      ) {
        setOpenHalfTime(true);
      } else if (
        removeAccents(valueOnly[0].DES_NAME).toUpperCase() === 'POR HORAS'
      ) {
        setOpenHours(true);
      } else if (
        removeAccents(valueOnly[0].DES_NAME).toUpperCase() === 'NOCTURNA'
      ) {
        setOpenNight(true);
      }
      // }
      // else {
      //   setOpen(true)
      // }
    },
    [nanas, removeAccents]
  );

  const pageEdit = useCallback(
    (e) => {
      const onlyEdit = nanas.filter((only) => only.ID === parseInt(e));
      setEdit(onlyEdit);
    },
    [nanas]
  );

  const pageService = useCallback(
    (e) => {
      const onlyService = services.filter(
        (service) => service.ID_USER_BABYSITTER === parseInt(e)
      );
      const onlyUser = users.filter((service) => service.ID === parseInt(e));
      setService(onlyService);
      setOnlyUser(onlyUser);
      const onlyReview = reviews.filter(
        (review) => review.ID_USER_BABYSITTER === 7
      );
      setReview(onlyReview);
    },
    [services, reviews, users]
  );

  const modalClose = useCallback(() => {
    setOpen(false);
    setOpenHalfTime(false);
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  const modalCloseAdd = useCallback(() => {
    setOpenAdd(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  const modalCloseHalf = useCallback(() => {
    setOpenAdd(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setOpenHalfTime(false);
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  const modalCloseHours = useCallback(() => {
    setOpenAdd(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setOpenHalfTime(false);
    setOpenForHours(false);
    setOpenNight(false);
    setOpenHours(false);
    setDay('');
  }, []);

  const modalCloseNight = useCallback(() => {
    setOpenAdd(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setOpenHalfTime(false);
    setOpenForHours(false);
    setOpenNight(false);
    setDay('');
  }, []);

  const modalOpenCheck = useCallback(() => {
    setOpenCheck(true);
  }, []);

  const openService = useCallback(
    (e) => {
      const onlyService = services.filter(
        (service) => service.ID === parseInt(e)
      );
      setOnlyService(onlyService);
      setOpenService2(true);
    },
    [services]
  );

  const modalCloseService = useCallback(() => {
    setOnlyService([]);
    setOpenService2(false);
  }, []);

  const modalCloseCheck = useCallback(() => {
    setOpenCheck(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
    setDay('');
  }, []);

  const onChange = useCallback((date) => {
    setDate(date);
  }, []);

  const buttonDay = useCallback(() => {
    setOpen(false);
    setOpenAdd(true);
    setOpenHalfTime(false);
    setOpenNight(false);
    setOpenHours(false);
  }, []);

  const buttonCheck = useCallback(() => {
    setOpen(false);
    setOpenAdd(false);
    setOpenCheck(true);
  }, []);

  const valueFlag = useCallback(() => {
    var selectFlag = document.getElementById('flag');
    setFlagV(selectFlag.value);
  }, []);

  const addChildren = useCallback(() => {
    counterAdd = counterAdd + 1;
    counter.push(1);
    setAddChild(counter);
  }, []);

  const removeChildren = useCallback(() => {
    counterRemove = counterRemove + 1;
    if (counterAdd < counterRemove) {
      counterAdd = 0;
      counterRemove = 0;
    } else {
      counter.pop();
      setAddChild(counter);
    }
  }, []);

  const totalValue = useCallback(() => {
    alert('Gracias por contratar con nosotros');
    setOpenCheck(false);
    setFlagV('');
    setAddChild([1]);
    counterAdd = 0;
    counterRemove = 0;
    counter = [1];
    setChild([]);
    setAge([]);
    setForm([]);
    setDate(new Date());
  }, []);

  const knowMorning = useCallback(() => {
    var selectMoring = document.getElementById('morning');
    setDay(selectMoring.value);
  }, []);

  const knowLate = useCallback(() => {
    var selectLate = document.getElementById('late');
    setDay(selectLate.value);
  }, []);

  const valueDate = useCallback((e) => {
    var valueDataDate = document.getElementById(e).value;
    var arrayDeCadenas = valueDataDate.split(',');
    setHours(arrayDeCadenas);
  }, []);

  const confirm = useCallback(() => {
    setOpenService2(false);
  }, []);

  const finalTotalValue = useCallback(() => {
    if (day === '' && hours.length === 0) {
      if (parseInt(child.length) === 1) {
        if (flagV === 'Colombia') {
          return Math.round(valueCop);
        } else {
          return Math.round(valueMx);
        }
      } else {
        if (flagV === 'Colombia') {
          return Math.round(
            valueCop + (parseInt(child.length) - 1) * ((valueCop / 3) * 2)
          );
        } else {
          return Math.round(
            valueMx + (parseInt(child.length) - 1) * ((valueMx / 3) * 2)
          );
        }
      }
    }
    if (hours.length !== 0) {
      if (child.length === 1) {
        if (flagV === 'Colombia') {
          hourValue = parseInt(hours[2]) - parseInt(hours[1]);
          return Math.round(hourValue * (valueCop / 5));
        } else {
          hourValue = parseInt(hours[2]) - parseInt(hours[1]);
          return Math.round(hourValue * (valueMx / 5));
        }
      }
      if (child.length > 1) {
        if (flagV === 'Colombia') {
          return Math.round(
            valueCop / 5 + (child.length - 1 * (valueCop / 7.5))
          );
        } else {
          return Math.round(valueMx / 5 + (child.length - 1 * (valueMx / 7.5)));
        }
      }
    }
    if (day !== '') {
      if (parseInt(child.length) === 1) {
        if (flagV === 'Colombia') {
          return Math.round((valueCop / 3) * 2);
        } else {
          return Math.round((valueMx / 3) * 2);
        }
      } else {
        if (flagV === 'Colombia') {
          return Math.round(
            (valueCop / 3) * 2 +
              (parseInt(child.length) - 1) * (valueCop / 3 + valueCop / 12)
          );
        } else {
          return Math.round(
            (valueMx / 3) * 2 +
              (parseInt(child.length) - 1) * (valueMx / 3 + valueMx / 12)
          );
        }
      }
    }
  }, [child.length, day, flagV, hours]);

  const postData = useCallback(
    (email, phone, address, recommendations, Idd, longitude, latitude) => {
      data2.ID = '';
      data2.ID_USER_CLIENT = 10;
      data2.ID_USER_BABYSITTER = Idd[0].ID;
      data2.DES_EMAIL = email;
      data2.DES_PHONE = phone;
      data2.DES_ADDRESS = address;
      data2.DES_ADDRESS_LAT = latitude;
      data2.DES_ADDRESS_LONG = longitude;
      data2.DES_RECOMMENDATIONS = recommendations;
      for (let i = 0; i < child.length; i++) {
        dataBoys.GENERO = child[i];
        dataBoys.EDAD = agee[i];
        data2.DES_DATA_BOYS.push(dataBoys);
        dataBoys = {};
      }
      dataHours.MODALIDAD = Idd[0].DES_NAME;
      dataHours.DISPONIBILIDAD = true;
      data2.DES_DATA_HOURS.push(dataHours);
      data2.NUM_TOTAL_COST = finalTotalValue();
      data2.NUM_STATUS = 1;
      fetch('https://babys-api.herokuapp.com/api/services', {
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          ...data2,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
      // .then(json => console.log(json))
    },
    [agee, child, finalTotalValue]
  );

  const postNana = useCallback((nana) => {
    fetch('https://babys-api.herokuapp.com/api/users', {
      // fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify({
        ...nana,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
    // .then(json => console.log(json))
  }, []);

  const cantHours = useCallback((e) => {
    setValueHorus(e);
  }, []);

  const value = useMemo(() => {
    return {
      valueHours,
      url,
      setUrl,
      longitude,
      latitude,
      stateColombiaCity,
      stateMexicoCity,
      stateColombia,
      stateMexico,
      countryAll,
      openService2,
      onlyUser,
      review,
      users,
      client,
      service,
      edit,
      reviews,
      services,
      nanas,
      hours,
      openHours,
      day,
      openHalfTime,
      openForHours,
      openNight,
      openCheck,
      setAge,
      setChild,
      form,
      setForm,
      addChild,
      agee,
      child,
      flagV,
      openAdd,
      date,
      country,
      state,
      capital,
      valueCountry,
      valueState,
      valueCapital,
      validatorCapital,
      valueId,
      Idd,
      modalOpen,
      open,
      modalClose,
      buttonDay,
      onChange,
      modalCloseAdd,
      valueFlag,
      addChildren,
      removeChildren,
      modalOpenCheck,
      modalCloseCheck,
      buttonCheck,
      totalValue,
      modalCloseHalf,
      knowMorning,
      knowLate,
      modalCloseNight,
      modalCloseHours,
      valueDate,
      postData,
      finalTotalValue,
      pageEdit,
      pageService,
      openService,
      modalCloseService,
      onlyService,
      countryOnly,
      stateOnly,
      coordinate,
      confirm,
      postNana,
      cantHours,
    };
  }, [
    valueHours,
    url,
    setUrl,
    longitude,
    latitude,
    stateColombiaCity,
    stateMexicoCity,
    stateColombia,
    stateMexico,
    countryAll,
    openService2,
    onlyUser,
    review,
    users,
    client,
    service,
    edit,
    reviews,
    services,
    nanas,
    hours,
    openHours,
    day,
    openHalfTime,
    openForHours,
    openNight,
    openCheck,
    setAge,
    setChild,
    form,
    setForm,
    addChild,
    agee,
    child,
    flagV,
    openAdd,
    date,
    country,
    state,
    capital,
    valueCountry,
    valueState,
    valueCapital,
    validatorCapital,
    valueId,
    Idd,
    modalOpen,
    open,
    modalClose,
    buttonDay,
    onChange,
    modalCloseAdd,
    valueFlag,
    addChildren,
    removeChildren,
    modalOpenCheck,
    modalCloseCheck,
    buttonCheck,
    totalValue,
    modalCloseHalf,
    knowMorning,
    knowLate,
    modalCloseNight,
    modalCloseHours,
    valueDate,
    postData,
    finalTotalValue,
    pageEdit,
    pageService,
    openService,
    modalCloseService,
    onlyService,
    countryOnly,
    stateOnly,
    coordinate,
    confirm,
    postNana,
    cantHours,
  ]);

  return <Server.Provider value={value} {...props} />;
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name');
  }
  return context;
}

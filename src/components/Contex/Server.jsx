import React, { useState, useEffect, useMemo, useCallback } from 'react';

var dataState = [];
var dataCapital = [];
var counter = [1];
var counterRemove = 0;
var counterAdd = 0;

const Server = React.createContext();

export function ServerProvider(props) {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [capital, setCapital] = useState([]);
  const [onlyCountry, setOnlyCountry] = useState([]);
  const [Idd, setIdd] = useState([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [openAdd, setOpenAdd] = useState(false);
  const [flagV, setFlagV] = useState('');
  const [child, setChild] = useState([]);
  const [age, setAge] = useState([]);
  const [addChild, setAddChild] = useState([1]);
  const [form, setForm] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetch('http://localhost:3000/nana');
      const info = await data1.json();
      setData(info);
    };
    fetchData();
  }, [setData]);

  const order = (x) => {
    for (var i = x.length - 1; i >= 0; i--) {
      if (x.indexOf(x[i]) !== i) x.splice(i, 1);
    }
    return x;
  };

  useEffect(() => {
    if (data.length !== 0) {
      var orderedCountry = [];

      for (let i = 0; i < data.length; i++) {
        orderedCountry.push(data[i].country);
      }
      setOnlyCountry(order(orderedCountry));
    }
  }, [data]);

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

  const validatorState = useCallback(() => {
    dataState.splice(0, dataState.length);
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].country === country) {
          dataState.push(data[i].state);
        }
      }
    }
    return order(dataState);
  }, [data, country]);

  const validatorCapital = useCallback(() => {
    dataCapital.splice(0, dataCapital.length);
    if (data.length !== 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].state === state) {
          dataCapital.push(data[i].capital);
        }
      }
    }
    return order(dataCapital);
  }, [data, state]);

  const valueId = useCallback(
    (x) => {
      setIdd(data.filter((nana) => nana.id === parseInt(x)));
    },
    [data]
  );

  const modalOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const modalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const modalOpenAdd = useCallback(() => {
    setOpenAdd(true);
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
  }, []);

  const onChange = useCallback((date) => {
    setDate(date);
  }, []);

  const buttonDay = useCallback(() => {
    setOpen(false);
    setOpenAdd(true);
  }, []);

  const valueFlag = useCallback(() => {
    var selectFlag = document.getElementById('flag');
    setFlagV(selectFlag.value);
  }, []);

  // const valueChild = useCallback((indexAdd) => {
  //   var selectChild = document.getElementById('child');
  //   setChild(selectChild.value);
  // },[]);

  // const valueAge = useCallback(() => {
  //   var selectAge = document.getElementById('age');
  //   setAge(parseInt(selectAge.value));
  // },[]);

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

  const value = useMemo(() => {
    return {
      setAge,
      setChild,
      form,
      setForm,
      addChild,
      age,
      child,
      flagV,
      openAdd,
      date,
      data,
      country,
      state,
      capital,
      valueCountry,
      onlyCountry,
      valueState,
      valueCapital,
      validatorState,
      validatorCapital,
      valueId,
      Idd,
      modalOpen,
      open,
      modalClose,
      buttonDay,
      onChange,
      modalOpenAdd,
      modalCloseAdd,
      valueFlag,
      addChildren,
      removeChildren,
    };
  }, [
    setAge,
    setChild,
    form,
    setForm,
    addChild,
    age,
    child,
    flagV,
    openAdd,
    date,
    data,
    country,
    state,
    capital,
    valueCountry,
    onlyCountry,
    valueState,
    valueCapital,
    validatorState,
    validatorCapital,
    valueId,
    Idd,
    modalOpen,
    open,
    modalClose,
    buttonDay,
    onChange,
    modalOpenAdd,
    modalCloseAdd,
    valueFlag,
    addChildren,
    removeChildren,
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

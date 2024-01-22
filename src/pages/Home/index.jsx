import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchPokemon,
  setUsernameDispatcher,
  setStep
} from './action';

import Component1 from './components/component1';
import Component2 from './components/component2';

import classes from './style.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const pokemon = useSelector((state) => state.homeReducer.pokemon);
  const usernameState = useSelector((state) => state.homeReducer.username);
  const currentStep = useSelector((state) => state.homeReducer.step)

  console.log(currentStep, '<< CUR STEP')
  useEffect(() => {
    dispatch(fetchPokemon())
  }, []);

  const onSubmit = () => {
    dispatch(setUsernameDispatcher({
      username,
      password
    }))
  }

  const stepHanlder = () => {
    if (currentStep === 5) {
      dispatch(setStep(1))
    } else {
      dispatch(setStep(currentStep + 1))
    }
  }

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <Component1 />
      case 2:
        return <Component2 />
      default:
        return <Component1 />
        break;
    }
  }

  return (
    <div className={classes.container}>
      {renderComponent()}
      {/* <input onChange={(e) => setUsername(e.target.value)} placeholder='username' />
      <input onChange={(e) => setPassword(e.target.value)} placeholder='username' /> */}
      <button onClick={stepHanlder}>Next</button>
    </div>
  );
};

export default Home;
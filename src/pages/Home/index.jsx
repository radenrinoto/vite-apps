import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import classes from './style.module.scss';

const Home = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Did Mount')
  },[])

  useEffect(() => {
    console.log('Did Mount')
    return (() => {
      console.log('will unmount')
    })
  },[])

  useEffect(() => {
    console.log('Did Update')
  },[count])

  const navigateToProduct = () => {
    const user = {
      id: 1,
      name: 'rino'
    }
    navigate('/products', { state: user })
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Home
      </div>
      {count}
      <Button onClick={() => setCount(count + 1)} />
      <Button text="Navigate" onClick={navigateToProduct} />
    </div>

  )
}

export default Home
import React, { useEffect, useState } from 'react';

import { callAPI } from '../../domain/api';

import classes from './style.module.scss';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
    console.log('did mount')
  }, [])

  const fetchData = async () => {
    const response = await callAPI('/all', 'GET');
    const modifiedData = response?.map((item) => {
      return {
        name: item.name,
        flags: item.flags,
        population: item.population,
      }
    })
    setData(modifiedData);
  } 

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Home
      </div>
    </div>
  )
}

export default Home;
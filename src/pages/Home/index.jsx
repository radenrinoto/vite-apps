import React, { useEffect, useState } from 'react';

import { callAPI } from '../../domain/api';

import classes from './style.module.scss';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const responseByCategories = await callAPI('/filter.php?c=Beef', 'GET');
    const slicedResponse = responseByCategories?.meals?.slice(0, 10);

    const modifiedResponse = slicedResponse?.map(async (item) => {
      const responseByName = await callAPI(`/search.php?s=${item.strMeal}`, 'GET');
      const { idMeal, strIngredient1, strMeasure1, strMealThumb, strMeal } = responseByName.meals[0];
      return {
        idMeal,
        strIngredient1,
        strMeasure1,
        strMealThumb,
        strMeal
      }
    });

    const finalResponse = await Promise.all(modifiedResponse);
    setData(finalResponse);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Home
      </div>
    </div>
  );
};

export default Home;
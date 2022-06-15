import React, {useLayoutEffect} from 'react';
import MealsList from '../components/MealsList/MealsList';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      categories => categories.id === catId,
    )?.title;

    // used to set particular header value using prop
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

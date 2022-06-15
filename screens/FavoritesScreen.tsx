import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import {MEALS} from '../data/dummy-data';
import {FavoritesContext} from '../store/context/favorites-context';

const FavoritesScreen = () => {
  // context
  // const favoriteMealsCtx = useContext(FavoritesContext);

  // redux
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  // context
  // const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Favorites Screen</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavoritesScreen;

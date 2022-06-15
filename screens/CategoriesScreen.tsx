import React from 'react';
import {View, FlatList} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = ({navigation}) => {
  const renderCategoryItem = (itemData: any) => {
    const PressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
        title: itemData.item.title,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={PressHandler}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};
export default CategoriesScreen;

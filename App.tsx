import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavoritesContextProvider from './store/context/favorites-context';
import {store} from './store/redux/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#302c29'},
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#1c130c',
        },
        drawerContentStyle: {backgroundColor: '#302c29'},
        drawerActiveBackgroundColor: '#cfbfbc',
        drawerActiveTintColor: '#1c130c',
        drawerInactiveTintColor: '#cfbfbc',
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        hidden={true}
        translucent
        backgroundColor={'#140302'}
      />

      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#302c29'},
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#1c130c',
              },
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({route, navigation}) => {
              //   const catId = route.params.categoryId;
              //   const catTitle = route.params.title;
              //   return {
              //     // title: catId,
              //     title: catTitle,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                // headerRight: () => {
                //   return <Button title="Tap Me!" />;
                // },
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
};
export default App;

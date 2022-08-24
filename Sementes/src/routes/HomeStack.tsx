import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {Category} from '../screens/Category';
import {BookDetails} from '../screens/BookDetails';
import {CategoryProps} from '../interfaces/mainInterface';

const Stack = createNativeStackNavigator();

export interface HomeStackProps {
  Home: undefined;
  Category: {category: CategoryProps};
  BookDetails: undefined;
}

export const HomeStack: React.FC<HomeStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
    </Stack.Navigator>
  );
};

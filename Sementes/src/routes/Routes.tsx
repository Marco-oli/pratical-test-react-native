import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeStack} from './HomeStack';
import {BookDetails} from '../screens/BookDetails';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Books" component={BookDetails} />
        <Tab.Screen name="Favourites" component={BookDetails} />
        <Tab.Screen name="Called" component={BookDetails} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

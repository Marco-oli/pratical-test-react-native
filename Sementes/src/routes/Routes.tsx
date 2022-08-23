import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeStack} from './HomeStack';
import {BookDetails} from '../screens/BookDetails';
import {Image} from 'react-native';
import {images} from '../assets/images';

const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarActiveBackgroundColor: '#ccc',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: () => <Image source={images.homeIcon} />,
          }}
        />
        <Tab.Screen
          name="Books"
          component={BookDetails}
          options={{
            tabBarIcon: () => <Image source={images.bookIcon} />,
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={BookDetails}
          options={{
            tabBarIcon: () => <Image source={images.heartIcon} />,
          }}
        />
        <Tab.Screen
          name="Called"
          component={BookDetails}
          options={{
            tabBarIcon: () => <Image source={images.micIcon} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

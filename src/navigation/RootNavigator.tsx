
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Home/HomeScreen';
import WeatherDetailsScreen from '../WeatherDetails/WeatherDetailsScreen';

export type TWeatherDetails = {
    city: string;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    description: string;
    icon: string;
};

export type TRootNavigatorParams = {
  Home: undefined;
  WeatherDetails: TWeatherDetails;
}

const Root = createNativeStackNavigator<TRootNavigatorParams>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName='Home'>
        <Root.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
        <Root.Screen name='WeatherDetails' component={WeatherDetailsScreen} options={{title: '', headerShadowVisible: false  ,headerStyle: {
            backgroundColor: '#e4f6f4',
          },}} />
      </Root.Navigator>
    </NavigationContainer>
  
  )
}

export default RootNavigator;

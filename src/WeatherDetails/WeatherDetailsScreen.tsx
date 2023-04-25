import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WeatherDetails from '../components/WeatherDetails';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TRootNavigatorParams } from '../navigation/RootNavigator';
import Button from '../components/Button';

const WeatherDetailsScreen = () => {
  const route = useRoute<RouteProp<TRootNavigatorParams, "WeatherDetails">>();
  const navigation = useNavigation<NavigationProp<TRootNavigatorParams, "WeatherDetails">>();

  const navigateToHome = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <WeatherDetails screen='WeatherDetails' weatherData={{...route.params}}  />
      <Button title='Back' onPress={navigateToHome}/>
    </SafeAreaView>
  )
}

export default WeatherDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: '#e4f6f4'
  },
})
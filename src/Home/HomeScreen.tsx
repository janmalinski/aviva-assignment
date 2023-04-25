import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getData, storeData, removeData } from '../helpers/Storage';

import { getWeatherDetails } from './homeApi';
import { TRootNavigatorParams, TWeatherDetails } from '../navigation/RootNavigator';
import WeatherDetails from '../components/WeatherDetails';
import SearchInput from './components/SearchInput';
import SaveCityName from './components/SaveCityName';
import Button from '../components/Button';
import { debounce } from '../helpers/Debounce';

const HomeScreen = () => {
  const [text, setText] = useState<string>('');
  const [weatherData, setWeatherData] = useState<TWeatherDetails | null>(null);
  const [cityNameSaved, setCityNameSaved] = useState<boolean>(false);

  const navigation = useNavigation<NavigationProp<TRootNavigatorParams, "Home">>();

  useEffect(() => {
      getDataHandler();
  }, []);

  useEffect(() => {
    if(cityNameSaved){
      storeData('@city_name', text);
    } else if(text !== '' && !cityNameSaved){
      removeData('@city_name');
    }
  }, [cityNameSaved]);

  useEffect(() => {
    if(text !== ''){
      debounceGetWeatherData();
    }
    if(!text){
      setCityNameSaved(false);
    }
  }, [text]);

  const getDataHandler = async() => {
    const data = await getData('@city_name');
    if(data) {
      setText(data as string);
      setCityNameSaved(true);
    }
  };

  const getWeatherData = async() => {
    const data = await getWeatherDetails(text);
    setWeatherData(data);
  }

  const debounceGetWeatherData = debounce(getWeatherData, 500)
  
  const handleSetText =  useCallback( async(value: string) => {
    setText(value);
  }, [setText]);

  const navigateToWeatherDetails = useCallback(() => {
    if(weatherData && text){
      navigation.navigate("WeatherDetails", {...weatherData});
      !cityNameSaved && setText('');
    } else {
      Alert.alert("You didn't type full city name.", "Please type city name and then click search button.");
    }
  }, [weatherData, text, navigation, cityNameSaved, setText]);

  const handleSaveCity = useCallback(() => {
    setCityNameSaved(prevState => !prevState); 
  },[setCityNameSaved]);

  return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <SearchInput text={text} handleSetText={handleSetText} navigateToWeatherDetails={navigateToWeatherDetails} />
          <SaveCityName disabled={text === '' ? true : false} cityNameSaved={cityNameSaved} handleSaveCity={handleSaveCity}/>
          {weatherData && text && (
            <>
              <WeatherDetails weatherData={weatherData} screen='Home' />
              <Button title='Get more details' onPress={navigateToWeatherDetails} />
            </>
            )}
      </SafeAreaView>   
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 40,
      backgroundColor: '#e4f6f4'
    },
});
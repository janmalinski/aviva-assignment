import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import { TRootNavigatorParams, TWeatherDetails } from '../navigation/RootNavigator';
import parseFloatToOneDecimal from '../helpers/ParseFloatToOneDecimal';
import capitalizeFirstLetter from '../helpers/CapitalizeFirstLetter';

interface IWeatherDetails {
    weatherData: TWeatherDetails;
    screen: keyof TRootNavigatorParams;
} 

const WeatherDetails = ({ weatherData, screen} : IWeatherDetails) => {
  const {city, description, temp, temp_max, temp_min, feels_like, humidity, pressure, icon} = weatherData;
  return (
    <View testID='weather-details' style={{ marginTop: screen === 'Home' ? '65%' : 0}}>
        {screen === 'Home' ?
          <View style={styles.homeContainer}>
            <View style={styles.row}>
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={styles.textXl}>{city}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.currentTemperatureText}>{parseFloatToOneDecimal(temp)}</Text><Text style={styles.currentTemperatureSymbol}>˚</Text>
            </View>
            <Image style={styles.icon} source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} />
          </View>
          :  screen === 'WeatherDetails' && 
          <View style={styles.weatherDetailsContainer}>
            <View style={[styles.row, styles.gapWithAlignmentCenter]}>
              <Entypo name="location-pin" size={24} color="black" />
              <Text style={styles.textXl}>{city}</Text>
            </View>
            <View style={styles.row}>
              <Image style={[styles.icon, styles.marginLeftMinusTwenty]} source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} />
              <Text style={[styles.textXl, styles.temperatureText]}>{parseFloatToOneDecimal(temp)}˚</Text>
              <View style={styles.verticallDivider} />
              <Text style={[styles.text, styles.wrapText]}>{capitalizeFirstLetter(description)}.</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Maximum temprature: {parseFloatToOneDecimal(temp_max)}˚</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Minimum temprature: {parseFloatToOneDecimal(temp_min)}˚</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Feels like: {parseFloatToOneDecimal(feels_like)}˚</Text>
            </View>
            <Text style={styles.text}>Humidity: {humidity}%</Text>
            <Text style={styles.text}>Pressure: {pressure}mb</Text>
          </View>
      }
    </View> 
  )
}

export default WeatherDetails;

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center'
  },
  textXl: {
    fontSize: 22,
    fontFamily: 'Actor-Regular',
  },
  icon: {
    height: 100,
    width: 100,
    marginTop: -15
  },
  marginLeftMinusTwenty: {
    marginLeft: -20
  },
  currentTemperatureText: {
    fontSize: 42,
    fontFamily: 'Actor-Regular',
    alignSelf: 'center',
  },
  currentTemperatureSymbol: {
    marginLeft: 5,
    marginTop: 7,
    fontSize: 38,
  },
  temperatureSymbol: {
    marginTop: 5,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  gapWithAlignmentCenter: {
    gap: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: 'Actor-Regular',
    lineHeight: 24
  },
  temperatureText: {
    marginTop: 5,
    marginLeft: 5,
  },
  wrapText: {
    marginTop: 5,
    flex: 1,
    flexWrap: 'wrap'
  },
  weatherDetailsContainer: {
    marginBottom: 40,
  },
  verticallDivider: {
    height: '80%',
    width: 1,
    backgroundColor: '#000',
    marginHorizontal: 10
  }
})
import { Alert } from 'react-native';
import { TWeatherDetails } from "../navigation/RootNavigator";
import { WeatherDto } from "./weather.dto";

type TFetchWeatherDetails = (cityName: string) => Promise<TWeatherDetails | null>;

export const getWeatherDetails: TFetchWeatherDetails  = async cityName => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.API_KEY}`);
    const data = await response.json();
    if(data.cod === 200){
      return weatherDetailsMapper(data)
    };
    return null;
  } catch (error) {
    Alert.alert("Error occurerd", "Please try again.");
    return null;
  }
};

type TWeatherDetailsMapper = (weatherDetailsApi: WeatherDto.weatherDetailsApi) => TWeatherDetails; 

const weatherDetailsMapper: TWeatherDetailsMapper = weatherDetailsApi => {
  const { weather, main} = weatherDetailsApi;
      const details = {
        city: weatherDetailsApi?.name,
        humidity: main?.humidity,
        pressure: main?.pressure,
        temp: main?.temp,
        feels_like: main.feels_like,
        temp_max: main?.temp_max,
        temp_min: main?.temp_min,
        description: weather[0]?.description,
        icon: weather[0]?.icon,
     };
     return details;
}
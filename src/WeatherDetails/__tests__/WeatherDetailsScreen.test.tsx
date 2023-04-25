import React from "react";
import { render } from "@testing-library/react-native";
import WeatherDetailsScreen from "../WeatherDetailsScreen";

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: jest.fn(),
      }),
      useRoute: () => ({
        params : {
        city: 'Poznań',
        humidity: 54,
        pressure: 1000,
        temp: 19,
        feels_like: 18,
        temp_max: 20,
        temp_min: 18,
        description: 'Light inisity showers',
        icon: '10d',
        }
      })
    };
  });


describe('WeatherDetailsScreen', () => {
    it('Should render correctly', () => {
        render(<WeatherDetailsScreen />)
    });

    it('Should match a snapshot', () => {
        const elJson = render(<WeatherDetailsScreen />).toJSON();
        expect(elJson).toMatchSnapshot(); 
    });

});




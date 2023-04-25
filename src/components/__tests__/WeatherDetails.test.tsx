import React from 'react';
import { render } from '@testing-library/react-native';

import WeatherDetails from '../WeatherDetails';

const screen = 'Home';
const weatherData = {
    city: "Poznań",
    description: "light intensity shower rain",
    feels_like: 14,
    humidity: 79,
    icon: "09d",
    pressure: 1003,
    temp: 14.44,
    temp_max: 16.83,
    temp_min: 14.12
};

const WeatherDetailsEl = (
    <WeatherDetails screen={screen}  weatherData={weatherData}/>
);


describe('Rendering WeatherDetails component', () => {

    it('Should match a snapshot', () => {
        const elJson = render(WeatherDetailsEl).toJSON();
        expect(elJson).toMatchSnapshot(); 
    });
});


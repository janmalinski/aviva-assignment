import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';


import SearchInput from '../SearchInput';

const text = 'Poznań';
const handleSetText = jest.fn();
const navigateToWeatherDetails = jest.fn();


describe('Rendering SearchInput', () => {
    const SearchInputEl = (
        <SearchInput testID='search-input' text={text} handleSetText={handleSetText} navigateToWeatherDetails={navigateToWeatherDetails} />
    );

    it('Should match a snapshot', () => {
        const elJson = render(SearchInputEl).toJSON();
        expect(elJson).toMatchSnapshot(); 
    });
});

describe('Behaviour SearchInput', () => {
    const searchInputEl = (<SearchInput testID='search-input' text={text} handleSetText={handleSetText} navigateToWeatherDetails={navigateToWeatherDetails} />);
    it('Should apply the text prop value', () => {
        const { getByTestId } = render(searchInputEl);
        const textInput = getByTestId('search-text-input');
        expect(textInput).toBeTruthy();
        expect(textInput.props.value).toBe(text);
    });

    it('Should press search button', () => {
        const { getByTestId } = render(searchInputEl);
        const searchButton = getByTestId('search-button');
        expect(searchButton).toBeTruthy();
        fireEvent.press(searchButton);
    })


});

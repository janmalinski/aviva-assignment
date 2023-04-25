import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SaveCityName from '../SaveCityName';


const handleSaveCity = jest.fn();
const SaveCityNameEl = <SaveCityName testID='save-city-checkbox' disabled={false} cityNameSaved={false} handleSaveCity={handleSaveCity} />;

describe('Rendering SaveCityName', () => {
    it('Should match a snapshot', () => {
        const elJson = render(SaveCityNameEl).toJSON();
        expect(elJson).toMatchSnapshot(); 
    })
});

describe('Behaviour SaveCityName', () => {
    it('Should handle onPress event', () => {
        const { getByTestId} =  render(SaveCityNameEl);
        fireEvent.press(getByTestId('save-city-checkbox'));
        expect(handleSaveCity).toBeCalled();
    });

    it(`Should ignore onPress event if disabled`, () => {
        const mockFn = jest.fn();
        const { getByTestId} =  render(<SaveCityName testID='save-city-checkbox' disabled cityNameSaved={false} handleSaveCity={mockFn} />);
        fireEvent.press(getByTestId('save-city-checkbox'));
         expect(mockFn).not.toBeCalled();
      });

      it("Should display checkmark icon when cityNamedSaved is true", async() => {
        const { getByTestId } =  render(<SaveCityName testID='save-city-checkbox' disabled={false} cityNameSaved={true} handleSaveCity={handleSaveCity} />);
        fireEvent.press(getByTestId('save-city-checkbox'));
        await waitFor(() => getByTestId('checkbox-icon') )
      });

});
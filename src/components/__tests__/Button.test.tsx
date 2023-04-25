import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Button from '../Button';

const title = 'Back';
const onPress = jest.fn();


describe('Rendering Button', () => {
    const ButtonEl = (
        <Button testID='button' title={title} onPress={onPress}/>
    );

    it('Should match a snapshot', () => {
        const elJson = render(ButtonEl).toJSON();
        expect(elJson).toMatchSnapshot(); 
    });
});

describe('Behaviour Button', () => {
   
    it('Should press  button', () => {
        const { getByTestId } = render(<Button testID='button' title={title} onPress={onPress}/>);
        const button = getByTestId('button');
        expect(button).toBeTruthy();
        fireEvent.press(button);
    });
});

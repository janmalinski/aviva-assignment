import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('HomeScreen', () => {
    it('Should render correctly', () => {
        render(<HomeScreen />)
    });

    it('Should match a snapshot', () => {
      const elJson = render(<HomeScreen />).toJSON();
      expect(elJson).toMatchSnapshot(); 
  });
});




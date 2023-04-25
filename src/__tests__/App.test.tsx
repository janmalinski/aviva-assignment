import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import App from "../../App";

describe('App', () => {
    it('Should render correctly', async() => {
       await waitFor(() => render(<App />)) 
    });
});
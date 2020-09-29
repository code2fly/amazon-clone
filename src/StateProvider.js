import React, { createContext, useContext, useReducer } from 'react';
import { initialState } from './reducer';

// prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide data layer to components of our app
export const StateProvider = ({ reducer, initialState, children }) => (

    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// this is used to pull info from data layer
export const useStateValue = () => useContext(StateContext);
// setup data layer
// We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, inititalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, inititalState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);

import React,{createContext, useReducer, useContext} from "react";

//Prepare the DataLayer
export const StateContext = createContext();

//wrap our App and provide the Data Layer
export const StateProvider = ({reducer, initialState , children}) =>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
           {children}
    </StateContext.Provider>
);
//Pull information from data layer 
export const useStateValue = () => useContext(StateContext);
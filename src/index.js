import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import {MainReducer} from "./reducer/MainReducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {StyledEngineProvider} from "@mui/styled-engine-sc";

const store = createStore(
    MainReducer,
    applyMiddleware(logger, thunk)
)

const slice = createSlice({
    name: 'video-tube',
    initialState : [],
    reducers:{
        MainReducer
    },
})

ReactDOM.render(
  <React.Fragment>
    <StyledEngineProvider injectFirst>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StyledEngineProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

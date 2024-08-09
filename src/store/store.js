import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/reducer';

const store = configureStore({
    reducer:rootReducer
  });//Creating a store

  export default store;


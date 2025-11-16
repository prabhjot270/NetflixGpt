import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReeducer from './movieSlice';

const appStore= configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReeducer,
    },
})
export default appStore;
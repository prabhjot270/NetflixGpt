import { createSlice } from '@reduxjs/toolkit';

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        isSearchView:false
    },
    reducers:{
        toggleSearchView:(state)=>{
            state.isSearchView= !state.isSearchView ;
    },
   }
} );

export const {toggleSearchView}=gptSlice.actions ;

export default gptSlice.reducer ;
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

//!slices import
import { sectionsSlice } from './features/sectionSlice';


export const store=configureStore(
    {
        reducer:{
            section:sectionsSlice.reducer
        },
        middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat()
    }
)

setupListeners(store.dispatch)
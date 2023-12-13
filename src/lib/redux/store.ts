import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//! api import
import { projectsApi } from './service/projectsAPI';
import { skillsApi } from './service/skilsAPI';
import { experienceApi } from './service/experience.Api';
//!slices import
import { sectionsSlice } from './features/sectionSlice';


export const store=configureStore(
    {
        reducer:{
            section:sectionsSlice.reducer,
            [projectsApi.reducerPath]:projectsApi.reducer,
            [skillsApi.reducerPath]:skillsApi.reducer,
            [experienceApi.reducerPath]:experienceApi.reducer
        },
        middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
            projectsApi.middleware,
            skillsApi.middleware,
            experienceApi.middleware
        )
    }
)

setupListeners(store.dispatch)
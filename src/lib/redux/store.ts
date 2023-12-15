import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//! api import
import { projectsApi } from './service/projectsAPI';
import { skillsApi } from './service/skilsAPI';
import { experienceApi } from './service/experience.Api';
import { certificationsApi } from './service/certificationsApi';
//!slices import
import { sectionsSlice } from './features/sectionSlice';
import { skillsSlice } from './features/skillsSlice'; 
import { experienceSlice } from './features/experience';
import { projectsSlice } from './features/projectsSlice';
import { certificationsSlice } from './features/certificationsSlice';

export const store=configureStore(
    {
        reducer:{
            section:sectionsSlice.reducer,
            skills:skillsSlice.reducer,
            experience:experienceSlice.reducer,
            projects:projectsSlice.reducer,
            certificates:certificationsSlice.reducer,
            [projectsApi.reducerPath]:projectsApi.reducer,
            [skillsApi.reducerPath]:skillsApi.reducer,
            [experienceApi.reducerPath]:experienceApi.reducer,
            [certificationsApi.reducerPath]:certificationsApi.reducer
        },
        middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(
            projectsApi.middleware,
            skillsApi.middleware,
            experienceApi.middleware,
            certificationsApi.middleware
        )
    }
)

setupListeners(store.dispatch)
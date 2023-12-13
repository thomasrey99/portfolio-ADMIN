import { createSlice } from "@reduxjs/toolkit";
import { stateExperience } from "@/utils/types";


let initialState={
    allExperience:[],
}

export const experienceSlice=createSlice({
    name:"experience",
    initialState,
    reducers:{
        setExperience:(state:stateExperience, {payload})=>{

            state.allExperience=payload

        }
    }
})

export const { setExperience } = experienceSlice.actions
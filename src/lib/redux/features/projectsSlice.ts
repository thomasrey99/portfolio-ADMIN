import { createSlice } from "@reduxjs/toolkit";
import { stateProjects } from "@/utils/types";


let initialState={
    allProjects:[],
}

export const projectsSlice=createSlice({
    name:"projects",
    initialState,
    reducers:{

        setProjects:(state:stateProjects, {payload})=>{

            state.allProjects=payload

        }
    }
})

export const { setProjects } = projectsSlice.actions
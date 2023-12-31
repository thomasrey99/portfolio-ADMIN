import { createSlice } from "@reduxjs/toolkit";


let initialState={
    name:"about"
}

export const sectionsSlice=createSlice({
    name:"sections",
    initialState,
    reducers:{
        changeSection : (state, {payload})=>{
            switch(payload){
                case "about":
                    state.name="about"
                    break;
                case "skills":
                    state.name="skills"
                    break;
                case "experience":
                    state.name="experience"
                    break;
                case "projects":
                    state.name="projects"
                    break;
                case "contact":
                    state.name="contact"
                    break;
                case "messages":
                    state.name="messages"
                    break;
                case "blog post":
                    state.name="blog post"
                    break;
                default:
                    return state
            }
        }
    }
})

export const { changeSection } = sectionsSlice.actions
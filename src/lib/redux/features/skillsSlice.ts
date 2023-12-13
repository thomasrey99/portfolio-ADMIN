import { createSlice } from "@reduxjs/toolkit";
import { skills, stateSkills } from "@/utils/types";

let initialState={
    softSkills:[],
    techSkills:[]
}

export const skillsSlice=createSlice({
    name:"skills",
    initialState,
    reducers:{
        setSkills: (state:stateSkills, {payload})=>{

            payload.forEach((skill:skills)=>{
                
                const {type}=skill

                switch(type){
                    case "tech skill":
                        state.techSkills=[...state.techSkills, skill]
                        break;
                    case "soft skill":
                        state.softSkills=[...state.softSkills, skill]
                        break
                    default :
                        return state
                }
                
            })
        }
    }
})

export const { setSkills } = skillsSlice.actions
import { createSlice } from "@reduxjs/toolkit";
import { certifications, stateCertifications } from "@/utils/types";

let initialState={
    allCertifications:[]
}

export const certificationsSlice=createSlice({
    name:"certifications",
    initialState,
    reducers:{
        setCertifications:(state:stateCertifications, {payload})=>{
          
            if(payload){
                
                state.allCertifications=payload
                
            }

        }
    }
})

export const {setCertifications}=certificationsSlice.actions
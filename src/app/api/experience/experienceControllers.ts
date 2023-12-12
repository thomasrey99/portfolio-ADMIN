import {addDoc, getDocs, collection} from "firebase/firestore"
import { db } from "@/firebase/config"

export const postExperience=async(
    name:string,
    company:string,
    rol:string,
    description:string,
    start_date:string,
    end_date:string
)=>{
    
    if(
        !name||
        !company||
        !rol||
        !description||
        !start_date||
        !end_date
    ){

        return {message:"insuficient data!"}

    }else{

        await addDoc(collection(db, "Experience"),{
            name,
            company,
            rol,
            description,
            start_date,
            end_date
        })

        return {message:"experience created!"}
    }
}

export const getExperience=async()=>{

    let allExperience:Array<Object>=[]

    const data=await getDocs(collection(db, "Experience"))

    data.forEach(experience=>{
        allExperience.push({
            id:experience.id,
            ...experience.data()
        })
    })

    if(allExperience.length!==0){

        return allExperience

    }else{

        return {message:"empty experience"}

    }
    
}
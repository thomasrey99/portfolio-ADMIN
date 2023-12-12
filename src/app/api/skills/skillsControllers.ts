import { collection, doc, addDoc, getDocs} from "firebase/firestore";
import { db } from "@/firebase/config";

export const postTechSkill=async(
    name:string,
    image:string,
    level:string,
    type:string,
    yearExperience:number,
)=>{
    if(
        !name ||
        !image ||
        !level ||
        !yearExperience
    ){
        
        return {message:"insuficient data!"}

    }else{
        await addDoc(collection(db, "Tech skills"), {
            name,
            image,
            type,
            level,
            yearExperience
        })
    }
}

export const postSoftSkill=async(
    name:string,
    type:string,
)=>{
    if(!name){
        return {message:"insuficient data!"}
    }else{
        await addDoc(collection(db, "Soft skills"), {
            name,
            type
        })
    }
}


export const getSkills=async()=>{
    let allSkills:Array<Object>=[]
    const techSkills=await getDocs(collection(db, "Tech skills"))
    const softSkills=await getDocs(collection(db, "Soft skills"))
    if(techSkills){
        techSkills.forEach(skill=>{
            allSkills.push({
                id:skill.id,
                ...skill.data()
            })
        })
    }
    if(softSkills){
        softSkills.forEach(skill=>{
            allSkills.push({
                id:skill.id,
                ...skill.data()
            })
        })
    }
    return allSkills
}

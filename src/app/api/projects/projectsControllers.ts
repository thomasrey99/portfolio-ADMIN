import { addDoc, getDocs, collection } from "firebase/firestore"
import { db } from "@/firebase/config"

export const postProject=async (
    name:string,
    description:string,
    rol:string,
    technologies:Array<string>,
    year:string,
    repositoryURL:string,
    deployURL:string,
    imageURL:string
)=>{

    if(
        !name ||
        !description ||
        !rol ||
        !technologies ||
        !year ||
        !repositoryURL ||
        !deployURL||
        !imageURL
    ){
        return {message:"insuficient data!"}
    }else{
        await addDoc(collection(db, "Projects"),{
            name,
            rol,
            technologies,
            year,
            repositoryURL,
            deployURL,
            imageURL,
        })
        return {message:"project created!"}
    }

}

export const getProjects=async()=>{

    let projects:Array<Object>=[]

    const data=(await getDocs(collection(db, "Projects")))

    data.forEach(project=>{
        projects.push({
            id:project.id,
            ...project.data()
        })
    })

    if(projects.length===0){
        return {message:"empty projects!"}
    }else{
        return  projects
    }
}
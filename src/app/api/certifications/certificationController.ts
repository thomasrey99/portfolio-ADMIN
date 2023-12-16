import { addDoc, collection, getDocs, doc } from "firebase/firestore";
import { db } from "@/firebase/config";


export const postCertificate=async(
    image:string,
    institution:string,
    title:string,
    urlCertificate:string,
    achievement:string
)=>{
    if(
        !image ||
        !institution ||
        !title ||
        !urlCertificate ||
        !achievement
    ){
        
        return {message:"insuficient data!"}

    }else{
        await addDoc(collection(db, "certificates"),{
            title,
            institution,
            image,
            urlCertificate, 
            achievement
        })

    }
   
}
export const getCertificates=async()=>{
    let allSCertificates:Array<Object>=[]

    const data=await getDocs(collection(db, "certificates"))

    if(data){
        data.forEach((certificate)=>{
            allSCertificates.push({
                id:certificate.id,
                ...certificate.data()
            })
        })
    }

    if(allSCertificates.length>0){
        return allSCertificates
    }else {
        return {message:"empty certificates"}
    }
}
import { NextResponse, NextRequest } from "next/server";
import { getCertificates, postCertificate } from "./certificationController";

export async function GET (){
    try {
        
        const response=await getCertificates()

        return NextResponse.json(response)

    } catch (error) {
        
        return NextResponse.json({message:"error loading certificates"})

    }
}
export async function POST (req:NextRequest){
    
    const {

        title,
        institution,
        image,
        urlCertificate,
        achievement
    } =await req.json()

    try {
        
        const insuficientData=await postCertificate( image, institution, title, urlCertificate, achievement)

        if(!insuficientData){

            return NextResponse.json({message:"certification created!"})
        
        }else{

            return NextResponse.json(insuficientData)

        }
    } catch (error) {

        return NextResponse.json({message:"error when creating the certificate"})
    
    }

}
export async function PUT (){
    
}
export async function DELETE (){
    
}
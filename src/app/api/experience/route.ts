import { NextRequest, NextResponse } from "next/server";
import {postExperience, getExperience} from "./experienceControllers"

export async function GET (){

    try {
        
        const experience=await getExperience()

        return NextResponse.json(experience)

    } catch (error) {
        
        return NextResponse.json({message:"error when chargin experience"})

    }

}

export async function POST (req:NextRequest){
    
    const {

        name,
        company,
        rol,
        description,
        start_date,
        end_date

    } =await req.json()

    try {
        
        const response=await postExperience(

            name,
            company,
            rol,
            description,
            start_date,
            end_date

        )

        return NextResponse.json(response)

    } catch (error) {
        
        return NextResponse.json({message:"error when post experience", error:error})

    }
}
export async function PUT (){
    
}
export async function DELETE (){
    
}

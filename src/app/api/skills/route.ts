import { NextRequest, NextResponse } from "next/server"
import {getSkills, postSoftSkill, postTechSkill} from "./skillsControllers"

export async function GET () {

    try {

        const allSkills=await getSkills()

        if(allSkills.length===0){
            
            return NextResponse.json(
                {
                    message:"empty skills"
                }
            )
        }
        return NextResponse.json(allSkills)

    } catch (error) {
        
        return NextResponse.json({
            message:"error when consulting skills"
        })

    }

}

export async function POST (req:NextRequest) {

    const {
        name,
        image,
        level,
        type,
        yearExperience,
    }=await req.json()

    try {

        if(!type){

            return NextResponse.json({message:"insuficient data!"})
        }

        if(type==="tech skill"){

            const insuficientData= await postTechSkill(name, image, level, type, yearExperience)
            
            if(!insuficientData){

                return NextResponse.json({message:"skill created!"})
                

            }else{

                return NextResponse.json(insuficientData)

            }



        }else if(type==="soft skill"){
    
            const insuficientData= await postSoftSkill(name, type)

            if(!insuficientData){

                return NextResponse.json({message:"skill created!"})
                

            }else{

                return NextResponse.json(insuficientData)

            }
            
        }

        
        
    } catch (error) {
        
        return NextResponse.json({message:"error when creating the skill"})

    }
}

export function PUT (){

}

export function DELETE () {

}
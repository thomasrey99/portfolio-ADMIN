import { NextRequest, NextResponse } from "next/server";
import {postProject, getProjects}from "./projectsControllers"

export async function GET () {

   try {

    const projects=await getProjects()

    return NextResponse.json(projects)
   
    } catch (error) {

        return {message:"error when chargin projects", error:error}

    }

}

export async function POST (req:NextRequest) {

    const {
        name,
        description,
        rol,
        technologies,
        year,
        repositoryURL,
        deployURL,
        imageURL
    }=await req.json()

    try {
        
        const state=await postProject(name, description, rol, technologies, year, repositoryURL, deployURL, imageURL)

        return NextResponse.json(state)

    } catch (error) {
        
        return NextResponse.json({message:"error when post project", error:error})

    }
}

export function PUT (){

}

export function DELETE () {

}
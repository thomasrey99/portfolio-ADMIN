//!interfaces
export interface project {
    name:string,
    description:string,
    rol:string,
    technologies:Array<string>,
    year:string,
    repositoryURL:string,
    deployURL:string,
    imageURL:string
}

export interface skills {
    name:string,
    image:string,
    level:string,
    type:string,
    yearExperience:number,
}

export interface experience {
    name:string,
    company:string,
    rol:string,
    description:string,
    start_date:string,
    end_date:string
}

export interface stateSkills{
    softSkills:Array<Object>,
    techSkills:Array<Object>
}

export interface stateExperience{
    allExperience:Array<Object>
}

export interface stateProjects{
    allProjects:Array<Object>
}
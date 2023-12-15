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
export interface sectionTypes{
    id:string,
    title:string
}
export interface skills {
    name:string,
    image:string,
    level:string,
    type:string,
    yearExperience:number,
}

export interface softSkills {
    name:string,
    type:string
}

export interface experience {
    name:string,
    company:string,
    rol:string,
    description:string,
    start_date:string,
    end_date:string
}

export  interface certifications {
    image:string,
    institution:string,
    title:string,
    urlCertificate:string
}

export interface stateSkills{
    softSkills:Array<Object>,
    techSkills:Array<Object>
}

export interface stateExperience{
    allExperience:Array<Object>
}
export interface stateCertifications{
    allCertifications:Array<Object>
}
export interface stateProjects{
    allProjects:Array<Object>
}
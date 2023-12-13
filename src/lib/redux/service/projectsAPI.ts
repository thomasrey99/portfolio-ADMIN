import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { project } from "@/utils/types";

const {BASE_URL}=process.env

export const projectsApi=createApi({
    reducerPath:"projectsAPi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    endpoints:(build)=>({
        getProjects:build.query<project[], null>({
            query:()=>"/api/projects"
        }),
        postProject:build.mutation({
            query: (body) => ({
                url: "/projects",
                method: "POST",
                body
              }),
        })
    })
})

export const {useGetProjectsQuery, usePostProjectMutation}=projectsApi

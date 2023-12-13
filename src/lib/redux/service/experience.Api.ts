import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { experience } from "@/utils/types";
const { BASE_URL }=process.env


export const experienceApi=createApi({
    reducerPath:"experienceApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    endpoints:(build)=>({
        getExperience:build.query<experience[], null>({
            query:()=>"/api/experience",
        }),
        postExperience:build.mutation({
            query:(body)=>({
                url:"/api/experience",
                method:"POST",
                body
            })
        })
    })
})

export const {useGetExperienceQuery, usePostExperienceMutation}=experienceApi
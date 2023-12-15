import { certifications } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const {BASE_URL}=process.env

export const certificationsApi=createApi({
    reducerPath:"certificationsApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    endpoints:(build)=>({
        getCertifications:build.query<certifications[], null>({
            query:()=>"/api/certifications"
        }),
        postCertifications:build.mutation({
            query:(body)=>({
                url:"/api/certifications",
                method:"POST",
                body
            })
        })
    })
})

export const {useGetCertificationsQuery, usePostCertificationsMutation}=certificationsApi
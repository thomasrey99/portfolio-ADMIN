import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { skills } from "@/utils/types";
import { getSkills } from '../../../app/api/skills/skillsControllers';

const { BASE_URL }=process.env

export const skillsApi=createApi({

    reducerPath:"skillsApi",

    baseQuery:fetchBaseQuery({

        baseUrl:BASE_URL

    }),

    endpoints:(build)=>({
        
        getSkills:build.query<skills[], null>({

            query:()=>"api/skills"

        }),

        postSkill:build.mutation({

            query: (body) => ({

                url: "api/skills",
                method: "POST",
                body

              }),
        })
    })
})

export const { useGetSkillsQuery, usePostSkillMutation }=skillsApi
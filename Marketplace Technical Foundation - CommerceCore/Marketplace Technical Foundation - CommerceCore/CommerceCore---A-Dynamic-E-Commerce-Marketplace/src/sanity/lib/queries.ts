import { groq } from "next-sanity";

export const AllData = groq`*[_type == "product"]`;
export const Four = groq`*[_type == "product"][0..3]`;
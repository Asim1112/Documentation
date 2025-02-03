import { client } from "@/sanity/lib/client";
import { ProductType } from "../../../../pTypes/productType";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface itemPage_Props {
        params: Promise<{slug : string}>
}

async function getItem(slug : string): Promise<ProductType> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
            _id,
            productName,
            _type,
            image,
            price,
            description
            
        }` , {slug}
    )
}

export default async function ItemPage({params}: itemPage_Props){
    const {slug} = await params;
    const item = await getItem(slug)

    return (
        <div className="max-w-7xl- mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-sqaure">
        {item.image && (
            <Image
                src={urlFor(item.image).url()}
                alt={item.productName}
                width={500}
                height={500}
                className="rounded-lg shadow-md"
            />
        )}
        </div>
                    <div className="flex flex-col gap-8"> 
                    <h1 className="text-4xl font-bold">{item.productName} </h1>
                    <p className="text-2xl font-semibold">{`$${item.price}`}</p>
                    <p className="text-xl">{item.description}</p>
                    </div>
        </div>
        </div>
    )
}
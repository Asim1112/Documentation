"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ProductType } from "../../../pTypes/productType";
import { client } from "@/sanity/lib/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { urlFor } from "@/sanity/lib/image";
import { AllData } from "@/sanity/lib/queries";
import Link from "next/link";
import FiltersSearchPagination from "@/components/FiltersSearchPagination";
import { AddToCart } from "@/components/CartFunctionality";
import Swal from "sweetalert2";

const Page = () => {
  const [product, setProduct] = useState<ProductType[]>([]);
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null); // ✅ Error state

  useEffect(() => {
    async function acquireProducts() {
      try {
        setError(null); // Reset error before fetching
        const fetchedProducts: ProductType[] = await client.fetch(AllData);
        setProduct(fetchedProducts);
        setFilteredData(fetchedProducts);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Unable to load products. Please try again later.");
      }
    }
    acquireProducts();
  }, []);

  // ✅ Add To Cart
  const handleAddToCart = (e: React.MouseEvent, item: ProductType) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${item.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });

    AddToCart(item);
  };

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl my-10 flex justify-center font-bold underline">
          Data From API Sanity
        </h1>

        {/* ✅ Show Error Message if API Fails */}
        {error ? (
          <div className="text-red-600 text-center text-lg font-semibold bg-red-100 p-4 rounded-md">
            {error}
          </div>
        ) : (
          <>
            
            {/* Filters, Search Bar, and Pagination */}
            <FiltersSearchPagination
              products={product}
              onFilteredData={setFilteredData}
            />

            {/* Display Filtered Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {filteredData.map((product) => (
                <div
                  key={product._id}
                  className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
                >
                  <Link href={`/item/${product.slug.current}`}>
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt="image"
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    )}
                    <h2 className="text-lg font-semibold mt-4">
                      {product.productName}
                    </h2>
                    <p>
                      {product.price ? `$${product.price}` : "Price not available"}
                    </p>
                    <button
                      className="bg-gradient-to-r from-sky-600 to-teal-500 text-white font-semibold 
                      py-2 px-4 rounded-lg shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add To Cart
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;

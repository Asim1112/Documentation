"use client";
import React, { useState, useEffect } from "react";
import { ProductType } from "../../pTypes/productType";

type FiltersSearchPaginationProps = {
  products: ProductType[];
  onFilteredData: (data: ProductType[]) => void;
};

const FiltersSearchPagination: React.FC<FiltersSearchPaginationProps> = ({
  products,
  onFilteredData,
}) => {
  // States
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Customize items per page

  // Extract unique categories
  useEffect(() => {
    const uniqueCategories = [
      "All",
  ...Array.from(new Set(products.map((p) => p.category || "Uncategorized"))),
];
    setCategories(uniqueCategories);
  }, [products]);

  // Filter products based on category and search term
  useEffect(() => {
    let tempProducts = products;

    if (selectedCategory !== "All") {
      tempProducts = tempProducts.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (searchTerm) {
      tempProducts = tempProducts.filter((p) =>
        p.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
    onFilteredData(tempProducts.slice(0, itemsPerPage)); // Emit initial data for pagination
  }, [selectedCategory, searchTerm, products, onFilteredData]);

  // Handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const paginatedData = filteredProducts.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    onFilteredData(paginatedData);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by product name"
          className="border rounded-lg px-4 py-2 flex-1"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from(
          { length: Math.ceil(filteredProducts.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-4 py-2 border rounded-md transition duration-200 ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default FiltersSearchPagination;

"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProductType } from "../../../pTypes/productType";
import { getCartItems } from "@/components/CartFunctionality";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    country: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const discountApplied = localStorage.getItem("Discount Applied");
    if (discountApplied) {
      setDiscount(Number(discountApplied));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const formValidation = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      country: !formValues.country,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (formValidation()) {
      localStorage.removeItem("Discount Applied");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-black">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 py-4 text-lg">
          <Link href="/Cart" className="hover:text-yellow-300 transition">
            Cart
          </Link>
          <ChevronRight />
          <span className="font-semibold">Checkout</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white text-black shadow-xl rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-700">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 overflow-hidden rounded-lg">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt="image"
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-md font-semibold">{item.productName}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.inventory}</p>
                  </div>
                  <p className="font-medium">${item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your Cart is empty</p>
            )}
            <div className="text-right pt-4">
              <p className="text-lg font-medium">Subtotal: ${subTotal.toFixed(2)}</p>
              <p className="text-lg font-medium">Discount: ${discount}</p>
              <p className="text-2xl font-bold text-blue-600">Total: ${subTotal - discount}</p>
            </div>
          </div>
          <div className="bg-white text-black shadow-xl rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-700">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(formValues).map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block font-medium">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder={`Enter your ${field}`}
                    value={formValues[field as keyof typeof formValues]}
                    onChange={handleInputChange}
                  />
                  {formErrors[field as keyof typeof formErrors] && (
                    <p className="text-sm text-red-500">{`${field} is required`}</p>
                  )}
                </div>
              ))}
            </div>
            <button
              className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg rounded-lg hover:opacity-90 transition"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

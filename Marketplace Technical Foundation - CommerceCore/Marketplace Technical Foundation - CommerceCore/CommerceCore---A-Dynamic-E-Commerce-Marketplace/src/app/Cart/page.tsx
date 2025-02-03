"use client";

import React, { useEffect, useState } from 'react';
import { ProductType } from '../../../pTypes/productType';
import { getCartItems, RemoveFromCart, UpdateCartQuantity } from '@/components/CartFunctionality';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        RemoveFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed.', 'success');
      }
    });
  };

  const handleQuantity = (id: string, quantity: number) => {
    UpdateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product) {
      handleQuantity(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);

    if (product && product.inventory > 1) {
      handleQuantity(id, product.inventory - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  
  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout',
      text: 'Please review your cart before checkout',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed', 'success');
        
        router.push("/Checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

{cartItems.length > 0 ? (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th className="px-4 py-3">Product</th>
          <th className="px-4 py-3">Price</th>
          <th className="px-4 py-3">Quantity</th>
          <th className="px-4 py-3">Total</th>
          <th className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
  {cartItems.map((item) => (
    <tr key={item._id} className="border-b">
      <td className="px-4 py-3">
        <div className="flex items-center space-x-3">
          {item.image && (
              <Image
              src={urlFor(item.image).url()}
              alt="Image"
              width={500}
              height={500}
              className="w-16 h-16 object-cover rounded-md"
            />
          )}
          <span>{item.productName}</span>
        </div>
      </td>
      <td className="px-4 py-3">${item.price}</td>
      <td className="px-4 py-3">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleDecrement(item._id)}
            className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            -
          </button>
          <span>{item.inventory}</span>
          <button
            onClick={() => handleIncrement(item._id)}
            className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-4 py-3">${item.price * item.inventory}</td>
      <td className="px-4 py-3">
        <button
          onClick={() => handleRemove(item._id)}
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </td>
    </tr>
  ))}
      </tbody>
    </table>

            <div className="flex justify-between items-center mt-6">
              <div className="text-xl font-bold">Total: ${calculatedTotal()}</div>
              <button
                onClick={handleProceed}
                className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

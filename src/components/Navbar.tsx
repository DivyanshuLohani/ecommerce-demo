import React from "react";
import { Search, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex flex-col w-full px-10 py-5 gap-3">
      <div className="w-full flex justify-end">
        <ul className="flex gap-5 text-sm">
          <li>Help</li>
          <li>Orders and return</li>
          <li>Hi Jhon Doe</li>
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <div className="logo">
          <span className="text-xl font-bold">ECOMMERCE</span>
        </div>

        <ul className="flex gap-5 font-semibold">
          <li>Categories</li>
          <li>Sale</li>
          <li>Clearance</li>
          <li>New Stock</li>
          <li>Trending</li>
        </ul>

        <div className="flex gap-4">
          <Search />
          <ShoppingCart />
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 mt-2">
        <ChevronLeft />
        <span>Get 10% off on business sign up</span>
        <ChevronRight />
      </div>
    </nav>
  );
}

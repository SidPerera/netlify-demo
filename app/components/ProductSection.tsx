import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <div className="mt-10 flex flex-row gap-2">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductSection;

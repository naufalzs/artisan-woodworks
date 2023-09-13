import React from "react";

import { dataProducts } from "@/app/_json/products";
import ProductDetail from "@/app/_components/ProductDetail/ProductDetail";

export default async function ProductDetailPage({ params }) {
  const product = await getProductDetail(params.id);
  return <ProductDetail product={product} />;
}

export async function generateStaticParams() {
  const paths = dataProducts.data.map((item) => {
    return {
      id: `${item.id}`,
    };
  });
  return paths;
}

export async function getProductDetail(id) {
  return dataProducts.data.find((item) => item.id == id);
}

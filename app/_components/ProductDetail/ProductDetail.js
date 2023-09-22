"use client";
import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import Image from "next/image";

const ReviewStar = ({ rating }) => {
  const maxRating = 5;
  let arrayStar = [];

  [...Array(maxRating)].map((item, index) => {
    if (index < rating)
      return arrayStar.push(
        <StarIcon key={index} className="w-4 h-4 text-red-500" />
      );
    return arrayStar.push(
      <StarOutline key={index} className="w-4 h-4 text-red-500" />
    );
  });

  return [...arrayStar];
};

export default function ProductDetail({ product }) {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-4 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="relative h-[300px] lg:h-auto lg:max-h-[480px] lg:w-1/2 w-full rounded border border-gray-200">
            <Image
              alt={`${product.name} image`}
              fill
              sizes="(max-width: 600px) 300px, 500px"
              className="object-contain object-center"
              src={product.src}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.type}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <ReviewStar rating={product.rating} />
                <span className="text-gray-600 ml-3">17 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button className="ml-auto py-2 px-6 rounded-sm rounded-tl-xl bg-highlight text-text font-semibold hover:bg-yellow-300">
                Explore Product
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <HeartIcon className="w-5 h-5 text-gray-500"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

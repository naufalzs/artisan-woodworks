import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

import data from "../_json/config.json";

const PricingCard = ({ title, price, properties, primary }) => (
  <div className="bg-white rounded-2xl border first:border-primary border-white p-6 shadow-sm ring-2 first:ring-primary ring-white first:sm:order-last sm:px-8 lg:p-12">
    <div className="text-center">
      <h2 className={`text-2xl font-light ${primary && "text-primary"}`}>
        {title}
        <span className="sr-only">Plan</span>
      </h2>

      <p className="mt-2 sm:mt-4">
        <span className="text-xs font-medium text-gray-700">start from </span>
        <strong className="text-3xl font-bold sm:text-4xl">{price}$</strong>
      </p>
    </div>

    <ul className="mt-6 space-y-2">
      {properties.map((property) => (
        <li key={property.name} className="flex items-center gap-1">
          {property.checked ? (
            <CheckIcon
              className="h-5 w-5 text-accent-green"
              aria-hidden="true"
            />
          ) : (
            <XMarkIcon className="h-5 w-5 text-accent-red" aria-hidden="true" />
          )}
          <span className="text-gray-700"> {property.name} </span>
        </li>
      ))}
    </ul>

    <a href={primary ? "#" : undefined}>
      <button
        className={`mt-8 py-2 px-6 w-full rounded-sm rounded-tl-xl font-semibold ${
          primary ? "bg-highlight hover:bg-yellow-300" : "bg-gray-300 text-gray-400"
        }`}
      >
        Explore Product
      </button>
    </a>
  </div>
);

export default function Pricing() {
  const { pricing } = data;

  const pricingItems = pricing.map((item) => (
    <PricingCard
      key={item.title}
      title={item.title}
      price={item.price}
      properties={item.properties}
      primary={item.primary}
    />
  ));
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        {pricingItems}
      </div>
    </div>
  );
}

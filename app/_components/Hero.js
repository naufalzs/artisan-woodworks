"use client";
import React, { useState } from "react";
import Image from "next/image";

import Slider from "react-slick";

import data from "../_json/config";

export default function Hero() {
  const { carousel: furnitureData } = data;

  const [activeIdx, setActiveIdx] = useState(0);
  const currentItem = furnitureData[activeIdx];

  const furnitureImages = furnitureData.map((item) => (
    <div key={item.imageSrc} className="relative aspect-[5/3.5] ">
      <Image
        src={item.imageSrc}
        fill
        sizes="(max-width: 640px) 300px, 500px"
        alt={`${item.name} image`}
        className="object-contain"
        priority
      />
    </div>
  ));

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
      <div className="mx-auto max-w-xl">
        <Slider
          className="mb-6 cursor-pointer"
          arrows={false}
          dots={true}
          dotsClass="slick-dots line-indicator"
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-5px",
                opacity: "0",
              }}
            >
              {i}
            </div>
          )}
          afterChange={(activeIdx) => setActiveIdx(activeIdx)}
        >
          {furnitureImages}
        </Slider>
        <div className="pt-6 text-center">
          <div className="mb-3 text-3xl lg:text-4xl font-light">
            {currentItem.name}
          </div>
          <p className="lg:text-lg">{currentItem.desc}</p>
        </div>
      </div>
    </section>
  );
}

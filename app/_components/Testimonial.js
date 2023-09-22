"use client";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

import data from "../_json/config.json";

const TestimonialCard = ({ name, title, content, rating }) => {
  return (
    <div className="keen-slider__slide">
      <blockquote className="flex h-full flex-col justify-between bg-base p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="flex gap-0.5 text-accent-green">
            {[...Array(rating)].map((item, index) => (
              <StarIcon key={index + "-star"} className="h-5 w-5" />
            ))}
          </div>

          <div className="mt-4">
            <p className="text-2xl font-bold text-accent-red sm:text-3xl">
              {title}
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">{content}</p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
          &mdash; {name}
        </footer>
      </blockquote>
    </div>
  );
};

export default function Testimonial() {
  const { testimonial } = data;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const testimonialItems = testimonial.map((item) => (
    <TestimonialCard
      key={item.name}
      name={item.name}
      title={item.title}
      content={item.testimony}
      rating={item.rating}
    />
  ));

  return (
    <section id="testimonial" className="bg-white">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-accent-red sm:text-4xl">
              Discover what our Clients say...
            </h2>

            <p className="mt-4 ">
              Let their stories inspire your vision, and let us bring that
              vision to life. Explore our testimonials and see why{" "}
              <span className="text-primary font-semibold">Artisan Woodworks</span> is the
              trusted choice for bespoke furniture that elevates your living
              spaces.
            </p>

            {loaded && instanceRef.current && (
              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  className="group rounded-full border border-accent-red p-3 text-accent-red transition hover:bg-accent-red hover:text-white"
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                >
                  <ArrowLeftIcon className="w-6 h-6 text-accent-red group-hover:text-white" />
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next-desktop"
                  className="group rounded-full border border-accent-red p-3 text-accent-red transition hover:bg-accent-red hover:text-white"
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                >
                  <ArrowRightIcon className="w-6 h-6 text-accent-red group-hover:text-white" />
                </button>
              </div>
            )}
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} id="keen-slider" className="keen-slider">
              {testimonialItems}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-accent-red p-4 text-accent-red transition hover:bg-accent-red hover:text-white"
          >
            <ChevronLeftIcon className="w-5 h-5 text-accent-red group-hover:text-white" />
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border border-accent-red p-4 text-accent-red transition hover:bg-accent-red hover:text-white"
          >
            <ChevronRightIcon className="w-5 h-5 text-accent-red group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

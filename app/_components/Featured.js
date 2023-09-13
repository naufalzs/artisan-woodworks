import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:pt-24 lg:pb-48">
        <h2 className="mb-4 mbd:mb-8 text-3xl md:text-5xl font-bold text-primary">
          Featured Products
        </h2>
        <div className="bg-primary text-white">
          <div className="relative p-6 md:p-10 lg:p-16 xl:p-20 lg:flex">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold">Accent Chair</h3>
              <h4 className="mt-2 mb-1">Artisan Cafe Chair</h4>
              <p className="font-extralight lg:w-3/4">
                Elevate your space with our stunning Accent Chair collection.
                Add a pop of style and comfort to any room. Explore endless
                design possibilities today!
              </p>
              <div className="mt-4">
                <a href="/product/1">
                  <button className="py-2 px-6 rounded-sm rounded-tl-xl bg-highlight text-text font-semibold hover:bg-yellow-300">
                    Explore Product
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:absolute right-0 -top-[38%] bg-base aspect-[3/3.5] w-full md:w-2/3 lg:w-[350px] xl:w-[400px] p-8">
              <div className="relative h-full">
                <Image
                  src={"/images/featured-chair.png"}
                  fill
                  sizes="400px"
                  alt="featured chair image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative p-6 md:p-10 lg:p-16 xl:p-20 lg:flex justify-end">
            <div className="lg:w-1/2 flex justify-end">
              <div className="lg:w-3/4">
                <h3 className="text-xl font-semibold">Queen Bed</h3>
                <h4 className="mt-2 mb-1">Ocean Queen Bed</h4>
                <p className="font-extralight">
                  Upgrade your sleep sanctuary with our luxurious Queen Bed.
                  Experience comfort and space like never before. Sweet dreams
                  await!
                </p>
                <div className="mt-4">
                  <a href="/product/2">
                    <button className="py-2 px-6 rounded-sm rounded-tl-xl bg-highlight text-text font-semibold hover:bg-yellow-300">
                      Explore Product
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:absolute -top-[4%] left-0 bg-base aspect-[9/6] w-full md:w-2/3 lg:w-[500px] xl:w-[580px] p-8">
              <div className="relative h-full">
                <Image
                  src={"/images/featured-bed.png"}
                  fill
                  sizes="600px"
                  alt="featured sofa image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative p-6 md:p-10 lg:p-16 xl:p-20 lg:flex">
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold">Lawson Sofa</h3>
              <h4 className="mt-2 mb-1">Super Cozy Grey Sofa</h4>
              <p className="font-extralight w-3/4">
                Experience unmatched comfort and style with our Lawson sofa
                collection. Sink into plush cushions and enjoy relaxed elegance
                in your living space today!
              </p>
              <div className="mt-4">
                <a href="/product/3">
                  <button className="py-2 px-6 rounded-sm rounded-tl-xl bg-highlight text-text font-semibold hover:bg-yellow-300">
                    Explore Product
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:absolute right-[7%] -bottom-[38%] bg-base aspect-[4/3.5] w-full md:w-2/3 lg:w-[400px] xl:w-[450px] p-8">
              <div className="relative h-full">
                <Image
                  src={"/images/featured-sofa.png"}
                  fill
                  sizes="400px"
                  alt="featured sofa image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

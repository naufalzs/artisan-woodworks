"use client";
import React from "react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <main className="bg-white ">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 flex overflow-hidden">
        <div className="relative flex-1 h-[800px] hidden lg:block">
          <Image
            src="/images/contact-us.jpg"
            fill
            sizes="800px"
            className="object-cover"
            alt="contact us image"
          />
        </div>
        <div className="py-12 flex-1 lg:flex lg:justify-center lg:overflow-auto">
          <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
            <div>
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Get in Touch with Our Craftsmen
              </h3>
              <p className="mt-3">
                Contact us today to begin your journey toward owning a unique
                and beautifully crafted piece of furniture that perfectly suits
                your style and needs.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                      <option>US</option>
                      <option>ES</option>
                      <option>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full py-2 px-6 rounded-sm rounded-tl-xl bg-highlight text-text font-semibold hover:bg-yellow-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

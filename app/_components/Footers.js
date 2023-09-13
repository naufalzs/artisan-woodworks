"use client";
import React from "react";
import Link from "next/link";
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";

import data from "../_json/config.json";

export default function Footers() {
  const { footer } = data;

  return (
    <footer className="bg-white">
      <div className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <div className="font-extralight text-primary text-xl">
                Artisan Woodworks
              </div>
              <p className="leading-relaxed mt-2 text-[15px]">
                Crafting unique furniture pieces that bring your vision to life
                with precision and artistry.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block pt-4 pb-2">Stay up to date</label>
              <div className="max-w-sm flex items-center border rounded-md p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 outline-none"
                />
                <button className="py-2 px-6 rounded-sm rounded-tl-xl bg-highlight text-text font-semibold hover:bg-yellow-300">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="flex-1 mt-10 space-y-6 items-start justify-between sm:flex md:space-y-0 md:mt-0">
            {footer.navList.map((navGroup, idx) => (
              <ul className="space-y-4" key={idx}>
                <h4 className="text-text font-medium">{navGroup.label}</h4>
                {navGroup.items.map((nav, idx) => (
                  <li key={idx}>
                    <Link
                      href={nav.href || "/"}
                      className={`hover:underline hover:text-hover cursor-pointer ${
                        !nav.href && "text-neutral-300"
                      }`}
                    >
                      {nav.name}

                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; 2023 Artisan Woodworks All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="#">
                  <BiLogoInstagram className="w-6 h-6 text-hover" />
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="#">
                  <BiLogoFacebook className="w-6 h-6 text-hover" />
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="#">
                  <BiLogoTwitter className="w-6 h-6 text-hover" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

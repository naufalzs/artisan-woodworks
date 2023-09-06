"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import data from "../_json/config.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavMenuDesktop = ({ name, href, dropdown }) => {
  if (dropdown) {
    return (
      <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 hover:text-hover">
          {name}
          <ChevronDownIcon
            className="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[160px] overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-2">
              {dropdown.map((item) => (
                <div
                  key={item.name}
                  className="relative gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex-auto">
                    <a
                      href={item.href}
                      className="block font-semibold hover:text-hover"
                    >
                      {item.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  } else {
    return (
      <a
        href={href}
        className="text-sm font-semibold leading-6 hover:text-hover"
      >
        {name}
      </a>
    );
  }
};

const NavMenuMobile = ({ name, href, dropdown }) => {
  if (dropdown) {
    return (
      <Disclosure as="div" className="-mx-3">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              {name}
              <ChevronDownIcon
                className={classNames(
                  open ? "rotate-180" : "",
                  "h-5 w-5 flex-none"
                )}
                aria-hidden="true"
              />
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 space-y-2">
              {[...dropdown].map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  } else {
    return (
      <a
        href={href}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      >
        {name}
      </a>
    );
  }
};

export default function Header() {
  const { navigation } = data;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemsDesktop = navigation.map((item) => (
    <NavMenuDesktop
      key={item.name}
      name={item.name}
      href={item.href}
      dropdown={item.dropdown}
    />
  ));

  const navItemsMobile = navigation.map((item) => (
    <NavMenuMobile
      key={item.name}
      name={item.name}
      href={item.href}
      dropdown={item.dropdown}
    />
  ));
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1 className="font-extralight text-primary text-lg">
              Artisan Woodworks
            </h1>
          </a>
        </div>
        {/* mobile button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navItemsDesktop}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/contact-us"
            className="text-sm font-semibold leading-6 hover:text-hover"
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h1 className="font-extralight text-primary text-lg">
                Artisan Woodworks
              </h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">{navItemsMobile}</div>
              <div className="py-6">
                <a
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ContactUs() {
  const accessKey = process.env.WEB3FORM_ACCESS_KEY;

  const [buttonLoading, setButtonLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (submittedData) => {
    const modifiedData = {
      ...submittedData,
      subject: `${submittedData.name} sent a message from website`,
    };

    setButtonLoading(true);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(modifiedData, null, 2),
    }).then(async (res) => {
      let json = await res.json();
      if (json.success) {
        reset();
        toast.success("Thanks for contacting us!");
      } else {
        toast.error("Something went wrong, please try again");
      }
    });
    setButtonLoading(false);
  };

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
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <input
                  type="hidden"
                  value={accessKey}
                  {...register("access_key")}
                />
                <input
                  type="hidden"
                  value="Message from Contact Form"
                  {...register("from_name")}
                />
                <input
                  type="checkbox"
                  id=""
                  className="hidden"
                  style={{ display: "none" }}
                  {...register("botcheck")}
                ></input>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  {...register("name")}
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  {...register("email")}
                />
              </div>
              <div>
                <label className="font-medium">Phone number</label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                    <select
                      className="text-sm bg-transparent outline-none rounded-lg h-full"
                      {...register("country-code")}
                    >
                      <option value={"us"}>US</option>
                      <option value={"es"}>ES</option>
                      <option value={"mr"}>MR</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="+1 (555) 000-000"
                    required
                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                    {...register("phone-number")}
                  />
                </div>
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  {...register("message")}
                ></textarea>
              </div>
              <button
                className={`w-full py-2 px-6 rounded-sm rounded-tl-xl font-semibold ${
                  buttonLoading
                    ? "bg-gray-300 hover:bg-gray-300 text-gray-200"
                    : "bg-highlight text-text  hover:bg-yellow-300"
                }`}
                disabled={buttonLoading}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

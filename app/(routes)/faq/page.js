"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

import data from "../../_json/config.json";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.question}
        {state ? (
          <ChevronUpIcon className="h-5 w-5 text-gray-500 ml-2" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500 ml-2" />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faq() {
  const { faq } = data;

  return (
    <main className="bg-white">
      <div className="leading-relaxed max-w-screen-xl pt-12 pb-24 mx-auto px-4 md:px-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl  font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto text-lg">
            Discover answers to commonly asked questions about our custom
            furniture maker services to help you make informed decisions:
          </p>
        </div>
        <div className="mt-14 max-w-2xl mx-auto">
          {faq.list.map((item, idx) => (
            <FaqsCard key={idx} idx={idx} faqsList={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

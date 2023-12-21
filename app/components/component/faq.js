import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-amber-600`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-stone-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Est-ce un réel projet ?",
    answer: "Si vous tombez sur cette page par hasard, désolé de vous décevoir mais ce site est un pur projet scolaire.",
  },
  {
    question: "Non vraiment, c'est réellement un projet scolaire ?",
    answer: "Oui oui, fait en 4 jours à l'IIM, une école digitale basée en France.",
  },
  {
    question: "Vous êtes sûr ? Ça a vraiment l'air d'être un projet pro d'une grosse boîte quand même ?",
    answer:
      "Bon ça fait 3 fois là quand même.",
  },
  {
    question: "J'y crois pas, ça ressemble trop à un site pro.",
    answer:
      "Maxime comment on bloque l'adresse IP d'un mec stp",
  },
];

export default Faq;
import React, { useState } from "react";
import { faqData } from "./FaqData";
import { termosData } from "./termosData";
import { cookiesData } from "./cookiesData";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="text-xl font-semibold text-azul-paleta w-full text-left flex justify-between items-center"
        onClick={toggle}
      >
        <span>{question}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-700">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const [openStates, setOpenStates] = useState({});

  const toggleItem = (index) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <div className="p-8 m-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-azul-paleta">
            Perguntas Frequentes
          </h1>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                isOpen={openStates[index] || false}
                toggle={() => toggleItem(index)}
                {...item}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4 text-azul-paleta">
            Termos de Uso
          </h1>
          <div className="space-y-6">
            {termosData.map((item, index) => (
              <FAQItem
                key={faqData.length + index}
                isOpen={openStates[faqData.length + index] || false}
                toggle={() => toggleItem(faqData.length + index)}
                {...item}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4 text-azul-paleta">
            Cookies e Privacidade
          </h1>
          <div className="space-y-6">
            {cookiesData.map((item, index) => (
              <FAQItem
                key={faqData.length + termosData.length + index}
                isOpen={
                  openStates[faqData.length + termosData.length + index] ||
                  false
                }
                toggle={() =>
                  toggleItem(faqData.length + termosData.length + index)
                }
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

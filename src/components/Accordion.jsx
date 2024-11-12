import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-6 md:border-b-[0px] border-b-[1px] md:mt-2 md:bg-[#f8f9fa] rounded md:pt-0 pt-2 text-lg">
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className="flex justify-between w-full"
      >
        <div className=" flex justify-start w-full md:pl-8 md:pt-4 pt-2">
          <span className="font-medium text-headingColor tracking-normal">
            {title}
          </span>
        </div>
        <div className="px-4 pt-3 md:pt-6">
          {accordionOpen ? (
            <FaAngleDown color="red" />
          ) : (
            <FaAngleRight className="text-headingColor" />
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden md:mx-0 mx-1 md:text-start text-center md:pl-8">
          <span className="text-lg text-headingColor">{answer}</span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

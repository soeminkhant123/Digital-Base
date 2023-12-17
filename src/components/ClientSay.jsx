import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ClientSay() {
  return (
    <div className="w-[90%] mx-auto mt-[100px]">
      <div>
        <h1>WHAT OUR</h1>
        <h1>CLIENT SAY</h1>
      </div>
      <div className="mt-[70px]">
        <div className="w-[50%] mx-auto flex flex-col gap-[40px]">
          <div className="flex justify-between">
            <img src="src/assets/clientSay/“.png" alt="" />
            <div className="flex gap-[20px] text-xl text-gray-600">
              <FontAwesomeIcon icon={faArrowLeft} className="cursor-pointer" />
              <FontAwesomeIcon icon={faArrowRight} className="cursor-pointer" />
            </div>
          </div>
          <div className="text-center">
            <p>
              We consider Digital Base to be our business partners for our Elite
              Mandaly Website Redesign project. They really went above and
              beyond for us with high-quality user-interface design and business
              solution.
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img src="src/assets/clientSay/Ellipse 1.png" alt="" />
            <div>
              <h1>Ko Si Thu</h1>
              <p className="text-sm text-gray-600">
                CEO, Founder of the Elite Mandalay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSay;

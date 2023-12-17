import React, { useEffect } from "react";
import Packages from "../components/Packages";
import Industries from "../components/Industries";
import ClientSay from "../components/ClientSay";
import WorkFlow from "../components/WorkFlow";
import Sponsors from "../components/Sponsors";
import Contact from "../components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  useEffect(() => {
    const txts = document.querySelector(".animate-text").children,
      txtLen = txts.length,
      textInTimer = 3000,
      textOutTimer = 2350;
    let index = 0;

    function animationText() {
      for (let i = 0; i < txtLen; i++) {
        txts[i].classList.remove("text-in", "text-out");
      }

      txts[index].classList.add("text-in");

      setTimeout(function () {
        txts[index].classList.add("text-out");
      }, textOutTimer);

      setTimeout(function () {
        if (index == txtLen - 1) {
          index = 0;
        } else {
          index++;
        }
        animationText();
      }, textInTimer);
    }

    animationText();
  }, []);

  return (
    <div>
      <div className="banner w-[90%] h-[100vh] mx-auto flex justify-center items-start flex-col gap-[40px]">
        <div className="flex flex-col gap-[5px]">
          <div className="flex">
            <h1 className="text-7xl font-bold">WE</h1>
            <p className="animate-text inline overflow-hidden text-7xl pl-[15px]">
              <span className="text-blue-900">DESIGN</span>
              <span className="text-blue-900">DELIVER</span>
              <span className="text-blue-900">DEVELOP</span>
            </p>
          </div>
          <h1 className="text-7xl font-bold"> DELIGHTFUL DIGITAL</h1>
          <h1 className="text-7xl font-bold">PRODUCTS & EXPERIENCES</h1>
        </div>
        <div className="flex justify-between flex-wrap w-[100%]">
          <div>
            <h2 className="text-sm font-bold">BASE IN YANGON, MYANMAR</h2>
            <h2 className="text-sm font-bold"> WORKING WORLDWIDE</h2>
          </div>
          <p className="text-sm text-gray-500 w-[40%] small-text">
            Digital Base is an web development company that designs and develops
            e-commerce, business-optimized websites, web applications and mobile
            apps.
          </p>
        </div>
      </div>
      <div className="w-[100%]">
        <img src="src/assets/Rectangle 1.jpg" alt=" " className="w-[100%]" />
      </div>
      <div className="cms-package mx-auto flex flex-col gap-[50px] mt-[100px]">
        <div className="text-center flex flex-col gap-[20px]">
          <h1 className="text-3xl">Our CMS Website Packages</h1>
          <p className="text-sm w-[50%] mx-auto">
            These are our most popular website design and development packages.
            Every website is different so just send us a message and we can
            create something special for you.
          </p>
        </div>
        <Packages />
      </div>
      <div className="w-[90%] mx-auto mt-[100px]">
        <div className="relative mb-[100px]">
          <div className="absolute left-[30%] top-[-20px] bg-gray-200 w-[20px] h-[20px]"></div>
          <div className="relative text-center">
            <div className="absolute flex justify-end items-end left-[52.3%] top-[-7px] opacity-[0.5] w-[65px] h-[50px">
              <div className="bg-gray-300 w-[30px] h-[45px]"></div>
              <div className="bg-gray-300 w-[25px] h-[30px]"></div>
            </div>
            <h1 className="text-3xl">Our Workflow</h1>
            <p className="text-sm w-[600px] mx-auto mt-[20px]">
              A workflow process is a set of steps or tasks to complete a
              specific process or job within an organization
            </p>
          </div>
        </div>
        <WorkFlow />
      </div>
      <div className="w-[100%] p-4 mt-[100px] bg-black text-white flex justify-between">
        <div className="pl-[60px] pt-[50px]">
          <h1 className="text-3xl mb-[20px]">Who We Work With</h1>
          <p className="text-gray-600">
            We build digital products and services that establish new revenue
            channels and help brands thrive in the new economy.
          </p>
        </div>
        <div className="who-we-work flex gap-[20px] w-[70%] items-center">
          <div className="relative w-[300px] transform translate-x-[140px]">
            <img
              src="src/assets/Rectangle 21 (2).png"
              alt=""
              className="w-[100%]"
            />
            <img
              className="absolute bottom-[10px] left-[7%] w-[60%]"
              src="src/assets/Group 26 (2).png"
              alt=""
            />
          </div>
          <div className="relative w-[300px] transform translate-x-[70px]">
            <img
              src="src/assets/Rectangle 21 (1).png"
              alt=""
              className="w-[100%]"
            />
            <img
              className="absolute bottom-[10px] left-[7%] w-[60%]"
              src="src/assets/Group 26 (1).png"
              alt=""
            />
          </div>
          <div className="relative w-[300px]">
            <img
              src="src/assets/Rectangle 21.png"
              alt=""
              className="w-[100%]"
            />
            <img
              className="absolute bottom-[10px] left-[7%] w-[60%]"
              src="src/assets/Group 26.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Industries />
      <ClientSay />
      <Sponsors />
      <div className="w-[100%] bg-white">
        <div className="w-[90%] mx-auto mt-[100px] py-[100px]">
          <div className="w-[100%] text-sm">
            <h1 className="pb-[50px]">Shall We Chat?</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">
              Let's make something awesome together.
            </h1>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-2xl cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Home;

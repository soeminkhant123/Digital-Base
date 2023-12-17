import React from "react";

function Industries() {
  const industries = [
    {
      id: 1,
      icon: "src/assets/Industries/shop 1.png",
      text: "Startup Business",
    },
    {
      id: 2,
      icon: "src/assets/Industries/shop 1 (1).png",
      text: "Retail, Ecommerce",
    },
    {
      id: 3,
      icon: "src/assets/Industries/shop 1 (2).png",
      text: "Education & e-learning",
    },
    {
      id: 4,
      icon: "src/assets/Industries/shop 1 (3).png",
      text: "Healthcare & Fitness",
    },
    {
      id: 5,
      icon: "src/assets/Industries/shop 1 (4).png",
      text: "Travel & Hospitality",
    },
    {
      id: 6,
      icon: "src/assets/Industries/shop 1 (5).png",
      text: "Real Estate",
    },
    {
      id: 7,
      icon: "src/assets/Industries/shop 1 (6).png",
      text: "Logistics & Distribution",
    },
    {
      id: 8,
      icon: "src/assets/Industries/shop 1 (7).png",
      text: "Media & Entertainment",
    },
  ];

  return (
    <div className="w-[90%] mx-auto mt-[100px]">
      <div className="flex justify-center w-[100%] text-center">
        <div className="relative">
          <div className="absolute left-[80%] top-[-20px] bg-gray-300 w-[20px] h-[20px]"></div>
          <div className="absolute flex justify-end items-end left-[156px] top-[-9px] opacity-[0.7] w-[65px] h-[50px">
            <div className="bg-gray-300 w-[33px] h-[45px]"></div>
            <div className="bg-gray-300 w-[27px] h-[30px]"></div>
          </div>
          <h1 className="text-3xl">Industries We Serve</h1>
          <p className="text-sm w-[600px] mx-auto mt-[20px]">
            We help businesses across industries drive profitability and
            customer satisfaction.
          </p>
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="flex flex-wrap justify-center">
          {industries.map((i) => {
            return (
              <div
                key={i.id}
                className="w-[300px] py-10 px-[50px] border border-solid border-gray-600 flex flex-col justify-center items-center"
              >
                <img src={i.icon} alt="" />
                <h1>{i.text}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Industries;

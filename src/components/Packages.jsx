import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Packages() {
  const packages = [
    {
      id: 1,
      icon: "src/assets/Frame 139.png",
      name: "One Page Website",
      description: "Recommended For Portfolios",
      price: "240,000 MMK",
      features: [
        "Own Domain Name",
        "3 Business Emails",
        "5 Section Content",
        "Responsive Design (Mobile, Tablet, Laptop/PC)",
      ],
      bestSeller: false,
    },
    {
      id: 2,
      icon: "src/assets/singlePage.png",
      name: "SME Websites",
      description:
        "Recommended For Small & Medium Enterprise, Start Up Company",
      price: "590000 MMK",
      features: [
        "Own Domain Name",
        "5 Business Emails",
        "Up to 10 pages",
        "Responsive Design (Mobile, Tablet, Laptop/PC)",
      ],
      bestSeller: true,
    },
    {
      id: 3,
      icon: "src/assets/Frame 142.png",
      name: "E Commerce Websites",
      description: "Recommended For Online shops",
      price: "840000 MMK",
      features: [
        "Own Domain Name",
        "5 Business Emails",
        "Up to 10 pages",
        "Product Management",
        "Order Management",
        "Payment & Shipping",
        "Responsive Design (Mobile, Tablet, Laptop/PC)",
      ],
      bestSeller: true,
    },
    {
      id: 4,
      icon: "src/assets/icons8-learning-100 1.png",
      name: "Learning Managemnt System",
      description:
        "Recommended For Schools, online educations, online training",
      price: "1480000 MMK",
      features: [
        "Own Domain Name",
        "5 Business Emails",
        "Up to 10 pages",
        "Courses & Lessons",
        "Quizzes & Statistics",
        "Offine Payment",
        "Responsive Design (Mobile, Tablet, Laptop/PC)",
      ],
      bestSeller: false,
    },
  ];

  return (
    <div className="packages bg-red-600 flex gap-[10px] justify-center">
      {packages.map((p) => {
        return (
          <div
            key={p.id}
            className="relative bg-white px-8 py-6 rounded shadow-md w-[260px] text-center"
          >
            {p.bestSeller ? (
              <div className="w-[50px] absolute top-[-10px] right-[5%]">
                <img
                  className="w-[100%]"
                  src="src/assets/bestSeller.png"
                  alt=""
                />
              </div>
            ) : null}
            <img
              src={p.icon}
              alt="Product Icon"
              className="w-[70px] h-[70px] mx-auto mb-4"
            />
            <div className="name text-xl font-bold w-[100%] h-[60px]">
              {p.name}
            </div>
            <div className="text-sm text-gray-600 mb-4 h-[70px]">
              {p.description}
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-4">
              {p.price}
            </div>
            <ul className="list-disc text-sm text-left mb-4 w-[70%] mx-auto">
              {p.features.map((f) => {
                return <li>{f}</li>;
              })}
            </ul>
            <div className="py-[30px]"></div>
            <a
              href="#"
              className="absolute bottom-[14px] left-[14px] mx-auto w-[90%] bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900"
            >
              Learn More
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Packages;

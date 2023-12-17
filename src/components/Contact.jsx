import React from "react";

function Contact() {
  return (
    <div className="w-[90%] mx-auto py-[50px]">
      <div className="flex flex-wrap gap-[20px]">
        <div className="w-[250px]">
          <div className="flex items-center gap-[7px]">
            <img src="src/assets/Group.png" alt="" className="w-[30px]" />
            <h1>digital base</h1>
          </div>
        </div>
        <div className="w-[250px] flex flex-col gap-[10px] text-sm text-gray-600">
          <h1>
            No. 10(b), MTP Condo, Insein Street, Near Than Lan Bus Top, Hlaing
            Township, Yangon
          </h1>
          <h1>+959 775 999 680</h1>
          <h1>info@digitalbase.com.mm</h1>
        </div>
        <div className="w-[250px] justify-start items-start flex flex-col gap-[10px] text-sm text-gray-600">
          <h1 className="cursor-pointer nav pr-[10px]">CMS Website Packages</h1>
          <h1 className="cursor-pointer nav pr-[10px]">Enterprise Solutions</h1>
          <h1 className="cursor-pointer nav pr-[10px]">Software Development</h1>
          <h1 className="cursor-pointer nav pr-[10px]">UI/UX Solutions</h1>
          <h1 className="cursor-pointer nav pr-[10px]">About Us</h1>
          <h1 className="cursor-pointer nav pr-[10px]">Portfolios</h1>
        </div>
        <div className="w-[250px] flex justify-start items-start flex-col gap-[10px] text-sm text-gray-600">
          <h1 className="nav pr-[10px]">Facebook</h1>
          <h1 className="nav pr-[10px]">LinkedIn</h1>
        </div>
        <div>
          <button className="border border-black border-solid px-5 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="w-[100%] flex justify-between mt-[100px]">
        <p>© digitalBase 2023</p>
        <p>Back To Top</p>
      </div>
    </div>
  );
}

export default Contact;

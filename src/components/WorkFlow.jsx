import React from "react";

function WorkFlow() {
  return (
    <div className="work-flow w-[100%] mx-auto relative">
      <div className="relative py-6 px-8 left">
        <div className="relative px-2 bg-blue-300 rounded-md flex items-center">
          <div className="px-6 py-2 w-[90%] justify-center">
            <h1 className="text-center text-xl text-blue-700 pb-[10px]">
              Discover
            </h1>
            <p className="text-sm text-gray-600">
              In the discovery phase, the team identifies the needs and
              requirements of the software by gathering information from
              stakeholders, end-users, and market research.
            </p>
          </div>
          <div>
            <img src="src/assets/workFlow/Frame 314.png" alt="" />
          </div>
          <img
            src="src/assets/workFlow/Frame 242 (1).png"
            alt=" "
            className="black-ball w-[40px] absolute left-[102.7%] top-[40%] z-[1]"
          />
          <img
            src="src/assets/workFlow/Frame 242.png"
            alt=" "
            className="absolute black-ball left-[103.4%] top-[-40px] z-[1]"
          />
        </div>
      </div>
      <div className="relative py-6 px-8 right">
        <div className="relative px-2 bg-blue-300 rounded-md flex items-center">
          <div className="px-6 py-2 w-[90%]">
            <h1 className="text-center text-xl text-blue-700 pb-[10px]">
              Design
            </h1>
            <p className="text-sm text-gray-600">
              In the discovery phase, the team identifies the needs and
              requirements of the software by gathering information from
              stakeholders, end-users, and market research.
            </p>
          </div>
          <div>
            <img src="src/assets/workFlow/Frame 326.png" alt="" />
          </div>
          <img
            src="src/assets/workFlow/Frame 242 (2).png"
            alt=" "
            className="absolute w-[40px] right-[102%] top-[40%] z-[1]"
          />
        </div>
      </div>
      <div className="relative py-6 px-8 left">
        <div className="relative px-2 bg-blue-300 rounded-md flex items-center">
          <div className="px-6 py-2 w-[90%] justify-center">
            <h1 className="text-center text-xl text-blue-700 pb-[10px]">
              Develop
            </h1>
            <p className="text-sm text-gray-600">
              In the discovery phase, the team identifies the needs and
              requirements of the software by gathering information from
              stakeholders, end-users, and market research.
            </p>
          </div>
          <div>
            <img
              className="black-ball"
              src="src/assets/workFlow/Frame 328.png"
              alt=""
            />
          </div>
          <img
            src="src/assets/workFlow/Frame 242 (3).png"
            alt=" "
            className="absolute black-ball w-[40px] left-[102.7%] top-[40%] z-[1]"
          />
        </div>
      </div>
      <div className="relative py-6 px-8 right">
        <div className="relative px-2 bg-blue-300 rounded-md flex items-center">
          <div className="px-6 py-2 w-[90%] justify-center">
            <h1 className="text-center text-xl text-blue-700 pb-[10px]">
              Test
            </h1>
            <p className="text-sm text-gray-600">
              In the discovery phase, the team identifies the needs and
              requirements of the software by gathering information from
              stakeholders, end-users, and market research.
            </p>
          </div>
          <div>
            <img src="src/assets/workFlow/Frame 329.png" alt="" />
          </div>
          <img
            src="src/assets/workFlow/Frame 242 (4).png"
            alt=" "
            className="absolute black-ball w-[40px] right-[102%] top-[35px] z-[1]"
          />
        </div>
      </div>
      <div className="relative py-6 px-8 left">
        <div className="relative px-2 bg-blue-300 rounded-md flex items-center">
          <div className="px-6 py-2 w-[90%] justify-center">
            <h1 className="text-center text-xl text-blue-700 pb-[10px]">
              Deploy
            </h1>
            <p className="text-sm text-gray-600">
              In the discovery phase, the team identifies the needs and
              requirements of the software by gathering information from
              stakeholders, end-users, and market research.
            </p>
          </div>
          <div>
            <img src="src/assets/workFlow/Frame 330.png" alt="" />
          </div>
          <img
            src="src/assets/workFlow/Frame 242 (5).png"
            alt=" "
            className="absolute black-ball w-[40px] left-[102.7%] top-[35px] z-[1]"
          />
          <img
            src="src/assets/workFlow/Frame 242.png"
            alt=""
            className="black-ball absolute left-[103.4%] bottom-[-40px] z-[1]"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;

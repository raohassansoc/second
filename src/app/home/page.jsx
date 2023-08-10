"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/images/sec-log.svg";

const page = () => {
  return (
    <div className="bg-img ">
      <div className="flex items-center justify-between nav-bg w-[100%]">
        <div className="flex items-center">
          <div className="bg-white p-4 w-[50px]">
            <Image src={logo} />
          </div>
          <div className="text-white ml-5 text-xl">SKYLINE WEB</div>
        </div>
        <div className="text-white py-1 px-4 border mr-4 hover:opacity-[0.80]">
          Wallet Connect
        </div>
      </div>
      <div className="flex items-center justify-center h-[90%]">
        <h1 className="text-white text-5xl mt-80 px-32 text-center font-thin leading-[1.50]">
          SKYLINE WEB IS AN IMMERSIVE, NARRATIVE-DRIVEN, WEB3 EXPERIENCE
        </h1>
      </div>
    </div>
  );
};

export default page;

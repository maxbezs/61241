import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../public/arrow-black.svg";

const Card = () => {
  return (
    <div className="flex flex-col 2xl:items-end items-center xl:items-end 2xl:w-96 xl:w-80 sm:w-72 xl:border-none w-64 border border-[#B8BABF] rounded-3xl py-5 px-3 gap-6">
      <div className="flex flex-col gap-5 ">
        <Image
          className="rounded-2xl"
          alt=""
          src={"/card-img.png"}
          width={274}
          height={182}
        />
        <div className="px-3 gap-4 flex flex-col">
          <h3 className="font-sans">
            <b>$1</b> to <b>$2</b> /hour
          </h3>
          <p className="font-sans">
            Developers with little work experience up to 2 years, that have just
            completed courses/training and are full of enthusiasm and energy to
            perform various tasks.
          </p>
        </div>
      </div>
      <Link href={"#"} className=" font-bold font-sans flex items-center">
        Hire Now <Image alt="arrow" className="ms-[10px]" src={Arrow} />
      </Link>
    </div>
  );
};

export default Card;

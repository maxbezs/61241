import Image from "next/image";
import Back from "../public/back.jpg";
import Arrow from "../public/arrow.svg";
import Video from "./components/Video";
import Link from "next/link";
import Carousel from "./components/Carousel";
import Rating from "./components/Rating";

export default function Home() {
  return (
    <main className="text-black flex min-h-screen flex-col items-center justify-between w-full  -z-0">
      <div className="w-full">
        <div className="w-full">
          <Image
            src={Back}
            alt="Gradient Back"
            style={{
              height: "458px",
              width: "100vw",
              position: "absolute",
              zIndex: "-1",
            }}
          />

          <div className="w-full px-4 pt-24 xl:pt-[186px] xl:px-[78.5px]">
            <div className="w-full pb-7 gap-4 flex flex-col xl:flex-row xl:justify-between">
              <div>
                <div className="flex flex-col gap-4 ">
                  <h1 className="text-2xl sm:text-[28px] font-mono font-bold xl:leading-[120%]	 xl:text-[62px] xl:max-w-[632px] 2xl:text-[72px] 2xl:max-w-[680px]">
                    WE DEVELOPE ANYTHING WHAT YOU DESIRE
                  </h1>
                  <p className="text-base xl:text-[18px] xl:max-w-[510px] 2xl:text-[22px] 2xl:max-w-[681px] font-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum est mi, feugiat id velit vel, pharetra rhoncus
                    tellus.{" "}
                  </p>
                </div>
                <div className="xl:w-[394px] xl:h-[441px] xl:rounded-[32px] 2xl:h-[495px] 2xl:w-[435px] h-[353px] w-auto  rounded-3xl bg-black overflow-hidden xl:hidden my-4">
                  <Video />
                </div>
                <div>
                  <Link
                    href={"#"}
                    className="bg-[#EE5622] flex p-3 w-full justify-center rounded-full font-bold text-white items-center xl:w-fit xl:text-base xl:px-8 xl:mt-8 font-sans"
                  >
                    GET A FREE QUATE{" "}
                    <Image alt="arrow" className="ms-5" src={Arrow} />
                  </Link>
                  <Rating />
                </div>
              </div>
              <div className="xl:w-[394px] xl:h-[441px] xl:rounded-[32px] 2xl:h-[495px] 2xl:w-[435px] h-[353px] w-[343px]  rounded-3xl bg-black overflow-hidden xl:block hidden">
                <Video />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden ">
        <div className="my-8 mx-4 w-fit flex flex-col gap-8 xl:px-20 xl:pt-20 xl:gap-[60px] xl:pb-[28px] xl:m-0">
          <h2 className="font-bold text-2xl xl:text xl:text-[54px] font-mono">
            PRICING
          </h2>
          <p className="text-sm xl:text-base xl:max-w-[740px] font-sans">
            When it comes to financial services—be it insurance, wealth
            management, or lending—nothing can replace the personal touch.
            <br />
            Telemarketing provides a direct channel of communication with
            potential clients, allowing financial advisors to answer questions,
            address concerns, and cultivate trust.
            <br /> When it comes to financial services—be it insurance, wealth
            management, or lending—nothing can replace the personal touch.
          </p>
        </div>
        <Carousel />
      </div>
    </main>
  );
}

import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-semibold tracking-wide text-headingColor leading-[3rem] lg:leading-[5.5rem]">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left lg:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          blanditiis inventore maxime animi debitis, quas dolore consequatur
          placeat dolor recusandae tenetur distinctio, laudantium est numquam.
          Magnam iste reiciendis omnis laudantium cum, voluptatibus illo
          consectetur ipsa consequuntur quibusdam.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto h-420 w-full lg:w-auto lg:h-510"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-16 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                className="w-150 p-1 pb-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center"
                key={n.id}
              >
                <img
                  src={n.imageSrc}
                  alt="I1"
                  className="w-20 lg:w-32 -mt-10 lg:-mt-16"
                />
                <p className="text-base lg:text-lg mt-4 font-semibold text-textColor">
                  {n.name}
                </p>
                <p className="text-[12px] text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$ </span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;

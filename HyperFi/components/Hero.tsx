import React from "react";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import Shape1 from "@/public/assets/ecto.png";
const Hero = () => {
  return (
    <>
      <main className="relative flex flex-col  text-white align-middle my-16 z-50 ">
        <h2 className="font-DM_Sans text-[#ffffff99] my-10 mx-auto">
          WELCOME TO HyperFi
        </h2>
        <h1
          className={`text-8xl text-white mx-auto font-extrabold font-[Inter] ${styles.heading}`}
        >
          The Defi for
        </h1>
        <h1
          className={`text-8xl text-white mx-auto font-extrabold font-[Inter] ${styles.heading}`}
        >
          Everyone
        </h1>
        <p className="font-DM_Sans my-10  mx-auto w-[50%] text-[#ffffffaf] text-center">
        Welcome to HyperFi, designed to provide an easy and simple way for beginners to enter the world of decentralized finance. Our protocol offers a user-friendly interface that allows you to track your profits in real-time, making it easy to manage your investments.
        </p>
      </main>
      <div className="absolute z-1 h-10 bottom-52 -right-20">
        <Image src={Shape1} alt="hero" width={400} />
      </div>
    </>
  );
};

export default Hero;

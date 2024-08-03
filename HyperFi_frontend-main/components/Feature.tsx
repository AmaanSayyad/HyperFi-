import React from "react";
import Ecto from "@/public/assets/ecto.png";
import Sword from "@/public/assets/swordshield.png";
import Pestle from "@/public/assets/pestleandmortar.png";
import Card from "@/components/Cards/Card";

const Feature = () => {
  return (
    <div className="mt-5 ">
      <h1 className="font-extrabold font-Poppins text-4xl md:text-6xl text-center leading-[64px] text-white my-5 ">
      Features of HyperFi?
      </h1>
      <div className="flex flex-row justify-center flex-wrap px-10 mt-20 mb-12">
        <Card
          img={Sword}
          title={"Simplified DeFi Experience"}
          description={
            "HyperFi streamlines the complexities of decentralized finance (DeFi) into an intuitive platform, making it accessible to users of all levels of expertise."
          }
        />
        <Card
          img={Ecto}
          title={"Trivago of Exchanges"}
          description={
            "HyperFi acts as a Aggregator that scans all the Exchanges and provides the list of the APY's of all exchanges and lets the user decide in which exchange their money should be staked/ invested with a power index for each exchange."
          }
        />
        <Card
          img={Pestle}
          title={"Compunder Calculator"}
          description={
            "The Platform offers it users to calculate the growth of their investment for the duration."
          }
        />
        <Card
          img={Sword}
          title={"Yield Optimization Tools"}
          description={
            "HyperFi provides users with advanced tools and strategies to optimize their yield farming and liquidity mining activities, maximizing their returns on investment."
          }
        />
      </div>
    </div>
  );
};

export default Feature;

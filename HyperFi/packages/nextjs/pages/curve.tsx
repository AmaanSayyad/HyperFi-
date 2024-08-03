import React from "react";
import Head from "next/head";
import Image from "next/image";

import Footer from "@/components/Footer/Footer";
import ClaimNft from "@/components/Button/ClaimNft";
import Navbar1 from "@/components/Navbar/Navbar1";

import { Video3 } from "@/components/Livepeer";

function Docs() {
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);

  return (
    <>
      <Head>
        <title>Crypto DeFi Yield Strategies?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar1 />
      <div className="flex flex-col space-y-48 items-center justify-center mt-10 md:mt-24 p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            Crypto DeFi Yield Strategies?
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <p className="text-gray-400 leading-loose text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
              Whats crypto? Cryptocurrency, or crypto, is a digital form of
              currency secured by cryptography and operates on decentralized
              networks like blockchain, enabling secure peer-to-peer
              transactions without intermediaries.
            </p>
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer"
                // src={Ghost.src}
                src={curve1.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            Whats Blockchain?
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer rounded-2xl"
                // src={Ghost.src}
                src={curve2.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-gray-400 leading-loose text-left md:text-right w-full md:w-1/2 lg:w-1/3 text-xl p-4">
              Blockchain is a secure and transparent digital ledger technology
              that records transactions across multiple computers. It forms a
              chain of blocks, each containing cryptographic information linking
              it to the previous one.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            Whats Defi?
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <p className="text-gray-400 leading-loose text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
              DeFi, or Decentralized Finance, refers to a set of financial
              services and applications built on blockchain technology that aims
              to replace traditional financial intermediaries with smart
              contracts, allowing for permissionless and trustless transactions,
              lending, borrowing, and trading.
            </p>
            <div className="md:w-auto  flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer rounded-2xl"
                // src={Ghost.src}
                src={curve3.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center w-[80%] h-[550px] mx-auto mb-3 mt-36"
        onClick={onClick}
      >
        <Video3 />
      </div>
      <ClaimNft />
      <Footer />
    </>
  );
}

export default Docs;

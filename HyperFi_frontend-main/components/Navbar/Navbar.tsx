import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Saave from "@/public/assets/SAAVE.png";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  { name: "Learn", href: "#", current: true },
  { name: "Calculate", href: "https://hyeper-fi-calc-react-app.vercel.app/", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
  console.log("Class is ", classes);
}

export default function Example() {
  const router = useRouter();
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-Manrope py-2 mt-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="mx-6 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-rounded focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start mx-6`">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-12 w-auto lg:hidden cursor-pointer"
                    src={Saave.src}
                    alt="Your Company"
                    width={200}
                    height={100}
                    onClick={() => router.push("/")}
                  />
                  <Image
                    className="hidden h-12 w-auto lg:block cursor-pointer"
                    src={Saave.src}
                    alt="Your Company"
                    width={200}
                    height={100}
                    onClick={() => router.push("/")}
                  />
                  <div className="text-white text-xl font-extrabold">HyperFi</div>
                </div>

                <div className="hidden w-full sm:ml-6 sm:flex sm:items-center sm:justify-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <button
 onClick={async () => {
    try {
      // Fetch the user's IP address
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      const ipAddress = data.ip;

      // Check if the IP is from India
      const locationResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      const locationData = await locationResponse.json();
      const country = locationData.country_name;

      // Navigate based on the location
      if (country === 'India') {
        router.push("https://anonaadhaarverification.vercel.app/");
      } else {
        // Replace this URL with the alternative link for non-Indian users
        router.push("https://hyperfibackend.vercel.app");
      }
    } catch (error) {
      console.error("Failed to fetch IP address or location:", error);
      // Optionally, navigate to a default link in case of error
      router.push("https://anonaadhaarverification.vercel.app/");
    }
 }}
 className="bg-white hidden sm:block rounded-full w-48 text-base font-medium px-2"
>
 Invest &gt;
</button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Biography", href: "/projects" },
  { name: "Books", href: "/book" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[#e5e5e5]">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-75 text-[#14213d] hover:text-[#000000]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={10}
      />
      <h1 className="z-5git text-2xl text-transparent duration-75 bg-black cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-6xl whitespace-nowrap bg-clip-text ">
        DO TAIJ MOGUL
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right" />
      <div className="my-8 text-center animate-fade-in">
     <Image
      src="/hero_pic.jpg"
      width={800}
      height={600}
      className='rounded relative'
      alt="Picture of the author"
          />
      </div>

    </div>
  );

}

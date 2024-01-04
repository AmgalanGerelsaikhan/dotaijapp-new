import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Biography", href: "/projects" },
  { name: "Books", href: "/books" },
  { name: "News", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-zinc-700/0 via-zinc-700 to-zinc-700/0">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        DO TAIJ MOGUL
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
     {/* <Image
      src="/Author.png"
      width={300}
      height={30}
      alt="Picture of the author"
          /> */}
        <h2 className="text-sm text-zinc-500 ">
        I am a Mongolian author and Historian residing in Ukraine. Within my words, I invite you to unravel the lesser-known chapters of Chinggis Khan's early life, a period marked by the vibrant tapestry of Eurasian history. In this dynamic era, nomadic tribes grappled with formidable challenges amidst a shifting world where sedentary societies gained prominence. Join me on this literary journey to explore the compelling youth of ChinggisKhan, a time when the nomads navigated the complexities of a changing world with resilience and determination.
        </h2>
      </div>
    </div>
  );

}

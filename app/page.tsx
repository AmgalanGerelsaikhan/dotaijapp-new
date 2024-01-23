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
    <div className="flex flex-col gap-10 bg-[#e5e5e5]">
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base duration-75 text-[#14213d] hover:text-[#100f0f] hover:underline"
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
      <h1 className="z-3git text-2xl text-transparent duration-75 bg-black cursor-default text-edge-outline animate-title font-display sm:text-3xl md:text-6xl whitespace-nowrap bg-clip-text ">
        DO TAIJ MOGUL
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right" />
      <div className="my-8 text-center animate-fade-in">
     <Image
      src="/hero_author.jpg"
      width={800}
      height={600}
      className='rounded relative'
      alt="Picture of the author"
          />
      </div>

    </div>

      <div className="flex flex-col items-center animate-fade-in">

<h1 className="font-bold tracking-tight duration-80 text-[#14213d] hover:text-[#000000]
sm:text-3xl md:text-3xl">
          Heron's Way is now available on {" "}
          <Link
            target="_blank"
            href="https://www.amazon.com/Herons-Way-Adventures-Became-Chinggis-ebook/dp/B0CS6JRRYC/ref=sr_1_3?crid=30E00WFQOLEEZ&keywords=Heron%27s+way&qid=1705191079&refinements=p_n_feature_nine_browse-bin%3A3291437011&rnid=3291435011&s=books&sprefix=heron%27s+way%2Caps%2C277&sr=1-3"
            className="underline duration-500 hover:text-zinc-300"
          >
            Amazon. Get your Copy Today!
          </Link>
        </h1>

 
        <div className="aspect-w-16 aspect-h-9 relative xl:max-w-[1100px] md:w-[600px]">
  <iframe
    className=""
    width="100%" height="350"
    src="https://www.youtube.com/embed/qlS97wcqSTw" // Replace with your YouTube video embed URL
    title="Heron's Way on Sale Now!"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen data-gtm-yt-inspected-9="true"
  ></iframe>
</div>

             {/* Review Section */}
       <div className="bg-[#e1dede] text-[#14213d] px-20 my-5">
        <div className="text-sm mx-auto grid md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <blockquote className="mb-4">
              “Heron's Way" brings the story of a young boy who becomes the mighty Chinggis Khan to life. It's full of adventure and the spirit of ancient Mongolia, the grandeur of China's Tsin era, and the mysterious Tangut Empire. A great read for anyone who loves epic stories and learning about legendary figures. Simple yet gripping, it's an adventure that's sure to keep you turning pages!”
            </blockquote>
            <div className="flex items-center">
            <Image
      src="/eduard.png"
      width={32}
      height={32}
      className='relative rounded-full mr-4'
      alt="Picture of the author"
          />
              <div>
                <p className="font-bold">Eduard Ruban</p>
                <p>Honorary Consul of Mongolia in Ukraine</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <blockquote className="mb-4">
              “The book is simply wonderful. Read it, as they say, in one breath! Respect and admiration to the author.”
            </blockquote>
            <div className="flex items-center">
            <Image
      src="/sergey.png"
      width={32}
      height={32}
      className='relative rounded-full mr-4'
      alt="Sergiy Komisarov"
          />
              <div>
                <p className="font-bold">Sergiy Komisarov</p>
                <p>Chief editor of the Ukrpress-info news agency</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <blockquote className="mb-4">
              “An inspiring epic story that brings us around the world and tells us one of the most important principles in our lives.”
            </blockquote>
            <div className="flex items-center">
            <Image
      src="/jargalan.png"
      width={32}
      height={32}
      className='relative rounded-full mr-4'
      alt="Jargalan Gerelsaikhan"
          />
              <div>
                <p className="font-bold">Jargalan Gerelsaikhan</p>
                <p>Project Manager, PMI Mongolia</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>

  
  

    </div>

  );

}

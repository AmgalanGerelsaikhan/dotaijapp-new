import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import Image from "next/image";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "stupa")!;
  const top2 = allProjects.find((project) => project.slug === "geryurt")!;
  const top3 = allProjects.find((project) => project.slug === "highstorm")!;
  const top4 = allProjects.find((project) => project.slug === "heronsway-amazon")!;
  const top5 = allProjects.find((project) => project.slug === "secret_history")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug == top4.slug ||
        project.slug == top5.slug ,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
          Books
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
      <section className="w-auto text-[#14213d] h-full mt-5">
        <div className="max-w-1xl mx-auto lg:mx-0 py-3">
          <h2 className="text-2xl font-bold tracking-tight text-[#14213d] sm:text-3xl">
          Heron's Way : The Epic Adventures of the Boy Who Became Chinggis Khan
          </h2>
        </div>
              <div className="float-left mr-5">
                <Image
                  src="/book-herons-way.jpg"
                  alt="Heron's way Cover picture"
                  width={220}
                  height={100}
                  className="border-2 rounded-lg"
                />
              </div>
              <div className="text-justify">
                <h1 className="mt-4 text-[#14213d] py-4" >
                Dive into the captivating tale of "Heron's Way," where ancient Mongolia's mystique sets the stage. Follow Temujin, a scrawny boy bound by fate to become Chinggis Khan—the renowned, enigmatic leader. Marked by a birthmark, Temujin's journey from captivity to legendary leadership unfolds against a backdrop of nomadic tribes and shifting alliances. As a white falcon soars, it symbolizes power for these tribes. His escape from captors, his alliance with Tahir, an Arab merchant, and their journey along the Silk Road intricately weave his destiny. Mystical powers emerge, along with unexpected allies. On this journey, cultural diversity, spiritual quests, and the enigma of destiny converge. From a Taoist monastery to a Christian mission, Temujin evolves, embracing his extraordinary path. As the "saint" of Tangut Christians, his fate takes an unforeseen turn. Amidst rugged landscapes and historical tapestries, "Heron's Way" intertwines adventure, spirituality, and destiny. It's a mesmerizing saga that will captivate readers of historical fiction and young adult adventures alike.
              </h1>
              <Link href="https://www.youtube.com/watch?v=qlS97wcqSTw&t=12s" className="inline-block bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-black transition duration-300">Watch Trailer</Link>
               <Link href="https://www.amazon.com/Herons-Way-Adventures-Became-Chinggis/dp/B0CQNPLHCK/ref=sr_1_2?crid=2P2ZDJ7DGRYYD&keywords=Heron%27s+Way&qid=1704382719&refinements=p_n_feature_nine_browse-bin%3A3291437011&rnid=3291435011&s=books&sprefix=heron%27s+way%2Caps%2C309&sr=1-2" className="inline-block bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-black transition duration-300 ml-4">Buy</Link>
               </div> 
     
 </section>


 <section className="w-auto text-[#14213d] h-full mt-5">
        <div className="max-w-1xl mx-auto lg:mx-0 py-3">
          <h2 className="text-2xl font-bold tracking-tight text-[#14213d] sm:text-3xl">
          Secret History of Mongols
          </h2>
        </div>
              <div className="float-left mr-5">
                <Image
                  src="/book-secretHistory.jpg"
                  alt="Heron's way Cover picture"
                  width={220}
                  height={100}
                  className="border-2 rounded-lg"
                />
              </div>
              <div className="text-justify">
                <h1 className="mt-1 text-[#14213d]" >
                "The Secret History of the Mongols" is a monumental work that stands as a testament to the extraordinary dedication of Tsogtsaikhan Tsedensonom. For an entire decade, he tirelessly worked on the Ukrainian translation of this ancient manuscript. Within its pages, readers embark on an immersive exploration of the diverse facets of Mongolian culture, unveiling the intricacies of their language, the richness of their oral traditions, and the depth of their epic poetry. This ancient manuscript, akin to a time capsule, not only preserves the nomadic way of life but also offers profound insights into the Mongol legacy. Immerse yourself in the vibrant tapestry of Mongolian history, where the narrative unfolds across the vast Eurasian steppe, and the spirit of the nomadic heart beats fiercely. Discover the origins of a civilization that gave birth to the legendary Chinggis Khan, tracing the humble beginnings that would ultimately forge an empire stretching from the Pacific Ocean to the Mediterranean Sea. The book is a priceless window into the 13th-century Mongol world, capturing the essence of an era when warriors on horseback carved out one of the most formidable empires in history.
              </h1>
               
              <Link href="mailto:moguldotaij@gmail.com" className="inline-block bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-black transition duration-300">Buy</Link>
                </div>
 </section>
 </div>

 <div className="max-w-1xl mx-auto lg:mx-0">
          <h2 className="text-1xl font-bold tracking-tight text-[#14213d] sm:text-3xl">
          Related News
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-1">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-[#e5e5e5]" />
{ /*
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
*/}
      </div>
    </div>
  );
}

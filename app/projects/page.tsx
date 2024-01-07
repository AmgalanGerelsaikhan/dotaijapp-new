import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

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
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug,
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
          Biography
          </h2>
          <p className="mt-4 text-[#14213d]">
          I am an author and historian, dedicated to bringing historical narratives to life through my writings.
          </p>
        </div>
        <div className="w-full h-px bg-black" />

        <section id="authorInfo" className="">
              <div className="float-left mr-5">
                <img
                  src="/author.png"
                  alt="author picture"
                  className="border-2 rounded-lg w-72"
                />
              </div>
              <div className="text-justify">
                <h1 id="authorBio" className="mt-4 text-[#14213d]" >
                  Do Taij Mogul (Tsogtsaikhan Tsedensonom) a dedicated author, delves into the depths of the past to bring forgotten stories to life. His passion for history led him to translate the ancient Mongolian historical book, "Secret History of Mongols," into Ukrainian, a labor of love he completed in 2022. This project, inspired by the esteemed Ukrainian historian D.R. Dashkevich, underscores the text's vital role in understanding Ukraine's rich heritage.
              </h1>
                <p className="mt-4 text-[#14213d]">
                In his scholarly pursuits, Do Taij unearthed hidden facets of Chinggis Khan's youth during the 12th century. This profound research became the foundation for his debut work, "Heron’s Way," the inaugural installment( first ) in a series of gripping adventure novels. First Published by Summit Kniga in Ukraine under his pen name, Do Taij Mogul, the book illuminates the enigmatic years of the future Great Khan when he was known as Temujin. Now available in English and Ukraine languages.
                </p>
              
                <p className="py-3">Through meticulous research and captivating storytelling, Do Taij Mogul enriches our understanding of the past, weaving narratives that bridge cultures and eras. His literary contributions stand as a testament to the power of historical storytelling, connecting readers with the timeless echoes of bygone times.
                </p>
                </div>
 </section>

 <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[#14213d] sm:text-4xl">
          Author Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-[#14213d]">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[#14213d]">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-[#14213d] group-hover:text-black sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-[#14213d] group-hover:text-black">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-[#14213d] hover:text-black lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t text-[#14213d] lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
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

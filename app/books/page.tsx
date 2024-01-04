"use client";
import { Facebook, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

const socials = [
	{
		Image: "/book-herons-way.jpg",
		href: "https://www.amazon.com/Herons-Way-Adventures-Became-Chinggis/dp/B0CQNPLHCK/ref=sr_1_2?crid=3KYNC3QII64E7&keywords=Heron%27s+Way&qid=1704350260&refinements=p_n_feature_nine_browse-bin%3A3291437011&rnid=3291435011&s=books&sprefix=heron%27s+way%2Caps%2C360&sr=1-2",
		Description: "Dive into the captivating tale of 'Heron's Way' where ancient Mongolia's mystique sets the stage. Follow Temujin, a scrawny boy bound by fate to become Chinggis Khan—the renowned, enigmatic leader. Marked by a birthmark, Temujin's journey from captivity to legendary leadership unfolds against a backdrop of nomadic tribes and shifting alliances. As a white falcon soars, it symbolizes power for these tribes. His escape from captors, his alliance with Tahir, an Arab merchant, and their journey along the Silk Road intricately weave his destiny. Mystical powers emerge, along with unexpected allies. On this journey, cultural diversity, spiritual quests, and the enigma of destiny converge. From a Taoist monastery to a Christian mission, Temujin evolves, embracing his extraordinary path. As the 'saint' of Tangut Christians, his fate takes an unforeseen turn. Amidst rugged landscapes and historical tapestries, 'Heron's Way' intertwines adventure, spirituality, and destiny. It's a mesmerizing saga that will captivate readers of historical fiction and young adult adventures alike.",
		bookname: "Heron's Way",
    pagecount: 148,
    releasedate: '2023-12-15',
    trailer: "https://www.youtube.com/watch?v=qlS97wcqSTw"

	},
	{
		Image: "/book-secretHistory.jpg",
		href: "mailto:moguldotaij@gmail.com",
		Description: "The Secret History of the Mongols is a monumental work that stands as a testament to the extraordinary dedication of Tsogtsaikhan Tsedensonom. For an entire decade, he tirelessly worked on the Ukrainian translation of this ancient manuscript. Within its pages, readers embark on an immersive exploration of the diverse facets of Mongolian culture, unveiling the intricacies of their language, the richness of their oral traditions, and the depth of their epic poetry. This ancient manuscript, akin to a time capsule, not only preserves the nomadic way of life but also offers profound insights into the Mongol legacy. Immerse yourself in the vibrant tapestry of Mongolian history, where the narrative unfolds across the vast Eurasian steppe, and the spirit of the nomadic heart beats fiercely. Discover the origins of a civilization that gave birth to the legendary Chinggis Khan, tracing the humble beginnings that would ultimately forge an empire stretching from the Pacific Ocean to the Mediterranean Sea. The book is a priceless window into the 13th-century Mongol world, capturing the essence of an era when warriors on horseback carved out one of the most formidable empires in history.",
		bookname: "Secret History of Mongols",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-800/0 via-zinc-800 to-zinc-800/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-1 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.href}>
                                    <Link
                                      href={s.href}
                                      target="_blank"
                                      className="relative flex flex-col items-center gap-3 duration-700 group md:gap-4 md:py-24 lg:pb-48 md:p-16 py-3"
                                    >
                                      <span
                                        className="absolute w-px h-2/6 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                        aria-hidden="true"
                                      />
                                      <div className="relative flex items-center justify-center duration-1000 border text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                        {/* Render the image using the Next.js Image component */}
                                        <Image
                                          src={s.Image}
                                          alt={s.bookname}
                                          width={150}  // Adjust the width as needed
                                          height={80} // Adjust the height as needed
                                        />
                                      </div>{" "}
                                      <div className="flex flex-col items-center">
                                        <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                          {s.bookname}
                                        </span>
                                        <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                          {s.Description}
                                        </span>
                                        <button
                    type="button"
                    className="w-2/5 p-3 text-sm text-center rounded sm:w-1/3 text-zinc-400 hover:text-zinc-100 bg-zinc-700 hover:bg-zinc-500"
                  >
                    Buy
                  </button>
                                      </div>
                                    </Link>
                                  </Card>
					))}
				</div>
			</div>
		</div>
	);
}

"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
	const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
	return (
		<>
			<section className="relative grid min-h-screen overflow-hidden place-items-center">
				<div className="z-[1] relative flex flex-col items-center gap-4">
					<div
						className="relative block md:h-[117px] h-fit text-center transition-transform w-fit group overflow-hidden"
						onMouseOver={() => setIsHeadlineHovered(true)}
						onMouseOut={() => setIsHeadlineHovered(false)}
					>
						<h1 className="text-5xl font-black cursor-default md:text-7xl text-animate-up rotate-scale-text group-hover:-translate-y-full group-hover:opacity-0 w-fit">
							<span
								className="whitespace-pre"
								style={{
									// @ts-ignore
									"--index": 1,
								}}
							>
								Winter{" "}
							</span>
							<span
								className="whitespace-pre"
								style={{
									// @ts-ignore
									"--index": 2,
								}}
							>
								of{" "}
							</span>
							<span
								style={{
									// @ts-ignore
									"--index": 3,
								}}
							>
								Blockchain ❄️
							</span>
						</h1>
						<a
							href="https://twitter.com/intent/tweet?text=I'm%20ready%20to%20%23GetAnEdge%F0%9F%94%BA%20w%2F%20%40hyperedge_so%20%F0%9F%9A%80&url=http%3A%2F%2Fhyperedge.so%2F"
							target="_blank"
							rel="noreferrer"
							className="hidden font-black duration-75 opacity-0 cursor-pointer md:block text-7xl text-animate-up rotate-scale-text group-hover:-translate-y-full group-hover:opacity-100"
						>
							#GetAnEdge🔺
						</a>
					</div>
					<div className="mb-6 text-justify w-96">
						<p
							style={{
								// @ts-ignore
								"--delay": "1s",
							}}
							className="text-lg font-medium text-center text-zinc-400 fade-in"
						>
							Join us for a curated, exclusive{" "}
							<span className="font-bold text-zinc-300">
								blockchain
							</span>{" "}
							development experience. Coming soon.
						</p>
					</div>
					<div className="flex gap-4">
						<Link
							style={{
								// @ts-ignore
								"--delay": "1s",
							}}
							href="/"
							className="text-lg px-4 py-2 text-yellow-200 bg-yellow-900 rounded-sm bg-opacity-40 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
						>
							Back Home 🏠
						</Link>
					</div>
				</div>
				<div className="landing-overlay"></div>
				<Image
					alt="Winter of Blockchain"
					src="/images/wob-bg.png"
					placeholder="blur"
					blurDataURL="|77cT{Sg1Iay}YxF5+J8=eNuW;w{a|N]n%sUjtSM1cn*].oLACNb=d$iADjFo1X8Wor?oLS#S3ni=dW;EgjZ-AoLEgWV-AofWpaesUX8SMr?sUbbNbn%xFbHR+jZxFW;NbNHo1xZSMR*n%offkR*bGfQjajZa|bHj[n%ay"
					quality={100}
					fill
					sizes="100vw"
					className="z-[-1] select-none origin-center"
					priority
					style={{
						objectFit: "cover",
						transition: "transform 0.3s var(--easeOutExpo)",
						transform: isHeadlineHovered
							? "scale(1.03) rotate(-0.3deg)"
							: "scale(1)",
					}}
				/>
			</section>
			<footer className="absolute bottom-0 flex items-center justify-center w-full p-4 bg-gradient-to-b from-transparent to-black text-zinc-400">
				<a
					href="mailto:wob@hyperedge.so"
					className="font-medium transition-colors hover:underline hover:text-zinc-200"
				>
					wob@hyperedge.so
				</a>
				<span className="whitespace-pre text-zinc-600"> | </span>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://twitter.com/hyperedge_so"
					className="font-medium transition-colors hover:underline hover:text-zinc-200"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
					</svg>
				</a>
			</footer>
		</>
	);
}

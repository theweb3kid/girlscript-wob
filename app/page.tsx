"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
	const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
	const subtextArray = [
		{
			text: "Why do EdTech platforms only produce courses?",
		},
		{
			text: "Why is our Education System not community-driven?",
		},
		{
			text: "Where do you find Professional Network before entering the real professional world?",
		},
		{
			text: "How do you add real-world Work Experience to your resume?",
		},
		{
			text: "We are coming up with a web2.5 platform in Q1 of 2023 to bring community education into play #GetAnEdge 🔺",
		},
	];

	return (
		<>
			<section className="relative grid min-h-screen overflow-hidden place-items-center">
				<div className="z-[1] relative flex flex-col p-8 md:items-center items-start gap-4 max-w-[100vw] ">
					<div
						className="relative block overflow-hidden text-left transition-transform md:text-center h-fit group"
						onMouseOver={() => setIsHeadlineHovered(true)}
						onMouseOut={() => setIsHeadlineHovered(false)}
					>
						<div
							className="my-6 text-3xl font-black md:text-5xl text-zinc-50 fade-in"
							style={{
								// @ts-ignore
								"--delay": "1s",
							}}
						>
							<Typewriter
								options={{
									delay: 45,
									autoStart: true,
									cursor: "_",
								}}
								onInit={typewriter => {
									typewriter

										.typeString(subtextArray[0].text)

										.pauseFor(1000)
										.deleteAll(20)
										.typeString(subtextArray[1].text)
										.pauseFor(1000)
										.deleteAll(20)
										.typeString(subtextArray[2].text)
										.pauseFor(1000)
										.deleteAll(20)
										.typeString(subtextArray[3].text)
										.pauseFor(1000)
										.deleteAll(20)
										.typeString(subtextArray[4].text)
										.start();
								}}
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-4">
						<a
							href="https://form.waitlistpanda.com/go/1LTpRXz4nBUX26zZdIfO"
							target="_blank"
							rel="noreferrer"
							style={{
								// @ts-ignore
								"--delay": "1s",
							}}
							className="group grid place-items-center h-12 relative text-lg px-4 py-2 text-rose-100 bg-rose-800 rounded-sm bg-opacity-60 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
						>
							Join the hype
						</a>
						<Link
							style={{
								// @ts-ignore
								"--delay": "1.1s",
							}}
							href="/wob"
							className="text-lg px-4 py-2 text-yellow-200 border-2 bg-yellow-900 border-yellow-900 rounded-sm bg-opacity-20 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
						>
							Winter of Blockchain
						</Link>
					</div>
				</div>
				<div className="landing-overlay"></div>
				<Image
					alt="Hyperedge"
					src="/images/landing-bg.png"
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
			<footer className="fixed bottom-0 z-50 flex items-center justify-center w-full p-4 bg-gradient-to-b from-transparent to-black text-zinc-400">
				<a
					href="mailto:partnerships@hyperedge.so"
					className="font-medium transition-colors hover:underline hover:text-zinc-200"
				>
					partnerships@hyperedge.so
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

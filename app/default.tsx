"use client";

import Image from "next/image";
import {
	JSXElementConstructor,
	Key,
	ReactElement,
	ReactFragment,
	ReactPortal,
	useState,
} from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Default({
	// @ts-ignore
	text,
	bg = "/images/landing-bg.png",
	isEnd = false,
}) {
	const [isHeadlineHovered, setIsHeadlineHovered] = useState(false);
	return (
		<>
			<section className="relative grid min-h-screen overflow-hidden place-items-center">
				<div className="z-[1] relative flex flex-col p-24 md:items-center items-start gap-4 max-w-[100vw] ">
					<div
						className="relative block overflow-hidden transition-transform"
						onMouseOver={() => setIsHeadlineHovered(true)}
						onMouseOut={() => setIsHeadlineHovered(false)}
					>
						<h1 className="mx-auto text-lg font-medium text-center cursor-default text-zinc-300 md:text-xl rotate-scale-text w-fit">
							{text}
						</h1>
					</div>
					{isEnd && (
						<div className="flex flex-wrap gap-4 mt-4">
							<a
								href="mailto:partners@hyperedge.so"
								style={{
									// @ts-ignore
									"--delay": "1s",
								}}
								className="text-lg px-4 py-2 text-rose-100 bg-rose-800 rounded-sm bg-opacity-60 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
							>
								Partner up your brand 🤝
							</a>
							<Link
								style={{
									// @ts-ignore
									"--delay": "1.1s",
								}}
								href="/wob"
								className="text-lg px-4 py-2 text-yellow-200 bg-yellow-900 rounded-sm bg-opacity-40 backdrop-blur-lg transition-transform ease-[var(--easeOutExpo)] hover:scale-125 hover:-rotate-2 shadow-lg hover:z-10 fade-in"
							>
								Winter of Blockchain ❄️
							</Link>
						</div>
					)}
				</div>
				<div className="landing-overlay"></div>
				<Image
					alt="Hyperedge"
					src={bg}
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
		</>
	);
}

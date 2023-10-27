import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import useScrollPosition from "../utils/hooks";

const Navbar: NextPage = () => {
	const position = useScrollPosition();
	return (
		<>
			<header
				className={`fixed top-0 left-0 z-50 w-full transition-all duration-200 border-b ${
					position.y !== 0
						? `bg-red-900 bg-opacity-10 backdrop-blur-md border-zinc-900 border-opacity-20 backdrop-brightness-50 backdrop-saturate-200`
						: `border-transparent`
				}`}
			>
				<nav className="px-8 py-6">
					<Link href="/" className="flex items-center gap-4">
						<Image
							alt="GirlScript Logo"
							src="/images/logo.png"
							className="overflow-hidden rounded-lg"
							width={48}
							height={48}
						/>
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Navbar;

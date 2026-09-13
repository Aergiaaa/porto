import openLink, { GITHUB_LINK, EMAIL_LINK } from "../utils/utils"

export default function Hero() {
	return (
		<section id="hero" className="hero bg-base-100 py-16 px-6 md:py-20 md:px-8 lg:py-28 lg:px-12">
			<div className="hero-content w-full max-w-3xl justify-start text-left p-0">
				<div className="max-w-xl">
					<Greeting />
					<Role />
					<Summary />

					<Badge />
					<Buttons />
				</div>
			</div>
		</section>
	)
}

const Greeting = () => {
	return (
		<h1 className="font-jetb font-bold text-3xl md:text-4xl lg:text-5xl">
			Hi! I'm Muza
		</h1>
	)
}

const Role = () => {
	return (
		<p className="font-jetb mt-2 opacity-70 text-base md:text-lg">
			Backend Engineer
		</p>
	)
}

const Summary = () => {
	return (
		<p className="font-jetb leading-relaxed mt-4 opacity-80 text-sm md:text-base" >
			I build fast APIs and scalable systems. Loves tinkering every component until know what it is under
			the hood.
		</p>
	)
}

const badges = ["Golang", "React.js", "Postgres", "Docker", "Azure"] as const;
const Badge = () => {
	return (
		<div className="mt-6 flex flex-wrap gap-2">
			{badges.map((badge) => (
				<span key={badge} className="badge badge-outline font-jetb text-xs">
					{badge}
				</span>
			))}
		</div>
	)
}


const Buttons = () => {
	return (
		<div className="mt-8 flex flex-col gap-3 sm:flex-row">
			<button
				className="btn btn-primary font-jetb w-full sm:w-auto"
				onClick={() => openLink(GITHUB_LINK)}
			>
				View GitHub
			</button>
			<button
				className="btn btn-outline font-jetb w-full sm:w-auto"
				onClick={() => openLink(EMAIL_LINK)}
			>
				Email Me
			</button>
		</div>
	)
}

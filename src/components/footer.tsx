import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../utils/utils";

export default function Footer() {
	return (
		<footer className="footer font-jetb bg-base-200 border-t border-base-300 py-6 px-6 md:px-8 lg:px-12">
			<div className="flex flex-col items-center justify-between w-full max-w-5xl mx-auto gap-4">
				<p className="opacity-60">
					© 2026 Muza — Backend Engineer
				</p>
				<div className="flex gap-4">
					<a target="_blank" href={GITHUB_LINK} className="link link-hover opacity-60 hover:opacity-100">Github</a>
					<a href={EMAIL_LINK} className="link link-hover opacity-60 hover:opacity-100">Email</a>
					<a target="_blank" href={LINKEDIN_LINK} className="link link-hover opacity-60 hover:opacity-100">LinkedIn</a>
				</div>
			</div>
		</footer>
	)
}

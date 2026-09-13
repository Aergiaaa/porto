import { ProjectsData, type ProjectType } from "../data/projects"
import openLink from "../utils/utils"


export default function Projects() {
	return (
		<section id="projects" className="bg-base-100 px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-28">
			<div className="mx-auto max-w-5xl">
				<ProjectsHeader />

				<ProjectCards projects={ProjectsData} />
			</div>
		</section >
	)
}

const ProjectsHeader = () => {
	return (
		<>
			<h2 className="font-jetb text-2xl md:text-3xl font-bold">Projects</h2>
			<p className="font-jetb mt-2 text-sm opacity-70">Skills proven in work</p>
		</>
	)
}

type CardProps = {
	project: ProjectType
}

const Card = ({ project }: CardProps) => {
	return (
		<div key={project.title} className="card outline-base-content shadow-sm">
			<div className="card-body p-6">
				<h3 className="card-title font-jetb text-lg">{project.title}</h3>
				<p className="font-jetb text-sm opacity-80">{project.desc}</p>

				<div className="mt-4 flex flex-wrap gap-2">
					{project.stack.map((badge) => (
						<span key={badge} className="badge badge-soft font-jetb text-xs">{badge}</span>
					))}
				</div>

				<ul className="mt-4 list-disc ml-5 font-jetb text-xs opacity-80 space-y-1">
					{project.points.map((pt) => <li key={pt}>{pt}</li>)}
				</ul>

				<div className="card-actions justify-start mt-6">
					<button
						className="btn btn-sm btn-outline font-jetb"
						onClick={() => openLink(project.github)}
					>
						GitHub
					</button>
				</div>
			</div>
		</div>
	)
}

type ProjectsProps = {
	projects: readonly ProjectType[]
}

const ProjectCards = ({ projects }: ProjectsProps) => {
	return (
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{
				projects.map((p) => (
					<Card key={p.title} project={p} />
				))
			}
		</div>
	)
}

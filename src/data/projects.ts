export type ProjectType = {
  title: string;
  desc: string;
  stack: readonly string[];
  points: readonly string[];
  github: string;
  demo?: string;
};

export const ProjectsData: ProjectType[] = [
  {
    title: "Project One",
    desc: "Skeleton desc one",
    stack: ["Golang", "Postgres"] as const,
    points: ["Point A", "Point B"] as const,
    github: "#",
  },
  {
    title: "Project Two",
    desc: "Skeleton desc two",
    stack: ["React.js", "Docker"] as const,
    points: ["Point A", "Point B"] as const,
    github: "#",
  },
  {
    title: "Project Three",
    desc: "Skeleton desc three",
    stack: ["Azure", "Docker"] as const,
    points: ["Point A", "Point B"] as const,
    github: "#",
  },
] as const;

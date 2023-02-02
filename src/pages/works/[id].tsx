import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "../../../public/config";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  let currentProject;

  return (
    <section className="fullpage min-w-6xl mx-auto max-w-6xl font-mont">
      {projects
        .filter((project) => {
          return project.id === id;
        })
        .map((project) => (
          <div className="flex w-full flex-col gap-2">
            <h1 className="text-4xl">{project.title}</h1>
            <div className="flex gap-2">
              {project.techstack.map((tech) => (
                <span>#{tech}</span>
              ))}
            </div>
            <p>{project.description}</p>
            {/* replace with project description */}
            <div className="flex w-full gap-2">
              <Link
                href={project.githubLink}
                className="w-max rounded-xl bg-[#9FC0FF] px-4 py-2"
              >
                Source
              </Link>
              <Link
                href={project.previewLink}
                className="w-max rounded-xl bg-[#9FC0FF] px-4 py-2"
              >
                Demo
              </Link>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Project;

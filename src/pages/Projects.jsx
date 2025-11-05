import ProjectCard from "../components/ProjectCard";
import projects from "../projects";
export default function Projects() {
  return (
    <section className="px-8 py-16 text-center">
      <h3 className="text-3xl font-semibold mb-10">My Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {
          projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))
        }
      </div>
    </section>
  )
}

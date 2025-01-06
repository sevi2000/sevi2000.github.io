import { useState, useEffect } from "react";
import ProjectCard from "../components/Projectcard/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchJSONData() {
            try {
                const res = await fetch("https://raw.githubusercontent.com/sevi2000/sevi2000.github.io/main/projects.json");
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setProjects(data);
                console.log(data);
            } catch (error) {
                console.error("Unable to fetch data:", error);
            }
        }

        fetchJSONData();
    }, []);  // Empty dependency array ensures this runs only once

    console.log(projects);
    return (
        <div className="pt-20 text-center">
            <h1 className="text-2xl font-bold mb-8">Projects</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {projects.map((project) => (
                    <li key={project.name}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </div>
    );    
};

export default Projects;

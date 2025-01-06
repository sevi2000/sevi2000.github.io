import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './projectCard.css';
import { FaDownload, FaGithub, FaTag } from "react-icons/fa";
import ProjectLinks from "./ProjectLinks";

const ProjectCard = ({project}) => {

  async function checkLink(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.status === 404) {
            console.log(`${url} returned a 404 error.`);
            return false;
        } else {
            console.log(`${url} is reachable. Status: ${response.status}`);
            return true;
        }
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error);
        return false;
    }
}
const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        const validateImage = async () => {
            const valid = await checkLink(project.image);
            setIsValid(valid);
        };

        validateImage();
    }, [project.image]);





  
    return (
          <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-auto object-contain" src={isValid ? project.image : 'vite.svg'} alt={project.name} />
            <div className="px-4 py-2">
              <div className="font-bold text-lg mb-1">{project.name}</div>
              <p className="text-gray-700 text-sm">
                {project.description}
              </p>
            </div>
            <ProjectLinks project={project}></ProjectLinks>
          </div>
      );
      
        
};

export default ProjectCard;

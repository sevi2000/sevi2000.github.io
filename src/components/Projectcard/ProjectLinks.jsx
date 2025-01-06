import { FaGithub, FaDownload, FaTag } from "react-icons/fa";

const ProjectLinks = ({project}) => {

    const links = [
        {
            logo : <FaGithub className="mr-1"/>,
            text : "Repo",
            url  : project.repo_link
        },
        {
            logo : <FaDownload className="mr-1"/>,
            text : "Download", 
            url  : project.download_link
        },
        {
            logo : <FaTag className="mr-1"/>,
            text : "Release",
            url  : project.latest_release_link
        }
    ]

    return (
            <div className="px-4 pt-2 pb-2 flex justify-between">
                {links.map((link,index) => (
                    <a key={index} href={link.url} target="_blank" className="inline-block flex items-center bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1">
                        {link.logo} {link.text}
                    </a>
                ))}
            </div>        
            )
    };
    export default ProjectLinks;
export default function ProjectCard({ name, description, repo_link, image }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-teal-400/20 transition h-96 flex flex-col">
      <div className="flex justify-center items-center mb-4 h-40">
        <img
          className="max-h-full object-contain rounded-md"
          src={image}
          alt={name}
        />
      </div>
      <h4 className="text-xl font-bold mb-2">{name}</h4>
      <p className="text-gray-400 flex-grow">{description}</p>
      <a
        href={repo_link}
        target="_blank"
        className="text-teal-400 hover:underline mt-4"
        rel="noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}


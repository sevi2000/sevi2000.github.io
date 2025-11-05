
export default function PrrojectCard({ name, description, link }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-teal-400/20 transition">
      <h4 className="text-xl font-bold mb-2">{name}</h4>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        className="text-teal-400 hover:underline"
        rel="noreferrer"
      >
        View Project →
      </a>
    </div>
  );
}

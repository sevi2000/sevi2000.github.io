export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-teal-400">Sevi Dervishi</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-xl">
        A Full-Stack Software Engineer crafting modern web experiences with
        <span className="text-white">React</span> &{" "}
        <span className="text-white">Spring Boot</span>.
      </p>
      <a
        href="/projects"
        className="mt-8 px-6 py-3 border border-teal-400 rounded-lg text-teal-400 hover:bg-teal-400 hover:text-black transition"
      >
        View My Work
      </a>
    </section>
  );
}

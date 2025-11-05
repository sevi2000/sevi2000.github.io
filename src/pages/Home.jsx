import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-8 py-8 text-center">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I'm passionate about building scalable full-stack applications,
          blending elegant UI with solid backend logic. I love experimenting
          with modrn technologies like Docker, Firebase, and WebSockets.
        </p>
      </section>
    </>
  );
}

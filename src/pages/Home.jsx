import React from "react";
import "./pages.css"
import { AiFillDiscord, AiFillLinkedin, AiFillMessage } from "react-icons/ai";


const Home = () => {
  return (
    <section className="min-h-screen bg-white p-20 ">
      <h2 className="text-5xl py-2 text-teal-600 font-medium"> Sevi Dervishi</h2>
      <h3 className="text-2xl py-2"> Software Engineer</h3>
      <p className="text-md py-5 leading-8 text-gray-800">I bring a strong sense of initiative to my work, ensuring I can effectively
handle responsibilities independently. However, I equally prioritize
teamwork, recognizing that the best results come from leveraging the
strengths and ideas of a collaborative team.</p>
      <div className="text-5xl flex jsutify-center gap-16 py-3 text-gray-600">
       <a href="https://www.linkedin.com/in/sevi-dervishi-70a85723a/" target="_blank"> <AiFillLinkedin></AiFillLinkedin></a>
        <a href="mailto:sevidervishi@outlook.fr"><AiFillMessage></AiFillMessage></a>
        <a href="https://discord.com/users/630414400620068877" target="_blank"><AiFillDiscord></AiFillDiscord></a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
        <img src="/images/profil.jpeg"/>
      </div>
    </section> 
  );
};

export default Home;
import React from "react";
import "./pages.css"
import { AiFillBook, AiFillDiscord, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import profile from '../../public/images/profil.jpeg'
import { FaGitAlt, FaJava, FaLinux, FaPython, FaTools } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";


const About = () => {
  return (
    <section class="bg-gray-100 py-20">
  <div class="max-w-6xl mx-auto px-6">
    
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Skills & Education</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-semibold mb-4 text-gray-700">Skills</h3>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span class="text-blue-500 mr-3">
              <FaJava></FaJava>
            </span>
            <span>Java</span>
          </li>
          <li class="flex items-center">
            <span class="text-blue-500 mr-3">
              <DiPostgresql></DiPostgresql>
            </span>
            <span>PostgresSQL</span>
          </li>
          <li class="flex items-center">
            <span class="text-blue-500 mr-3"><FaPython></FaPython></span>
            <span>Python</span>
          </li>
          <li class="flex items-center">
            <span class="text-blue-500 mr-3">
              <FaGitAlt></FaGitAlt>
            </span>
            <span>Git, GitHub, CI/CD</span>
          </li>
          <li class="flex items-center">
            <span class="text-blue-500 mr-3">
              <FaLinux></FaLinux>
            </span>
            <span>Linux, Bash</span>
          </li>
        </ul>
      </div>

      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-semibold mb-4 text-gray-700">Education</h3>
        <ul class="space-y-4">
          <li>
            <div class="text-lg font-medium text-gray-800">Computer Science Master's Degree</div>
            <div class="text-sm text-gray-600">Université Paris Cité, 2022-2024</div>
          </li>
          <li>
            <div class="text-lg font-medium text-gray-800">Bachelor of Science in Computer Science</div>
          <div class="text-sm text-gray-600">Université Paris Cité, 2019-2022</div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

  );
};

export default About;
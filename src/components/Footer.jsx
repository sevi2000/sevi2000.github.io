import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-center border-t border-gray-800">
      <div className="flex justify-center gap-6 mb-4">
        <a href="mailto:sevidervishi@outlook.fr" className="hover:text-teal-400">
          <Mail />
        </a>
        <a href="https://github.com/sevi2000" className="hover:text-teal-400">
          <Github />
        </a>
        <a href="https://linkedin.com/in/sevi-dervishi" className="hover:text-teal-400">
          <Linkedin />
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Sevi Dervishi. All rights reserved.
      </p>
    </footer>
  );
}

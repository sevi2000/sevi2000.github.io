import { FaEnvelope, FaLinkedinIn, FaPhone } from "react-icons/fa";
import "./pages.css"
import { FaMapLocation } from "react-icons/fa6";
import { getOS } from "../services/utils";
const Contact = () => {
    console.log("OS: ",getOS())
    return (
        <>
        <div className="pt-20 text-center">
            <h1 className="text-4xl font-bold">Contact</h1>
        </div>
        <p className="text-gray-500 mt-4">Feel free to reach me out </p>
        <div className="flex items-centerflex space-x-4">
            <a href="mailto:sevidervishi@outlook.fr" className="display flex"><FaEnvelope/> sevidervishi@outlook.fr</a>
            <a className="display flex"><FaPhone></FaPhone>Tel +33 6 43 08 94 32</a>
            <a href="https://www.linkedin.com/in/sevi-dervishi-70a85723a/" target="_blank" className="display flex"><FaLinkedinIn></FaLinkedinIn>LinkedIn</a>
        </div>
</>
    );
}

export default Contact;
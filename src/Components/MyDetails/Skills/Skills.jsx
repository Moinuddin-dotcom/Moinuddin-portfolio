import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaCloud } from "react-icons/fa";
// import { DiMongodb, DiVite, DiWordpress } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiFirebase } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons'; // Import WordPress icon


const Skills = () => {
    return (
        <div className="max-w-[80vw] mx-auto py-16">
            <div className="flex justify-center">
                <span className=" mt-10 text-2xl font-semibold border-purple-950/85 border-t-2 border-b-2 p-1.5 px-20 rounded-lg shadow-2xl shadow-amber-200">
                    Sk<span className="text-blue-500">ills</span><span className="text-3xl">💪</span></span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {/* Frontend Skills */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center text-blue-500">Frontend</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FaHtml5 className="text-orange-500 text-4xl mb-2" />
                            <span className="text-gray-700">HTML</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FaCss3Alt className="text-blue-500 text-4xl mb-2" />
                            <span className="text-gray-700">CSS</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <SiTailwindcss className="text-cyan-400 text-4xl mb-2" />
                            <span className="text-gray-700">Tailwind CSS</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FaJs className="text-yellow-500 text-4xl mb-2" />
                            <span className="text-gray-700">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FaReact className="text-blue-400 text-4xl mb-2" />
                            <span className="text-gray-700">React.js</span>
                        </div>
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center text-green-500">Backend</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FaNodeJs className="text-green-600 text-4xl mb-2" />
                            <span className="text-gray-700">Node.js</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <SiExpress className="text-gray-800 text-4xl mb-2" />
                            <span className="text-gray-700">Express.js</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" className="text-green-700 text-4xl mb-2 h-12" />
                        </div>
                    </div>
                </div>

                {/* Tools Section */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center text-purple-500">Tools</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FaGithub className="text-gray-800 text-4xl mb-2" />
                            <span className="text-gray-700">GitHub</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <SiFirebase className="text-orange-500 text-4xl mb-2" />
                            <span className="text-gray-700">Firebase</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FaCloud className="text-black text-4xl mb-2" />
                            <span className="text-gray-700">Vercel</span>
                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <img src="https://vitejs.dev/logo.svg" alt="Vite" className="text-indigo-500 text-4xl mb-2 h-12" />
                            <span className="text-gray-700">Vite</span>
                         

                        </div>
                        <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
                            <FontAwesomeIcon icon={faWordpress} className="text-blue-600 text-4xl mb-2" />
                            <span className="text-gray-700">WordPress</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

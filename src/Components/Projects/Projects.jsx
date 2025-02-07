
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const projectsData = async () => {
        const data = await fetch('MyWork.json')
        const res = await data.json()
        setProjects(res)
        console.log(res)
    }
    useEffect(() => {
        projectsData()
    }, [])

    const MotionCard = ({ children }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="shadow-2xl shadow-amber-300 border-2 border-amber-300 rounded-xl"
        >
            {children}
        </motion.div>
    );

    return (
        <div className="my-20 ">
            <div className="flex justify-center">
                <span className=" mt-10 text-2xl font-semibold border-purple-950/85 border-t-2 border-b-2 p-1.5 px-20 rounded-lg shadow-2xl shadow-amber-200">
                    My <span className="text-blue-500">Projects</span><span className="text-3xl"></span></span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[80vw] mx-auto my-10">
                {
                    projects.map(project =>
                        <MotionCard key={project.id}>
                            <div className="bg-purple-900/45 rounded-xl shadow-lg overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={project.projectImage}
                                    alt="Project 1"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white">{project.projectName}</h3>
                                    <Button className="text-white mt-2 p-0.5">{project.mainTechnologyStack.join(" | ")}</Button>
                                    <Link to={`/project-details/${project.id}`}>
                                        <button className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                                            View More / Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </MotionCard>
                    )
                }

            </div>
        </div>
    );
};

export default Projects;



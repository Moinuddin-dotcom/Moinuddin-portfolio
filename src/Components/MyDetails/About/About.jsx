import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaGamepad, FaMountain, FaSwimmer } from "react-icons/fa";

const About = () => {


    const MotionCard = ({ children, className }) => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`w-full shadow-fuchsia-900 max-w-3xl mb-6 ${className}`}
            >
                {children}
            </motion.div>
        )
    };


    return (
        <div >
            <div className="flex justify-center">
                <span className=" mt-10 text-2xl font-semibold border-purple-950/85 border-t-2 border-b-2 p-1.5 px-20 rounded-lg shadow-2xl shadow-amber-200">
                    Who <span className="text-blue-500">I am</span><span className="text-3xl">❓</span></span>
            </div>

            <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                <MotionCard className="bg-purple-950 text-white shadow-lg hover:shadow-xl">
                    <Card className="shadow-lg hover:shadow-xl p-6 rounded-xl bg-yellow-300">
                        <CardContent>
                            <Typography variant="h5" className="font-semibold text-gray-800">
                                Hey there! 👋
                            </Typography>
                            <Typography className="text-gray-600 mt-2">
                                A passionate <strong>Full Stack Developer</strong> who started coding in <strong>2023</strong>.
                                The journey began with learning from <strong>CodeWithHarry</strong>, followed by structured learning
                                at <strong>Programming Hero</strong> for six months.
                            </Typography>
                        </CardContent>
                    </Card>
                </MotionCard>

                {/* Tech Stack Section */}
                <MotionCard className="bg-purple-950 text-white shadow-lg hover:shadow-xl">
                    <Card className="shadow-lg hover:shadow-xl p-6 rounded-xl bg-white">
                        <CardContent>
                            <Typography variant="h5" className="font-semibold text-gray-800">
                                🚀 Technologies Used:
                            </Typography>
                            <Typography className="text-gray-600 mt-2">
                                <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript, React.js <br />
                                <strong>Backend:</strong> Node.js, Express.js, Firebase <br />
                                <strong>Other Tools:</strong> Vercel, Stripe, and more
                            </Typography>
                        </CardContent>
                    </Card>
                </MotionCard>

                {/* What I Love Doing */}
                <MotionCard className="bg-purple-950 text-white shadow-lg hover:shadow-xl">
                    <Card className="shadow-lg hover:shadow-xl p-6 rounded-xl bg-white">
                        <CardContent>
                            <Typography variant="h5" className="font-semibold text-gray-800">
                                💡 What I Love Doing:
                            </Typography>
                            <Typography className="text-gray-600 mt-2">
                                Enjoy solving real-world problems, building interactive applications, and learning new technologies.
                                While problem-solving skills are still improving, the journey of learning never stops! 💪
                            </Typography>
                        </CardContent>
                    </Card>
                </MotionCard>

                {/* Hobbies */}
                <MotionCard className=" text-white shadow-lg hover:shadow-xl">
                    <Card className="shadow-lg hover:shadow-xl p-6 rounded-xl bg-white">
                        <CardContent>
                            <Typography variant="h5" className="font-semibold text-gray-800">
                                🎯 Beyond Coding:
                            </Typography>
                            <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-xl shadow-md">
                                    <FaGamepad className="text-blue-500" />
                                    <span>Playing Cricket</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-xl shadow-md">
                                    <FaMountain className="text-green-500" />
                                    <span>Hill Trekking</span>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-200 px-3 py-2 rounded-xl shadow-md">
                                    <FaSwimmer className="text-blue-600" />
                                    <span>Scuba Diving</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </MotionCard>
            </div>
        </div>
    )
}

export default About

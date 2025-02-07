import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* Experience Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }} // Pop-out effect on hover
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full max-w-3xl mb-6"
            >
                <div className="shadow-lg hover:shadow-xl p-6 rounded-xl bg-purple-950/55 text-white">
                    <div className="flex justify-center">
                        <span className=" mt-10 text-2xl font-semibold border-purple-950/85 border-t-2 border-b-2 p-1.5 px-20 rounded-lg shadow-2xl shadow-amber-200">
                            Exper<span className="text-blue-500">ience </span><span className="text-3xl">🎓</span></span>
                    </div>

                    <div className="mt-6">
                        {/* Assistant Manager Experience */}
                        <div>
                            <h3 className="font-semibold text-xl text-gray-100">🏢 ASSISTANT MANAGER, ADMIN & MODERN FACILITY</h3>
                            <p className="text-gray-200">
                                <strong>SCARLETT MANAGEMENT SERVICES UNDER ROBI AXIATA LIMITED, CHITTAGONG</strong>
                            </p>
                            <p className="text-gray-400">7th April 2021 - Present</p>
                            <ul className="mt-4 text-gray-200 list-disc pl-6">
                                <li>Managing facilities and services for over 35 people, ensuring all their daily needs are met.</li>
                                <li>Overseeing operations across 32 office locations, offering support for office maintenance and petty cash management.</li>
                                <li>Estate management and transport schedule/overall management.</li>
                                <li>Managing official duties such as office stationery, grocery management, and vendor relationships.</li>
                            </ul>
                        </div>

                        {/* Customer Service Officer Experience */}
                        <div className="mt-8">
                            <h3 className="font-semibold text-xl text-gray-100">📞 CSO-CUSTOMER SERVICE OFFICER</h3>
                            <p className="text-gray-200">
                                <strong>GENEX INFOSYS LIMITED UNDER BANGLALINK LTD.</strong>
                            </p>
                            <p className="text-gray-400">September 2019 - November 2020</p>
                            <ul className="mt-4 text-gray-200 list-disc pl-6">
                                <li>Solving customer problems and addressing their inquiries.</li>
                                <li>Attracting potential customers by offering detailed product and service information.</li>
                                <li>Clarifying customer complaints and finding the best solutions to resolve issues.</li>
                                <li>Following up to ensure complete customer satisfaction and issue resolution.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;

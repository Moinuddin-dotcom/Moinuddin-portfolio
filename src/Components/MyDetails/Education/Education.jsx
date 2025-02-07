import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const Education = () => {

    const MotionCard = ({ children }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }} // Pop-out effect on hover
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-3xl mb-6"
        >
            {children}
        </motion.div>
    );
    MotionCard.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <div className="min-h-screen">
            <div className="flex justify-center">
                <span className=" mt-10 text-2xl font-semibold border-purple-950/85 border-t-2 border-b-2 p-1.5 px-20 rounded-lg shadow-2xl shadow-amber-200">
                    Educational <span className="text-blue-500">qualification</span><span className="text-3xl">🎓</span></span>
            </div>
            <div className="flex flex-col items-center justify-center my-10 p-6">
                {/* Education Section */}

                <MotionCard>
                    <Card className="shadow-lg hover:shadow-xl p-6 rounded-xl bg-blue-500 text-white">
                        <CardContent>
                            <Typography variant="h7" className="font-semibold mt-4 text-gray-900">
                                🎓 Graduation: 
                            </Typography>
                            <Typography className="text-gray-900 mt-2">
                                Bachelor of Business Studies (BBS) in Accounting from <strong>Govt. City College</strong>.
                            </Typography>

                            <Typography variant="h7" className="font-semibold mt-4 text-gray-900">
                                📚 Currently Pursuing: 
                            </Typography>
                            <Typography className="text-gray-900 mt-2">
                                Master's in Accounting (currently enrolled).
                            </Typography>
                        </CardContent>
                    </Card>
                </MotionCard>
            </div>
        </div>
    );
};

export default Education;

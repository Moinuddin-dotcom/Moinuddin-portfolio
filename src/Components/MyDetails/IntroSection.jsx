import { DockTwoTone } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion"

const IntroSection = () => {
    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  return (
    <div className="bg-purple-950/25 grid grid-cols-1 md:grid-cols-2 justify-between px-10 gap-4">
      <div className="self-center">
        <div className="">
          <div className="mb-8 text-center md:text-start">
            <span className="border-2 rounded-3xl border-purple-950 px-2 py-2 ">

              <DockTwoTone className="" /> Welcome to my profile
            </span>
          </div>
          <p className="text-4xl lg:text-6xl font-semibold">
            Hello! 👋
          </p>
          <p className="text-4xl lg:text-6xl font-semibold">I am <motion.span
            className="text-4xl lg:text-6xl font-semibold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Moves the gradient from left to right
            }}
            transition={{
              duration: 3, // Time for one cycle
              ease: "linear",
              repeat: Infinity, // Infinite loop
            }}
            style={{
              backgroundSize: "200% 200%", // Ensures smooth movement
            }}
          >Md. MoinUddin Chowdhury</motion.span> </p>
        </div>
        <div className="text-start border-2 bg-blue-950/55 mt-5 px-2 py-2 rounded-xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{
              opacity: { duration: 4, repeat: Infinity, repeatType: "reverse" },
            }}
          >
            <h1 className="text-xl font-semibold underline">

              I am a Full Stack Developer
            </h1>
          </motion.h1>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{
              opacity: { duration: 4, delay: 4, repeat: Infinity, repeatType: "reverse" },
            }}
          >
            <h1 className="text-xl font-semibold underline">

              Learning Next.js
            </h1>
          </motion.h1>
        </div>
        <div className="mt-8">
          <Stack spacing={2} direction="row">
            {/* <Button variant="text">Text</Button> */}
            <Button variant="contained" className="px-5 py-10">Learn more</Button>
            <Button variant="outlined" className="px-5 py-10">Get Resume</Button>
          </Stack>
        </div>
      </div>
      <div className="flex justify-end" >
        <motion.img
          src="https://i.ibb.co.com/3Y4dcbRG/Moin-Uddin.jpg"
          alt=""
          className=" lg:h-[500px] rounded-3xl"

        />
      </div>
    </div>
  )
}

export default IntroSection

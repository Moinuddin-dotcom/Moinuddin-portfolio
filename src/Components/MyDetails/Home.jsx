// import Contact from "./Contact"
import Projects from "../Projects/Projects"
import About from "./About/About"
import Contact from "./Contact"
import Education from "./Education/Education"
// import Experience from "./Experience/Experience"
import ExperienceForHomeSec from "./Experience/ExperienceForHomeSec"
import IntroSection from "./IntroSection"
import Skills from "./Skills/Skills"
import SocialLinks from "./SocialLinks"

const Home = () => {
  return (
    <>
      <IntroSection />
      <div>
        <SocialLinks />
        <About />
        <Skills />
        <Education />
        <ExperienceForHomeSec />
        <Projects />

        <Contact />
      </div>
    </>

  )
}

export default Home


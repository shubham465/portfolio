import { Container } from "./styles"
import { motion } from "framer-motion"

import Illustration from "../../assets/illustration.svg"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
}

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0 }}
        >
          Hello <img src={Hello} alt="Hello" width="20px"/>, I'm
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shubham Khot
        </motion.h1>
        <motion.h3
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Software Developer
        </motion.h3>
        <motion.p
          className="small-resume"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          2 Years Experience
        </motion.p>
        <motion.button
          variants={fadeInUp}
          className="btn-grad"
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact">Contact</a>
        </motion.button>
         
        {/* <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact" className="button">Contact</a>
        </motion.div> */}
        <motion.div
          className="social-media"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/shubham-khot-87398520a"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/shubham465"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B917987306501&text=Hello+Shubham+I+found+your+contact+through+portfolio+site.%0A%0A"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
        </motion.div>
      </div>
      <div className="hero-image">
        <motion.img
          src={Illustration}
          alt="Ilustração"
          variants={fadeInRight}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 1 }}
        />
      </div>
    </Container>
  )
}
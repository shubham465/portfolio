import { Container } from "./styles";
import ShubhamKhot from "../../assets/ShubhamKhot.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import { motion } from "framer-motion";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Hi there! I'm Shubham, Passionate UI Developer with 2 years of
          hands-on experience specializing in MERN, ReactJS, JavaScript,
          TypeScript, and UI development. Adept at building scalable,
          high-performance applications with a focus on clean, maintainable code
          and user-centric designs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Skilled in Agile methodologies, unit testing, and microservices-based
          architectures, with a proven ability to collaborate across
          cross-functional teams.
        </motion.p>
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            Here are my main skills:
          </motion.h3>
          <div className="hard-skills">
            {[
              jsIcon,
              reactIcon,
              typescriptIcon,
              htmlIcon,
              cssIcon
            ].map((icon, i) => (
              <motion.div
                className="hability"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.01,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <img src={icon} alt="skill" />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
          viewport={{ once: true }}
          className="experience"
        >
          <h3>Experience:</h3>
          <div className="experience-list">
            {[
              {
                title: "Software Development Engineer",
                org: "Clover Bay Technologies Pvt Ltd",
                location: "Bangalore, India",
              },
              {
                title: "Software Engineer",
                org: "Reckonsys",
                location: "Bangalore, India",
              },
              {
                title: "Software Engineer",
                org: "Replicon",
                location: "Bangalore, India",
              },
            ].map((item) => (
              <div className="experience-item" key={item.org}>
                <h4 style={{fontSize: "20px"}}>{item.title}</h4>
                <p>{item.org}</p>
                <p>{item.location}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="education"
        >
          <h3>Education:</h3>
          <h4>Bachelor of Technology (BTech)</h4>
          <p>Technocrats Institute of Technology, Bhopal | 2018 - 2022</p>
          <p>82%</p>
        </motion.div>
      </div>
      <div className="about-image">
        <div></div>
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.21 }}
          viewport={{ once: true }}
          src={ShubhamKhot}
          width="30%"
          alt="Shubham Khot"
        />
      </div>
    </Container>
  );
}

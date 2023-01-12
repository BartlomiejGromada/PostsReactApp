import Github from "@assets/svg/Github";
import Linkedin from "@assets/svg/Linkedin";
import styles from "@features/about/components/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h3>Something about me</h3>
      <p>Bartłomiej Gromada</p>
      <p>Junior Fullstack Developer</p>
      <p>ASP NET CORE + REACT</p>

      <div className={styles.socials}>
        <a href="https://github.com/BartlomiejGromada" target="_blank">
          <Github className={styles.github} />
        </a>
        <a
          href="https://www.linkedin.com/in/bart%C5%82omiej-gromada-670948238/"
          target="_blank"
        >
          <Linkedin className={styles.linkedin} />
        </a>
      </div>
    </div>
  );
};

export default About;

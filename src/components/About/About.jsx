import getImageUrl from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Im a Frontend developer with experience in building responsive and optimized sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
            <div className={styles.aboutItemText}>
              <h3>UX Designer</h3>
              <p>I have experience developing UX Designs on Figma</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBriefcase2,
  TbFilePercent,
  TbMapPinFilled,
  TbSchool,
  TbWorldWww,
  TbUserCircle,
} from "react-icons/tb";
import styles from "./theme1.module.scss";
function Theme1() {
  return (
    <div>
      <section className={styles.profile_section}>
        <div>
          <TbUserCircle size={100} />
          <h2>Gabrielle Belgar</h2>
          <div className={styles.location}>
            <TbMapPinFilled size={23} />
            <p>Quezon City, Metro Manila, Philippines</p>
          </div>
        </div>
      </section>

      <section className={`${styles.main_content} ${styles.container}`}>
        <div className={styles.row}>
          <div className={styles.column_main}>
            <div className="section about-me">
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className={`${styles.section} ${styles.work_experience}`}>
              <h2>Work Experience</h2>
              <div className={styles.column_main}>
                <h4>2023 - present</h4>
                <div className={styles.job_content}>
                  <TbBriefcase2 size={23} />
                  <h3>College Professor</h3>
                </div>

                <p>University of Santo Tomas, Metro Manila</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className={`${styles.section} ${styles.education}`}>
              <h2>Education</h2>
              <div className={styles.edu}>
                <h4>2023 - present</h4>
                <div className={styles.edu_content}>
                  <TbSchool size={23} />
                  <h3>University of Santo Tomas</h3>
                </div>

                <p>BIS Information Technology</p>
              </div>
            </div>

            <div className={`${styles.section} ${styles.skills}`}>
              <h2>Skills</h2>
              <ul>
                <li>Front-End Development</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
              </ul>
            </div>

            <div className={`${styles.section} ${styles.resume}`}>
              <h2>Resume</h2>
              <div className={styles.resume_item}>
                <TbFilePercent />
              </div>
            </div>
          </div>

          <div className={styles.column_side}>
            <div className={`${styles.section} ${styles.portfolio}`}></div>

            <div className={`${styles.section} ${styles.socials}`}>
              <h2>Socials</h2>
              <div className={styles.social_icons}>
                <a href="#">
                  <TbBrandLinkedin />
                </a>
                <a href="#">
                  <TbBrandFacebook />
                </a>
                <a href="#">
                  <TbBrandGithub />
                </a>
                <a href="#">
                  <TbWorldWww />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Theme1;

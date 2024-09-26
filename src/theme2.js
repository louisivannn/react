import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBriefcase2,
  TbFilePercent,
  TbMapPinFilled,
  TbSchool,
  TbUserCircle,
  TbUserCode,
  TbWorldWww,
} from "react-icons/tb";
import styles from "./theme2.module.scss";
function Theme2() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={`${styles.profile_info} ${styles.text_center}`}>
            <TbUserCircle size={100} />
            <h2 className={styles.side_title}>Juan Dela Cruz</h2>
            <div className={styles.location}>
              <TbMapPinFilled size={23} />
              <p>Quezon City, Metro Manila, Philippines</p>
            </div>
          </div>
          <div className={styles.skills_section}>
            <h3 className={styles.side_title}>Skills</h3>
            <div className={styles.skills}>
              <span className={styles.badge}>Full-Stack Developer</span>
              <span className={styles.badge}>Front-End Developer</span>
              <span className={styles.badge}>Back-End Developer</span>
            </div>
          </div>
          <div className={`${styles.section} ${styles.resume}`}>
            <h3 className={`${styles.side_title} ${styles.resume}`}>Resume</h3>
            <div className={styles.resume_item}>
              <TbFilePercent />
            </div>
          </div>

          <div className={styles.social_section}>
            <h3 className={styles.side_title}>Socials</h3>
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

        <div className={styles.main_content}>
          <div className={styles.header_image}>
            <img src="images/building.png" alt="Header Image" />
          </div>

          <div className={styles.info_content}>
            <div className={styles.about_me}>
              <h2 className={styles.title_info}>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis dicta suscipit nam voluptatem nulla error veniam?
                Quaerat, quibusdam, harum sint adipisci voluptatum facere
                ratione deleniti amet quidem asperiores id autem!
              </p>
            </div>

            <section className={styles.experience_education}>
              <div className={styles.work_experience}>
                <h2 className={styles.title_info}>Work Experience</h2>
                <div className={styles.experience_item}>
                  <h3>2023-present</h3>
                  <div className={styles.experience_content}>
                    <TbBriefcase2 size={23} />
                    <h1>College Professor</h1>
                  </div>
                  <h2>University of Santo Tomas</h2>
                  <p>Quezon City, Metro Manila, Philippines</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className={styles.education}>
                <h2 className={styles.title_info}>Education</h2>
                <div className={styles.education_item}>
                  <h3>2022-2023</h3>
                  <div className={styles.education_content}>
                    <TbSchool size={23} />
                    <h1>University of Santo Tomas</h1>
                  </div>
                  <p>BS Information Technology</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme2;

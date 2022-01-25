import "../../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="col-12 col-lg-6" id="aboutMe">
        <h2 className="text-center intro-heading">Hi, I'm Caitlin!</h2>

        <h3 className="text-center intro-text fw-bold">
          I'm a freelance web developer based out of Denver, CO.
        </h3>

        <p className="text-center intro-text">
          I've been interested in web development most of my life, starting with
          teaching myself to build websites while in high school. I have a
          wealth of experience in research, insatiable curiosity from a
          background as a librarian and a love of technology and structure from
          my time in data center operations. I'm currently enrolled in a web
          development bootcamp at the University of Denver and do freelance work
          in my spare time.
        </p>
      </div>

      <div className="col-12 col-lg-6 d-flex justify-content-center">
        <img
          src="/images/profile.jpg"
          alt="profile of Caitlin Roberts"
          width="50%"
          id="profile"
        />
      </div>
    </>
  );
};

export default AboutMe;

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          Hello, I'm Satish, currently a BCA 2nd Year student at Dr. 
          Babasaheb Ambedkar Marathwada University. 
          </p>
          <p className="hero--section-description">
          I am passionate about front-end development and have recently completed a React internship at CodSoft, 
          where I honed my skills in building dynamic and responsive user interfaces. During this internship, 
          I had the opportunity to lead the development of a restaurant web app.
          </p>
        </div>
      </div>
    </section>
  );
}

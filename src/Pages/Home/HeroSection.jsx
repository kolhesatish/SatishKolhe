export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Satish</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Fronted</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            With a keen passion for crafting seamless user experiences and a solid foundation in Data Structures and Algorithms. 
            <br /> My approach combines creativity with systematic problem-solving.
          </p>
        </div>
          <a className="btn btn-primary" href="mailto:kolhesatish308@gmail.com">Get In Touch</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

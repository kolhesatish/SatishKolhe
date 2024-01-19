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
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Fsatish-kolhe-0a87a0226&psig=AOvVaw0JUbLDBs2hiqrWcuK-1sKf&ust=1705721681797000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODCr8fC6IMDFQAAAAAdAAAAABAD" alt="Hero Section" />
      </div>
    </section>
  );
}

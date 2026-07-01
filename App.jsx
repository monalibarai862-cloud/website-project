import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    let words = ["Frontend Developer", "UI Designer", "Creative Coder"];
    let i = 0;
    let j = 0;
    let timeout;

    function type() {
      const el = document.querySelector(".typing");
      if (!el) return;

      // FIX: rebuild text instead of appending
      el.innerHTML = words[i].substring(0, j);

      if (j < words[i].length) {
        j++;
        timeout = setTimeout(type, 100);
      } else {
        timeout = setTimeout(() => {
          j = 0;
          i = (i + 1) % words.length;
          type();
        }, 1000);
      }
    }

    type();

    // cleanup (important in React)
    return () => clearTimeout(timeout);
  }, []);

  function theme() {
    document.body.classList.toggle("light");
  }

  function validate(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();
    const result = document.getElementById("result");

    if (!name || !email || !msg) {
      result.innerHTML = "Please fill all fields";
      result.style.color = "red";
      return;
    }

    result.innerHTML = "Message sent successfully!";
    result.style.color = "lightgreen";
  }

  return (
    <>
      {/* HEADER */}
      <header>
        <h1>Professional Portfolio and Personal Branding Website</h1>
        <h4>Monali Barai | USN: CS24155</h4>
      </header>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container">
          <span className="navbar-brand">Monali's Portfolio</span>

          <div>
            <a className="nav-link d-inline text-white" href="#about">About   </a>
            <a className="nav-link d-inline text-white" href="#projects">Projects  </a>
            <a className="nav-link d-inline text-white" href="#contact">Contact  </a>

            <button className="btn btn-warning" onClick={theme}>
              Theme
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6 text-center">
              <img className="profile" src="/girl.jpg" alt="profile" />
            </div>

            <div className="col-md-6">
              <h1>
                Hi, I'm <span className="name">Monali Barai</span>
              </h1>

              <h2 className="typing"></h2>

              <p>
                I build responsive and interactive websites
                for modern digital experiences.
              </p>

              <a href="/monali_s_resume.pdf" download className="btn-main">
                Download Resume
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container">
        <h1>About Me</h1>

        <p>
          I am Monali Barai, a passionate web developer
          focused on creating beautiful, responsive and user-friendly websites.
        </p>

        <a href="https://github.com/monalibarai862-cloud" target="_blank" className="btn btn-primary me-2">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/monali-barai-ba844a342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="btn btn-primary">
          LinkedIn
        </a>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container">
        <h1>My Projects</h1>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352" />
              <h3>Cooking Website</h3>
              <p>Recipe and food sharing platform.</p>
              <a href="/cooking website.html" className="btn btn-info">View Project</a>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" />
              <h3>E-Commerce</h3>
              <p>Online shopping website.</p>
              <a href="/ecommerce.html" className="btn btn-info">View Project</a>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1532978379173-523e16f371f2" />
              <h3>Weather App</h3>
              <p>Weather information application.</p>
              <a href="/weather.html" className="btn btn-info">View Project</a>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
              <h3>Portfolio</h3>
              <p>Personal branding website.</p>
              <a href="/portfolio.html" className="btn btn-info">View Project</a>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="container">
        <h1>Skills</h1>

        <p>HTML</p>
        <div className="progress">
          <div className="progress-bar bg-info" style={{ width: "95%" }}>95%</div>
        </div>

        <p>CSS</p>
        <div className="progress">
          <div className="progress-bar bg-success" style={{ width: "90%" }}>90%</div>
        </div>

        <p>JavaScript</p>
        <div className="progress">
          <div className="progress-bar bg-warning" style={{ width: "85%" }}>85%</div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container">
        <h1>Testimonials</h1>

        <div className="testimonial">
          "Monali delivered a creative and responsive website with excellent design."
          <br /><br />
          <b>- Client</b>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container">
        <h1>Contact Me</h1>

        <form onSubmit={validate}>
          <input id="name" className="form-control mb-3" placeholder="Name" />
          <input id="email" className="form-control mb-3" placeholder="Email" />
          <textarea id="msg" className="form-control mb-3" placeholder="Message"></textarea>

          <button className="btn-main">Send Message</button>
        </form>

        <p id="result"></p>
      </section>

      {/* FOOTER */}
      <footer>
        Monali Barai | CS24155
      </footer>
    </>
  );
}

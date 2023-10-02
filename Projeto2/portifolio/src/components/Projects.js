import './Style.css';

function Projects() {
  return (
    <section id="projects">
      <div class="projects-title">
        <h2>PROJETOS</h2>
      </div>

      <div class="wrapper-projects">
        <div class="card-project">
          <div class="content-project">
            <div class="image-project">
              <a href="/">
                <img src="portifolio\src\assets\img\projeto.jpeg" alt="Logo-projeto-talk.me" />
              </a>
            </div>

            <span>Rede Social talk.me</span>
            <p>Esse projeto é uma rede social de chat e encontros em bares</p>

            <div class="cta-project">
              <a href="/">
                Código
                <i class="fa-brands fa-github"></i>
              </a>
              <a
                href="https://app-software-engineering.vercel.app/login"
                target="_blank" rel="noreferrer"
              >
                Site
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

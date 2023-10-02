import './Style.css';

function Person() {
  return (
    <section id="person">
      <div class="person-content">
        <div class="person-name">
          <h1>Olá, <span></span></h1>
          <h1>Meu nome é <span></span></h1>
          <h1>Samuel Faioli <span></span></h1>
        </div>
        <div class="stacks-content">
          <h3>Techs :</h3>

          <div class="stacks">
            <ul>
              <li>
                <div data="HTML">
                  <img src="portifolio\src\assets\svg\html.svg" alt="Html-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div data="CSS">
                  <img src="portifolio\src\assets\svg\css.svg" alt="CSS-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div data="JS">
                  <img src="portifolio\src\assets\svg\js.svg" alt="JavaScript-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div data="ReactJS">
                  <img src="portifolio\src\assets\svg\react.svg" alt="ReactJS-icon" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <div data="NodeJS">
                  <img src="portifolio\src\assets\svg\node.svg" alt="NodeJS-icon" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="person-background">
        <div class="wrapper-profile-photo">
          <img class="profile-photo" src="portifolio\src\assets\img\img4.jpg" alt="Foto Samuel" />
        </div>

        <div class="links">
          <a href="https://github.com/Scarfaioli" target="_blank" rel="noreferrer">
            <img src="portifolio\src\assets\svg\logo-github.svg" alt="Github-icon" />
          </a>
          <a href="https://www.instagram.com/scarfaioli/" target="_blank" rel="noreferrer">
            <img src="portifolio\src\assets\svg\logo-insta.svg" alt="Instagram-logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-faioli-706a30204/"
            target="_blank" rel="noreferrer"
          >
            <img src="portifolio\src\assets\svg\logo-linkedin.svg" alt="Linkedin-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Person;

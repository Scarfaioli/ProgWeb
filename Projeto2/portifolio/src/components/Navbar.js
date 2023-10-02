import './Style.css';

function Navbar() {
  return (
      <nav class="navbar">
        <ul>
          <li>
            <a href="#person">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contacts">Contatos</a>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;

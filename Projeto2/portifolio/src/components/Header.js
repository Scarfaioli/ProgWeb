import './Style.css';
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="header">
      <a class="header-title" href="">
        <h1>scarfaioli</h1>
      </a>
      <Navbar/>
    </div>
  );
};

export default Header;

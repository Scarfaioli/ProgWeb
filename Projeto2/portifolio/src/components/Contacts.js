import './Style.css';

function Contacts() {
  return (
    <section id="contacts">
      <div class="contacts-icon-content">
        <h2>Contatos</h2>
      </div>

      <div class="contacts-icons-wrapper">
        <div class="contacts-icon-content">
          <div class="contacts-icon">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
          <div class="contacts-info">
            <span>Localização</span>
            <p>Minas Gerais, Brail</p>
          </div>
        </div>

        <div class="contacts-icon-content">
          <div class="contacts-icon">
            <i class="fa-solid fa-envelope-open-text"></i>
          </div>
          <div class="contacts-info">
            <span>E-mail</span>
            <a href="/"> scarf1999@gmail.com </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

import './Style.css';

function About() {
  return (
    <section id="about">
      <div class="background-about">
        <div class="img-wrapper">
          <img src="..\assets\img\img.2.jpg" alt="Imagem de fundo" />
        </div>
      </div>

      <div class="box-about">
        <div class="section-subtitle">
          <h2>
            <p>💻</p>
            <p>
              <span>Desenvolvedor</span> Full Stack
            </p>
          </h2>
        </div>
        <h3>
          Sou um Desenvolvedor Full Stack com exeperiências em
          <p>HTML, CSS, JavaScript, React.JS e Node.JS</p>
        </h3>

        <h4>
          Graduando em Engenharia da Computação no Cefet/MG busco gerar impacto
          na sociedade com contribuições nos campos da tecnologia com a
          transformação digital. Busco sempre aprimorar tanto minhas
          competências técnicas quanto interpessoais, participante ativo de
          eventos acadêmicos e bolsista PET (Programa de educação tutorial).
        </h4>
        <h4>
          Abaixo está meu
          <p>currículo</p>
          para download
        </h4>

        <div class="button-cv">
          <a
            href="public/document/curriculo-samuel-faioli.pdf"
            download="CV-Samuel-Faioli"
            aria-label="Baixar arquivo"
          >
            Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
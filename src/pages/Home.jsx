import "./Home.css";

function Home() {
  const whatsappNumber = "258860111210";

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o Gallery Coffee."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="home-page">

      {/* =========================
          HEADER
      ========================= */}
      <header className="home-header">

        <a href="/" className="home-brand">

          <img
            src="/logo-gallery-coffee.png"
            alt="Gallery Coffee"
          />

          <span>Gallery Coffee</span>

        </a>

        <a
          href={whatsappUrl}
          className="home-header-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

      </header>


      {/* =========================
          HERO
      ========================= */}
      <main>

        <section className="home-hero">

          <div className="home-hero-overlay"></div>

          <div className="home-hero-content">

            <span className="home-hero-label">
              GALLERY COFFEE
            </span>

            <h1>
              Café,
              <br />
              <span>arte & experiências.</span>
            </h1>

            <p>
              Um espaço onde o café, a gastronomia,
              a criatividade e a cultura se encontram.
              Descubra o Gallery Coffee.
            </p>

            <div className="home-hero-actions">

              <a
                href="/menu"
                className="home-button home-button-primary"
              >
                Ver Menu
                <span>→</span>
              </a>

              <a
                href="/atividades"
                className="home-button home-button-secondary"
              >
                Atividades Artísticas
                <span>↗</span>
              </a>

            </div>

          </div>


          <div className="home-hero-scroll">

            <span>EXPLORE</span>

            <span className="home-scroll-line"></span>

          </div>

        </section>


        {/* =========================
            INTRODUÇÃO
        ========================= */}
        <section className="home-intro">

          <div className="home-intro-label">
            GALLERY COFFEE
          </div>

          <h2>
            Mais do que um café.
            <br />
            <span>Uma experiência.</span>
          </h2>

          <p>
            No Gallery Coffee, cada visita pode ser uma nova
            descoberta. Sabores, café, doces, momentos de
            criatividade e experiências artísticas fazem parte
            do nosso espaço.
          </p>

        </section>


        {/* =========================
            EXPERIÊNCIA
        ========================= */}
        <section className="home-experience">

          <div className="home-experience-card">

            <div className="home-experience-icon">
              ☕
            </div>

            <span>CAFÉ & SABORES</span>

            <h3>
              Descubra o nosso menu
            </h3>

            <p>
              Cafés, chás, pequenos-almoços, entradas,
              sandes, refeições, bolos e doces.
            </p>

            <a href="/menu">
              Explorar o menu
              <span>→</span>
            </a>

          </div>


          <div className="home-experience-card home-experience-card-featured">

            <div className="home-experience-icon">
              ✦
            </div>

            <span>ARTE & CULTURA</span>

            <h3>
              Crie ao seu ritmo
            </h3>

            <p>
              Pintura, workshops e experiências artísticas
              para descobrir e desenvolver a sua criatividade.
            </p>

            <a href="/atividades">
              Ver atividades
              <span>→</span>
            </a>

          </div>


          <div className="home-experience-card">

            <div className="home-experience-icon">
              ★
            </div>

            <span>A SUA EXPERIÊNCIA</span>

            <h3>
              Queremos ouvir você
            </h3>

            <p>
              Partilhe a sua experiência e ajude-nos a
              tornar cada visita ainda melhor.
            </p>

            <a href="/reviews">
              Avaliar o Gallery Coffee
              <span>→</span>
            </a>

          </div>

        </section>


        {/* =========================
            ATIVIDADES ARTÍSTICAS
        ========================= */}
        <section className="home-art">

          <div className="home-art-content">

            <span className="home-art-label">
              ARTE & CRIATIVIDADE
            </span>

            <h2>
              A arte também
              <br />
              <span>faz parte do café.</span>
            </h2>

            <p>
              Escolha uma atividade, sente-se com calma
              e crie ao seu ritmo. Descubra experiências
              artísticas no Gallery Coffee.
            </p>

            <a
              href="/atividades"
              className="home-art-button"
            >
              Explorar atividades
              <span>→</span>
            </a>

          </div>

        </section>


        {/* =========================
            VISITE-NOS
        ========================= */}
        <section className="home-visit">

          <div className="home-visit-header">

            <span>GALLERY COFFEE</span>

            <h2>
              Visite-nos
              <span>.</span>
            </h2>

            <p>
              Venha descobrir um espaço onde café,
              gastronomia, arte e criatividade se encontram.
            </p>

          </div>


          <div className="home-visit-grid">

            {/* EXPERIÊNCIA */}
            <div className="home-visit-card">

              <div className="home-visit-icon">
                ☕
              </div>

              <div>

                <span>EXPERIÊNCIA</span>

                <h3>
                  Café & Snack Bar
                </h3>

                <p>
                  Sabores, bebidas e momentos para desfrutar.
                </p>

              </div>

            </div>


            {/* ARTE */}
            <div className="home-visit-card">

              <div className="home-visit-icon">
                ✦
              </div>

              <div>

                <span>CRIATIVIDADE</span>

                <h3>
                  Arte & Workshops
                </h3>

                <p>
                  Experiências artísticas para criar e explorar.
                </p>

              </div>

            </div>


            {/* CONTACTO */}
            <div className="home-visit-card">

              <div className="home-visit-icon">
                ◉
              </div>

              <div>

                <span>CONTACTO</span>

                <h3>
                  WhatsApp
                </h3>

                <p>
                  86 011 1210
                </p>

              </div>

            </div>

          </div>


          <div className="home-visit-action">

            <a href="/visite-nos">

              Conhecer o espaço

              <span>
                →
              </span>

            </a>

          </div>

        </section>


        {/* =========================
            AVALIAÇÃO
        ========================= */}
        <section className="home-feedback">

          <div className="home-feedback-inner">

            <span className="home-feedback-label">
              A SUA OPINIÃO
            </span>

            <h2>
              Como foi a sua
              <br />
              <span>experiência?</span>
            </h2>

            <p>
              A sua opinião é importante para nós.
              Partilhe a sua experiência no Gallery Coffee.
            </p>

            <a
              href="/reviews#review-form"
              className="home-feedback-button"
            >
              Avaliar a experiência
              <span>→</span>
            </a>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="home-footer">

        <div className="home-footer-brand">

          <img
            src="/logo-gallery-coffee.png"
            alt="Gallery Coffee"
          />

          <div>

            <strong>
              GALLERY COFFEE
            </strong>

            <span>
              Café & Snack Bar
            </span>

          </div>

        </div>


        <div className="home-footer-links">

          <a href="/menu">
            Ver Menu
          </a>

          <a href="/atividades">
            Atividades
          </a>

          <a href="/visite-nos">
            Visite-nos
          </a>

          <a href="/reviews">
            Avaliar
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Contactar
          </a>

        </div>


        <div className="home-footer-copy">

          © {new Date().getFullYear()} Gallery Coffee

        </div>

      </footer>

    </div>
  );
}

export default Home;
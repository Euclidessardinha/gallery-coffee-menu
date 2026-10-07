import "./VisiteNos.css";

function VisiteNos() {
  const whatsappNumber = "258849228062";

  const whatsappMessage = encodeURIComponent(
    "Olá, GARDEN & GRILL! Gostaria de obter informações sobre o restaurante."
  );

  const galleryImages = [
    {
      src: "/visite-nos/garden-fachada.jpg",
      alt: "Fachada do GARDEN & GRILL",
      className: "visite-gallery-main",
    },
    {
      src: "/visite-nos/garden-jardim.jpg",
      alt: "Área exterior do GARDEN & GRILL",
      className: "visite-gallery-small",
    },
    {
      src: "/visite-nos/garden-interior.jpg",
      alt: "Interior do GARDEN & GRILL",
      className: "visite-gallery-small",
    },
    {
      src: "/visite-nos/garden-mesas.jpg",
      alt: "Área de mesas do GARDEN & GRILL",
      className: "visite-gallery-wide",
    },
    {
      src: "/visite-nos/garden-noite.jpg",
      alt: "GARDEN & GRILL durante a noite",
      className: "visite-gallery-small",
    },
    {
      src: "/visite-nos/garden-ambiente.jpg",
      alt: "Ambiente do GARDEN & GRILL",
      className: "visite-gallery-small",
    },
  ];

  return (
    <div className="visite-page">

      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="visite-header">
        <a href="/" className="visite-brand">
          <img
            src="/logo-garden-grill.png"
            alt="GARDEN & GRILL"
            className="visite-logo"
          />

          <div className="visite-brand-text">
            <strong>GARDEN & GRILL</strong>
            <span>Pizza & Sushi</span>
          </div>
        </a>

        <nav className="visite-nav">
          <a href="/">Início</a>
          <a href="/menu">Menu</a>
          <a href="/visite-nos" className="active">
            Visite-nos
          </a>
          <a href="/cart">Carrinho</a>
        </nav>
      </header>


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="visite-hero">

        <img
          src="/visite-nos/garden-fachada.jpg"
          alt="GARDEN & GRILL"
          className="visite-hero-image"
        />

        <div className="visite-hero-overlay"></div>

        <div className="visite-hero-content">

          <span className="visite-eyebrow">
            GARDEN & GRILL
          </span>

          <h1>
            Visite-nos
          </h1>

          <p>
            Pizza, Sushi e uma experiência gastronómica
            num ambiente especial em Maputo.
          </p>

          <div className="visite-hero-buttons">

            <a href="#localizacao" className="visite-primary-button">
              Como chegar
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="visite-secondary-button"
            >
              Falar connosco
            </a>

          </div>

        </div>
      </section>


      {/* ==========================================
          INTRO
      ========================================== */}

      <main className="visite-content">

        <section className="visite-intro">

          <span className="visite-section-label">
            O NOSSO ESPAÇO
          </span>

          <h2>
            Um lugar para desfrutar
          </h2>

          <p>
            No GARDEN & GRILL, a gastronomia encontra um ambiente
            pensado para momentos especiais, encontros e boa companhia.
          </p>

        </section>


        {/* ==========================================
            GALERIA
        ========================================== */}

        <section className="visite-gallery-section">

          <div className="visite-gallery-header">

            <div>
              <span className="visite-section-label">
                GALERIA
              </span>

              <h2>
                Conheça o GARDEN & GRILL
              </h2>
            </div>

            <p>
              Explore o ambiente e descubra o espaço onde
              a sua experiência começa.
            </p>

          </div>


          <div className="visite-gallery">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`visite-gallery-item ${image.className}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

          </div>

        </section>


        {/* ==========================================
            EXPERIÊNCIA
        ========================================== */}

        <section className="visite-experience">

          <div className="visite-experience-image">

            <img
              src="/visite-nos/garden-jardim.jpg"
              alt="Ambiente exterior do GARDEN & GRILL"
              loading="lazy"
            />

          </div>

          <div className="visite-experience-content">

            <span className="visite-section-label">
              GARDEN & GRILL
            </span>

            <h2>
              Gastronomia e ambiente
            </h2>

            <p>
              Um espaço onde pode reunir-se com amigos, família
              ou simplesmente desfrutar de uma boa refeição.
            </p>

            <div className="visite-experience-points">

              <div>
                <span>01</span>
                <strong>Pizza</strong>
                <p>
                  Sabores preparados para diferentes momentos.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>Sushi</strong>
                <p>
                  Uma experiência gastronómica diferenciada.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>Ambiente</strong>
                <p>
                  Um espaço para desfrutar e criar momentos.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            LOCALIZAÇÃO
        ========================================== */}

        <section
          className="visite-location"
          id="localizacao"
        >

          <div className="visite-location-content">

            <span className="visite-section-label">
              VISITE-NOS
            </span>

            <h2>
              Encontre-nos em Maputo
            </h2>

            <p className="visite-location-description">
              O GARDEN & GRILL está localizado no Bairro
              Sommerschield, em Maputo.
            </p>


            <div className="visite-location-details">

              <div className="visite-location-detail">

                <div className="visite-detail-icon">
                  📍
                </div>

                <div>
                  <span>Endereço</span>

                  <strong>
                    Rua 1, 288
                  </strong>

                  <small>
                    Bairro Sommerschield, Maputo
                  </small>
                </div>

              </div>


              <div className="visite-location-detail">

                <div className="visite-detail-icon">
                  📞
                </div>

                <div>
                  <span>WhatsApp</span>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    84 922 8062
                  </a>
                </div>

              </div>

            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=Garden+Grill+Pizza+%26+Sushi+Maputo"
              target="_blank"
              rel="noopener noreferrer"
              className="visite-map-button"
            >
              📍 Abrir localização no Google Maps
            </a>

          </div>


          <div className="visite-location-visual">

            <div className="visite-map-card">

              <div className="visite-map-icon">
                📍
              </div>

              <span>
                GARDEN & GRILL
              </span>

              <strong>
                Sommerschield
              </strong>

              <small>
                Maputo, Moçambique
              </small>

            </div>

          </div>

        </section>


        {/* ==========================================
            CTA
        ========================================== */}

        <section className="visite-cta">

          <div className="visite-cta-image">

            <img
              src="/visite-nos/garden-noite.jpg"
              alt="GARDEN & GRILL à noite"
              loading="lazy"
            />

          </div>

          <div className="visite-cta-overlay"></div>

          <div className="visite-cta-content">

            <span>
              GARDEN & GRILL
            </span>

            <h2>
              Venha viver a experiência
            </h2>

            <p>
              Escolha o seu prato, escolha a sua mesa
              e aproveite o momento.
            </p>

            <div className="visite-cta-buttons">

              <a
                href="/menu"
                className="visite-cta-menu"
              >
                Ver o Menu
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="visite-cta-whatsapp"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* ==========================================
          FOOTER
      ========================================== */}

      <footer className="visite-footer">

        <div className="visite-footer-brand">

          <img
            src="/logo-garden-grill.png"
            alt="GARDEN & GRILL"
          />

          <div>
            <strong>GARDEN & GRILL</strong>
            <span>Pizza & Sushi</span>
          </div>

        </div>


        <div className="visite-footer-links">

          <a href="/">Início</a>
          <a href="/menu">Menu</a>
          <a href="/visite-nos">Visite-nos</a>
          <a href="/cart">Carrinho</a>

        </div>


        <p>
          © {new Date().getFullYear()} GARDEN & GRILL.
          Todos os direitos reservados.
        </p>

      </footer>

    </div>
  );
}

export default VisiteNos;
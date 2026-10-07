
import { useState } from "react";
import "./Atividades.css";

const activities = [
  {
    id: "pintura-tela-pequena",
    title: "Pintura livre em Tela (Óleo)",
    subtitle: "Tela Pequena",
    description: "Inclui tintas, pincéis e uso do espaço.",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "pintura-tela-media",
    title: "Pintura livre em Tela (Óleo)",
    subtitle: "Tela Média",
    description: "Inclui tintas, pincéis e uso do espaço.",
    price: 650,
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "pintura-papel",
    title: "Pintura em Papel",
    subtitle: "Desenhos à escolha",
    description: "Desenhos à escolha + lápis de cor e aquarela.",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "pintura-chavenas",
    title: "Pintura em Chávenas (Porcelana)",
    subtitle: "Personalização",
    description:
      "Jogos de chávena espresso ou chá. Inclui chávena, personalização e forno. Desconto de 5% se deixar para exposição.",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "workshops-artististicos",
    title: "Experiências e Workshops Artísticos",
    subtitle: "Sob agendamento",
    description:
      "Sob agendamento. Inclui workshops de pintura em telas, bijuteria, bordados, cerâmica, escultura e arte em resina.",
    price: null,
    priceLabel: "Sob agendamento",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=85",
  },
];

function formatPrice(price) {
  if (price === null || price === undefined) {
    return "";
  }

  return `${price.toLocaleString("pt-MZ")} MT`;
}

function Atividades() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleWhatsApp = (activity) => {
    const price = activity.price
      ? `${formatPrice(activity.price)}`
      : activity.priceLabel;

    const message = `Olá! Gostaria de saber mais sobre a atividade artística "${activity.title} — ${activity.subtitle}" da Gallery Coffee. Preço: ${price}.`;

    window.open(
      `https://wa.me/258860111210?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="activities-page">
      {/* HEADER */}
      <header className="activities-header">
        <a href="/" className="activities-brand">
          <img
            src="/logo-gallery-coffee.png"
            alt="Gallery Coffee"
          />

          <div className="activities-brand-text">
            <strong>Gallery Coffee</strong>
            <span>Café • Gastronomia • Arte</span>
          </div>
        </a>

        <a href="/menu" className="activities-menu-link">
          Ver Menu
        </a>
      </header>

      {/* HERO */}
      <main>
        <section className="activities-hero">
          <div className="activities-container">
            <span className="activities-eyebrow">
              EXPERIÊNCIAS ARTÍSTICAS
            </span>

            <h1>
              Arte para criar,
              <br />
              experimentar e apreciar.
            </h1>

            <p>
              No Gallery Coffee, a experiência vai além do café e da
              gastronomia. Descubra atividades artísticas pensadas para
              criar, explorar e aproveitar o espaço de uma forma diferente.
            </p>
          </div>
        </section>

        {/* ACTIVITIES */}
        <section className="activities-section">
          <div className="activities-container">
            <div className="activities-section-heading">
              <div>
                <span className="activities-eyebrow">
                  ATIVIDADES
                </span>

                <h2>Escolha a sua experiência</h2>
              </div>

              <a href="/menu" className="activities-back-menu">
                ← Voltar ao menu
              </a>
            </div>

            <div className="activities-grid">
              {activities.map((activity) => (
                <article
                  className="activity-card"
                  key={activity.id}
                >
                  <div className="activity-image-wrapper">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="activity-image"
                    />

                    <span className="activity-image-label">
                      Arte
                    </span>
                  </div>

                  <div className="activity-card-content">
                    <span className="activity-subtitle">
                      {activity.subtitle}
                    </span>

                    <h3>{activity.title}</h3>

                    <p>{activity.description}</p>

                    <div className="activity-card-bottom">
                      <div className="activity-price">
                        {activity.price
                          ? formatPrice(activity.price)
                          : activity.priceLabel}
                      </div>

                      <button
                        type="button"
                        className="activity-details-button"
                        onClick={() =>
                          setSelectedActivity(activity)
                        }
                      >
                        Ver detalhes
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="activities-cta">
          <div className="activities-container">
            <div className="activities-cta-card">
              <div>
                <span className="activities-eyebrow">
                  GALLERY COFFEE
                </span>

                <h2>
                  Quer saber mais sobre
                  <br />
                  uma atividade?
                </h2>

                <p>
                  Entre em contacto connosco para obter mais
                  informações ou agendar uma experiência artística.
                </p>
              </div>

              <a
                href="https://wa.me/258860111210"
                target="_blank"
                rel="noopener noreferrer"
                className="activities-whatsapp-button"
              >
                Falar pelo WhatsApp
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      {selectedActivity && (
        <div
          className="activity-modal-overlay"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="activity-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="activity-modal-close"
              onClick={() => setSelectedActivity(null)}
              aria-label="Fechar"
            >
              ×
            </button>

            <span className="activities-eyebrow">
              ATIVIDADE ARTÍSTICA
            </span>

            <h2>{selectedActivity.title}</h2>

            <span className="activity-modal-subtitle">
              {selectedActivity.subtitle}
            </span>

            <p>{selectedActivity.description}</p>

            <div className="activity-modal-price">
              {selectedActivity.price
                ? formatPrice(selectedActivity.price)
                : selectedActivity.priceLabel}
            </div>

            <button
              type="button"
              className="activity-modal-whatsapp"
              onClick={() =>
                handleWhatsApp(selectedActivity)
              }
            >
              Consultar pelo WhatsApp
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="activities-footer">
        <div className="activities-container">
          <div className="activities-footer-brand">
            <img
              src="/logo-gallery-coffee.png"
              alt="Gallery Coffee"
            />

            <div>
              <strong>Gallery Coffee</strong>
              <span>Café • Gastronomia • Arte</span>
            </div>
          </div>

          <div className="activities-footer-links">
            <a href="/">Início</a>
            <a href="/menu">Menu</a>
            <a href="/reviews">Avaliar</a>
            <a href="/visite-nos">Visite-nos</a>
          </div>

          <p>© Gallery Coffee. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Atividades;



import { useEffect, useMemo, useState } from "react";
import "./Reviews.css";

const STORAGE_KEY = "gallery-coffee-reviews";

const demoReviews = [
  {
    id: "demo-1",
    name: "Avaliação de demonstração",
    rating: 5,
    comment:
      "As avaliações dos clientes aparecerão aqui.",
    date: "Demonstração",
    demo: true,
  },
];

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const [discovery, setDiscovery] = useState("");
  const [favorite, setFavorite] = useState("");
  const [recommend, setRecommend] = useState("");

  const [consent, setConsent] = useState(false);

  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  /*
   * CARREGAR AVALIAÇÕES
   */
  useEffect(() => {
    try {
      const savedReviews = localStorage.getItem(STORAGE_KEY);

      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      } else {
        setReviews([]);
      }
    } catch (error) {
      console.error(
        "Não foi possível carregar as avaliações:",
        error
      );

      setReviews([]);
    }
  }, []);

  /*
   * GUARDAR AVALIAÇÕES
   */
  useEffect(() => {
    if (!reviews.length) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(reviews)
      );
    } catch (error) {
      console.error(
        "Não foi possível guardar as avaliações:",
        error
      );
    }
  }, [reviews]);

  /*
   * ESTATÍSTICAS
   */
  const statistics = useMemo(() => {
    if (!reviews.length) {
      return {
        average: 0,
        total: 0,
        distribution: {
          5: 0,
          4: 0,
          3: 0,
          2: 0,
          1: 0,
        },
      };
    }

    const total = reviews.length;

    const sum = reviews.reduce(
      (acc, review) => acc + Number(review.rating),
      0
    );

    const average = sum / total;

    const distribution = {
      5: reviews.filter(
        (review) => Number(review.rating) === 5
      ).length,

      4: reviews.filter(
        (review) => Number(review.rating) === 4
      ).length,

      3: reviews.filter(
        (review) => Number(review.rating) === 3
      ).length,

      2: reviews.filter(
        (review) => Number(review.rating) === 2
      ).length,

      1: reviews.filter(
        (review) => Number(review.rating) === 1
      ).length,
    };

    return {
      average,
      total,
      distribution,
    };
  }, [reviews]);

  /*
   * ESTRELAS
   */
  const renderStars = (
    value,
    interactive = false
  ) => {
    return (
      <div
        className={
          interactive
            ? "reviews-star-selector"
            : "reviews-stars"
        }
        aria-label={`${value} de 5 estrelas`}
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const active = interactive
            ? star <= (hoverRating || rating)
            : star <= value;

          if (interactive) {
            return (
              <button
                key={star}
                type="button"
                className={
                  active
                    ? "review-star active"
                    : "review-star"
                }
                onClick={() => setRating(star)}
                onMouseEnter={() =>
                  setHoverRating(star)
                }
                onMouseLeave={() =>
                  setHoverRating(0)
                }
                aria-label={`${star} estrelas`}
              >
                ★
              </button>
            );
          }

          return (
            <span
              key={star}
              className={
                active
                  ? "review-star filled"
                  : "review-star empty"
              }
            >
              ★
            </span>
          );
        })}
      </div>
    );
  };

  /*
   * ENVIAR AVALIAÇÃO
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedComment = comment.trim();

    if (!trimmedName || !trimmedComment) {
      return;
    }

    if (!consent) {
      return;
    }

    const newReview = {
      id: `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`,

      name: trimmedName,

      rating,

      comment: trimmedComment,

      discovery,

      favorite,

      recommend,

      date: new Date().toLocaleDateString("pt-MZ"),

      demo: false,
    };

    setReviews((currentReviews) => [
      newReview,
      ...currentReviews,
    ]);

    setName("");
    setRating(5);
    setComment("");
    setDiscovery("");
    setFavorite("");
    setRecommend("");
    setConsent(false);
    setHoverRating(0);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  /*
   * DATA DAS AVALIAÇÕES
   */
  const visibleReviews =
    reviews.length > 0 ? reviews : demoReviews;

  return (
    <div className="reviews-page">

      {/* =========================
          HEADER
      ========================= */}

      <header className="reviews-header">

        <a
          href="/"
          className="reviews-brand"
        >

          <img
            src="/logo-gallery-coffee.png"
            alt="Gallery Coffee"
          />

          <div>

            <strong>
              Gallery Coffee
            </strong>

            <span>
              Café • Gastronomia • Arte
            </span>

          </div>

        </a>


        <a
          href="/menu"
          className="reviews-menu-link"
        >
          ← Voltar ao menu
        </a>

      </header>


      {/* =========================
          MAIN
      ========================= */}

      <main className="reviews-main">

        <div className="reviews-container">

          {/* =========================
              INTRO
          ========================= */}

          <section className="reviews-intro">

            <span className="reviews-eyebrow">
              A experiência Gallery Coffee
            </span>

            <h1>
              O que dizem os nossos clientes
            </h1>

            <p>
              A sua experiência é importante para nós.
              Partilhe a sua opinião sobre a Gallery Coffee.
            </p>

          </section>


          {/* =========================
              RESUMO
          ========================= */}

          <section className="reviews-summary">

            <div className="reviews-score">

              <strong>
                {statistics.total > 0
                  ? statistics.average.toFixed(1)
                  : "—"}
              </strong>

              <div>
                {renderStars(
                  Math.round(statistics.average)
                )}
              </div>

              <span>
                {statistics.total > 0
                  ? `${statistics.total} ${
                      statistics.total === 1
                        ? "avaliação"
                        : "avaliações"
                    }`
                  : "Ainda sem avaliações"}
              </span>

            </div>


            <div className="reviews-distribution">

              {[5, 4, 3, 2, 1].map(
                (star) => {

                  const count =
                    statistics.distribution[star];

                  const percentage =
                    statistics.total > 0
                      ? (count /
                          statistics.total) *
                        100
                      : 0;

                  return (
                    <div
                      className="reviews-distribution-row"
                      key={star}
                    >

                      <span>
                        {star}
                      </span>

                      <span className="reviews-small-star">
                        ★
                      </span>

                      <div className="reviews-progress">

                        <span
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                      <strong>
                        {count}
                      </strong>

                    </div>
                  );
                }
              )}

            </div>

          </section>


          {/* =========================
              CONTENT
          ========================= */}

          <div className="reviews-content">

            {/* =========================
                LISTA
            ========================= */}

            <section className="reviews-list">

              <div className="reviews-section-heading">

                <div>

                  <span>
                    OPINIÕES
                  </span>

                  <h2>
                    Experiências partilhadas
                  </h2>

                </div>

              </div>


              <div className="reviews-cards">

                {visibleReviews.map(
                  (review) => (

                    <article
                      className={
                        review.demo
                          ? "review-card review-demo"
                          : "review-card"
                      }
                      key={review.id}
                    >

                      <div className="review-card-top">

                        <div className="review-avatar">

                          {review.demo
                            ? "G"
                            : review.name
                                .charAt(0)
                                .toUpperCase()}

                        </div>


                        <div className="review-author">

                          <strong>
                            {review.name}
                          </strong>

                          <span>
                            {review.date}
                          </span>

                        </div>


                        <div className="review-card-stars">

                          {renderStars(
                            review.rating
                          )}

                        </div>

                      </div>


                      <p>
                        {review.comment}
                      </p>


                      {review.favorite && (
                        <div className="review-extra-info">

                          <span>
                            O que mais gostou
                          </span>

                          <strong>
                            {review.favorite}
                          </strong>

                        </div>
                      )}


                      {review.discovery && (
                        <div className="review-extra-info">

                          <span>
                            Como nos conheceu
                          </span>

                          <strong>
                            {review.discovery}
                          </strong>

                        </div>
                      )}


                      {review.recommend && (
                        <div className="review-recommend">

                          <span>
                            Recomendaria?
                          </span>

                          <strong>
                            {review.recommend}
                          </strong>

                        </div>
                      )}


                      {review.demo && (
                        <small className="review-demo-label">

                          Exemplo — aguardamos as
                          avaliações dos clientes.

                        </small>
                      )}

                    </article>

                  )
                )}

              </div>

            </section>


            {/* =========================
                FORMULÁRIO
            ========================= */}

            <aside
              className="reviews-form-card"
              id="review-form"
            >

              <div className="reviews-form-heading">

                <span>
                  A SUA OPINIÃO
                </span>

                <h2>
                  Como foi a sua experiência?
                </h2>

                <p>
                  Conte-nos como foi a sua visita
                  à Gallery Coffee.
                </p>

              </div>


              {submitted && (
                <div className="reviews-success">

                  ✓ Obrigado pela sua avaliação!

                </div>
              )}


              <form
                className="reviews-form"
                onSubmit={handleSubmit}
              >

                {/* NOME */}

                <label htmlFor="review-name">
                  Seu nome
                </label>

                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Digite o seu nome"
                  maxLength={60}
                  required
                />


                {/* ESTRELAS */}

                <label>
                  Sua avaliação
                </label>

                <div className="reviews-form-stars">

                  {renderStars(
                    rating,
                    true
                  )}

                </div>


                {/* COMO CONHECEU */}

                <label htmlFor="review-discovery">
                  Como conheceu a Gallery Coffee?
                </label>

                <select
                  id="review-discovery"
                  value={discovery}
                  onChange={(event) =>
                    setDiscovery(event.target.value)
                  }
                >

                  <option value="">
                    Selecione uma opção
                  </option>

                  <option value="Instagram">
                    Instagram
                  </option>

                  <option value="Facebook">
                    Facebook
                  </option>

                  <option value="WhatsApp">
                    WhatsApp
                  </option>

                  <option value="Google">
                    Google
                  </option>

                  <option value="Recomendação de alguém">
                    Recomendação de alguém
                  </option>

                  <option value="Passei pelo local">
                    Passei pelo local
                  </option>

                  <option value="Outro">
                    Outro
                  </option>

                </select>


                {/* O QUE MAIS GOSTOU */}

                <label htmlFor="review-favorite">
                  O que mais gostou?
                </label>

                <select
                  id="review-favorite"
                  value={favorite}
                  onChange={(event) =>
                    setFavorite(event.target.value)
                  }
                >

                  <option value="">
                    Selecione uma opção
                  </option>

                  <option value="Café">
                    Café
                  </option>

                  <option value="Gastronomia">
                    Gastronomia
                  </option>

                  <option value="Bolos e doces">
                    Bolos e doces
                  </option>

                  <option value="Atividades artísticas">
                    Atividades artísticas
                  </option>

                  <option value="Ambiente">
                    Ambiente
                  </option>

                  <option value="Atendimento">
                    Atendimento
                  </option>

                  <option value="Experiência geral">
                    Experiência geral
                  </option>

                  <option value="Outro">
                    Outro
                  </option>

                </select>


                {/* RECOMENDAÇÃO */}

                <label>
                  Recomendaria a Gallery Coffee?
                </label>

                <div className="reviews-recommend-options">

                  <label className="reviews-radio">

                    <input
                      type="radio"
                      name="recommend"
                      value="Sim"
                      checked={recommend === "Sim"}
                      onChange={(event) =>
                        setRecommend(event.target.value)
                      }
                    />

                    <span>Sim</span>

                  </label>


                  <label className="reviews-radio">

                    <input
                      type="radio"
                      name="recommend"
                      value="Talvez"
                      checked={recommend === "Talvez"}
                      onChange={(event) =>
                        setRecommend(event.target.value)
                      }
                    />

                    <span>Talvez</span>

                  </label>


                  <label className="reviews-radio">

                    <input
                      type="radio"
                      name="recommend"
                      value="Não"
                      checked={recommend === "Não"}
                      onChange={(event) =>
                        setRecommend(event.target.value)
                      }
                    />

                    <span>Não</span>

                  </label>

                </div>


                {/* COMENTÁRIO */}

                <label htmlFor="review-comment">
                  Conte-nos sobre a sua experiência
                </label>

                <textarea
                  id="review-comment"
                  value={comment}
                  onChange={(event) =>
                    setComment(
                      event.target.value
                    )
                  }
                  placeholder="O que achou da sua experiência?"
                  rows="5"
                  maxLength={500}
                  required
                />


                <span className="reviews-character-count">
                  {comment.length}/500
                </span>


                {/* CONSENTIMENTO */}

                <label className="reviews-consent">

                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) =>
                      setConsent(
                        event.target.checked
                      )
                    }
                    required
                  />

                  <span>
                    Autorizo a Gallery Coffee a publicar
                    esta avaliação nesta página.
                  </span>

                </label>


                {/* BOTÃO */}

                <button
                  type="submit"
                  className="reviews-submit"
                >

                  Publicar avaliação

                  <span>
                    →
                  </span>

                </button>

              </form>

            </aside>

          </div>

        </div>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="reviews-footer">

        <div>

          <strong>
            Gallery Coffee
          </strong>

          <span>
            Café • Gastronomia • Arte
          </span>

        </div>

        <a href="/menu">
          Ver menu completo →
        </a>

      </footer>

    </div>
  );
}

export default Reviews;


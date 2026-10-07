
import { useState } from "react";
import { addToCart } from "../utils/cart";
import "./DishDetails.css";

/*
  ============================================================
  GALLERY COFFEE — DETALHES DO PRODUTO
  ============================================================

  IMPORTANTE:
  - Os dados abaixo correspondem ao menu real fornecido.
  - Não adicionar produtos que não estejam no menu real.
  - As imagens são ilustrativas.
  - Preços não disponíveis usam "A confirmar",
    "Por consulta" ou "Sob agendamento".
  ============================================================
*/

const categories = [
  {
    id: "pequeno-almoco",
    name: "Pequeno Almoço",
  },
  {
    id: "entradas",
    name: "Entradas",
  },
  {
    id: "sandes",
    name: "Sandes",
  },
  {
    id: "refeicoes",
    name: "Refeições / Pratos do Dia",
  },
  {
    id: "bolos-doces",
    name: "Bolos e Doces",
  },
  {
    id: "atividades-artisticas",
    name: "Atividades Artísticas",
  },
];

const menuItems = [
  // ==========================================================
  // PEQUENO ALMOÇO
  // ==========================================================

  {
    id: "torradas-simples",
    name: "Torradas Simples",
    description: "",
    price: 80,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "ovos-mexidos-torrada",
    name: "Ovos Mexidos e Torrada Simples",
    description: "",
    price: 170,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "salada-atum-torrada",
    name: "Salada de Atum e Torrada",
    description: "",
    price: 350,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "salada-vegetariana-torrada",
    name: "Salada Vegetariana e Torrada",
    description: "",
    price: 350,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "pequeno-almoco-gallery",
    name: "Pequeno-Almoço à Gallery",
    description: "",
    price: 400,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "torradas-ovo-abacate",
    name: "Torradas, Ovo e Abacate",
    description: "",
    price: 250,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // ENTRADAS
  // ==========================================================

  {
    id: "dose-chamussas",
    name: "Dose de Chamussas (4)",
    description: "",
    price: 300,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "pao-springroll",
    name: "Pão de Springroll (4)",
    description: "",
    price: 340,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1548507200-b5c0a2e8a8e9?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "brusquetas-tomate",
    name: "Brusquetas de Tomate (3)",
    description: "",
    price: 300,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "brusqueta-cebola-queijo",
    name: "Brusqueta de Cebola e Queijo (3)",
    description: "",
    price: 400,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "brusqueta-cogumelos",
    name: "Brusqueta de Cogumelos, Cebola e Queijo (3)",
    description: "",
    price: 340,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "frango-passarinho",
    name: "Frango à Passarinho",
    description: "",
    price: 350,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "farinha",
    name: "Farinha",
    description: "",
    price: 350,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "pao-alho",
    name: "Pão de Alho",
    description: "",
    price: 450,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "camarao-alhinho",
    name: "Camarão Alhinho c/ Torradas",
    description: "",
    price: 100,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // SANDES
  // ==========================================================

  {
    id: "tosta-queijo-fiambre",
    name: "Tosta Queijo / Fiambre",
    description: "",
    price: 180,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "tosta-mista",
    name: "Tosta Mista",
    description: "",
    price: 200,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "tosta-atum",
    name: "Tosta de Atum",
    description: "",
    price: 240,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "tosta-ovo",
    name: "Tosta de Ovo",
    description: "",
    price: 240,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "prego-simples",
    name: "Prego Simples",
    description: "",
    price: 250,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "prego-completo",
    name: "Prego Completo",
    description: "",
    price: 450,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "hamburguer-simples",
    name: "Hambúrguer Simples",
    description: "",
    price: 200,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "hamburguer-completo",
    name: "Hambúrguer Completo",
    description: "",
    price: 300,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "cachorro-completo",
    name: "Cachorro Completo",
    description: "",
    price: 400,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "sandes-frango",
    name: "Sandes de Frango",
    description: "",
    price: 300,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // REFEIÇÕES / PRATOS DO DIA
  // ==========================================================

  {
    id: "pratos-do-dia",
    name: "Pratos do Dia",
    description:
      "Pratos do dia disponíveis por consulta.",
    price: null,
    priceLabel: "Por consulta",
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "frango-grelhado-quarto",
    name: "¼ Frango Grelhado",
    description: "",
    price: 250,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "frango-grelhado-meio",
    name: "½ Frango Grelhado",
    description: "",
    price: 450,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "frango-grelhado-inteiro",
    name: "Frango Grelhado Inteiro",
    description: "",
    price: 900,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "t-bone",
    name: "T-Bone",
    description: "",
    price: 550,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bife-grelhado",
    name: "Bife Grelhado",
    description: "",
    price: 450,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bife-fe-frango-prato",
    name: "Bife FE Frango no Prato",
    description: "",
    price: 300,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "arroz",
    name: "Arroz",
    description: "",
    price: 80,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "sopa-do-dia",
    name: "Sopa do Dia",
    description: "",
    price: 150,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "legumes",
    name: "Legumes",
    description: "",
    price: 100,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "batata",
    name: "Batata",
    description: "",
    price: 130,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "pizza-media",
    name: "Pizza Média",
    description: "",
    price: 550,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // BOLOS E DOCES
  // ==========================================================

  {
    id: "pastel-natas",
    name: "Pastel de Natas",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "palmiers",
    name: "Palmiers",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-do-dia",
    name: "Bolo do Dia",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "tarte-amendoim",
    name: "Tarte de Amendoim",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolas-berlim",
    name: "Bolas de Berlim",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "pao-deus-mini",
    name: "Pão de Deus Mini",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "gulabos",
    name: "Gulabos",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "cocada",
    name: "Cocada",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "cupcakes",
    name: "Cupcakes",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "biscoitos",
    name: "Biscoitos",
    description: "",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // BOLOS INTEIROS — POR ENCOMENDA
  // ==========================================================

  {
    id: "chiffon-chocolate",
    name: "Chiffon de Chocolate",
    description: "Bolo inteiro por encomenda.",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-massa-folhada",
    name: "Bolo de Massa Folhada",
    description: "Bolo inteiro por encomenda.",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-custard",
    name: "Bolo de Custard",
    description: "Bolo inteiro por encomenda.",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-brigadeiro",
    name: "Bolo Brigadeiro",
    description: "Bolo inteiro por encomenda.",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-laranja",
    name: "Bolo de Laranja",
    description: "Bolo inteiro por encomenda.",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-caramelo-rum",
    name: "Bolo de Caramelo e Rum",
    description: "Bolo inteiro por encomenda.",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  {
    id: "bolo-maracuja",
    name: "Bolo de Maracujá",
    description: "Bolo inteiro por encomenda.",
    price: null,
    priceLabel: "A confirmar",
    category: "bolos-doces",
    day: "",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
  },

  // ==========================================================
  // ATIVIDADES ARTÍSTICAS
  // ==========================================================

  {
    id: "pintura-tela-pequena",
    name: "Pintura livre em Tela (Óleo) — Tela Pequena",
    description:
      "Inclui tintas, pincéis e uso do espaço.",
    price: 450,
    category: "atividades-artisticas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
    artistic: true,
  },

  {
    id: "pintura-tela-media",
    name: "Pintura livre em Tela (Óleo) — Tela Média",
    description:
      "Inclui tintas, pincéis e uso do espaço.",
    price: 650,
    category: "atividades-artisticas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
    artistic: true,
  },

  {
    id: "pintura-papel",
    name: "Pintura em Papel",
    description:
      "Desenhos à escolha + lápis de cor e aquarela.",
    price: 350,
    category: "atividades-artisticas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
    artistic: true,
  },

  {
    id: "pintura-chavenas",
    name: "Pintura em Chávenas (Porcelana)",
    description:
      "Jogos de chávena espresso ou chá. Inclui chávena, personalização e forno. Desconto de 5% se deixar para exposição.",
    price: 1200,
    category: "atividades-artisticas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
    artistic: true,
  },

  {
    id: "workshops-artististicos",
    name: "Experiências e Workshops Artísticos",
    description:
      "Sob agendamento. Inclui workshops de pintura em telas, bijuteria, bordados, cerâmica, escultura e arte em resina.",
    price: null,
    priceLabel: "Sob agendamento",
    category: "atividades-artisticas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=85",
    available: true,
    illustrative: true,
    artistic: true,
  },
];

/*
  ============================================================
  FUNÇÕES AUXILIARES
  ============================================================
*/

const fallbackImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85";

function getCategoryName(categoryId) {
  const category = categories.find(
    (item) => item.id === categoryId
  );

  return category?.name || "Menu";
}

function formatPrice(price, priceLabel) {
  if (priceLabel) {
    return priceLabel;
  }

  if (
    price === null ||
    price === undefined
  ) {
    return "Preço a confirmar";
  }

  return `${Number(price).toLocaleString(
    "pt-MZ"
  )} MT`;
}

function getItemIdFromUrl() {
  const path = window.location.pathname;

  const parts = path.split("/").filter(Boolean);

  const menuIndex = parts.indexOf("menu");

  if (
    menuIndex === -1 ||
    !parts[menuIndex + 1]
  ) {
    return null;
  }

  return parts[menuIndex + 1];
}

/*
  ============================================================
  COMPONENTE
  ============================================================
*/

function DishDetails() {
  const itemId = getItemIdFromUrl();

  const item = menuItems.find(
    (menuItem) =>
      menuItem.id === itemId
  );

  const [quantity, setQuantity] =
    useState(1);

  /*
    ==========================================================
    WHATSAPP
    ==========================================================
  */

  const whatsappNumber = "258860111210";

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer um pedido na Gallery Coffee."
  );

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  /*
    ==========================================================
    PRODUTO NÃO ENCONTRADO
    ==========================================================
  */

  if (!item) {
    return (
      <div className="dish-details-page">

        <header className="dish-details-header">
          <a
            href="/"
            className="dish-details-brand"
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
            className="dish-details-menu-link"
          >
            Ver menu
          </a>
        </header>

        <main className="dish-details-not-found">
          <span className="dish-details-not-found-icon">
            🍽️
          </span>

          <span className="dish-details-eyebrow">
            GALLERY COFFEE
          </span>

          <h1>
            Opção não encontrada
          </h1>

          <p>
            A opção que procura não está
            disponível neste momento.
          </p>

          <a
            href="/menu"
            className="dish-details-back-button"
          >
            ← Voltar ao menu
          </a>
        </main>

        <footer className="dish-details-footer">
          <div>
            <strong>
              GALLERY COFFEE
            </strong>

            <span>
              Café • Gastronomia • Arte
            </span>
          </div>

          <a href="/">
            Página inicial
          </a>
        </footer>

      </div>
    );
  }

  /*
    ==========================================================
    QUANTIDADE
    ==========================================================
  */

  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity((current) =>
      Math.min(99, current + 1)
    );
  };

  /*
    ==========================================================
    ADICIONAR AO CARRINHO
    ==========================================================

    Fluxo:
    1. Adiciona o produto ao carrinho.
    2. Mantém a quantidade escolhida.
    3. Leva o cliente para /cart.
    
    Não usamos react-router-dom porque o projeto
    não possui essa dependência instalada.
  */

  const handleAddToCart = () => {
    if (!item.available) return;

    addToCart(item, quantity);

    window.location.href = "/cart";
  };

  /*
    ==========================================================
    RENDER
    ==========================================================
  */

  return (
    <div className="dish-details-page">

      {/* ====================================================
          HEADER
      ==================================================== */}

      <header className="dish-details-header">

        <a
          href="/"
          className="dish-details-brand"
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
          className="dish-details-menu-link"
        >
          Ver menu
        </a>

      </header>

      {/* ====================================================
          MAIN
      ==================================================== */}

      <main className="dish-details-main">

        {/* VOLTAR */}

        <a
          href="/menu"
          className="dish-details-back"
        >
          ← Voltar ao menu
        </a>

        <section className="dish-details-card">

          {/* ==================================================
              IMAGEM
          ================================================== */}

          <div className="dish-details-image-column">

            <div className="dish-details-image-wrapper">

              <img
                src={
                  item.image ||
                  fallbackImage
                }
                alt={item.name}
                className="dish-details-image"
                onError={(event) => {
                  if (
                    event.currentTarget.dataset
                      .fallbackApplied
                  ) {
                    return;
                  }

                  event.currentTarget.dataset
                    .fallbackApplied = "true";

                  event.currentTarget.src =
                    fallbackImage;
                }}
              />

              {item.illustrative && (
                <span className="dish-details-image-badge">
                  Imagem ilustrativa
                </span>
              )}

            </div>

          </div>

          {/* ==================================================
              INFORMAÇÃO
              ================================================== */}

          <div className="dish-details-info">

            <div className="dish-details-meta">

              <span className="dish-details-category">
                {getCategoryName(
                  item.category
                )}
              </span>

              {item.artistic && (
                <span className="dish-details-artistic">
                  EXPERIÊNCIA ARTÍSTICA
                </span>
              )}

            </div>

            <h1>
              {item.name}
            </h1>

            <div className="dish-details-rule" />

            <div className="dish-details-price">
              {formatPrice(
                item.price,
                item.priceLabel
              )}
            </div>

            {item.description && (
              <div className="dish-details-description">

                <span>
                  SOBRE ESTA OPÇÃO
                </span>

                <p>
                  {item.description}
                </p>

              </div>
            )}

            {item.day && (
              <div className="dish-details-day">
                <span>
                  DISPONIBILIDADE
                </span>

                <strong>
                  {item.day}
                </strong>
              </div>
            )}

            {/* =================================================
                PEDIDO
                ================================================= */}

            <div className="dish-details-order">

              {item.available ? (

                <>
                  <div className="dish-details-quantity">

                    <span>
                      Quantidade
                    </span>

                    <div className="dish-details-quantity-control">

                      <button
                        type="button"
                        onClick={
                          decreaseQuantity
                        }
                        aria-label="Diminuir quantidade"
                      >
                        −
                      </button>

                      <strong>
                        {quantity}
                      </strong>

                      <button
                        type="button"
                        onClick={
                          increaseQuantity
                        }
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <button
                    type="button"
                    className="dish-details-add-button"
                    onClick={
                      handleAddToCart
                    }
                  >
                    Adicionar ao pedido
                  </button>

                </>

              ) : (

                <div className="dish-details-unavailable">
                  Indisponível neste momento.
                </div>

              )}

            </div>

            {/* =================================================
                WHATSAPP
                ================================================= */}

            <div className="dish-details-whatsapp">

              <div>
                <span>
                  PRECISA DE AJUDA?
                </span>

                <p>
                  Fale connosco pelo WhatsApp
                  para confirmar disponibilidade
                  ou fazer o seu pedido.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* ====================================================
          FOOTER
      ==================================================== */}

      <footer className="dish-details-footer">

        <div>
          <strong>
            GALLERY COFFEE
          </strong>

          <span>
            Café • Gastronomia • Arte
          </span>
        </div>

        <a href="/">
          Página inicial
        </a>

      </footer>

    </div>
  );
}

export default DishDetails;


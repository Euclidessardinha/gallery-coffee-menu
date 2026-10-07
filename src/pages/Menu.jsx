
import { useEffect, useMemo, useState } from "react";
import { addToCart, getCart } from "../utils/cart";
import "./Menu.css";

const categories = [
  {
    id: "pequeno-almoco",
    name: "Pequeno Almoço",
    icon: "☕",
  },
  {
    id: "entradas",
    name: "Entradas",
    icon: "🥗",
  },
  {
    id: "sandes",
    name: "Sandes",
    icon: "🥪",
  },
  {
    id: "refeicoes",
    name: "Refeições / Pratos do Dia",
    icon: "🍽️",
  },
  {
    id: "bolos-doces",
    name: "Bolos e Doces",
    icon: "🍰",
  },
  {
    id: "atividades-artisticas",
    name: "Atividades Artísticas",
    icon: "🎨",
  },
];

/*
  ============================================================
  GALLERY COFFEE — MENU DIGITAL
  ============================================================

  Nesta primeira versão:
  - Mantemos apenas algumas opções para o menu ficar mais leve.
  - Os produtos continuam baseados no menu real fornecido.
  - As imagens são ilustrativas.
  - As fotografias poderão ser substituídas posteriormente.
  - Os restantes produtos podem ser adicionados sem alterar
    a estrutura do componente.

  IMPORTANTE:
  - Não adicionar produtos que não estejam no menu real.
  - Quando o preço não estiver disponível, mostrar
    "Por consulta" ou "A confirmar".
  ============================================================
*/

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
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "ovos-mexidos-torrada",
    name: "Ovos Mexidos e Torrada Simples",
    description: "",
    price: 170,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "pequeno-almoco-gallery",
    name: "Pequeno-Almoço à Gallery",
    description: "",
    price: 400,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "salada-atum-torrada",
    name: "Salada de Atum e Torrada",
    description: "",
    price: 350,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "salada-vegetariana-torrada",
    name: "Salada Vegetariana e Torrada",
    description: "",
    price: 350,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "torradas-ovo-abacate",
    name: "Torradas, Ovo e Abacate",
    description: "",
    price: 250,
    category: "pequeno-almoco",
    day: "",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "brusquetas-tomate",
    name: "Brusquetas de Tomate (3)",
    description: "",
    price: 300,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "pao-alho",
    name: "Pão de Alho",
    description: "",
    price: 450,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "pao-springroll",
    name: "Pão de Springroll (4)",
    description: "",
    price: 340,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1548507200-b5c0a2e8a8e9?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "brusqueta-cebola-queijo",
    name: "Brusqueta de Cebola e Queijo (3)",
    description: "",
    price: 400,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "brusqueta-cogumelos",
    name: "Brusqueta de Cogumelos, Cebola e Queijo (3)",
    description: "",
    price: 340,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "frango-passarinho",
    name: "Frango à Passarinho",
    description: "",
    price: 350,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "farinha",
    name: "Farinha",
    description: "",
    price: 350,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "camarao-alhinho",
    name: "Camarão Alhinho c/ Torradas",
    description: "",
    price: 100,
    category: "entradas",
    day: "",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "prego-completo",
    name: "Prego Completo",
    description: "",
    price: 450,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "hamburguer-completo",
    name: "Hambúrguer Completo",
    description: "",
    price: 300,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "tosta-mista",
    name: "Tosta Mista",
    description: "",
    price: 200,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "tosta-atum",
    name: "Tosta de Atum",
    description: "",
    price: 240,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "tosta-ovo",
    name: "Tosta de Ovo",
    description: "",
    price: 240,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "prego-simples",
    name: "Prego Simples",
    description: "",
    price: 250,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "hamburguer-simples",
    name: "Hambúrguer Simples",
    description: "",
    price: 200,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "cachorro-completo",
    name: "Cachorro Completo",
    description: "",
    price: 400,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "sandes-frango",
    name: "Sandes de Frango",
    description: "",
    price: 300,
    category: "sandes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "frango-grelhado-quarto",
    name: "¼ Frango Grelhado",
    description: "",
    price: 250,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "t-bone",
    name: "T-Bone",
    description: "",
    price: 550,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "pizza-media",
    name: "Pizza Média",
    description: "",
    price: 550,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
  },

  {
    id: "frango-grelhado-meio",
    name: "½ Frango Grelhado",
    description: "",
    price: 450,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "frango-grelhado-inteiro",
    name: "Frango Grelhado Inteiro",
    description: "",
    price: 900,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "bife-grelhado",
    name: "Bife Grelhado",
    description: "",
    price: 450,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "bife-fe-frango-prato",
    name: "Bife FE Frango no Prato",
    description: "",
    price: 300,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "arroz",
    name: "Arroz",
    description: "",
    price: 80,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "sopa-do-dia",
    name: "Sopa do Dia",
    description: "",
    price: 150,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "legumes",
    name: "Legumes",
    description: "",
    price: 100,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
  },

  {
    id: "batata",
    name: "Batata",
    description: "",
    price: 130,
    category: "refeicoes",
    day: "",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
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
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: true,
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
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1562007908-17c67e878c88?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1583182332473-b31ba08929c8?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    artistic: true,
    featured: true,
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
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    artistic: true,
    featured: true,
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
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    artistic: true,
    featured: true,
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
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    artistic: true,
    featured: false,
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
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=85",
    available: true,
    illustrative: true,
    artistic: true,
    featured: false,
  },
];

/*
  ============================================================
  IMAGEM DE RESERVA
  ============================================================

  Caso uma imagem externa não carregue, usamos uma imagem
  simples e confiável do Unsplash como fallback.
*/

const fallbackImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85";

function Menu() {
  const [activeCategory, setActiveCategory] =
    useState("todos");

  const [search, setSearch] = useState("");

  const [cartCount, setCartCount] = useState(0);

  const [addedItemId, setAddedItemId] =
    useState(null);

  const [showCartNotice, setShowCartNotice] =
    useState(false);

  /*
    ==========================================================
    CARREGAR CARRINHO
    ==========================================================
  */

  useEffect(() => {
    const cart = getCart();

    const count = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    setCartCount(count);
  }, []);

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
    FORMATAÇÃO DE PREÇO
    ==========================================================
  */

  const formatPrice = (price, priceLabel) => {
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
  };

  /*
    ==========================================================
    ADICIONAR AO CARRINHO
    ==========================================================
  */

  const handleAddToCart = (item) => {
    if (!item.available) return;

    const updatedCart = addToCart(item, 1);

    const count = updatedCart.reduce(
      (sum, cartItem) =>
        sum + cartItem.quantity,
      0
    );

    setCartCount(count);

    setAddedItemId(item.id);

    setShowCartNotice(true);

    setTimeout(() => {
      setAddedItemId(null);
    }, 1500);

    setTimeout(() => {
      setShowCartNotice(false);
    }, 4000);
  };

  /*
    ==========================================================
    NOME DA CATEGORIA
    ==========================================================
  */

  const getCategoryName = (categoryId) => {
    const category = categories.find(
      (item) => item.id === categoryId
    );

    return category?.name || "Menu";
  };

  /*
    ==========================================================
    FILTRAR PRODUTOS
    ==========================================================

    "Todos" mostra apenas os produtos marcados como
    featured: true.

    Ao entrar numa categoria específica, mostramos apenas
    os produtos featured dessa categoria.

    Isto permite manter o menu inicial pequeno e,
    posteriormente, ativar outros produtos sem reconstruir
    o componente.
  */

  const filteredItems = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "todos"
          ? item.featured === true
          : item.category === activeCategory &&
            item.featured === true;

      const itemName =
        item.name?.toLowerCase() || "";

      const itemDescription =
        item.description?.toLowerCase() || "";

      const itemDay =
        item.day?.toLowerCase() || "";

      const matchesSearch =
        !normalizedSearch ||
        itemName.includes(normalizedSearch) ||
        itemDescription.includes(
          normalizedSearch
        ) ||
        itemDay.includes(normalizedSearch);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [activeCategory, search]);

  /*
    ==========================================================
    CARD DO PRODUTO
    ==========================================================
  */

  const renderDishCard = (item) => (
    <article
      className="menu-dish-card"
      key={item.id}
    >
      {/* IMAGEM */}

      <div className="menu-dish-image">
        <a
          href={`/menu/${item.id}`}
          className="menu-dish-image-link"
          aria-label={`Ver detalhes de ${item.name}`}
        >
          <img
            src={item.image || fallbackImage}
            alt={item.name}
            loading="lazy"
            onError={(event) => {
              if (
                event.currentTarget.dataset.fallbackApplied
              ) {
                return;
              }

              event.currentTarget.dataset.fallbackApplied =
                "true";

              event.currentTarget.src =
                fallbackImage;

              event.currentTarget.style.opacity =
                "1";
            }}
          />
        </a>

        <span className="menu-dish-category">
          {getCategoryName(item.category)}
        </span>

        <button
          type="button"
          className="menu-dish-add"
          disabled={!item.available}
          onClick={() =>
            handleAddToCart(item)
          }
          aria-label={`Adicionar ${item.name} ao carrinho`}
        >
          {addedItemId === item.id
            ? "✓"
            : "+"}
        </button>
      </div>

      {/* CONTEÚDO */}

      <div className="menu-dish-content">
        {item.illustrative ? (
          <span className="menu-dish-day">
            Imagem ilustrativa
          </span>
        ) : (
          item.day && (
            <span className="menu-dish-day">
              {item.day}
            </span>
          )
        )}

        <h3>{item.name}</h3>

        {item.description && (
          <p>{item.description}</p>
        )}

        <div className="menu-dish-footer">
          <strong>
            {formatPrice(
              item.price,
              item.priceLabel
            )}
          </strong>

          <a
            href={`/menu/${item.id}`}
          >
            Ver detalhe
          </a>
        </div>
      </div>
    </article>
  );

  /*
    ==========================================================
    RENDER
    ==========================================================
  */

  return (
    <div className="menu-page">

      {/* ====================================================
          HEADER
      ==================================================== */}

      <header className="menu-header">
        <a
          href="/"
          className="menu-brand"
        >
          <img
            src="/logo-gallery-coffee.png"
            alt="Gallery Coffee"
          />

          <div className="menu-brand-text">
            <strong>
              Gallery Coffee
            </strong>

            <span>
              Café • Gastronomia • Arte
            </span>
          </div>
        </a>

        <div className="menu-header-actions">
          <a
            href="/cart"
            className="menu-cart-link"
            aria-label="Carrinho"
          >
            🛒

            {cartCount > 0 && (
              <span className="menu-cart-count">
                {cartCount}
              </span>
            )}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="menu-whatsapp-button"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* ====================================================
          CART NOTICE
      ==================================================== */}

      {showCartNotice &&
        cartCount > 0 && (
          <div className="menu-cart-notice">
            <span>
              ✓ Item adicionado ao pedido
            </span>

            <a href="/cart">
              Ver pedido ({cartCount})
            </a>
          </div>
        )}

      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="menu-intro">
        <span className="menu-intro-label">
          GALLERY COFFEE
        </span>

        <h1>
          O nosso <span>Menu</span>
        </h1>

        <p>
          Gastronomia, café e arte.
        </p>

        <div className="menu-intro-badge">
          Explore as nossas opções
        </div>
      </section>

      {/* ====================================================
          MAIN
      ==================================================== */}

      <main className="menu-content">

        {/* ==================================================
            SEARCH
        ================================================== */}

        <section className="menu-search-section">
          <div className="menu-search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Pesquisar no menu..."
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
            />

            {search && (
              <button
                type="button"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Limpar pesquisa"
              >
                ×
              </button>
            )}
          </div>
        </section>

        {/* ==================================================
            CATEGORIES
        ================================================== */}

        <section className="menu-categories">
          <div className="menu-section-heading">
            <span>
              EXPLORE
            </span>

            <h2>
              Escolha uma categoria
            </h2>

            <p>
              Encontre rapidamente o que procura.
            </p>
          </div>

          <div className="menu-category-list">

            {/* TODOS */}

            <button
              type="button"
              className={`menu-category-button ${
                activeCategory === "todos"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveCategory("todos")
              }
            >
              <span className="menu-category-icon">
                🍽️
              </span>

              <span>
                Todos
              </span>
            </button>

            {/* CATEGORIAS */}

            {categories.map(
              (category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`menu-category-button ${
                    activeCategory ===
                    category.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(
                      category.id
                    )
                  }
                >
                  <span className="menu-category-icon">
                    {category.icon}
                  </span>

                  <span>
                    {category.name}
                  </span>
                </button>
              )
            )}
          </div>
        </section>

        {/* ==================================================
            RESULTS
        ================================================== */}

        <section className="menu-results">

          <div className="menu-results-heading">
            <div>
              <span>
                GALLERY COFFEE
              </span>

              <h2>
                {activeCategory ===
                "todos"
                  ? "Seleção do Menu"
                  : getCategoryName(
                      activeCategory
                    )}
              </h2>
            </div>

            <small>
              {filteredItems.length}{" "}
              {filteredItems.length ===
              1
                ? "opção"
                : "opções"}
            </small>
          </div>

          {/* =================================================
              RESULTADOS
          ================================================= */}

          {filteredItems.length >
          0 ? (

            <div className="menu-dishes-grid">
              {filteredItems.map(
                (item) =>
                  renderDishCard(item)
              )}
            </div>

          ) : (

            <div className="menu-empty">
              <span>
                🍽️
              </span>

              <h3>
                Nenhuma opção encontrada.
              </h3>

              <p>
                Tente pesquisar por outro
                nome ou escolha outra
                categoria.
              </p>
            </div>
          )}

        </section>

        {/* ==================================================
            ATIVIDADES ARTÍSTICAS
        ================================================== */}

        {activeCategory ===
          "atividades-artisticas" && (
          <section className="menu-whatsapp-section">
            <div>
              <span>
                EXPERIÊNCIAS ARTÍSTICAS
              </span>

              <h2>
                Arte, criatividade e experiência.
              </h2>

              <p>
                Algumas experiências e workshops
                artísticos funcionam sob agendamento.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="menu-whatsapp-cta"
            >
              Saber mais pelo WhatsApp
            </a>
          </section>
        )}

        {/* ==================================================
            WHATSAPP
        ================================================== */}

        <section className="menu-whatsapp-section">
          <div>
            <span>
              FAÇA O SEU PEDIDO
            </span>

            <h2>
              Encontrou o que procura?
            </h2>

            <p>
              Entre em contacto connosco
              pelo WhatsApp para fazer o
              seu pedido.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="menu-whatsapp-cta"
          >
            Pedir pelo WhatsApp
          </a>
        </section>

      </main>

      {/* ====================================================
          FOOTER
      ==================================================== */}

      <footer className="menu-footer">
        <div>
          <strong>
            GALLERY COFFEE
          </strong>

          <span>
            Café • Gastronomia • Arte
          </span>
        </div>

        <a href="/">
          ← Página inicial
        </a>
      </footer>

    </div>
  );
}

export default Menu;


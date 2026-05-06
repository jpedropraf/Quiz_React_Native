import type { Question } from "@app-types/Question";


export const questions: Question[] = [
  {
    id: 1,
    question: "Qual país tem a capital chamada Tóquio?",
    options: [
      { id: "a", type: "text", text: "China" },
      { id: "b", type: "text", text: "Japão" },
      { id: "c", type: "text", text: "Coreia do Sul" },
      { id: "d", type: "text", text: "Tailândia" }
    ],
    correctOptionId: "b",
    explanation: "Tóquio é a capital do Japão."
  },
  {
    id: 2,
    question: "Qual dessas bandeiras pertence ao Brasil?",
    options: [
      { id: "a", type: "image", imageUrl: "https://flagcdn.com/w320/ar.png" },
      { id: "b", type: "image", imageUrl: "https://flagcdn.com/w320/br.png" },
      { id: "c", type: "image", imageUrl: "https://flagcdn.com/w320/mx.png" },
      { id: "d", type: "image", imageUrl: "https://flagcdn.com/w320/it.png" }
    ],
    correctOptionId: "b",
    explanation: "A bandeira do Brasil é verde com losango amarelo e círculo azul."
  },
  {
    id: 3,
    question: "Qual é o maior país do mundo em área territorial?",
    options: [
      { id: "a", type: "text", text: "Canadá" },
      { id: "b", type: "text", text: "Estados Unidos" },
      { id: "c", type: "text", text: "Rússia" },
      { id: "d", type: "text", text: "China" }
    ],
    correctOptionId: "c",
    explanation: "A Rússia é o maior país do mundo em extensão territorial."
  },
  {
    id: 4,
    question: "Qual dessas bandeiras pertence à Alemanha?",
    options: [
      { id: "a", type: "image", imageUrl: "https://flagcdn.com/w320/de.png" },
      { id: "b", type: "image", imageUrl: "https://flagcdn.com/w320/be.png" },
      { id: "c", type: "image", imageUrl: "https://flagcdn.com/w320/es.png" },
      { id: "d", type: "image", imageUrl: "https://flagcdn.com/w320/nl.png" }
    ],
    correctOptionId: "a",
    explanation: "A bandeira da Alemanha é preta, vermelha e amarela (ouro)."
  },
  {
    id: 5,
    question: "Qual país é conhecido como 'Terra do Sol Nascente'?",
    options: [
      { id: "a", type: "text", text: "China" },
      { id: "b", type: "text", text: "Japão" },
      { id: "c", type: "text", text: "Índia" },
      { id: "d", type: "text", text: "Vietnã" }
    ],
    correctOptionId: "b",
    explanation: "O Japão é conhecido como a Terra do Sol Nascente."
  },
  {
    id: 6,
    question: "Qual é a capital da Austrália?",
    options: [
      { id: "a", type: "text", text: "Sydney" },
      { id: "b", type: "text", text: "Melbourne" },
      { id: "c", type: "text", text: "Canberra" },
      { id: "d", type: "text", text: "Perth" }
    ],
    correctOptionId: "c",
    explanation: "Canberra é a capital oficial da Austrália."
  },
  {
    id: 7,
    question: "Qual dessas bandeiras pertence ao Canadá?",
    options: [
      { id: "a", type: "image", imageUrl: "https://flagcdn.com/w320/ca.png" },
      { id: "b", type: "image", imageUrl: "https://flagcdn.com/w320/us.png" },
      { id: "c", type: "image", imageUrl: "https://flagcdn.com/w320/dk.png" },
      { id: "d", type: "image", imageUrl: "https://flagcdn.com/w320/at.png" }
    ],
    correctOptionId: "a",
    explanation: "A bandeira do Canadá tem a folha de bordo vermelha no centro."
  },
  {
    id: 8,
    question: "Em qual continente fica o Egito?",
    options: [
      { id: "a", type: "text", text: "Ásia" },
      { id: "b", type: "text", text: "África" },
      { id: "c", type: "text", text: "Europa" },
      { id: "d", type: "text", text: "Oceania" }
    ],
    correctOptionId: "b",
    explanation: "O Egito está localizado no nordeste da África."
  },
  {
    id: 9,
    question: "Qual é o maior oceano do planeta?",
    options: [
      { id: "a", type: "text", text: "Atlântico" },
      { id: "b", type: "text", text: "Índico" },
      { id: "c", type: "text", text: "Pacífico" },
      { id: "d", type: "text", text: "Ártico" }
    ],
    correctOptionId: "c",
    explanation: "O Oceano Pacífico é o maior oceano da Terra."
  },
  {
    id: 10,
    question: "Qual dessas bandeiras pertence à França?",
    options: [
      { id: "a", type: "image", imageUrl: "https://flagcdn.com/w320/it.png" },
      { id: "b", type: "image", imageUrl: "https://flagcdn.com/w320/ie.png" },
      { id: "c", type: "image", imageUrl: "https://flagcdn.com/w320/fr.png" },
      { id: "d", type: "image", imageUrl: "https://flagcdn.com/w320/lu.png" }
    ],
    correctOptionId: "c",
    explanation: "A bandeira da França tem três faixas verticais: azul, branca e vermelha."
  },
  {
    id: 11,
    question: "Qual país é atravessado pela Linha do Equador?",
    options: [
      { id: "a", type: "text", text: "Chile" },
      { id: "b", type: "text", text: "Equador" },
      { id: "c", type: "text", text: "Portugal" },
      { id: "d", type: "text", text: "Mongólia" }
    ],
    correctOptionId: "b",
    explanation: "A própria origem do nome Equador está ligada à Linha do Equador."
  },
  {
    id: 12,
    question: "Qual é a capital da Argentina?",
    options: [
      { id: "a", type: "text", text: "Rosário" },
      { id: "b", type: "text", text: "Córdoba" },
      { id: "c", type: "text", text: "Mendoza" },
      { id: "d", type: "text", text: "Buenos Aires" }
    ],
    correctOptionId: "d",
    explanation: "Buenos Aires é a capital e a cidade mais populosa da Argentina."
  },
  {
    id: 13,
    question: "Qual dessas bandeiras pertence à Índia?",
    options: [
      { id: "a", type: "image", imageUrl: "https://flagcdn.com/w320/in.png" },
      { id: "b", type: "image", imageUrl: "https://flagcdn.com/w320/ne.png" },
      { id: "c", type: "image", imageUrl: "https://flagcdn.com/w320/bd.png" },
      { id: "d", type: "image", imageUrl: "https://flagcdn.com/w320/ir.png" }
    ],
    correctOptionId: "a",
    explanation: "A bandeira da Índia tem as cores açafrão, branca e verde, com a roda azul no centro."
  },
  {
    id: 14,
    question: "Qual país faz fronteira com o Brasil?",
    options: [
      { id: "a", type: "text", text: "Chile" },
      { id: "b", type: "text", text: "México" },
      { id: "c", type: "text", text: "Uruguai" },
      { id: "d", type: "text", text: "Equador" }
    ],
    correctOptionId: "c",
    explanation: "O Uruguai faz fronteira ao sul do Brasil."
  },
  {
    id: 15,
    question: "Qual é o deserto mais quente do mundo?",
    options: [
      { id: "a", type: "text", text: "Gobi" },
      { id: "b", type: "text", text: "Saara" },
      { id: "c", type: "text", text: "Atacama" },
      { id: "d", type: "text", text: "Kalahari" }
    ],
    correctOptionId: "b",
    explanation: "O Saara é o maior deserto quente do mundo."
  }
];

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
  }
];
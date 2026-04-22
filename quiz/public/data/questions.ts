export interface QuestionOption {
  text?: string;
  imgUrlOption?: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  imgUrlQuestion?: string;
  explanation?: string; // opcional, útil depois para feedback
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Qual é o principal gás responsável pelo efeito estufa?",
    options: [
      { text: "Oxigênio", isCorrect: false },
      { text: "Nitrogênio", isCorrect: false },
      { text: "Dióxido de carbono", isCorrect: true },
      { text: "Hélio", isCorrect: false },
    ],
    explanation: "O CO₂ é o principal gás ligado ao efeito estufa.",
  },
  {
    id: 2,
    question: "Qual camada da Terra onde vivemos?",
    options: [
      { text: "Núcleo", isCorrect: false },
      { text: "Manto", isCorrect: false },
      { text: "Crosta", isCorrect: true },
      { text: "Atmosfera", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Como se chama o estudo dos mapas?",
    options: [
      { text: "Geologia", isCorrect: false },
      { text: "Cartografia", isCorrect: true },
      { text: "Meteorologia", isCorrect: false },
      { text: "Oceanografia", isCorrect: false },
    ],
  },
];
export type QuestionOption =
  | {
      id: string;
      type: "text";
      text: string;
    }
  | {
      id: string;
      type: "image";
      imageUrl: string;
    };

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
  correctOptionId: string;
  imageUrl?: string;
  explanation?: string;
}
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { QuizAnswer } from '../types/quiz';

type QuizContextType = {
  answeredQuestions: QuizAnswer[];
  addAnsweredQuestion: (answer: QuizAnswer) => void;
};

const QuizContext = createContext<QuizContextType>({
  answeredQuestions: [],
  addAnsweredQuestion: () => {},
});

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<QuizAnswer[]>([]);

  const addAnsweredQuestion = (answer: QuizAnswer) => {
    setAnsweredQuestions([...answeredQuestions, answer]);
  };

  const context = useMemo(() => {
    return {
      answeredQuestions,
      addAnsweredQuestion,
    };
  }, []);
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);

export default QuizProvider;

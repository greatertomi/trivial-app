import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import { QuizAnswer, QuizQuestion } from '../types/quiz';

type QuizContextType = {
  answeredQuestions: QuizAnswer[];
  addAnsweredQuestion: (answer: QuizAnswer) => void;
  quizQuestions: QuizQuestion[];
  quizLoading: boolean;
  quizError: any;
  resetAnsweredQuestions: () => void;
};

const QuizContext = createContext<QuizContextType>({
  answeredQuestions: [],
  addAnsweredQuestion: () => {},
  quizQuestions: [],
  quizLoading: false,
  quizError: null,
  resetAnsweredQuestions: () => {},
});

const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<QuizAnswer[]>([]);
  const { isLoading, error, data } = useQuery('quizQuestions', () =>
    fetch(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    ).then((res) => res.json())
  );

  const addAnsweredQuestion = (answer: QuizAnswer) => {
    setAnsweredQuestions([...answeredQuestions, answer]);
  };

  const resetAnsweredQuestions = () => setAnsweredQuestions([]);

  const context = useMemo(() => {
    return {
      answeredQuestions,
      addAnsweredQuestion,
      quizQuestions: data?.results,
      quizLoading: isLoading,
      quizError: error,
      resetAnsweredQuestions,
    };
  }, [data?.results, answeredQuestions]);
  return (
    <QuizContext.Provider value={context}>{children}</QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);

export default QuizProvider;

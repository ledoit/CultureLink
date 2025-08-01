import { useState } from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string | string[]) => void;
  showResult: boolean;
  userAnswer?: string | string[];
}

const QuizQuestion = ({ question, onAnswer, showResult, userAnswer }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>(userAnswer || '');

  const handleMultipleChoice = (option: string) => {
    setSelectedAnswer(option);
    onAnswer(option);
  };

  const handleTrueFalse = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  const isCorrect = () => {
    if (Array.isArray(question.correctAnswer)) {
      return Array.isArray(selectedAnswer) && 
        question.correctAnswer.every(ans => selectedAnswer.includes(ans));
    }
    return selectedAnswer === question.correctAnswer;
  };

  const getOptionStyle = (option: string) => {
    if (!showResult) {
      return selectedAnswer === option 
        ? 'border-primary-500 bg-primary-50' 
        : 'border-gray-200 hover:border-primary-300';
    }

    // Show results
    const isSelected = selectedAnswer === option;
    const isCorrect = question.correctAnswer === option;

    if (isCorrect) {
      return 'border-success-500 bg-success-50 text-success-700';
    }
    if (isSelected && !isCorrect) {
      return 'border-red-500 bg-red-50 text-red-700';
    }
    return 'border-gray-200 opacity-50';
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{question.question}</h2>
        {question.culturalContext && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800 mb-1">Cultural Context</h4>
                <p className="text-blue-700 text-sm">{question.culturalContext}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Answer Options */}
      {question.type === 'multiple-choice' && question.options && (
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleMultipleChoice(option)}
              disabled={showResult}
              className={`p-4 text-left border-2 rounded-xl transition-all ${getOptionStyle(option)}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showResult && (
                  <div className="flex-shrink-0 ml-2">
                    {question.correctAnswer === option ? (
                      <CheckCircle className="w-5 h-5 text-success-600" />
                    ) : selectedAnswer === option ? (
                      <XCircle className="w-5 h-5 text-red-600" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {question.type === 'true-false' && question.options && (
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleTrueFalse(option)}
              disabled={showResult}
              className={`p-6 text-center border-2 rounded-xl transition-all font-semibold text-lg ${getOptionStyle(option)}`}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>{option}</span>
                {showResult && (
                  <div className="flex-shrink-0">
                    {question.correctAnswer === option ? (
                      <CheckCircle className="w-5 h-5 text-success-600" />
                    ) : selectedAnswer === option ? (
                      <XCircle className="w-5 h-5 text-red-600" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {question.type === 'cultural-scenario' && question.options && (
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleMultipleChoice(option)}
              disabled={showResult}
              className={`p-4 text-left border-2 rounded-xl transition-all ${getOptionStyle(option)}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {showResult && (
                  <div className="flex-shrink-0 ml-2">
                    {question.correctAnswer === option ? (
                      <CheckCircle className="w-5 h-5 text-success-600" />
                    ) : selectedAnswer === option ? (
                      <XCircle className="w-5 h-5 text-red-600" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Explanation (shown after answering) */}
      {showResult && (
        <div className={`p-4 rounded-xl border-2 ${
          isCorrect() 
            ? 'border-success-200 bg-success-50' 
            : 'border-red-200 bg-red-50'
        }`}>
          <div className="flex items-start space-x-3">
            {isCorrect() ? (
              <CheckCircle className="w-6 h-6 text-success-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            )}
            <div>
              <h4 className={`font-semibold mb-2 ${
                isCorrect() ? 'text-success-800' : 'text-red-800'
              }`}>
                {isCorrect() ? 'Correct!' : 'Not quite right'}
              </h4>
              <p className={`${
                isCorrect() ? 'text-success-700' : 'text-red-700'
              }`}>
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
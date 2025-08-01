import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User, QuizSession } from '../types';
import { cultures } from '../data/cultures';
import QuizQuestion from '../components/QuizQuestion';
import ProgressBar from '../components/ProgressBar';
import { ArrowLeft, ArrowRight, Trophy, Home } from 'lucide-react';

interface LessonPageProps {
  user: User;
  setUser: (user: User) => void;
}

const LessonPage = ({ user, setUser }: LessonPageProps) => {
  const { cultureId, moduleId, lessonId } = useParams();
  const navigate = useNavigate();

  const culture = cultures.find(c => c.id === cultureId);
  const module = culture?.modules.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);

  const [quizSession, setQuizSession] = useState<QuizSession | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (lesson) {
      setQuizSession({
        lessonId: lesson.id,
        questions: lesson.content.questions,
        currentQuestionIndex: 0,
        answers: {},
        score: 0,
        startTime: new Date(),
        isCompleted: false
      });
    }
  }, [lesson]);

  if (!culture || !module || !lesson || !quizSession) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lesson not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-primary-600 hover:underline"
        >
          Return to home
        </button>
      </div>
    );
  }

  const currentQuestion = quizSession.questions[quizSession.currentQuestionIndex];
  const progress = ((quizSession.currentQuestionIndex + 1) / quizSession.questions.length) * 100;
  const isLastQuestion = quizSession.currentQuestionIndex === quizSession.questions.length - 1;

  const handleAnswer = (answer: string | string[]) => {
    const updatedAnswers = {
      ...quizSession.answers,
      [currentQuestion.id]: answer
    };

    const isCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? Array.isArray(answer) && currentQuestion.correctAnswer.every(ans => answer.includes(ans))
      : answer === currentQuestion.correctAnswer;

    const newScore = isCorrect ? quizSession.score + 1 : quizSession.score;

    setQuizSession({
      ...quizSession,
      answers: updatedAnswers,
      score: newScore
    });

    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Complete the lesson
      const finalScore = (quizSession.score / quizSession.questions.length) * 100;
      const newUser = {
        ...user,
        completedLessons: user.completedLessons.includes(lesson.id) 
          ? user.completedLessons 
          : [...user.completedLessons, lesson.id],
        totalXP: user.totalXP + lesson.xpReward,
        level: Math.floor((user.totalXP + lesson.xpReward) / 100) + 1
      };
      
      setUser(newUser);
      setIsCompleted(true);
    } else {
      // Go to next question
      setQuizSession({
        ...quizSession,
        currentQuestionIndex: quizSession.currentQuestionIndex + 1
      });
      setShowResult(false);
    }
  };

  const handleReturnToCulture = () => {
    navigate(`/culture/${cultureId}`);
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  if (isCompleted) {
    const finalScore = Math.round((quizSession.score / quizSession.questions.length) * 100);
    const perfectScore = finalScore === 100;

    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass-card rounded-xl p-8">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {perfectScore ? 'Perfect!' : 'Lesson Complete!'}
            </h1>
            <p className="text-gray-600">
              You've successfully completed "{lesson.title}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">{finalScore}%</div>
              <div className="text-gray-600">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success-600">+{lesson.xpReward}</div>
              <div className="text-gray-600">XP Earned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{quizSession.score}/{quizSession.questions.length}</div>
              <div className="text-gray-600">Correct</div>
            </div>
          </div>

          {lesson.content.culturalFacts && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Cultural Insights</h3>
              <div className="space-y-3">
                {lesson.content.culturalFacts.map((fact) => (
                  <div key={fact.id} className="text-left">
                    <h4 className="font-medium text-blue-700 mb-1">{fact.title}</h4>
                    <p className="text-blue-600 text-sm">{fact.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleReturnToCulture}
              className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors font-medium"
            >
              Continue Learning
            </button>
            <button
              onClick={handleReturnHome}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(`/culture/${cultureId}`)}
          className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {culture.name}</span>
        </button>
        <div className="text-sm text-gray-600">
          Question {quizSession.currentQuestionIndex + 1} of {quizSession.questions.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <ProgressBar progress={progress} size="lg" color="primary" />
      </div>

      {/* Lesson Content */}
      <div className="glass-card rounded-xl p-8">
        {/* Lesson Introduction (only on first question) */}
        {quizSession.currentQuestionIndex === 0 && lesson.content.introduction && (
          <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-lg border border-primary-100">
            <h2 className="text-xl font-semibold text-primary-800 mb-3">{lesson.title}</h2>
            <p className="text-primary-700">{lesson.content.introduction}</p>
          </div>
        )}

        {/* Quiz Question */}
        <QuizQuestion
          question={currentQuestion}
          onAnswer={handleAnswer}
          showResult={showResult}
          userAnswer={quizSession.answers[currentQuestion.id]}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-gray-600">
            Score: {quizSession.score}/{quizSession.currentQuestionIndex + (showResult ? 1 : 0)}
          </div>
          {showResult && (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg transition-colors font-medium"
            >
              <span>{isLastQuestion ? 'Complete Lesson' : 'Next Question'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
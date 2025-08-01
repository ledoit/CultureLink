import { useParams, Link } from 'react-router-dom';
import { User } from '../types';
import { cultures } from '../data/cultures';
import ProgressBar from '../components/ProgressBar';
import { Clock, PlayCircle, Lock, CheckCircle, ArrowLeft } from 'lucide-react';

interface CulturePageProps {
  user: User;
}

const CulturePage = ({ user }: CulturePageProps) => {
  const { cultureId } = useParams<{ cultureId: string }>();
  const culture = cultures.find(c => c.id === cultureId);

  if (!culture) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Culture not found</h2>
        <Link to="/" className="text-primary-600 hover:underline">Return to home</Link>
      </div>
    );
  }

  const completedLessons = user.completedLessons.filter(lessonId => 
    culture.modules.some(module => 
      module.lessons.some(lesson => lesson.id === lessonId)
    )
  ).length;

  const progress = (completedLessons / culture.totalLessons) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Cultures</span>
      </Link>

      {/* Culture Header */}
      <div className="glass-card rounded-xl p-8 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 bg-gradient-to-r ${culture.color} rounded-2xl flex items-center justify-center text-3xl`}>
            {culture.flag}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{culture.name}</h1>
            <p className="text-gray-600">{culture.region}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">{culture.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">{culture.totalLessons}</div>
            <div className="text-gray-600">Total Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success-600">{completedLessons}</div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{Math.round(progress)}%</div>
            <div className="text-gray-600">Progress</div>
          </div>
        </div>
        
        <ProgressBar progress={progress} size="lg" color="primary" />
      </div>

      {/* Modules */}
      <div className="space-y-6">
        {culture.modules.map((module, moduleIndex) => {
          const moduleCompletedLessons = module.lessons.filter(lesson => 
            user.completedLessons.includes(lesson.id)
          ).length;
          const moduleProgress = (moduleCompletedLessons / module.lessons.length) * 100;
          const isUnlocked = module.isUnlocked || user.totalXP >= module.requiredXP;

          return (
            <div key={module.id} className="glass-card rounded-xl p-6">
              {/* Module Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{module.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                </div>
                {!isUnlocked && (
                  <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
                    <Lock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{module.requiredXP} XP required</span>
                  </div>
                )}
              </div>

              {/* Module Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Module Progress</span>
                  <span className="text-sm text-gray-600">
                    {moduleCompletedLessons}/{module.lessons.length} lessons
                  </span>
                </div>
                <ProgressBar 
                  progress={moduleProgress} 
                  color={moduleProgress === 100 ? 'success' : 'primary'}
                  animated={false}
                />
              </div>

              {/* Lessons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.lessons.map((lesson, lessonIndex) => {
                  const isLessonCompleted = user.completedLessons.includes(lesson.id);
                  const isPreviousCompleted = lessonIndex === 0 || 
                    user.completedLessons.includes(module.lessons[lessonIndex - 1].id);
                  const canAccess = isUnlocked && (isPreviousCompleted || isLessonCompleted);

                  const difficultyColors = {
                    beginner: 'bg-green-100 text-green-700',
                    intermediate: 'bg-yellow-100 text-yellow-700',
                    advanced: 'bg-red-100 text-red-700'
                  };

                  return (
                    <div
                      key={lesson.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        canAccess 
                          ? 'border-gray-200 hover:border-primary-300 hover:shadow-md' 
                          : 'border-gray-100 opacity-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 mb-1">{lesson.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                        </div>
                        {isLessonCompleted ? (
                          <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 ml-2" />
                        ) : !canAccess ? (
                          <Lock className="w-6 h-6 text-gray-400 flex-shrink-0 ml-2" />
                        ) : (
                          <PlayCircle className="w-6 h-6 text-primary-500 flex-shrink-0 ml-2" />
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded-full ${difficultyColors[lesson.difficulty]}`}>
                            {lesson.difficulty}
                          </span>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{lesson.estimatedTime}m</span>
                          </div>
                        </div>
                        <span className="text-primary-600 font-medium">+{lesson.xpReward} XP</span>
                      </div>

                      {canAccess && (
                        <Link
                          to={`/lesson/${culture.id}/${module.id}/${lesson.id}`}
                          className="mt-3 block w-full"
                        >
                          <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                            {isLessonCompleted ? 'Review Lesson' : 'Start Lesson'}
                          </button>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CulturePage;
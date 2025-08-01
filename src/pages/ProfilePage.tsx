import { Link } from 'react-router-dom';
import { User } from '../types';
import { cultures } from '../data/cultures';
import ProgressBar from '../components/ProgressBar';
import { Award, Calendar, Target, Zap, ArrowLeft, Trophy } from 'lucide-react';

interface ProfilePageProps {
  user: User;
}

const ProfilePage = ({ user }: ProfilePageProps) => {
  const totalLessons = cultures.reduce((total, culture) => total + culture.totalLessons, 0);
  const completionPercentage = (user.completedLessons.length / totalLessons) * 100;
  
  const culturalStats = cultures.map(culture => {
    const completedLessons = user.completedLessons.filter(lessonId => 
      culture.modules.some(module => 
        module.lessons.some(lesson => lesson.id === lessonId)
      )
    ).length;
    
    return {
      culture,
      completed: completedLessons,
      progress: (completedLessons / culture.totalLessons) * 100
    };
  }).sort((a, b) => b.progress - a.progress);

  const nextLevel = user.level + 1;
  const xpForNextLevel = nextLevel * 100;
  const xpProgress = ((user.totalXP % 100) / 100) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      {/* Profile Header */}
      <div className="glass-card rounded-xl p-8 mb-8">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">Cultural Explorer • Level {user.level}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-2">
              <Zap className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{user.totalXP}</div>
            <div className="text-sm text-gray-600">Total XP</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-success-100 rounded-lg mx-auto mb-2">
              <Target className="w-6 h-6 text-success-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{user.streak}</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{user.completedLessons.length}</div>
            <div className="text-sm text-gray-600">Lessons</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{user.achievements.length}</div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Level Progress */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Level Progress</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Level {user.level}</span>
              <span className="text-sm text-gray-600">{user.totalXP % 100}/100 XP</span>
            </div>
            <ProgressBar progress={xpProgress} color="primary" />
          </div>
          <p className="text-gray-600 text-sm">
            {100 - (user.totalXP % 100)} XP needed to reach Level {nextLevel}
          </p>
        </div>

        {/* Overall Progress */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Overall Progress</h2>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Course Completion</span>
              <span className="text-sm text-gray-600">{user.completedLessons.length}/{totalLessons} lessons</span>
            </div>
            <ProgressBar progress={completionPercentage} color="success" />
          </div>
          <p className="text-gray-600 text-sm">
            {Math.round(completionPercentage)}% of all cultural lessons completed
          </p>
        </div>
      </div>

      {/* Cultural Progress */}
      <div className="glass-card rounded-xl p-6 mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Cultural Progress</h2>
        <div className="space-y-4">
          {culturalStats.map(({ culture, completed, progress }) => (
            <Link 
              key={culture.id} 
              to={`/culture/${culture.id}`}
              className="block p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${culture.color} rounded-lg flex items-center justify-center text-lg`}>
                    {culture.flag}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{culture.name}</h3>
                    <p className="text-sm text-gray-600">{completed}/{culture.totalLessons} lessons</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary-600">{Math.round(progress)}%</div>
                </div>
              </div>
              <ProgressBar progress={progress} color={progress === 100 ? 'success' : 'primary'} animated={false} />
            </Link>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="glass-card rounded-xl p-6 mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Achievements</h2>
        {user.achievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {user.achievements.map((achievement) => (
              <div key={achievement.id} className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-semibold text-yellow-800">{achievement.title}</h3>
                    <p className="text-sm text-yellow-700">{achievement.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-yellow-600">
                  <Calendar className="w-3 h-3" />
                  <span>Earned {achievement.unlockedAt.toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No achievements yet</h3>
            <p className="text-gray-500">Complete lessons to earn your first achievement!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
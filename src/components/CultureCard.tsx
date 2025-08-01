import { Link } from 'react-router-dom';
import { Culture, User } from '../types';
import ProgressBar from './ProgressBar';
import { MapPin, Clock, Award } from 'lucide-react';

interface CultureCardProps {
  culture: Culture;
  user: User;
}

const CultureCard = ({ culture, user }: CultureCardProps) => {
  const completedLessons = user.completedLessons.filter(lessonId => 
    culture.modules.some(module => 
      module.lessons.some(lesson => lesson.id === lessonId)
    )
  ).length;

  const progress = (completedLessons / culture.totalLessons) * 100;
  const isStarted = completedLessons > 0;

  return (
    <Link to={`/culture/${culture.id}`} className="block">
      <div className="lesson-card group">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${culture.color} rounded-xl flex items-center justify-center text-2xl`}>
              {culture.flag}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{culture.name}</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {culture.region}
              </div>
            </div>
          </div>
          {isStarted && (
            <div className="flex items-center space-x-1 bg-success-100 px-2 py-1 rounded-full">
              <Award className="w-4 h-4 text-success-600" />
              <span className="text-xs font-medium text-success-700">In Progress</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{culture.description}</p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">
              {completedLessons}/{culture.totalLessons} lessons
            </span>
          </div>
          <ProgressBar 
            progress={progress} 
            color={progress === 100 ? 'success' : 'primary'}
            animated={false}
          />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{culture.totalLessons} lessons</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-lg">{culture.modules.length}</span>
            <span>modules</span>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
      </div>
    </Link>
  );
};

export default CultureCard;
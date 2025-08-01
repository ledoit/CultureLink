import { User } from '../types';
import { cultures } from '../data/cultures';
import CultureCard from '../components/CultureCard';
import { BookOpen, Target, Users } from 'lucide-react';

interface HomeProps {
  user: User;
}

const Home = ({ user }: HomeProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
          Welcome to CultureLink
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Learn about world cultures the fun way! Master traditions, customs, and social norms 
          through interactive lessons designed like your favorite language app.
        </p>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {user.completedLessons.length}
            </h3>
            <p className="text-gray-600">Lessons Completed</p>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-success-100 rounded-lg mx-auto mb-4">
              <Target className="w-6 h-6 text-success-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{user.streak}</h3>
            <p className="text-gray-600">Day Streak</p>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Level {user.level}</h3>
            <p className="text-gray-600">Current Level</p>
          </div>
        </div>
      </div>

      {/* Cultures Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Choose Your Cultural Journey</h2>
          <p className="text-gray-600">Select a culture to begin learning</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultures.map((culture) => (
            <CultureCard 
              key={culture.id} 
              culture={culture} 
              user={user} 
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="glass-card rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Become a Cultural Expert?
        </h3>
        <p className="text-gray-600 mb-6">
          Start with any culture that interests you. Each lesson builds cultural understanding 
          through engaging quizzes, real-world scenarios, and fascinating insights.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
            <span className="text-primary-600">🎯</span>
            <span className="text-primary-700 font-medium">Interactive Quizzes</span>
          </div>
          <div className="flex items-center space-x-2 bg-success-50 px-4 py-2 rounded-full">
            <span className="text-success-600">📚</span>
            <span className="text-success-700 font-medium">Cultural Context</span>
          </div>
          <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
            <span className="text-purple-600">🏆</span>
            <span className="text-purple-700 font-medium">Achievement System</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
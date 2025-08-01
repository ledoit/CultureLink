import { Link } from 'react-router-dom';
import { User } from '../types';
import { Flame, Zap, Trophy } from 'lucide-react';

interface HeaderProps {
  user: User;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="glass-card border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌍</span>
            </div>
            <span className="text-2xl font-bold gradient-text">CultureLink</span>
          </Link>

          {/* User Progress */}
          <div className="flex items-center space-x-6">
            {/* Streak */}
            <div className="flex items-center space-x-2 bg-orange-100 px-3 py-2 rounded-full">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-orange-700">{user.streak}</span>
            </div>

            {/* XP */}
            <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-2 rounded-full">
              <Zap className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-yellow-700">{user.totalXP} XP</span>
            </div>

            {/* Level */}
            <div className="flex items-center space-x-2 bg-purple-100 px-3 py-2 rounded-full">
              <Trophy className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-700">Level {user.level}</span>
            </div>

            {/* Profile */}
            <Link 
              to="/profile" 
              className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold hover:shadow-lg transition-all"
            >
              {user.name.charAt(0).toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
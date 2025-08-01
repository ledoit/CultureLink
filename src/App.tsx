import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { User } from './types';
import Header from './components/Header';
import Home from './pages/Home';
import CulturePage from './pages/CulturePage';
import LessonPage from './pages/LessonPage';
import ProfilePage from './pages/ProfilePage';

// Mock user data
const mockUser: User = {
  id: '1',
  name: 'Cultural Explorer',
  totalXP: 250,
  streak: 7,
  level: 3,
  completedLessons: ['bowing-etiquette'],
  achievements: [
    {
      id: 'first-lesson',
      title: 'First Steps',
      description: 'Completed your first cultural lesson!',
      icon: '🎓',
      unlockedAt: new Date('2024-01-15')
    }
  ]
};

function App() {
  const [user, setUser] = useState<User>(mockUser);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header user={user} />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/culture/:cultureId" element={<CulturePage user={user} />} />
          <Route 
            path="/lesson/:cultureId/:moduleId/:lessonId" 
            element={<LessonPage user={user} setUser={setUser} />} 
          />
          <Route path="/profile" element={<ProfilePage user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
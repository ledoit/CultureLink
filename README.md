# CultureLink 🌍

> Learn about world cultures the Duolingo way! Master traditions, customs, and social norms through interactive lessons designed like your favorite language learning app.

## ✨ Features

### 🎯 Duolingo-Style Learning
- **Interactive Quizzes**: Multiple choice, true/false, and cultural scenario questions
- **Progressive Unlocking**: Complete lessons to unlock new content
- **XP System**: Earn experience points for completing lessons
- **Streak Tracking**: Maintain daily learning streaks
- **Level System**: Advance through cultural proficiency levels

### 🌎 Cultural Content
- **Multiple Cultures**: Learn about Japanese, Italian, Mexican cultures (and more!)
- **Structured Modules**: Organized learning paths covering different cultural aspects
- **Cultural Context**: Deep insights into traditions, customs, and social norms
- **Real-World Scenarios**: Practical cultural situations and etiquette

### 🎨 Beautiful UI
- **Modern Design**: Clean, intuitive interface inspired by Duolingo
- **Responsive Layout**: Works perfectly on desktop and mobile
- **Smooth Animations**: Engaging transitions and feedback
- **Glass Morphism**: Beautiful glassmorphic design elements

### 📊 Progress Tracking
- **Detailed Statistics**: Track progress across all cultures
- **Achievement System**: Unlock achievements for milestones
- **Visual Progress**: Beautiful progress bars and completion indicators
- **Personal Profile**: View your learning journey and stats

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd culturelink
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to start learning!

## 🎮 How to Use

### Getting Started
1. **Choose a Culture**: Select from Japanese, Italian, or Mexican culture on the home page
2. **Explore Modules**: Each culture has organized learning modules (e.g., "Cultural Basics", "Food & Dining")
3. **Complete Lessons**: Take interactive quizzes to learn cultural knowledge
4. **Earn XP & Level Up**: Gain experience points and unlock new content
5. **Track Progress**: Monitor your learning journey in your profile

### Lesson Types
- **📝 Quiz Lessons**: Answer questions about cultural practices
- **📖 Reading Lessons**: Learn through cultural context and explanations
- **🎭 Interactive Lessons**: Engage with cultural scenarios
- **🎥 Video Lessons**: Watch and learn (coming soon)

### Question Types
- **Multiple Choice**: Select the best answer from options
- **True/False**: Simple yes/no cultural facts
- **Cultural Scenarios**: Real-world situation responses
- **Fill in the Blank**: Complete cultural phrases (coming soon)
- **Drag & Drop**: Match cultural elements (coming soon)

## 🏗️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling

### Styling & UI
- **Tailwind CSS** - Responsive design system
- **Lucide React** - Beautiful icons
- **Custom Animations** - Smooth transitions
- **Glass Morphism** - Modern visual effects

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Vite** - Development server
- **PostCSS** - CSS processing

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header
│   ├── ProgressBar.tsx  # Progress indicators
│   ├── CultureCard.tsx  # Culture selection cards
│   └── QuizQuestion.tsx # Quiz question component
├── pages/               # Main application pages
│   ├── Home.tsx         # Landing page
│   ├── CulturePage.tsx  # Culture overview
│   ├── LessonPage.tsx   # Lesson taking interface
│   └── ProfilePage.tsx  # User profile and stats
├── data/                # Cultural content and data
│   └── cultures.ts      # Culture definitions and lessons
├── types/               # TypeScript type definitions
│   └── index.ts         # All application types
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind
```

## 🎯 Cultural Content

### Japanese Culture 🇯🇵
- **Cultural Basics**: Bowing etiquette, respect, hierarchy
- **Food & Dining**: Chopstick manners, dining customs
- *More modules coming soon...*

### Italian Culture 🇮🇹
- **Family & Social Life**: Family importance, social customs
- **Food & Traditions**: Dining culture, regional differences
- *More modules coming soon...*

### Mexican Culture 🇲🇽
- **Festivals & Celebrations**: Día de los Muertos, traditions
- **Family & Community**: Social structures, relationships
- *More modules coming soon...*

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Adding New Cultures

1. **Define Culture Data** (`src/data/cultures.ts`)
   ```typescript
   {
     id: 'new-culture',
     name: 'New Culture',
     flag: '🏁',
     region: 'Region',
     description: 'Learn about...',
     color: 'from-blue-500 to-green-500',
     totalLessons: 10,
     modules: [...]
   }
   ```

2. **Create Lessons** with questions, explanations, and cultural context

3. **Add Cultural Facts** to provide deeper insights

### Question Types

```typescript
// Multiple Choice Question
{
  type: 'multiple-choice',
  question: 'What does this gesture mean?',
  options: ['Hello', 'Goodbye', 'Thank you', 'Sorry'],
  correctAnswer: 'Thank you',
  explanation: 'This gesture is commonly used to express gratitude...',
  culturalContext: 'In this culture, showing gratitude is very important...'
}
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones for main actions
- **Success**: Green for completed items
- **Warning**: Orange/yellow for alerts
- **Error**: Red for mistakes

### Components
- **Glass Cards**: Translucent containers with backdrop blur
- **Progress Bars**: Animated progress indicators
- **Interactive Buttons**: Hover states and transitions
- **Responsive Grid**: Mobile-first design approach

## 🚧 Coming Soon

### Features in Development
- [ ] **More Cultures**: Indian, Brazilian, Korean, French cultures
- [ ] **Audio Pronunciation**: Learn how to pronounce cultural terms
- [ ] **Video Lessons**: Visual cultural content
- [ ] **Social Features**: Connect with other learners
- [ ] **Offline Mode**: Learn without internet connection
- [ ] **Mobile App**: Native iOS and Android applications

### Enhanced Question Types
- [ ] **Fill in the Blank**: Complete cultural phrases
- [ ] **Drag & Drop**: Match cultural elements
- [ ] **Image Recognition**: Identify cultural artifacts
- [ ] **Voice Recording**: Practice pronunciation

## 🤝 Contributing

We welcome contributions! Whether it's:
- Adding new cultural content
- Improving the UI/UX
- Fixing bugs
- Adding new features

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Add your cultural content or improvements
4. Test thoroughly
5. Submit a pull request

### Cultural Content Guidelines
- Ensure accuracy and cultural sensitivity
- Include reliable sources
- Provide context and explanations
- Use respectful language and examples

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Duolingo** - Inspiration for the learning methodology
- **Cultural Experts** - Ensuring authentic content
- **Open Source Community** - Tools and libraries used
- **Beta Testers** - Feedback and improvements

---

**Start your cultural journey today!** 🌍✨

Learn respectfully, grow globally, connect culturally.

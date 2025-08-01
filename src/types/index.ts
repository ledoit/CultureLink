export interface User {
  id: string;
  name: string;
  avatar?: string;
  totalXP: number;
  streak: number;
  level: number;
  completedLessons: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface Culture {
  id: string;
  name: string;
  flag: string;
  region: string;
  description: string;
  color: string;
  totalLessons: number;
  modules: CultureModule[];
}

export interface CultureModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  requiredXP: number;
  isUnlocked: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: LessonType;
  xpReward: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  content: LessonContent;
  isCompleted: boolean;
  userScore?: number;
}

export type LessonType = 'quiz' | 'reading' | 'interactive' | 'video';

export interface LessonContent {
  introduction?: string;
  questions: Question[];
  culturalFacts?: CulturalFact[];
  resources?: Resource[];
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  culturalContext?: string;
  mediaUrl?: string;
}

export type QuestionType = 
  | 'multiple-choice' 
  | 'true-false' 
  | 'fill-blank' 
  | 'match' 
  | 'drag-drop'
  | 'cultural-scenario';

export interface CulturalFact {
  id: string;
  title: string;
  content: string;
  category: 'tradition' | 'food' | 'language' | 'history' | 'art' | 'religion' | 'social';
  imageUrl?: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'audio' | 'book';
  url: string;
  description: string;
}

export interface UserProgress {
  userId: string;
  cultureId: string;
  moduleId: string;
  completedLessons: string[];
  currentStreak: number;
  totalXP: number;
  lastActiveDate: Date;
}

export interface QuizSession {
  lessonId: string;
  questions: Question[];
  currentQuestionIndex: number;
  answers: { [questionId: string]: string | string[] };
  score: number;
  startTime: Date;
  isCompleted: boolean;
}
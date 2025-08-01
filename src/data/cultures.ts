import { Culture } from '../types';

export const cultures: Culture[] = [
  {
    id: 'japanese',
    name: 'Japanese Culture',
    flag: '🇯🇵',
    region: 'East Asia',
    description: 'Discover the rich traditions, etiquette, and customs of Japan',
    color: 'from-red-500 to-pink-500',
    totalLessons: 15,
    modules: [
      {
        id: 'basics',
        title: 'Cultural Basics',
        description: 'Essential cultural concepts and daily life',
        icon: '🏮',
        requiredXP: 0,
        isUnlocked: true,
        lessons: [
          {
            id: 'bowing-etiquette',
            title: 'The Art of Bowing',
            description: 'Learn when and how to bow in Japanese culture',
            type: 'quiz',
            xpReward: 25,
            difficulty: 'beginner',
            estimatedTime: 10,
            isCompleted: false,
            content: {
              introduction: 'Bowing (ojigi) is a fundamental part of Japanese culture, expressing respect, gratitude, and apology.',
              questions: [
                {
                  id: 'bow-depth',
                  type: 'multiple-choice',
                  question: 'What does a deeper bow typically indicate in Japanese culture?',
                  options: ['Casual greeting', 'Greater respect or formality', 'Disagreement', 'Confusion'],
                  correctAnswer: 'Greater respect or formality',
                  explanation: 'In Japanese culture, the depth of a bow corresponds to the level of respect being shown. Deeper bows indicate greater formality and respect.',
                  culturalContext: 'This practice stems from centuries of hierarchical social structure in Japan.'
                },
                {
                  id: 'business-bow',
                  type: 'true-false',
                  question: 'In business settings, it\'s appropriate to bow while shaking hands with Japanese colleagues.',
                  options: ['True', 'False'],
                  correctAnswer: 'True',
                  explanation: 'Many Japanese businesspeople appreciate when foreigners show cultural awareness by incorporating bowing, even while also shaking hands.',
                  culturalContext: 'This blend of traditional and modern practices is common in contemporary Japan.'
                }
              ],
              culturalFacts: [
                {
                  id: 'bow-types',
                  title: 'Types of Bows',
                  content: 'There are three main types: eshaku (15°), keirei (30°), and saikeirei (45°).',
                  category: 'tradition'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'food-culture',
        title: 'Food & Dining',
        description: 'Japanese cuisine and dining etiquette',
        icon: '🍣',
        requiredXP: 50,
        isUnlocked: false,
        lessons: [
          {
            id: 'chopstick-etiquette',
            title: 'Chopstick Manners',
            description: 'Master the dos and don\'ts of using chopsticks',
            type: 'quiz',
            xpReward: 30,
            difficulty: 'intermediate',
            estimatedTime: 15,
            isCompleted: false,
            content: {
              questions: [
                {
                  id: 'chopstick-taboo',
                  type: 'multiple-choice',
                  question: 'Which action with chopsticks is considered very disrespectful?',
                  options: ['Pointing at someone', 'Sticking them upright in rice', 'Using them to pick up sushi', 'Clicking them together'],
                  correctAnswer: 'Sticking them upright in rice',
                  explanation: 'Standing chopsticks upright in rice resembles incense at funerals and is considered extremely bad luck.',
                  culturalContext: 'This taboo is related to Buddhist funeral practices where incense is placed upright in rice offerings.'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'italian',
    name: 'Italian Culture',
    flag: '🇮🇹',
    region: 'Southern Europe',
    description: 'Experience the warmth, passion, and traditions of Italy',
    color: 'from-green-500 to-red-500',
    totalLessons: 12,
    modules: [
      {
        id: 'family-values',
        title: 'Family & Social Life',
        description: 'Understanding Italian family dynamics and social customs',
        icon: '👨‍👩‍👧‍👦',
        requiredXP: 0,
        isUnlocked: true,
        lessons: [
          {
            id: 'family-importance',
            title: 'La Famiglia',
            description: 'The central role of family in Italian culture',
            type: 'reading',
            xpReward: 20,
            difficulty: 'beginner',
            estimatedTime: 8,
            isCompleted: false,
            content: {
              introduction: 'Family is the cornerstone of Italian society, influencing everything from career choices to daily decisions.',
              questions: [
                {
                  id: 'family-meals',
                  type: 'true-false',
                  question: 'Sunday family meals are still a common tradition in many Italian households.',
                  options: ['True', 'False'],
                  correctAnswer: 'True',
                  explanation: 'Sunday lunch with extended family remains an important tradition across Italy, often lasting several hours.',
                  culturalContext: 'This tradition strengthens family bonds and passes down cultural values to younger generations.'
                }
              ],
              culturalFacts: [
                {
                  id: 'multi-generational',
                  title: 'Multi-generational Living',
                  content: 'Many young Italians live with their parents well into their 20s and 30s, both for economic and cultural reasons.',
                  category: 'social'
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'mexican',
    name: 'Mexican Culture',
    flag: '🇲🇽',
    region: 'North America',
    description: 'Explore the vibrant traditions, celebrations, and heritage of Mexico',
    color: 'from-yellow-500 to-red-500',
    totalLessons: 18,
    modules: [
      {
        id: 'celebrations',
        title: 'Festivals & Celebrations',
        description: 'Mexican holidays and cultural celebrations',
        icon: '🎉',
        requiredXP: 0,
        isUnlocked: true,
        lessons: [
          {
            id: 'dia-de-muertos',
            title: 'Día de los Muertos',
            description: 'Understanding the Day of the Dead celebration',
            type: 'interactive',
            xpReward: 35,
            difficulty: 'intermediate',
            estimatedTime: 20,
            isCompleted: false,
            content: {
              introduction: 'Día de los Muertos is a Mexican holiday that honors deceased loved ones with joy and celebration rather than mourning.',
              questions: [
                {
                  id: 'altar-purpose',
                  type: 'multiple-choice',
                  question: 'What is the main purpose of creating ofrendas (altars) during Día de los Muertos?',
                  options: ['To scare away evil spirits', 'To welcome back the souls of deceased loved ones', 'To show off decorating skills', 'To compete with neighbors'],
                  correctAnswer: 'To welcome back the souls of deceased loved ones',
                  explanation: 'Ofrendas are loving tributes meant to welcome the spirits of family members back home for a visit.',
                  culturalContext: 'This tradition blends indigenous Aztec beliefs about death with Catholic influences from Spanish colonization.'
                },
                {
                  id: 'marigold-significance',
                  type: 'cultural-scenario',
                  question: 'You notice bright orange marigold flowers everywhere during Día de los Muertos. What do these flowers represent?',
                  options: ['They ward off bad luck', 'Their scent guides spirits home', 'They represent the sun god', 'They are just decorative'],
                  correctAnswer: 'Their scent guides spirits home',
                  explanation: 'Marigolds (cempasúchil) are believed to guide spirits back to their families with their vibrant color and strong scent.',
                  culturalContext: 'These flowers have been sacred in Mexican culture since pre-Columbian times.'
                }
              ],
              culturalFacts: [
                {
                  id: 'unesco-heritage',
                  title: 'UNESCO Recognition',
                  content: 'Día de los Muertos was declared a UNESCO Intangible Cultural Heritage of Humanity in 2008.',
                  category: 'tradition'
                }
              ]
            }
          }
        ]
      }
    ]
  }
];
import React, { useState } from 'react';
import { Coffee, Sparkles, Share2, RotateCcw } from 'lucide-react';

// This component structure is designed for Hashbrown integration
// In production, this would be exposed via: exposeComponent(BreakfastCard, {...})
const BreakfastCard = ({ name, emoji, tagline, ingredients, steps, stats }) => (
  <div className="space-y-6">
    <div className="text-center">
      <div className="text-8xl mb-4 animate-bounce">{emoji}</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-xl text-gray-600 italic">{tagline}</p>
    </div>

    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
        <Coffee className="w-5 h-5" /> Morning-After Stats
      </h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-orange-600">{stats.regret}</div>
          <div className="text-sm text-gray-600">Regret Level</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-orange-600">{stats.coffee}</div>
          <div className="text-sm text-gray-600">Coffee Required</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-orange-600">{stats.dignity}</div>
          <div className="text-sm text-gray-600">Dignity Status</div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">What You'll Need:</h3>
      <ul className="space-y-2">
        {ingredients.map((ingredient, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-orange-500 mt-1">•</span>
            <span className="text-gray-700">{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-gray-50 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">How to Make It:</h3>
      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i + 1}
            </span>
            <span className="text-gray-700">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const QuizQuestion = ({ question, options, onSelect }) => (
  <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">{question}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onSelect(option.value)}
          className={`${option.color} p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-200 border-4 border-transparent hover:shadow-xl`}
          style={{ borderColor: 'transparent' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = option.hoverBorder}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
        >
          <div className="text-5xl mb-2">{option.emoji}</div>
          <div className="font-bold text-lg">{option.label}</div>
          <div className="text-sm text-gray-600">{option.subtitle}</div>
        </button>
      ))}
    </div>
  </div>
);

const MorningAfterMunchies = () => {
  const [step, setStep] = useState('intro');
  const [answers, setAnswers] = useState({
    hangover: null,
    craving: null,
    hunger: null
  });
  const [breakfast, setBreakfast] = useState(null);

  // Breakfast database - In production, Hashbrown AI would enhance these
  const breakfastDatabase = {
    'light-sweet': {
      name: 'The Walk of Yum',
      emoji: '🥞',
      tagline: 'Not too shabby for last night',
      ingredients: ['Fluffy pancakes', 'Fresh berries', 'Maple syrup', 'Whipped cream'],
      steps: ['Stack pancakes high', 'Top with berries', 'Drizzle syrup generously'],
      stats: { regret: 'Low', coffee: '1 cup', dignity: 'Intact' }
    },
    'light-savory': {
      name: 'The Smooth Operator',
      emoji: '🥑',
      tagline: 'You still got it together',
      ingredients: ['Avocado toast', 'Poached eggs', 'Everything bagel seasoning', 'Cherry tomatoes'],
      steps: ['Toast sourdough', 'Smash avocado', 'Top with perfect eggs'],
      stats: { regret: 'Minimal', coffee: '1 cup', dignity: 'Strong' }
    },
    'light-questionable': {
      name: 'The Plot Twist',
      emoji: '🍕',
      tagline: 'Cold pizza never lies',
      ingredients: ['Last night\'s pizza (cold)', 'Ranch dressing', 'Coffee (lots)', 'Self-acceptance'],
      steps: ['Open fridge', 'Grab pizza box', 'No judgment zone'],
      stats: { regret: 'Low-Medium', coffee: '2 cups', dignity: 'Debatable' }
    },
    'medium-sweet': {
      name: 'The Redemption Waffle',
      emoji: '🧇',
      tagline: 'Sweet recovery in progress',
      ingredients: ['Belgian waffles', 'Nutella', 'Banana slices', 'Powdered sugar'],
      steps: ['Make crispy waffles', 'Spread Nutella thick', 'Pretend it\'s healthy'],
      stats: { regret: 'Medium', coffee: '2 cups', dignity: 'Recovering' }
    },
    'medium-savory': {
      name: 'Heartbreaker Hash',
      emoji: '🥓',
      tagline: 'Bacon fixes everything',
      ingredients: ['Crispy bacon', 'Hash browns', 'Scrambled eggs', 'Hot sauce', 'Cheese'],
      steps: ['Fry everything', 'Add more cheese', 'Drown in hot sauce'],
      stats: { regret: 'Medium', coffee: '2-3 cups', dignity: 'Questionable' }
    },
    'medium-questionable': {
      name: 'The "What Happened" Bowl',
      emoji: '🍜',
      tagline: 'Instant ramen saves lives',
      ingredients: ['Instant ramen', 'Fried egg', 'Hot sauce', 'Whatever\'s in the fridge', 'Shame'],
      steps: ['Boil water somehow', 'Crack egg on top', 'Eat from the pot'],
      stats: { regret: 'Medium-High', coffee: '3 cups', dignity: 'Fading' }
    },
    'heavy-sweet': {
      name: 'The Regret Parfait',
      emoji: '🍨',
      tagline: 'Ice cream is breakfast now',
      ingredients: ['Ice cream', 'Granola (for health)', 'Chocolate sauce', 'Denial'],
      steps: ['Scoop ice cream', 'Sprinkle granola', 'Call it "yogurt"'],
      stats: { regret: 'High', coffee: '4 cups', dignity: 'Gone' }
    },
    'heavy-savory': {
      name: 'The Full Regret English',
      emoji: '🍳',
      tagline: 'All the grease, all the feels',
      ingredients: ['Fried eggs', 'Bacon', 'Sausage', 'Beans', 'Toast', 'Mushrooms', 'Tomatoes', 'Black pudding'],
      steps: ['Fry everything in sight', 'Cover plate entirely', 'Contemplate life choices'],
      stats: { regret: 'Maximum', coffee: '5+ cups', dignity: 'What dignity?' }
    },
    'heavy-questionable': {
      name: 'The Pickle & Chocolate Smoothie',
      emoji: '🥒',
      tagline: 'Rock bottom has a menu',
      ingredients: ['Pickles', 'Chocolate milk', 'Chips', 'Leftover Chinese food', 'Desperation'],
      steps: ['Blend the chaos', 'Question everything', 'Drink anyway'],
      stats: { regret: 'Legendary', coffee: 'IV drip', dignity: 'Never existed' }
    },
    'starving-sweet': {
      name: 'The Cinnamon Roll Coma',
      emoji: '🥐',
      tagline: 'Sugar will save you',
      ingredients: ['Giant cinnamon rolls', 'Extra frosting', 'Chocolate chips', 'Regret sprinkles'],
      steps: ['Heat rolls', 'Double the frosting', 'Embrace the sugar rush'],
      stats: { regret: 'High', coffee: '3 cups', dignity: 'Sticky' }
    },
    'starving-savory': {
      name: 'The Breakfast Burrito of Shame',
      emoji: '🌯',
      tagline: 'Everything wrapped in forgiveness',
      ingredients: ['Huge tortilla', 'Scrambled eggs', 'Bacon', 'Sausage', 'Cheese', 'Salsa', 'Sour cream', 'Guac'],
      steps: ['Scramble everything', 'Wrap it tight', 'Hold with both hands'],
      stats: { regret: 'High', coffee: '4 cups', dignity: 'Wrapped up' }
    },
    'starving-questionable': {
      name: 'The Kitchen Sink Supreme',
      emoji: '🍽️',
      tagline: 'Yes, that\'s mayo on cereal',
      ingredients: ['Literally everything', 'Random condiments', 'Questionable leftovers', 'Brave stomach'],
      steps: ['Open all containers', 'Combine fearlessly', 'Pray'],
      stats: { regret: 'Off the charts', coffee: 'All of it', dignity: 'A distant memory' }
    }
  };

  const calculateBreakfast = () => {
    const { hangover, craving, hunger } = answers;
    
    // Build key based on answers
    let key = `${hangover}-${craving}`;
    
    // Override for starving users
    if (hunger === 'starving') {
      const starvingKey = `starving-${craving}`;
      if (breakfastDatabase[starvingKey]) {
        return breakfastDatabase[starvingKey];
      }
    }
    
    return breakfastDatabase[key] || breakfastDatabase['medium-savory'];
  };

  const handleAnswer = (question, value) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);

    if (question === 'hangover') setStep('craving');
    else if (question === 'craving') setStep('hunger');
    else if (question === 'hunger') {
      setStep('loading');
      setTimeout(() => {
        setBreakfast(calculateBreakfast());
        setStep('result');
      }, 2000);
    }
  };

  const reset = () => {
    setStep('intro');
    setAnswers({ hangover: null, craving: null, hunger: null });
    setBreakfast(null);
  };

  const shareResults = () => {
    const text = `I got "${breakfast.name}" ${breakfast.emoji} - ${breakfast.tagline}\n\nMorning-After Munchies 🍳\n\nTry it: [YOUR_DEPLOYED_URL]`;
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard! Share your breakfast fate! 🎉');
  };

  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-6xl mb-4">🍳</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Morning-After Munchies</h1>
          <p className="text-xl text-gray-600 mb-6">What breakfast cures last night's regrets?</p>
          <button
            onClick={() => setStep('hangover')}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Find My Breakfast ✨
          </button>
          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>Built with Hashbrown for CodeTV Challenge</p>
            <p className="text-xs">Generative UI • Component-Based • AI-Enhanced</p>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'hangover') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 flex items-center justify-center p-4">
        <QuizQuestion
          question="How's the hangover? 🤕"
          options={[
            { value: 'light', emoji: '😎', label: 'Feeling Fine', subtitle: 'What hangover?', color: 'bg-green-100 hover:bg-green-200', hoverBorder: '#4ade80' },
            { value: 'medium', emoji: '😴', label: 'Little Rough', subtitle: 'Could be worse', color: 'bg-yellow-100 hover:bg-yellow-200', hoverBorder: '#facc15' },
            { value: 'heavy', emoji: '😵', label: 'Send Help', subtitle: 'Never again', color: 'bg-red-100 hover:bg-red-200', hoverBorder: '#f87171' }
          ]}
          onSelect={(value) => handleAnswer('hangover', value)}
        />
      </div>
    );
  }

  if (step === 'craving') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 flex items-center justify-center p-4">
        <QuizQuestion
          question="What are you craving? 🤔"
          options={[
            { value: 'sweet', emoji: '🥞', label: 'Sweet', subtitle: 'Sugar therapy', color: 'bg-pink-100 hover:bg-pink-200', hoverBorder: '#f472b6' },
            { value: 'savory', emoji: '🥓', label: 'Savory', subtitle: 'Give me grease', color: 'bg-orange-100 hover:bg-orange-200', hoverBorder: '#fb923c' },
            { value: 'questionable', emoji: '🤷', label: 'Whatever', subtitle: 'Surprise me', color: 'bg-purple-100 hover:bg-purple-200', hoverBorder: '#c084fc' }
          ]}
          onSelect={(value) => handleAnswer('craving', value)}
        />
      </div>
    );
  }

  if (step === 'hunger') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 flex items-center justify-center p-4">
        <QuizQuestion
          question="How hungry are you? 🍽️"
          options={[
            { value: 'light', emoji: '🙂', label: 'A Little', subtitle: 'Light snack', color: 'bg-blue-100 hover:bg-blue-200', hoverBorder: '#60a5fa' },
            { value: 'medium', emoji: '😋', label: 'Pretty Hungry', subtitle: 'Real meal please', color: 'bg-yellow-100 hover:bg-yellow-200', hoverBorder: '#facc15' },
            { value: 'starving', emoji: '🤤', label: 'STARVING', subtitle: 'Feed me now', color: 'bg-red-100 hover:bg-red-200', hoverBorder: '#f87171' }
          ]}
          onSelect={(value) => handleAnswer('hunger', value)}
        />
      </div>
    );
  }

  if (step === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-orange-500 animate-spin" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Calculating your breakfast fate...</h2>
          <p className="text-gray-600">🍳 Analyzing regret levels...</p>
          <p className="text-xs text-gray-400 mt-4">Powered by Hashbrown AI</p>
        </div>
      </div>
    );
  }

  if (step === 'result' && breakfast) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          <BreakfastCard {...breakfast} />
          <div className="flex gap-4 mt-6">
            <button
              onClick={shareResults}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-full font-bold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share Results
            </button>
            <button
              onClick={reset}
              className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MorningAfterMunchies;

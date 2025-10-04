// Hashbrown-ready Integration Layer (stubbed)
// This file structures the Hashbrown concept without importing the real libs.

// Schema-like description to guide future integration
export const BreakfastCardSchema = {
  name: 'BreakfastCard',
  description: 'Display a breakfast recommendation with name, emoji, ingredients, steps, and stats',
  props: {
    name: 'string',
    emoji: 'string',
    tagline: 'string',
    ingredients: ['string'],
    steps: ['string'],
    stats: {
      regret: 'string',
      coffee: 'string',
      dignity: 'string'
    }
  }
};

export const BREAKFAST_SYSTEM_PROMPT = `You are the Morning-After Munchies AI assistant.\nRespond with a BreakfastCard that matches user hangover severity, cravings, and hunger.`;

// Deterministic mock generator that simulates a Hashbrown runtime
export function generateBreakfastMock({ severity, craving, hunger }) {
  const emojiByCraving = { sweet: '🧇', savory: '🍳', questionable: '🥒' };
  const nameBySeverity = {
    light: 'The Redemption Waffle',
    medium: 'Heartbreaker Hash',
    heavy: 'The Full Regret English'
  };

  const chosenEmoji = emojiByCraving[craving] || '🍳';
  const chosenName = nameBySeverity[severity] || 'Walk of Yum';
  const hungerNote = hunger === 'starving' ? 'You need this. Now.' : hunger === 'hungry' ? 'Let’s fix this.' : 'Gentle vibes only.';

  const ingredientsByCraving = {
    sweet: ['eggs', 'milk', 'flour', 'butter', 'maple syrup'],
    savory: ['eggs', 'bacon', 'potatoes', 'onion', 'cheddar'],
    questionable: ['pickles', 'chocolate', 'banana', 'oats', 'yogurt']
  };

  const steps = [
    'Heat pan and prep basics',
    'Combine ingredients with minimal regret',
    'Cook until edible (and comforting)',
    'Plate with pride and coffee'
  ];

  const statsBySeverity = {
    light: { regret: 'Low', coffee: 'One strong cup', dignity: 'Recovering' },
    medium: { regret: 'Medium', coffee: 'Two cups', dignity: 'Questionable' },
    heavy: { regret: 'Legendary', coffee: 'IV drip', dignity: 'Pending review' }
  };

  return {
    name: chosenName,
    emoji: chosenEmoji,
    tagline: `${hungerNote} ${craving === 'questionable' ? 'We won’t tell.' : ''}`.trim(),
    ingredients: ingredientsByCraving[craving] || ingredientsByCraving.savory,
    steps,
    stats: statsBySeverity[severity] || statsBySeverity.medium
  };
}

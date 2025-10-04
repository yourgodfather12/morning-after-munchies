import { useMemo, useState } from 'react';
import { Sparkles, ChefHat, Coffee } from 'lucide-react';
import { generateBreakfastMock } from './hashbrown-integration';

function FieldLabel({ children }) {
  return <label className="text-sm font-medium text-gray-700">{children}</label>;
}

function Select({ value, onChange, children }) {
  return (
    <select
      className="mt-1 w-full rounded-md border border-gray-300 bg-white p-2 focus:border-black focus:outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {children}
    </select>
  );
}

function BreakfastCard({ data }) {
  const { name, emoji, tagline, ingredients, steps, stats } = data;
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="text-3xl">{emoji}</div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{tagline}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            <ChefHat size={16} /> Ingredients
          </h4>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-800">
            {ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            <Sparkles size={16} /> Steps
          </h4>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-gray-800">
            {steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 p-3 text-sm text-gray-700">
        <div className="flex items-center gap-2 font-medium">
          <Coffee size={16} /> Morning-after stats
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div>
            <div className="text-gray-500">Regret</div>
            <div className="font-medium">{stats.regret}</div>
          </div>
          <div>
            <div className="text-gray-500">Coffee</div>
            <div className="font-medium">{stats.coffee}</div>
          </div>
          <div>
            <div className="text-gray-500">Dignity</div>
            <div className="font-medium">{stats.dignity}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [severity, setSeverity] = useState('medium');
  const [craving, setCraving] = useState('savory');
  const [hunger, setHunger] = useState('hungry');

  const breakfast = useMemo(
    () => generateBreakfastMock({ severity, craving, hunger }),
    [severity, craving, hunger]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Morning-After Munchies</h1>
          <p className="mt-1 text-gray-600">
            Hashbrown-ready demo: choose how you feel, get a breakfast.
          </p>
        </header>

        <div className="mb-6 grid grid-cols-1 gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:grid-cols-3">
          <div>
            <FieldLabel>Hangover severity</FieldLabel>
            <Select value={severity} onChange={setSeverity}>
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </Select>
          </div>
          <div>
            <FieldLabel>Craving</FieldLabel>
            <Select value={craving} onChange={setCraving}>
              <option value="savory">Savory</option>
              <option value="sweet">Sweet</option>
              <option value="questionable">Questionable</option>
            </Select>
          </div>
          <div>
            <FieldLabel>Hunger level</FieldLabel>
            <Select value={hunger} onChange={setHunger}>
              <option value="peckish">Peckish</option>
              <option value="hungry">Hungry</option>
              <option value="starving">Starving</option>
            </Select>
          </div>
        </div>

        <BreakfastCard data={breakfast} />

        <footer className="mt-8 text-xs text-gray-500">
          Built Hashbrown-ready. Swap mock with real runtime later.
        </footer>
      </div>
    </div>
  );
}

import React from 'react';
import { HeroControlsProps } from '../types';

const HeroControls: React.FC<HeroControlsProps> = ({ hero, setHero, heroIndex }) => {
  const inputFields = [
    { label: 'Spell color:', type: 'color', name: 'spellColor', value: hero.spellColor },
    { label: 'Speed:', type: 'range', name: 'speed', min: 1, max: 5, value: hero.speed },
    { label: 'Fire rate (ms):', type: 'number', name: 'fireRate', min: 200, max: 2000, value: hero.fireRate },
  ];

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { name, value, type } }) => {
    setHero({
      ...hero,
      [name]: type === 'number' || type === 'range' ? parseInt(value, 10) : value
    });
  };

  return (
    <div>
      <p>Settings (Hero {heroIndex + 1}):</p>
      <div>
        {inputFields.map(({ label, ...inputProps }) => (
          <div key={inputProps.name}>
            <p>{label}</p>
            <input {...inputProps} onChange={handleChange} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroControls;
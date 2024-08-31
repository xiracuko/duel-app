import { UpdateSpellsFunc } from "../../types";

export const updateSpells: UpdateSpellsFunc = (
  setSpells, 
  heroes, 
  setHitCounts, 
  canvasWidth
) => {
  setSpells((prevSpells) => (
    prevSpells.filter((spell) => {
      spell.x += spell.dx;

      const targetHeroIndex = spell.dx > 0 ? 1 : 0;
      const targetHero = heroes[targetHeroIndex];

      const hit = Math.abs(spell.x - targetHero.x) < 25 && Math.abs(spell.y - targetHero.y) < 25;

      if (hit) {
        setHitCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[targetHeroIndex]++;

          return newCounts;
        });

        return false;
      }

      return spell.x > 0 && spell.x < canvasWidth;
    })
  ));
};
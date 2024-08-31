import { HandleClickFunc } from "../../types";

export const handleClick: HandleClickFunc = (event, canvas, heroes, setSelectedHeroIndex) => {
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const hitRadiusSquared = 20 ** 2;

  heroes.forEach((hero, index) => {
    const dx = hero.x - mouseX;
    const dy = hero.y - mouseY;

    if (dx * dx + dy * dy < hitRadiusSquared) setSelectedHeroIndex(index);
  });
};
import { HandleClickFunc } from "../../types";

export const handleClick: HandleClickFunc = (event, canvas, heroes, setSelectedHeroIndex) => {
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  heroes.forEach((hero, index) => {
    const distance = Math.sqrt((hero.x - mouseX) ** 2 + (hero.y - mouseY) ** 2);
    if (distance < 20) setSelectedHeroIndex(index);
  });
};
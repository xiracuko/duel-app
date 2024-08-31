import { RenderHeroesFunc } from "../../types";

export const renderHeroes: RenderHeroesFunc = (ctx, heroes) => {
  if (!ctx) return;

  heroes.forEach(({ x, y, color }) => {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  });
};

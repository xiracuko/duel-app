import { RenderSpellsFunc } from "../../types";

export const renderSpells: RenderSpellsFunc = (ctx, spells) => {
  if (!ctx) return;

  spells.forEach(({ x, y, color }) => {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  });
};

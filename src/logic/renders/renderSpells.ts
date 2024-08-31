import { RenderSpellsFunc } from "../../types";

export const renderSpells: RenderSpellsFunc = (ctx, spells) => {
  spells.forEach((spell) => {
    ctx?.beginPath();
    ctx?.arc(spell.x, spell.y, 5, 0, 2 * Math.PI);
    ctx!.fillStyle = spell.color;
    ctx?.fill();
    ctx?.closePath();
  });
};
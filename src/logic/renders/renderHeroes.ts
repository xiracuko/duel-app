import { RenderHeroesFunc } from "../../types";

export const renderHeroes: RenderHeroesFunc = (ctx, heroes) => {
  heroes.forEach((hero) => {
    ctx?.beginPath();
    ctx?.arc(hero.x, hero.y, 20, 0, 2 * Math.PI);
    ctx!.fillStyle = hero.color;
    ctx?.fill();
    ctx?.closePath();
  });
};

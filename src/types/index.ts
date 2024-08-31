export type HeroTypes = {
  x: number;
  y: number;
  dy: number;
  color: string;
  spellColor: string;
  speed: number;
  fireRate: number;
};

export type SpellTypes = {
  x: number;
  y: number;
  dx: number;
  color: string;
};

export type RenderHeroesFunc = (
  ctx: CanvasRenderingContext2D | null,
  heroes: HeroTypes[]
) => void;

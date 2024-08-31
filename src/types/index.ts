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

export type PositionTypes = {
  x: number;
  y: number;
};

export type UpdateHeroesFunc = (
  setHeroes: React.Dispatch<React.SetStateAction<HeroTypes[]>>,
  setSpells: React.Dispatch<React.SetStateAction<SpellTypes[]>>,
  mousePositionRef: React.MutableRefObject<PositionTypes | null>,
  lastFireTimeRef: React.MutableRefObject<number[]>,
  time: number,
  height: number
) => void;

export type RenderSpellsFunc = (
  ctx: CanvasRenderingContext2D | null,
  spells: SpellTypes[]
) => void;

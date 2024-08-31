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

export type UpdateSpellsFunc = (
  setSpells: React.Dispatch<React.SetStateAction<SpellTypes[]>>,
  heroes: HeroTypes[],
  setHitCounts: React.Dispatch<React.SetStateAction<number[]>>,
  canvasWidth: number
) => void;

export type HandleClickFunc = (
  event: MouseEvent,
  canvas: HTMLCanvasElement | null,
  heroes: HeroTypes[],
  setSelectedHeroIndex: React.Dispatch<React.SetStateAction<number | null>>
) => void;

export interface HeroControlsProps {
  hero: HeroTypes;
  setHero: (updatedHero: HeroTypes) => void;
  heroIndex: number;
}

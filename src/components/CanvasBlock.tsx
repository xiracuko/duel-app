import React from "react";
import { HeroTypes, PositionTypes, SpellTypes } from "../types";
import { renderHeroes } from "../logic/renders/renderHeroes";
import { updateHeroes } from "../logic/updates/updateHeroes";
import { renderSpells } from "../logic/renders/renderSpells";
import { updateSpells } from "../logic/updates/updateSpells";
import { handleClick } from "../logic/events/handleClick";
import HeroControls from "./HeroControls";
import { handleMouseMove } from "../logic/events/handleMouseMove";

const CanvasBlock: React.FC = () => {
  const [heroes, setHeroes] = React.useState<HeroTypes[]>([
    { x: 20, y: 50, dy: 2, color: '#0000FF', spellColor: '#0000FF', speed: 2, fireRate: 1000 },
    { x: 480, y: 50, dy: 2, color: '#FF0000', spellColor: '#FF0000', speed: 2, fireRate: 1000 }
  ]);

  const [spells, setSpells] = React.useState<SpellTypes[]>([]);
  const [hitCounts, setHitCounts] = React.useState<number[]>([0, 0]);
  const [selectedHeroIndex, setSelectedHeroIndex] = React.useState<number | null>(null);

  const mousePositionRef = React.useRef<PositionTypes | null>(null);
  const lastFireTimeRef = React.useRef([0, 0]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId: number;

    const update = (time: number) => {
      ctx?.clearRect(0, 0, canvas!.width, canvas!.height);

      renderHeroes(ctx!, heroes);
      renderSpells(ctx!, spells);

      updateHeroes(setHeroes, setSpells, mousePositionRef, lastFireTimeRef, time, canvas!.height);
      updateSpells(setSpells, heroes, setHitCounts, canvas!.width);

      animationFrameId = requestAnimationFrame(update);
    };

    const clickHandler = (event: MouseEvent) => handleClick(event, canvas, heroes, setSelectedHeroIndex);
    const mouseMoveHandler = (event: MouseEvent) => handleMouseMove(event, canvas, mousePositionRef);

    canvas?.addEventListener('click', clickHandler);
    canvas?.addEventListener('mousemove', mouseMoveHandler);

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);

      canvas?.removeEventListener('click', clickHandler);
      canvas?.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [heroes]);

  const updateHero = (updatedHero: HeroTypes) => {
    if (selectedHeroIndex !== null) {
      setHeroes((prevHeroes) => (
        prevHeroes.map((hero, index) => index === selectedHeroIndex ? updatedHero : hero)
      ));
    }
  };

  return (
    <div className="canvasBlock">
      <canvas ref={canvasRef} width={500} height={500} />
      <div className="canvasBlock--counts">
        <p className="counts--one">Hero 1 hits: <span>{hitCounts[1]}</span></p>
        <p className="counts--two">Hero 2 hits: <span>{hitCounts[0]}</span></p>
      </div>
      {selectedHeroIndex !== null ? (
        <HeroControls
          hero={heroes[selectedHeroIndex]}
          setHero={updateHero}
          heroIndex={selectedHeroIndex}
        />
      ) : (<p className="mainTitle">Click on the hero to customize the characteristics!</p>)}
    </div>
  );
};

export default CanvasBlock;
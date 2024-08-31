import React from "react";
import { HeroTypes, SpellTypes } from "../types";

const CanvasBlock: React.FC = () => {
  const [heroes, setHeroes] = React.useState<HeroTypes[]>([
    { x: 20, y: 50, dy: 2, color: '#0000FF', spellColor: '#00FFFF', speed: 2, fireRate: 1000 },
    { x: 480, y: 50, dy: 2, color: '#FF0000', spellColor: '#FFA500', speed: 2, fireRate: 1000 }
  ]);

  const [spells, setSpells] = React.useState<SpellTypes[]>([]);
  const [hitCounts, setHitCounts] = React.useState<number[]>([0, 0]);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let animationFrameId: number;

    const update = (time: number) => {
      ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [heroes]);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} />
      <div>
        <p>Hero 1 hits: {hitCounts[0]}</p>
        <p>Hero 2 hits: {hitCounts[1]}</p>
      </div>
    </div>
  );
};

export default CanvasBlock;
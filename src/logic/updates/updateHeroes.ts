import { UpdateHeroesFunc } from "../../types";

export const updateHeroes: UpdateHeroesFunc = (
  setHeroes, 
  setSpells, 
  mousePositionRef, 
  lastFireTimeRef, 
  time, 
  canvasHeight
) => {
  setHeroes((prevHeroes) => (
    prevHeroes.map((hero, index) => {
      const updatedHero = { ...hero };
      updatedHero.y += updatedHero.dy * updatedHero.speed;

      if (updatedHero.y <= 0 || updatedHero.y >= canvasHeight - 20) updatedHero.dy *= -1;

      if (mousePositionRef.current) {
        const { x: mouseX, y: mouseY } = mousePositionRef.current;
        const distance = Math.hypot(updatedHero.x - mouseX, updatedHero.y - mouseY);

        if (distance < 30) updatedHero.dy *= -1;
      }

      if (time - lastFireTimeRef.current[index] > updatedHero.fireRate) {
        lastFireTimeRef.current[index] = time;
        
        setSpells((prevSpells) => [
          ...prevSpells,
          {
            x: updatedHero.x + (index === 0 ? 20 : -20),
            y: updatedHero.y,
            dx: index === 0 ? 5 : -5,
            color: updatedHero.spellColor,
          },
        ]);
      }

      return updatedHero;
    })
  ));
};
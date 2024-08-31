import { HandleMouseMoveFunc } from "../../types";

export const handleMouseMove: HandleMouseMoveFunc = (event, canvas, mousePositionRef) => {
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  
  mousePositionRef.current = { x: mouseX, y: mouseY };
};
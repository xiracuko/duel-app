import { HandleMouseMoveFunc } from "../../types";

export const handleMouseMove: HandleMouseMoveFunc = (event, canvas, mousePositionRef) => {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  
  mousePositionRef.current = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};
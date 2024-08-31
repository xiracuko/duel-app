# Duel application

## Overview
This project is a dynamic, canvas-based application where users can control multiple "heroes" (represented as circles) on a canvas.

### Features
`1. Hero Movement:` Each hero moves vertically within the canvas, bouncing off the top and bottom edges. The speed of movement can be adjusted individually for each hero.

`2. Mouse Interaction:` Heroes will reverse their direction when the user's mouse comes close to them, simulating a repelling effect.

`3. Spell Shooting:` Heroes automatically shoot spells at intervals, which can be adjusted through the fire rate setting. Spells move horizontally across the canvas towards the opposing hero.

`4. Collision Detection:` If a spell hits a hero, a hit is registered, and the total number of hits is tracked.

`5. Hero Settings Panel:` When a hero is clicked, a settings panel appears, allowing the user to customize that hero’s properties such as speed, fire rate, and spell color.

- Technologies Used:

`React:` The application’s UI is managed with React, leveraging its component-based architecture.

`TypeScript:` Type safety and better development experience are achieved with TypeScript.

`HTML5 Canvas:` The core visual elements and interactions are rendered using the <canvas> element.
### Code Structure

- Components:

`1. CanvasBlock:` the main component handling the rendering of the canvas and the logic for hero movement, spell shooting, and collision detection.
Contains the useEffect hook to manage the animation loop and canvas updates.
Tracks the mouse position and interacts with the heroes based on user input.

`2. HeroControls:` a configurable settings panel for each hero.
Allows users to modify a hero's speed, spell color, and fire rate.
The panel is dynamically shown or hidden based on the user's interaction with the hero.

- State Management:

State is managed locally within components using `useState` and `useRef` hooks.

`1. The setHeroes function` is used to update the heroes' properties, like position, speed, and spell attributes.

`2. The setSpells function` is used to manage the spells fired by the heroes and track their positions and collision status.

- Optimization and Responsiveness:

The hero movement logic is simplified using a more functional approach within `setHeroes`, reducing the number of return statements and directly modifying properties based on conditions.

"this project lacks adaptability." :)

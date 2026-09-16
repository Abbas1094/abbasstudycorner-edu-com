# Item 1 — Shared visual theme

## Goal
Create one reusable visual foundation for the full app without changing screens, behavior, quiz logic, or data.

## Changes
- Consolidate the navy background, elevated navy surfaces, gold highlights, white text, borders, feedback colors, gradients, and shadows into semantic theme variables.
- Define a consistent Oswald heading scale and Inter body scale, with readable mobile defaults.
- Expose reusable Tailwind roles for premium surfaces and correct, incorrect, and warning states.
- Preserve existing utility names so current screens remain stable while later checklist items adopt the shared system.
- Add reduced-motion safeguards for shared animation utilities.

## Validation
- Confirm the app compiles without errors.
- Open the homepage at desktop and phone sizes to verify the theme remains readable and intact.
- Stop after Item 1 and report “Item 1 complete.”

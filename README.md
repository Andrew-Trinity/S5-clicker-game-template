# Clicker Game — Y10 Computing Technology

## Learning Intentions
- **CT5-THI-01**: Apply computational, design and systems thinking to build and iterate a solution.
- **CT5-DAT-02**: Acquire, represent, analyse and visualise simple/structured data.

## What you will build
- **Task 1**: A minimal **mouse clicker** web app (increment, reset, accessible button).
- **Task 2**: Iterate the design: add a **timed round**, capture **timestamps**, compute **CPS**, and **visualise** (simple chart).

## Files
- `index.html` and `script.js`: Task 1 (baseline).
- `index_v2.html`: Task 2 (scaffold; you will add more).
- `support/script_support.js`: Optional scaffold if you’re stuck (see Differentiation below).

## How to run locally
1. Open `index.html` in your browser.
2. Make changes in `script.js` and refresh.

## How to run checks locally (optional)
- Install Node 20+ (use `nvm use` if available):  
  `nvm use`  
- Install dev tools:  
  `npm ci`
- Run linters:  
  `npm run lint` and `npm run lint:html`
- Run tests:  
  `npm test`

## Version Control Expectations
- Commit early and often with meaningful messages:
  - `feat: implement basic click increment`
  - `feat: add reset button and accessible live region`
  - `feat(v2): timed round, store timestamps`
- Create branches for significant ideas (e.g., `feat/timed-round`).

## Success Criteria (Student-friendly)
- **System defined**: inputs, processes, outputs, feedback (in README notes or a short section you add at the bottom).
- **Works**: clicking increments score; reset sets it to 0.
- **Quality**: passes basic linting.
- **Iteration**: adds a timed round + data capture; shows a simple chart.

## Differentiation
- **Support**: Use `support/script_support.js` as a reference. If needed, temporarily rename it to `script.js`. (If you do this, leave a comment in your README explaining your changes.)
- **Extension**:
  - Moving average CPS overlay on the chart.
  - Difficulty modes (moving/shrinking button) and compare performance.
  - Export CSV and interpret your own data insights in 3–5 sentences.

> ⚠️ Autograder focuses on **Task 1** (structure, lint, basic functionality). Task 2 is assessed by your teacher from your repo and demo.
// Task 1 — implement the minimal clicker logic.
// Requirements (autograded):
// 1) Clicking #clickBtn increments the number shown in #score.
// 2) Clicking #resetBtn sets #score back to 0.
// 3) Announce changes via #a11yStatus (e.g., "Score is now X") for accessibility.

(function () {
  // --- State ---
  let score = 0;

  // --- Elements ---
  const scoreEl = document.getElementById('score');
  const clickBtn = document.getElementById('clickBtn');
  const resetBtn = document.getElementById('resetBtn');
  const a11yStatus = document.getElementById('a11yStatus');

  // --- Helpers ---
  function updateScore (newScore) {
    score = newScore;
    scoreEl.textContent = String(score);
    if (a11yStatus) {
      a11yStatus.textContent = `Score is now ${score}.`;
    }
  }

  // TODO: add event listeners to increment and reset.
  // Example:
  // clickBtn.addEventListener('click', () => updateScore(score + 1));
  // resetBtn.addEventListener('click', () => updateScore(0));
})();
``
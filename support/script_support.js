// Support version with more scaffolding — rename to script.js if needed for Task 1.
(function () {
  let score = 0;
  const scoreEl = document.getElementById('score');
  const clickBtn = document.getElementById('clickBtn');
  const resetBtn = document.getElementById('resetBtn');
  const a11yStatus = document.getElementById('a11yStatus');

  function updateScore (newScore) {
    score = newScore;
    scoreEl.textContent = String(score);
    if (a11yStatus) {
      a11yStatus.textContent = `Score is now ${score}.`;
    }
  }

  if (clickBtn) {
    clickBtn.addEventListener('click', () => updateScore(score + 1));
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => updateScore(0));
  }
})();
``
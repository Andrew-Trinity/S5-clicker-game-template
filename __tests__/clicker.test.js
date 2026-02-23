/**
 * Tests basic functionality using jsdom:
 * - Increment score on #clickBtn click
 * - Reset score on #resetBtn click
 */
const fs = require('fs');
const path = require('path');

describe('Clicker Game — Task 1', () => {
  beforeEach(() => {
    // Load index.html into jsdom
    const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
    document.documentElement.innerHTML = html;
    // Load the student script (attaches event listeners)
    // eslint-disable-next-line global-require
    require(path.join(__dirname, '..', 'script.js'));
  });

  afterEach(() => {
    // reset module cache between tests
    jest.resetModules();
  });

  test('increments score when click button is pressed', () => {
    const clickBtn = document.getElementById('clickBtn');
    const scoreEl = document.getElementById('score');
    expect(clickBtn).toBeTruthy();
    expect(scoreEl).toBeTruthy();
    expect(scoreEl.textContent).toBe('0');

    clickBtn.click();
    expect(scoreEl.textContent).toBe('1');

    clickBtn.click();
    expect(scoreEl.textContent).toBe('2');
  });

  test('resets score when reset button is pressed', () => {
    const clickBtn = document.getElementById('clickBtn');
    const resetBtn = document.getElementById('resetBtn');
    const scoreEl = document.getElementById('score');

    clickBtn.click();
    clickBtn.click();
    expect(scoreEl.textContent).toBe('2');

    resetBtn.click();
    expect(scoreEl.textContent).toBe('0');
  });
});
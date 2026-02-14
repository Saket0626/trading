/**
 * Returns a shuffled copy of indices [0, 1, ..., n-1] using Fisher-Yates.
 * Use this to randomize option order in quizzes so the correct answer
 * isn't always in the same position (e.g. always B).
 */
export function shuffleIndices(n: number): number[] {
  const arr = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let haveNextNextGaussian = false;
let nextNextGaussian = 0;

export function nextGaussian() {
  if (haveNextNextGaussian) {
    haveNextNextGaussian = false;
    return nextNextGaussian;
  }
  let v1;
  let v2;
  let s;
  do {
    v1 = 2 * Math.random() - 1; // between -1 and 1
    v2 = 2 * Math.random() - 1; // between -1 and 1
    s = v1 * v1 + v2 * v2;
  } while (s >= 1 || s === 0);
  const multiplier = Math.sqrt((-2 * Math.log(s)) / s);
  nextNextGaussian = v2 * multiplier;
  haveNextNextGaussian = true;
  return v1 * multiplier;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

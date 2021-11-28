const range = (m: number, n: number): number[] => [...Array(n + 1).keys()].slice(m);

export const getPrimes = (maxRange: number): number[] =>
  range(2, maxRange).filter((n) => {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  });


/**
 * 1 / 3 에 자릿수 2면
 * 0.33
 * @param numerator 분자
 * @param denominator 분모
 * @param precision 자릿수
 * @returns
 */
const toFloatPrecision = (
  numerator: number,
  denominator: number,
  precision: number = 1
) => {
  return (
    Math.floor((numerator * 10 ** precision) / denominator) / 10 ** precision
  );
};

export { toFloatPrecision };

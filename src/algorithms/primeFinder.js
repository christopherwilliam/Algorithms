export default function isPrime(number) {
    var start = Math.ceil(number / 2);
    for (let i = start; i >= 2; i--) {
        if (!(number % i)) {
            return false;
        }
    }
    return true;
}
export function primeFactors(number) {
    var start = Math.ceil(number / 2);
    var factors = {};
    for (let factor = start; factor > 1; factor--) {
        if (!(number % factor) && isPrime(factor)) {
            factors[Object.keys(factors).length + 1] = factor;
        }
    }
    return factors;
}

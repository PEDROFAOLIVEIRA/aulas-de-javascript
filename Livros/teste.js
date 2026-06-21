function factorial (n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial (n - 1) * n;
        }
}
console.log(factorial(8));
// O resultado é 40320, pois o fatorial de 8 é calculado como 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320.}
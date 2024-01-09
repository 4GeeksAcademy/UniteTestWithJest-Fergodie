test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(4);

    // Si 1 dollar son 146 yen, entonces 4 dolares deben ser (4 * 146)
    const expected = 4 * 146;

    // Hago mi comparación (la prueba)
    expect(yens).toBe(expected)
})

test("One yen should be  0.00556 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const GBP = fromYenToPound(2);

    // Si 1 yen son 0.00556 pounds, entonces 2 yens deben ser (2 *  0.00556 pounds)
    const expected = 2 *  0.00556;

    // Hago mi comparación (la prueba)
    expect(GBP).toBe(expected)
})
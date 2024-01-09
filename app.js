

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
function fromEuroToDollar (eurAmount) {
    let rate = oneEuroIs.USD;
    let usdAmount = rate * eurAmount;
    return usdAmount;4
};
function fromDollarToYen (usdAmount) {
    let rate =  Math.round(oneEuroIs.JPY / oneEuroIs.USD);
    let yenAmount = rate * usdAmount
    return yenAmount; 

}
function fromYenToPound (yenAmount) {
    let rate = Math.round(oneEuroIs.GBP / oneEuroIs.JPY * 100000) / 100000;
    let GBPAmount = rate * yenAmount
    return GBPAmount; 

}






    module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }


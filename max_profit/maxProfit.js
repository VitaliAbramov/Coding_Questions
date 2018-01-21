function maxProfit(stockPrices) {

    var minPrice = stockPrices[0];
    var maxProfit = stockPrices[1] - stockPrices[0];

    for (var i = 1; i < stockPrices.length; i++) {
        var currentPrice = stockPrices[i];
        var profit = currentPrice - minPrice;
        if (profit > maxProfit)
        	maxProfit = profit;
        if (currentPrice < minPrice)
        	minPrice = currentPrice
    }

    return maxProfit;
}
var stockPrices = [10, 11, 9, 8, 15, 1, 9];
console.log(maxProfit(stockPrices)); 
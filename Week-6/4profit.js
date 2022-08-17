function maxProfit( price, start, end)
{
  
    // If the stocks can't be bought
    if (end <= start)
        return 0;
  
    // Initialise the profit
    let profit = 0;
  
    // The day at which the stock
    // must be bought
    for (let i = start; i < end; i++) {
  
        // The day at which the
        // stock must be sold
        for (let j = i + 1; j <= end; j++) {
  
            // If buying the stock at ith day and
            // selling it at jth day is profitable
            if (price[j] > price[i]) {
  
                // Update the current profit
                let curr_profit = price[j] - price[i]
                                  + maxProfit(price, start, i - 1)
                                  + maxProfit(price, j + 1, end);
  
                // Update the maximum profit so far
                profit = Math.max(profit, curr_profit);
            }
        }
    }
    return profit;
}
  
    // Driver program 
      
    let price = [ 7,1,5,3,6,4 ];
    let n = price.length;
  
    console.log(maxProfit(price, 0, n - 1));
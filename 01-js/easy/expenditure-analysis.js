/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let mp = new Map()
  for (let transaction of transactions) {
    if (mp.has(transaction.category)) {
      let x = mp.get(transaction.category)
      mp.set(transaction.category, x+transaction.price)
    } else {
      mp.set(transaction.category, transaction.price)
    }
  }

  let arr =[]
  for (let [key, value] of mp){
    arr.push({category: key, totalSpent: value })
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;

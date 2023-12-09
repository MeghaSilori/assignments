/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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

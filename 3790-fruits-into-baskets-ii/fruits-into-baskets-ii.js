/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let map = {};
    for(let i = 0; i < fruits.length; i++) {
        for(let j = 0; j < baskets.length; j++) {
            if(map[j] == undefined) {
                if( fruits[i] <= baskets[j]) {
                    map[j] = 1;
                    break;
                }
            }
        }
    }
    // console.log(" fruits.length - Object.keys(map) : ", fruits.length - Object.keys(map).length)
    return fruits.length - Object.keys(map).length;
};
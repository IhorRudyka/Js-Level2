
//  1. Найдите числа в массиве которые делятся на 3 без остатка

// const arr = [90, 124, 55, 9213, 159, 225, 1543, 1545];
// const devideArr = [];

// for(let i of arr) {  
//     for(let k = 0; i % 3 == k; k++){
//        devideArr.push(i)
//     }
// }



//  2. Посчитайте финальную стоимость всех продуктов в корзине и выведите результат как переменную в консоль лог

// const shoppingCart = [
//   {
//     name: 'Cheese',
//     count: 4,
//     pricePerItem: 100
    
//   },
//   {
//     name: 'Water',
//     count: 5,
//     pricePerItem: 23
    
//   },
//   {
//     name: 'Banana',
//     count: 8,
//     pricePerItem: 55
    
//   },
//   {
//     name: 'Choccolate',
//     count: 2,
//     pricePerItem: 115
    
//   }
// ];

// let TotalPrice = 0;

// for(i of shoppingCart) {
//     TotalPrice += i.pricePerItem * i.count;
// }
// console.log(TotalPrice)


//3. Посчитайте сумму всех чисел внутри массива массивов. Присвойте переменной и выведете в консоль.
// const arr = [
//   [100, 1230, 1293123, 1236478, 9816],
//   [9932, 2123123, 1293123, 1203123, 1239],
//   [12391, 1235, 1123994, 1203123, 5543243],
//   [1203, 92346, 288, 12309, 5543243],
//   [94324, 8236, 123, 86231, 8455322],
//   [2340123, 172, 123, 321, 38421340],
// ]

                     // ВАРИАНТ 1:
// let sum = 0;
                  
// for(let i = 0; i < arr.length; i++) {
//     const row = arr[i];
//     for(let k = 0; k < row.length; k++) {
//         sum += row[k];
//     }
// }
// console.log(`Sum of numbers is: ${sum}`)

                    // ВАРИАНТ 2:
// let sum = 0;
                  
// for(let i in arr) {
//     const row = arr[i];
//     for(let k in row) {
//         sum += row[k];
//     }
// }
// console.log(`Sum of numbers is: ${sum}`)



//4. Добавить в массив uniqueArray только не повторяющиеся значения из arr


// const arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java", "java", "go", "Python", "Python"]
// const uniqValue = new Set(arr)
// const uniqueArray = Array.from(uniqValue)
// console.log(uniqueArray)




//5. В объекте result должны быть свойства в которых ключ это элемент массива arr а значение - количество этих элементов в массиве arr


// const arr = ['Jane','Bob','Bob','Luci','Jane','Bob','Peter','Felix','Felix','Bob','Andrew'];
// let result = {};

// for(let i = 0; i < arr.length; i++) {

//     let item = arr[i]; 

//     if(result[item]) {
//         result[item]++;
//     } else {
//         result[item] = 1;
//     }
// }
// console.log(result);
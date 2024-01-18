// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
const createCounter = () =>{
    let counter = 0;
    return {
        increment: () => ++counter,
        decrement: () => --counter,
    }

}
const counter1= createCounter();
console.log(counter1.increment());
console.log(counter1.decrement());
console.log(counter1.increment());


// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

let factorial =(num) => {
    if (num===0) {
        return 1;
    } else {
        return factorial(num-1)*num;
    }
}
console.log(factorial(5)); 
console.log(factorial(0));
console.log(factorial(7));
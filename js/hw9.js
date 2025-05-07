// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].


// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.





function logItem(arrey) {
    let messege = ""
    for (let i = 0; i < arrey.length; i+=1) {
//    console.log(arrey[i]);
//    console.log(i);
   
    messege+=`${i + 1} - ${arrey[i]} \n`
     
    }
    return messege
}

console.log(logItem(["mango","polly", "alex"]));








// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.


const calculateEngravingPrice = function (message, pricePerWord) {
    const result = message.split(" ")
 //    console.log(result.length);
    return` price graviuvana + ${result.length * pricePerWord}`
    
     
     
 }
 const preis = 100;
 const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Numquam assumenda ipsa";
 console.log(calculateEngravingPrice(text,preis));
 




//  Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.
 
 const findLongestWord = function(string) {
    const frend = string.split(" ")
let numbers = frend[0]
    for (let i = 0; i < frend.length; i+=1) {
 if (frend[i].length > numbers.length) {
    numbers = frend[i]

 }
        
    }
    return numbers
  


   


}
console.log(findLongestWord("ivan nazarcik vadim taras"));








// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
const lengtString = function (word) {
    if (word.length<=40) {
        return word
        
    } else {
      return word.slice(0,40,) + "..."
    }
}
console.log(lengtString("nazar topovii pican potomichto win legenda kto ne soglasen tot ne krutoi pacan"));
console.log(lengtString("taras ne krutoi pacan"));





// 5 Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
const checkForSpam = function (message) {
    if (message.includes("spam")|| message.includes("sale"))  {
    return true
    } else {
      return false
    }
}
console.log(checkForSpam("sale"));
console.log(checkForSpam("da"));






// 6 При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
let input;
const numbers = [];
let total = 0;

while (true) { 
    input = prompt("введить число")
    if (input === null) {
     break
     
    } 
    const number = Number(input)
    if (isNaN(number)) {
        alert("ошибка")
        
    }
     numbers.push(number)

}

if (numbers.length>0) {
  for (let i = 0; i < numbers.length; i+=1) {
total+=numbers[i]
    
  }  
  console.log(`сума чисел = ${total} `);
  
}else {
    console.log("net chisla");
    
}
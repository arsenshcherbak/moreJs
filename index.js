//suma first element
function sumElement(n){
  let sum = 0;
  for(let i = 0; i<=n; i++){
    sum+=i;
  }
  return sum;
}
console.log(sumElement(8));

/*2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте
*/

class Сampus {
  constructor(options){
    this.faculty = options.faculty
    this.cathedra = options.cathedra
  }
}
class Student extends Сampus{
    constructor(options){
    super(options)
    this.firstname = options.firstname
    this.lastname = options.lastname
    this.gender = options.gender
    this.contact = options.contact
  }
}
const student = new Student({
  faculty:'history', 
  cathedra:'Ukraine',
  firstname:'Arsen', 
  lastname:'Shcherbak', 
  gender:'male', 
  contact:'0506706781'});

  
  function userInfo(){
    for(let key in student){
    console.log("Ваш " + key + " - " + student[key]);
  }
}
userInfo();
/* Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов */


function pushNum(){
  const randomNumber = [];
  for(let i = 1; i <= 25; i++){
    let x = Math.floor(Math.random() * 100);
    randomNumber.push(x);
  }
  return randomNumber;
}
const numbe = pushNum();

console.log(numbe); 


function evenIndex(){
  for(let key in numbe){
  if(key % 2 === 0){
    console.log(key);
  }
}
}
console.log(evenIndex()); 

function evenElement(){
for(let key in numbe){
  if(numbe[key] % 2 === 0){
    console.log(numbe[key])
  }
}  
}
console.log(evenElement()) 


function indexNull(){
  for(let key in numbe){
    if(numbe[key] === 0){
      return key;
    }
  }
}
console.log(indexNull()) 


function sumNullelement(){
  let count = 0;
  for(let key in numbe){
    if(numbe[key] === 0 ){
      ++count;
    }
  }
  return count;
}
console.log(sumNullelement());

/*Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, 
  год издания, издательство, формат, электронный номер) */

  class Book{
    constructor(options){
      this.autor = options.autor
      this.name = options.name
      this.yearPublishing = options.yearPublishing
      this.publishingHouse = options.publishingHouse
    }
  }

  class ElectronicversionBook extends Book{
    constructor(options){
      super(options)
      this.format = options.format
      this.electronicNumber = options.electronicNumber
    }
  }

  /*
  5 Требуется написать функцию, выводящую в консоль 
  числа от 1 до n, где n — это целое число, которая 
  функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
*/

 
function fizzBuzz(n){
for(let i = 1; i <= 100; i++){
    if(i % 3  === 0 && i % 5 === 0){
      console.log('fizzbuzz');
    } else if(i % 3  === 0){
      console.log('fizz');
    } else if(i % 5  === 0){
      console.log('buzz');
    } else{
      console.log(i);
    } 
  }
}
fizzBuzz(100)



  

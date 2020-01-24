

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    'use strict';
    let D = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    let x1, x2;
    if (D === 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x[0] = x1; 
    }  else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        x[0] = x1;
        x[1] = x2;
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let summ, averageMark;
    if (marks.length > 5) {
      console.log (`Количество оценок превышает 5, \nмассив [${marks}] будет сокращён до пяти элементов:`);
      marks.splice (5);
      console.log (marks);
      summ = 0;
      for (let i = 0; i < marks.length; i++) {
        summ += marks[i];
      }
      averageMark = summ / marks.length;
      console.log(`Ваш средний балл: ${averageMark}`);
      return averageMark;
    } else if (marks.length < 1) {
      console.log(`У Вас нет оценок - средний балл рассчитать нельзя =)`);
    } else {
      summ = 0;
      for (let i = 0; i < marks.length; i++) {
        summ += marks[i];
      }
      averageMark = summ / marks.length;
      console.log(`Ваш средний балл: ${averageMark}`);
      return averageMark;
    };
  
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let birthYear = dateOfBirthday.getFullYear();
    let today = new Date();
    let year = today.getFullYear();
    let ageOfSubj = year - birthYear;
    if (ageOfSubj >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    };
    return result;
}
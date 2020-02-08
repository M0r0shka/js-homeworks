function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    const today = new Date();
    const contributeDate = new Date(date);
    let differenceDate = Math.abs(contributeDate.getTime() - today.getTime());
    date = Math.floor(differenceDate / (1000 * 3600 * 24 * 30.4166));

    let arr = {
      percent: percent, 
      contribution: contribution, 
      amount: amount, 
      date: date,
    }

    for (let prop in arr) {
      let value = arr[prop];
      //console.log(value);
      let parsed = parseInt(value, 10);
      arr[prop] = parsed;
      if (isNaN(parsed)) { 
        console.log(`Параметр \"${prop}\" содержит неправильное значеие ${value}`); 
      } 
    }

    let p = arr.percent / (100 * 12);
    let summ = arr.amount - arr.contribution;
    let monthPay = summ * (p + p / (((1 + p)**date) - 1));
    let total = monthPay * date;
    let totalAmount = total.toFixed(2);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
   const isValidName = !!name;
   return `Привет, мир! Меня зовут ${isValidName ? name : 'Аноним'}`;
}

/*function getGreeting(name) {
  let greeting;
  if (name == !!0 || name == undefined) {
    greeting = `Привет мир! Меня зовут Аноним.`;
    } else {
      greeting = `Привет мир! Меня зовут ${name}`;
    }
  return greeting;
}
*/

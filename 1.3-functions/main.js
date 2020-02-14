// Задача 1 
function getSolutions(a, b, c) {
  let x1, x2;
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    return {
       D: d,
    }
  } else if (d === 0) {
    x1 = -b / (2 * a);
    return {
       D: d,
       roots: [x1],
    }
  } else {
     x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    return {
       D: d,
      roots: [x1, x2],
    }
  }
}
  
function showSolutionMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x^2+${b}x+${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень. x1=${result.roots[0]}`);
  } else {
     console.log(`Уравнение имеет два корня. x1=${result.roots[0]}, x2=${result.roots[1]}`);
  }
}
  
showSolutionMessage(7, 20, -3);
showSolutionMessage(1, 2, 3);
showSolutionMessage(2, 4, 2);


// Задача 2
function getAverageScore(data) {
  let value = 0, totalValue = 0, average = 0, count = 0;
  let averageValue = {};

  for (let lesson in data) {
    getAverageLesson(data[lesson]);
    averageValue[lesson] = value;
    totalValue += value;
    count++;
    average = totalValue / count;
  }

  function getAverageLesson(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    value = sum / data.length;
    return value;
  }

  averageValue.average = average;
  return averageValue;
};

console.log(getAverageScore({
	algebra: [4, 4, 5, 4, 3, 4],
	geometry: [3, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5, 5],
	music: [2, 2, 4],
	english: [4, 4, 3],
	poetry: [5, 4, 3, 4],
	chemistry: [5, 5, 5],
	french: [2, 2],
	programming: [5, 5, 4, 4]
}));	

// Задача 3
function getPersonData(secretData) { 
  let name = '';
  let person = {
    firstName: secretData.aaa,
    lastName: secretData.bbb,
  };
    
  function getPersonName(name) {
   if (name == '0') {
     return 'Rodrigo';
    } else if (name == '1') {
     return 'Emilio';
    }
  };
    
  name = person.firstName;
  person.firstName = getPersonName(name);
  name = person.lastName;
  person.lastName = getPersonName(name);
  return person;
}
  
console.log(getPersonData({
 aaa: 0,
 bbb: 0
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 0
}));
console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));
console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));
  

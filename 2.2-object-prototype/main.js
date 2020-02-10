function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = new Date();
    birthday = new Date(birthday);
    let diff = now.getTime() - birthday.getTime();
    let age = diff / (1000 * 60 * 60 * 24 * 365.2425);
    return age > 18;    
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
      if (!animal) {
        return null;
      }
      let sound = animal.sound;
      if (animal) {
        return sound;
      }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      let value = parseInt(marks[i], 10)
      sum += value;
    }  
    average = sum / marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

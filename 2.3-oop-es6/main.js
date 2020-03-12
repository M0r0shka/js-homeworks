class Weapon {
    constructor({name, attack, durability, range}) {
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.range = range;
      this.initDurability = durability;
    }
  
    takeDamage(damage) {
      if (this.durability - damage < 0) {
        this.durability = 0;
        return this.durability;
      }
      if (this.durability === Infinity) {
        return Infinity;
      }
      this.durability = this.durability - damage;
      return this.durability;
    }
  
    getDamage() {
      if (this.durability === 0) {
        return 0;
        } else if (this.durability >= this.initDurability * 0.3) {
        return this.attack;
        } else {
        return this.attack / 2;
      }
    }
  
    isBroken() {
      if (this.durability > 0) {
      return false ;
      } else {
      return true;
      }
    }
  
  }
   
  const sword  = new Weapon ({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
  });
  
  sword.takeDamage(5);
  console.log(sword.durability);
  
  sword.takeDamage(50);
  console.log(sword.durability); 
  
  const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
  });
  
  arm.takeDamage(20);
  console.log(arm.durability); 
  
  const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
  });
  
  bow.takeDamage(20);
  console.log(bow.durability);
  
  bow.takeDamage(200);
  console.log(bow.durability);
  
  
  console.log(bow.durability);  
  console.log(bow.getDamage());  
  
  console.log(arm.durability);  
  console.log(arm.getDamage());  
  
  
  console.log(bow.durability); 
  console.log(bow.isBroken()); 
  
  console.log(arm.durability); 
  console.log(arm.isBroken()); 
  
  const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
  });
  
  const staff = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
  });
  
  const longBow = bow;
  longBow.name = 'Длинный лук';
  longBow.attack = 15;
  longBow.range = 4;
  console.log(longBow);
  
  const ax = sword;
  ax.name = 'Секира';
  ax.attack = 27;
  ax.durability = 800;
  console.log(ax);
  
  const stormStaff = staff;
  stormStaff.name = 'Посох Бури';
  stormStaff.attack = 10;
  stormStaff.range = 3;
  console.log(stormStaff);
  
  
  
  console.log('\n Задача 2  \n');
  

class Arm extends Weapon {
  constructor() {
    super({
      name: 'Рука',
      attack: 1,
      durability: Infinity,
      range: 1,     
    });
  }
}

const myArm = new Arm();
console.log(myArm);
myArm.takeDamage(20);
console.log(myArm.durability);
console.log(myArm.getDamage());
console.log(myArm.isBroken()); 


class Bow extends Weapon {
  constructor() {
    super({
      name: 'Лук',
      attack: 10,
      durability: 200,
      range: 3,     
    });
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

const myBow = new Bow();
console.log(myBow);
myBow.takeDamage(250);
console.log(myBow.durability);
console.log(myBow.getDamage());
console.log(myBow.isBroken()); 

const mylongBow = new LongBow();
console.log(mylongBow);
mylongBow.takeDamage(199);
console.log(mylongBow.durability);
console.log(mylongBow.getDamage());
console.log(mylongBow.isBroken()); 


class Sword extends Weapon {
  constructor() {
    super({
      name: 'Меч',
      attack: 25,
      durability: 500,
      range: 1    
    });
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.initDurability = 800;
  }
}

const mySword = new Sword();
console.log(mySword);
mySword.takeDamage(300);
console.log(mySword.durability);
console.log(mySword.getDamage());
console.log(mySword.isBroken()); 

const myAxe = new Axe();
console.log(myAxe);
myAxe.takeDamage(530);
console.log(myAxe.durability);
console.log(myAxe.getDamage());
console.log(myAxe.isBroken()); 


class Knife extends Weapon {
  constructor() {
    super({
      name: 'Нож',
      attack: 5,
      durability: 300,
      range: 1,     
    });
  }
}

const myKnife = new Knife();
console.log(myKnife);
myKnife.takeDamage(400);
console.log(myKnife.durability);
console.log(myKnife.getDamage());
console.log(myKnife.isBroken()); 


class Staff extends Weapon {
  constructor() {
    super({
      name: 'Посох',
      attack: 8,
      durability: 300,
      range: 2,     
    });
  }
}

class StormStaff extends Staff {
 constructor() {
  super();
  this.name = 'Посох Бури';
  this.attack = 10;
  this.range = 3;
 }
}

const myStaff = new Staff();
console.log(myStaff);
myStaff.takeDamage(240);
console.log(myStaff.durability);
console.log(myStaff.getDamage());
console.log(myStaff.isBroken()); 

const myStormStaff = new StormStaff();
console.log(myStormStaff);
myStormStaff.takeDamage(300);
console.log(myStormStaff.durability);
console.log(myStormStaff.getDamage());
console.log(myStormStaff.isBroken()); 



console.log('\n Задача 3\n');
let count = 0;
let value = 0;

class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjList = {};
  }
  
  getName() {
    return this.name;
  }
  
  addGrade(grade, subject) {
    if (grade > 0 && grade < 6) {
      if (this.subjList[subject]) {
        this.subjList[subject].push(grade); 
      } else {
          this.subjList[subject] = [];
          this.subjList[subject].push(grade);
        }
      return this.subjList[subject].length;
    } else {
      if (this.subjList[subject]) {
        return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5 \n ${this.subjList[subject].length}`;
      } else { 
        return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от  1 до 5 \n 0`
      } 
    }
  } 
  
  getAverageBySubject(subject) {
    if (this.subjList[subject]) {
      count = 0;
      for (let i = 0; i < this.subjList[subject].length; i++) {
        count += this.subjList[subject][i];
      }
      return count / this.subjList[subject].length;
    } else {
      return 0;
    }
  }
  
  getTotalAverage() {
    count = 0; 
    value = 0;
    for (let subj in this.subjList){
      for (let i = 0; i < this.subjList[subj].length; i++) {
        value += this.subjList[subj][i];
      }
      count += this.subjList[subj].length;
    } 
    if (count === 0) {
      return 0;
    } else {
      return value / count;
    }
  }
}

let log = new StudentLog('Олег Никифоров');
console.log(log.getName());

console.log(log.addGrade(4, 'geometry'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(6, 'math'));
console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));
console.log(log.addGrade('Отлично!', 'algebra'));


console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage());


log = new StudentLog('Алексей Иванов');
console.log(log.getName());
console.log(log.addGrade(5, 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'))
console.log(log.addGrade(6, 'geometry'));
console.log(log.addGrade(18, 'music'));
console.log(log.addGrade('Отлично!', 'algebra'));
console.log(log.getTotalAverage());



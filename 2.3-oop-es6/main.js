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
  
  class Arm extends Weapon  {
    constructor(name) {
      super(name);
      this.name = name;
      this.attack = 1;
      this.durability = Infinity;
      this.range = 1;
      this.initDurability = this.durability;
    }
  }
  
  const arm1 = new Arm('Рука');
  console.log(arm1);
  arm1.takeDamage(20);
  console.log(arm1.durability);
  console.log(arm1.getDamage());
  console.log(arm1.isBroken()); 
  
  class Bow extends Weapon  {
    constructor(name) {
      super(name);
      this.name = name;
      this.attack = 10;
      this.durability = 200;
      this.range = 3;
      this.initDurability = this.durability;
    }
  }
  
  class LongBow extends Bow {
    constructor(durability) {
      super(durability);
      this.name = 'Длинный лук';
      this.attack = 15;
      this.range = 4;
      this.initDurability = this.durability;
    }
  }
  
  
  const bow1 = new Bow('Лук');
  console.log(bow1);
  bow1.takeDamage(250);
  console.log(bow1.durability);
  console.log(bow1.getDamage());
  console.log(bow1.isBroken()); 
  
  const longBow1 = new LongBow('Длинный лук');
  console.log(longBow1);
  longBow1.takeDamage(199);
  console.log(longBow1.durability);
  console.log(longBow1.getDamage());
  console.log(longBow1.isBroken()); 
  
  
  class Sword extends Weapon  {
    constructor(name) {
      super(name);
      this.name = name;
      this.attack = 25;
      this.durability = 500;
      this.range = 1;
      this.initDurability = this.durability;
    }
  }
  
  class Ax extends Sword {
    constructor(range) {
      super(range);
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
      this.initDurability = this.durability;
    }
  }
  
  const sword1 = new Sword('Меч');
  console.log(sword1);
  sword1.takeDamage(300);
  console.log(sword1.durability);
  console.log(sword1.getDamage());
  console.log(sword1.isBroken()); 
  
  const ax1 = new Ax('Секира');
  console.log(ax1);
  ax1.takeDamage(530);
  console.log(ax1.durability);
  console.log(ax1.getDamage());
  console.log(ax1.isBroken()); 
  
  class Knife extends Weapon {
   constructor(name) {
     super(name);
     this.name = name;
     this.attack = 5;
     this.durability = 300;
     this.range = 1;
     this.initDurability = this.durability;
    }
  }
  
  const knife1 = new Knife('Нож');
  console.log(knife1);
  knife1.takeDamage(400);
  console.log(knife1.durability);
  console.log(knife1.getDamage());
  console.log(knife1.isBroken()); 
  
  class Staff extends Weapon {
   constructor(name) {
     super(name);
     this.name = name;
     this.attack = 8;
     this.durability = 300;
     this.range = 2;
     this.initDurability = this.durability;
   }
  }
  
  
  class StormStaff extends Staff {
   constructor(durability) {
    super(durability);
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
    this.initDurability = this.durability;
   }
  }
  
  const staff1 = new Staff('Посох');
  console.log(staff1);
  staff1.takeDamage(240);
  console.log(staff1.durability);
  console.log(staff1.getDamage());
  console.log(staff1.isBroken()); 
  
  const stormStaff1 = new StormStaff('Посох Бури');
  console.log(stormStaff1);
  stormStaff1.takeDamage(300);
  console.log(stormStaff1.durability);
  console.log(stormStaff1.getDamage());
  console.log(stormStaff1.isBroken()); 
  
  
  console.log('\n Задача 3\n');
  let subjList = {};
  let count = 0;
  let value = 0;
  
  class StudentLog {
    constructor(name) {
      this.name = name;
    }
    
    getName() {
      return this.name;
    }
    
    addGrade(grade, subject) {
      if (grade > 0 && grade < 6) {
        if (subjList[subject]) {
          subjList[subject].push(grade); 
        } else {
            subjList[subject] = [];
            subjList[subject].push(grade);
          }
        console.log(subjList);
        return subjList[subject].length;
      } else {
        if (subjList[subject]) {
          console.log(subjList);
          return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5 \n ${subjList[subject].length}`;
        } else { 
          return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от  1 до 5 \n 0`
        } 
      }
    } 
    
    getAverageBySubject(subject) {
      if (subjList[subject]) {
        count = 0;
        console.log(subjList[subject]);
        for (let i = 0; i < subjList[subject].length; i++) {
          count += subjList[subject][i];
        }
        return count / subjList[subject].length;
      } else {
        return 0;
      }
    }
    
    getTotalAverage() {
      count = 0; 
      value = 0;
      for (let subj in subjList){
        console.log(subjList[subj]);
        for (let i = 0; i < subjList[subj].length; i++) {
          value += subjList[subj][i];
        }
        count += subjList[subj].length;
        console.log(count);
        console.log(value);
      } 
      console.log(subjList);
      if (count === 0) {
        return 0;
      } else {
        return value / count;
      }
    }
  }
  
  const log = new StudentLog('Олег Никифоров');
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
  
  

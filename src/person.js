
const isAdult = (age) => (age>=18) ? 'is an adult' : 'is not an adult' ;
const canDrink = (age) => (age>=21) ? 'is old enough to drink' : 'too young to drink';
const But = (age) => age>=18 & age<21 ? 'but' : 'and';
const isSenior = (age) => (age>65) ? 'They are senior' : 'They arent senior';

export{ isAdult, canDrink, But, isSenior as default};
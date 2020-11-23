//Object destructuring
const person = {
    name: 'Ben',
    age: 4,
    location: {
        city: 'Windsor',
        temp: 18
    }
};
//rather than using person.location.city, the const below will 
//destructure the object
const {name: firstname = 'Anonymous', age} = person;
console.log(`${firstname} is ${age}`);

const {city, temp: temperature} = person.location;
if (city && person.location.temp) {
console.log(`It's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);

//Array destructuring
const address = ['56b Grove Road','Windsor','Berkshire'];
const [ , , county = 'New York'] = address;
console.log(`You are in ${county}`);

const item = ['Coffee (iced)','£2','£3.50','£2.75'];
const [coffee = 'unknown item', , price = 'unknown'] = item;
console.log(`A medium ${coffee} costs ${price}`);
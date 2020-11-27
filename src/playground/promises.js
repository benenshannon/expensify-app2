
const promise = new Promise((resolve, reject) =>{
    //   e.g. a task triggering a firebase database change, and if the
    // task went well, then "resolve" else "reject"
    setTimeout(() => {
        resolve({comment: 'this is the resolved data', name: 'Ben'});
        //resolve('this is my other resolved data');
        //resolve can only be called once (any further calls are ignored)
        //reject('Something went rong!');
    }, 3000);
});
console.log('before');
promise.then((data) => {
    //.then lets us register a call-back, and it will fire if the
// function is resolved
    console.log('1',data);
    //nesting a promise in a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({comment: 'this is the next promise nested'});
        }, 3000);
    });
})
.then((str) => {
    console.log('does this run?', str);
})
.catch((error) => {
    //.catch is to catch the logic if the promise is rejected
    console.log('error as first way to write error:', error);
});

console.log('after');

//other way of writing promise with .catch inbuilt
promise.then((data) => {
    console.log('1',data);
}, (error) => {console.log('error as second promise argument:', error)
});

//use promises in the firebase file to alert us to when data either
//syncs or doesnt sync
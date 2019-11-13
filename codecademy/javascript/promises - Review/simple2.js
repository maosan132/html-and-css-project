const examplePromise1 = new Promise((resolve, reject) => { reject('Uh-oh!') });
const examplePromise2 = new Promise((resolve, reject) => { reject('Uh-oh!') });

const onFulfill = value => {console.log(value)};
const onReject = reason => {console.log(reason)};

const promise1 = examplePromise1.then(onFulfill, onReject);

const promise2 = examplePromise2.then(onFulfill).catch(onReject);
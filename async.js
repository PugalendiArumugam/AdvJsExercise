console.log('Person1: shows the ticket');
console.log('Person2: shows the ticket');

const promiseWife = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});

promiseWife.then((t)=>{
    console.log(`person3: shows the ${t}`);
})

console.log('Person4: shows the ticket');
console.log('Person5: shows the ticket');

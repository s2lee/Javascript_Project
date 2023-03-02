async function a() {
    console.log('2');
    const a = await 1;
    console.log('4');
    console.log('a', a);
    await null;
    const b = await Promise.resolve(1);
    console.log('b', b);
    return a + b;
}

console.log('1');
a()
    .then((result) => {
        console.log(result);
    })
    .then((result2) => {
        console.log(result2);
    });
console.log('3')

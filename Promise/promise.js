const timePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    },2000);
})

timePromise.then((res) => {
    console.log('------');
    console.log(res);
})

// const getPromise = (time) => new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         if( time > 4) {
//             reject("에러입니다");
//         } else {
//             resolve('완료');
//         }
//     },time * 1000)
// })

// getPromise(3)
// .then((res) => {
//     console.log("first then");
//     console.log(res);
//     return getPromise(3);
// }).then((res) => {
//     console.log("secend then");
//     console.log(res);
// }).catch((rej) => {
//     console.log("error");
//     console.log(rej);
// }
// ).finally(() => {
//     console.log("무조건 이건 실행");
// })

// Promise.all([getPromise(1), getPromise(2), getPromise(3)]).then(
//     (res) => {
//         console.log(res);
//     }
// ).catch((rej) => console.log(rej));

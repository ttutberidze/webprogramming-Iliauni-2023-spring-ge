
console.log('1');
// async function
console.log(2);

const user = {
    name: 'James Bond'
}

const user2 = {
    name: 'Agent 007'
}

const printAsync = (userParam) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(userParam.name)
            }catch(error) {
                reject(error);
            }
        }, 3000)
    })
}

// printAsync()
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })
//     .finally(() => {
//         console.log('Finally')
//     })

// printAsync(user)
//     .then((value) => {
//         console.log(value);
//         printAsync(user2)
//             .then((value) => {
//                 console.log(value);
//             })
//             .catch((error) => {
//                 console.log(error.message)
//             })
//     })
//     .catch((error) => {
//         console.log(error.message)
//     })

const main = async () => {
    try {
        const result1 = await printAsync(user)
        console.log(result1)
        const result2 = await printAsync()
        console.log(result2)
    } catch(error) {
        console.log(error.message)
    }
}
main();
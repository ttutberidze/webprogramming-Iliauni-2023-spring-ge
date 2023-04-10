const user = {
    name: 'James',
    username: 'oo7',
    skills: [{name: 'JS'}, {name: 'HTML'}],
    address: {
        country: {
            name: 'Georgia',
            city: {
                name: 'Tbilisi'
            }
        }
    },
    age: 3
}

const deepClone = (obj) => {
    const result = {};
    // keys = ['name', 'username', 'address', 'age']
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++) {
        // console.log(keys[i], obj[keys[i]])
        if(typeof obj[keys[i]] === 'object') {
            if(Array.isArray(obj[keys[i]])) {
                // [{name: 'JS'}, {name: 'HTML'}]
                // ['JS', 'HTML']
                result[keys[i]] = obj[keys[i]].map((item) => deepClone(item))
            } else {
                result[keys[i]] = deepClone(obj[keys[i]])
            }
        } else {
            result[keys[i]] = obj[keys[i]]
        }
    }
    return result;
}

const user2 = deepClone(user);
// const user2 = {
//     ...user
// }
user2.address.country.name = 'USA';
console.log(user, user2);
const axios = require('axios')

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase= () => console.log('DBs initialized')
// const closeDatabase= () => console.log('DBs closed')
const nameCheck = () => console.log('checking name...')

describe('Checking names', () => {
    beforeEach(() =>nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff'
        expect(user).toBe('Jeff')
    })

    test('User is Karen', () => {
        const user = 'Karen'
        expect(user).toBe('Karen')
    })
})

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {
            firstname:'Lexfer'
        };
        user['lastname'] = 'Ramirez';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'error')
}

module.exports = functions;


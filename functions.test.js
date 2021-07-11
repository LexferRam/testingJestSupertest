const functions = require('./functions');

test('Add 2+2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Add 2 +2 NOT equal to 5',() => {
    expect(functions.add(2,2)).not.toBe(5)
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
});

test('should be falsy',() =>{
    expect(functions.checkValue(0)).toBeFalsy()//toBeTruthy()
})

test('User should be Lexfer Ramirez object',() => {
    //toEqual se usar para vrificar tipos de datos como objetos arrays etc.
    //toBe() se usa para tipo de datos primitivos
    expect(functions.createUser()).toEqual({
        firstname:'Lexfer',
        lastname:'Ramirez'
    })
});

test('should be under or equal 1600',() => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600)
    //toBeLessThan()
})

//REGEX
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i)
});

test('Admin should be in usernames', () => {
    usernames = ['lexfer', 'daniel', 'miguel', 'admin'];
    expect(usernames).toContain('admin')
})

//work with async data
//Pormise
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

//Async await 
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})
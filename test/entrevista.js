function fizzbuzz(num){
    if(typeof num !== 'number'){
        return 'Error: the argument must be a number'
    }

    const divisible = (divisor, num) => num % divisor === 0 

    if(num === 0){
        return 0;
    }

    //comprobando si num es multiplo de 3 y 5
    if(divisible(3,num) && divisible(5,num)){
        return 'fizzbuzz'
    }

    //comprobando si un nro es multiplo de tres
    if(divisible(3,num)){
        return 'fizz';
    }
    //comprobando si un nro es multiplo de 5
    if(divisible(5,num)){
        return 'buzz'
    }

    return num
}

function print(num){
    for(let i = 0; i < num; i++){
        console.log(`${i}: ${fizzbuzz(i)}`)
    }
}

print(16)

module.exports = fizzbuzz;
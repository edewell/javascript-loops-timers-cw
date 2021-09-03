// FIZZBUZZ is a classic Programmer's challenge often used as part of job interviews. 

// User inputs the ending value (e.g. 100)

// #### Your code should start at 1 and then iterate each number up to the maximum
// * If the current number is evenly divisible by 3 you should print "FIZZ" and the number
// * If the current number is evenly divisible by 5 you should print "BUZZ" and the number
// * If the current number is evenly divisible by both 3 and 5 you should print "FIZZBUZZ" and the number
// * Otherwise, just print the number to the console

for (idx = 1; idx <= 100; idx++)
// let number = prompt('Enter a number')
{
    if (idx % 3 == 0){
        console.log(`${idx} FIZZ `);
    }

    else if (idx % 5 == 0){
        console.log(`${idx} BUZZ `);
        
    }

    else if (idx % 3 && idx % 5 == 0){
        console.log(`${idx} FIZZBUZZ`);
        
    }
}

// for (id = 1; id <= 100; id++)
// {
//     if (id % 5 == 0);
    
//     else{
//         console.log(id)
//     }
// }
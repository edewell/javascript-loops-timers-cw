// - Create an empty `name_array`
// - Ask the user ```Enter a word. Enter 'q' to quit.``` Add each word they enter to the array
// - Create a while loop that will keep asking for words to add to the array until they enter 'q'
// - When the user enters 'q' use a **for** loop to print each word from the array
// - NOTE: Your code should handle the case of the entered quite letter `Q`

let nameArray = [];
let notDone = true;
while (notDone) {
    let name = prompt('Enter a word, When finished enter "q" to quit').toLowerCase();
    if (name === 'q') {
        notDone = false;
        
        for (let index = 0; index < nameArray.length; index++) {
            // console.log(nameArray[index]);
            let div = document.createElement('div');
            let div2 = document.createTextNode(nameArray[index]);
            div.appendChild(div2);
            document.body.appendChild(div);
            
        }
    }
    else {
        nameArray.push(name);
    }
}


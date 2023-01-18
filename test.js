// ---------------------------------------------------

function repeat(arr) {
    return [...arr, ...arr, ...arr]
}

console.log(repeat([1,2,3])) //[1,2,3,1,2,3,1,2,3]

// ---------------------------------------------------

function reformat(str){
    const vowels = [ 'a', 'e', 'i', 'o', 'u']
    let res = str.split('');
    res = res.filter((letter) => !vowels.includes(letter.toLowerCase()));
    res = res.map((letter) => letter.toLowerCase());
    res[0] = res[0].toUpperCase();
    
    return res.join('').toString();
}

console.log(reformat("liMeSHArp DeveLoper TEST"))

// ---------------------------------------------------

function next_binary_number(arr){
    let l = arr.length;
    let i;
    // examine bits from the right
    for (i = l - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i] = 1;
            break;
        }
        else {
            arr[i] = 0;
        }
    }
    if (i < 0) {
        arr = [1, ...arr];
    }

    return arr;
}

console.log(next_binary_number([1,1,1,1,1,1,1,1,1,1,1])) // [1,1]);

// ---------------------------------------------------

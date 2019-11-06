// // Ключові слова для змінних:
// // var, let, const
// let message = 'Hello!';
// alert(message);
// message = 'World!';
// alert(message);

// const year = 2019;
// alert(year);

// const nextYear = year + 1;
// message = 'Next year will be: ' + nextYear;
// alert(message);

const userName = prompt('Enter your name');
alert('Hello, ' + userName);

const userAge = parseFloat(prompt('Enter your age'));
const nextAge = addOne(userAge);
alert(nextAge);

if (userAge < 18) { // < > <= >= == === != !== || &&
    alert('You are not adult');
} else {
    alert('You are adult');
}

function addOne(num) {
    const result = num + 1;
    return result;
}

// All scalar data types in JS
// String
// Number
// Boolean
// undefined
// null
// Object
// Symbol
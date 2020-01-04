const defaultResult = 0;
let currentResult = defaultResult;
let arrayTest = [];
let arrayTest2 = [];
//converting string to a int
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//display function
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
}

//hide the calcDescription when the website loads first time
createAndWriteOutput('', '', '');

function writeToArray(oper, prev, num, res) {
    const logEntry = {
        operation: oper,
        prevResult: prev,
        number: num,
        result: res
    };
    arrayTest2.push(logEntry);
}

//sum function
function add() {
    const inputNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += inputNumber;
    arrayTest.push(inputNumber);
    createAndWriteOutput('+', initialResult, currentResult);
    writeToArray('ADD', initialResult, inputNumber, currentResult);
    console.log(arrayTest);
    console.log(arrayTest2);
}

//subtraction function
function sub() {
    const inputNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= inputNumber;
    createAndWriteOutput('-', initialResult, currentResult);
    writeToArray('SUB', initialResult, inputNumber, currentResult);
}

//multiply function
function mult() {
    const inputNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= inputNumber;
    createAndWriteOutput('*', initialResult, currentResult);
    writeToArray('MUL', initialResult, inputNumber, currentResult);
}

//division function
function div() {
    const inputNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= inputNumber;
    createAndWriteOutput('/', initialResult, currentResult);
    writeToArray('DIV', initialResult, inputNumber, currentResult);
}

function reset() {
    currentResult = 0;
    createAndWriteOutput('', '', '');
    arrayTest = [];
    arrayTest2 = [];
    userInput.value = null;
}

//calling functions by Listener.
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', sub);
multiplyBtn.addEventListener('click', mult);
divideBtn.addEventListener('click', div);
resetBtn.addEventListener('click', reset);
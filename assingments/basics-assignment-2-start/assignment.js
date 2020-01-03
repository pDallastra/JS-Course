const task3Element = document.getElementById('task-3');

function test1() {
    alert('this is function 1 - testing alert');
}

function test2(name) {
    alert(name);
}

test2('Dallastra');

task3Element.addEventListener('click', test1);

function test3(par1, par2, par3) {
    return `${par1} ${par2} ${par3}`;
}

let test = test3('Paulo', 'Thais', 'Lucas');
alert(test);
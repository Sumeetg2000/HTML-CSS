var outBox = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var scndOpr = true;
var degree = true;
var index = 0;
var memoryStore = [];
function deg() {
    if (degree) {
        document.getElementById('deg').innerText = 'RAD';
        degree = !degree;
    }
    else {
        document.getElementById('deg').innerText = 'DEG';
        degree = !degree;
    }
}
function fe() {
    outBox.value = (evaluate(outBox.value)).toExponential();
}
function memoryFunctions(input) {
    function memDis() {
        document.getElementById('mc').style.pointerEvents = 'none';
        document.getElementById('mc').style.color = 'gray';
        document.getElementById('mr').style.pointerEvents = 'none';
        document.getElementById('mr').style.color = 'gray';
    }
    function memEn() {
        document.getElementById('mc').style.pointerEvents = 'auto';
        document.getElementById('mc').style.color = 'black';
        document.getElementById('mr').style.pointerEvents = 'auto';
        document.getElementById('mr').style.color = 'black';
    }
    if (input == 'MC') {
        memoryStore = [];
        memDis();
        index = 0;
    }
    else if (input == 'MR') {
        let res = 0;
        memoryStore.forEach(memCal);
        function memCal(value, index, array) {
            res += value;
        }
        outBox.value = String(res);
        index = 0;
    }
    else if (input == 'M+' || input == 'M-') {
        if (input == 'M-') {
            pN();
        }
        memoryStore.push(evaluate(outBox.value));
        outBox.value = '';
        if (memoryStore.length === 1) {
            memEn();
        }
        index = 0;
    }
    else if (input == 'MS') {
        if (memoryStore.length == 0) {
            alert('Memory is empty');
        }
        else {
            outBox.value = String(memoryStore[index]);
            if (index < memoryStore.length - 1) {
                index++;
            }
            else {
                index = 0;
            }
        }
    }
}
function trigoFunctions(input) {
    if (degree) {
        outBox.value = String(evaluate(outBox.value) * (Math.PI / 180));
    }
    if (input == 'Sin') {
        outBox.value = String(Math.sin(evaluate(outBox.value)));
    }
    else if (input == 'Cos') {
        outBox.value = String(Math.cos(evaluate(outBox.value)));
    }
    else if (input == 'Tan') {
        outBox.value = String(Math.tan(evaluate(outBox.value)));
    }
    else if (input == 'Sin-1') {
        outBox.value = String(Math.asin(evaluate(outBox.value)));
    }
    else if (input == 'Cos-1') {
        outBox.value = String(Math.acos(evaluate(outBox.value)));
    }
    else if (input == 'Tan-1') {
        outBox.value = String(Math.atan(evaluate(outBox.value)));
    }
}
function functions(input) {
    if (input === 'round') {
        outBox.value = String(Math.round(evaluate(outBox.value)));
    }
    else if (input === 'ceil') {
        outBox.value = String(Math.ceil(evaluate(outBox.value)));
    }
    else if (input === 'floor') {
        outBox.value = String(Math.floor(evaluate(outBox.value)));
    }
    else if (input === 'trunc') {
        outBox.value = String(parseInt(String(evaluate(outBox.value))));
    }
}
function scndBtn() {
    if (scndOpr) {
        document.getElementById('scndOp').style.boxShadow = ('inset 5px 5px 8px #00000020, inset -5px -5px 5px #ffffff');
        document.getElementById('xPow').innerHTML = 'x<sup>3</sup>';
        document.getElementById('root').innerHTML = '<sup>3</sup>&radic;x';
        document.getElementById('powX').innerHTML = '2<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log<sub>2</sub>';
        document.getElementById('ln').innerHTML = 'ln<sub>2</sub>';
        document.getElementById('sin').innerHTML = 'Sin<sup>-1</sup>';
        document.getElementById('cos').innerHTML = 'Cos<sup>-1</sup>';
        document.getElementById('tan').innerHTML = 'Tan<sup>-1</sup>';
        scndOpr = !scndOpr;
    }
    else {
        document.getElementById('scndOp').style.boxShadow = 'none';
        document.getElementById('xPow').innerHTML = 'x<sup>2</sup>';
        document.getElementById('root').innerHTML = '<sup>2</sup>&radic;x';
        document.getElementById('powX').innerHTML = '10<sup>x</sup>';
        document.getElementById('log').innerHTML = 'log';
        document.getElementById('ln').innerHTML = 'ln';
        document.getElementById('sin').innerHTML = 'Sin';
        document.getElementById('cos').innerHTML = 'Cos';
        document.getElementById('tan').innerHTML = 'Tan';
        scndOpr = !scndOpr;
    }
}
function pi() {
    if (outBox.value == '0') {
        outBox.value = String(Math.PI);
    }
    else {
        outBox.value = String(evaluate(outBox.value) * Math.PI);
    }
}
function e() {
    if (outBox.value == '0') {
        outBox.value = String(Math.E);
    }
    else {
        outBox.value = String(evaluate(outBox.value) * Math.E);
    }
}
function backspc() {
    outBox.value = outBox.value.substr(0, outBox.value.length - 1);
}
function pow(x, y) {
    outBox.value = String(Math.ceil(Math.pow(x, y)));
}
function divx() {
    outBox.value = eval(String(1 / evaluate(outBox.value)));
}
function abs() {
    outBox.value = String(Math.abs(evaluate(outBox.value)));
}
function exp() {
    outBox.value = String(Math.exp(evaluate(outBox.value)));
}
function root(input) {
    if (input == '2√x') {
        outBox.value = String(Math.sqrt(evaluate(outBox.value)));
    }
    else {
        // outBox.value=String(Math.pow(evaluate(outBox.value),1/3));
        // functions('ceil');
        //     let cbrt = (function(pow) {
        //     return function cbrt(x:number){
        //     // ensure negative numbers remain negative:
        //     return x < 0 ? -pow(-x, 1/3) : pow(x, 1/3);
        //     };
        //     })(Math.pow); // localize Math.pow to increase efficiency
        //     outBox.value=String(cbrt(Number(outBox.value)));
        outBox.value = String(Math.cbrt(evaluate(outBox.value)));
    }
}
function fact() {
    var i, num, f;
    f = 1;
    num = evaluate(outBox.value);
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    outBox.value = String(f);
}
function log(input) {
    if (input == 'log') {
        outBox.value = String(Math.log(evaluate(outBox.value)));
    }
    else if (input == 'log2') {
        outBox.value = String(Math.log(evaluate(outBox.value) / Math.log(2)));
    }
    else if (input == 'ln') {
        outBox.value = String(Math.LN10);
    }
    else if (input == 'ln2') {
        outBox.value = String(Math.LN2);
    }
}
function pN() {
    outBox.value = String(evaluate(outBox.value) * -1);
}
function chkOpr(input) {
    while (outBox.value.charAt(outBox.value.length - 1) == '+' ||
        outBox.value.charAt(outBox.value.length - 1) == '-' ||
        outBox.value.charAt(outBox.value.length - 1) == '*' ||
        outBox.value.charAt(outBox.value.length - 1) == '/' ||
        outBox.value.charAt(outBox.value.length - 1) == '%' ||
        outBox.value.charAt(outBox.value.length - 1) == '.' ||
        outBox.value == '0') {
        backspc();
    }
    if (outBox.value.charAt(outBox.value.length - 1) == '(' && input != '-') {
        input = '';
    }
    if (outBox.value !== '') {
        if (input == 'mod') {
            input = '%';
        }
        else if (input == '÷') {
            input = '/';
        }
        else if (input == '×') {
            input = '*';
        }
        return input;
    }
    else {
        return '0';
    }
}
function evaluate(input) {
    if (input == '.') {
        input = '';
    }
    if (input !== '') {
        var res = input.split('-(').join('-').split(')-').join('-')
            .split('+(').join('+').split(')+').join('+')
            .split('/(').join('/').split(')/').join('/')
            .split('*(').join('*').split(')*').join('*')
            .split('(').join('*').split(')').join('*');
        while (res.charAt(res.length - 1) == '*' ||
            res.charAt(res.length - 1) == '/' ||
            res.charAt(res.length - 1) == '+' ||
            res.charAt(res.length - 1) == '-' ||
            res.charAt(res.length - 1) == '%' ||
            res.charAt(res.length - 1) == '.') {
            res = res.substr(0, res.length - 1);
        }
        while (res.charAt(0) == '*' ||
            res.charAt(0) == '/' ||
            res.charAt(0) == '+' ||
            res.charAt(0) == '0') {
            res = res.substr(1, res.length);
        }
        if (res.length > 0) {
            return eval(res);
        }
        else {
            return 0;
        }
    }
    else {
        return 0;
    }
}
let item;
btn.forEach(item => {
    item.addEventListener('click', (e) => {
        let btnText = e.target;
        let btntext = btnText.innerText;
        if (btntext == 'DEG' ||
            btntext == 'RAD') {
            deg();
            btntext = '';
        }
        else if (btntext == 'F-E') {
            fe();
            btntext = '';
        }
        else if (btntext == 'MC' ||
            btntext == 'MR' ||
            btntext == 'M+' ||
            btntext == 'M-' ||
            btntext == 'MS') {
            memoryFunctions(btntext);
            btntext = '';
        }
        else if (btntext == 'Sin' ||
            btntext == 'Cos' ||
            btntext == 'Tan' ||
            btntext == 'Sin-1' ||
            btntext == 'Cos-1' ||
            btntext == 'Tan-1') {
            trigoFunctions(btntext);
            btntext = '';
        }
        else if (btntext == 'ceil' ||
            btntext == 'round' ||
            btntext == 'floor' ||
            btntext == 'trunc') {
            if (outBox.value !== '0') {
                functions(btntext);
            }
            btntext = '';
        }
        else if (btntext == '2nd') {
            scndBtn();
            btntext = '';
        }
        else if (btntext == 'x2') {
            pow(evaluate(outBox.value), 2);
            btntext = '';
        }
        else if (btntext == 'x3') {
            pow(evaluate(outBox.value), 3);
            btntext = '';
        }
        else if (btntext == '2√x' ||
            btntext == '3√x') {
            root(btntext);
            btntext = '';
        }
        else if (btntext == 'xy') {
            btntext = chkOpr('**');
        }
        else if (btntext == '10x') {
            pow(10, evaluate(outBox.value));
            btntext = '';
        }
        else if (btntext == '2x') {
            pow(2, evaluate(outBox.value));
            btntext = '';
        }
        else if (btntext == 'log' ||
            btntext == 'log2' ||
            btntext == 'ln' ||
            btntext == 'ln2') {
            log(btntext);
            btntext = '';
        }
        else if (btntext == '+/-') {
            pN();
            btntext = '';
        }
        else if (btntext == '+' || btntext == '-' || btntext == '×' || btntext == '÷' || btntext == 'mod') {
            btntext = chkOpr(btntext);
        }
        else if (btntext == '.') {
            if (outBox.value.charAt(outBox.value.length - 1) == '.') {
                btntext = '';
            }
        }
        else if (btntext == '=') {
            outBox.value = String(evaluate(outBox.value));
            btntext = '';
        }
        outBox.value += btntext;
    });
});
//# sourceMappingURL=script.js.map
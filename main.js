// Llamado de Objetos siguiendo el DOM

const output__calculadora = document.getElementById("output__calculadora")

let output__visual = ""

let numeroReal = ""

const numeroBotón = (num)=>{
    output__visual += num
    //si es signo agregue el nuevo numero a el array si no modifique el ultimo
    numeroReal += num
    if (esSigno()){
        actualizarNúmerosIngresados()
    } else {
        númerosIngresados.pop()
        númerosIngresados.push(parseInt(numeroReal))
    }
    output__calculadora.innerHTML = output__visual
}

let númerosIngresados = []

const actualizarNúmerosIngresados = ()=>{
    let anteriorNumero = parseInt(numeroReal);
    númerosIngresados.push(anteriorNumero)
}

const actualizarOperación = (signo)=>{
    númerosIngresados.pop()
    númerosIngresados.push(signo)
    console.log(númerosIngresados)
    console.log(output__visual)
    output__visual = output__visual.slice(0, -2) + `${signo} `
    console.log(output__visual)
}

const hacerOperación = (op)=>{
    if (númerosIngresados.length !== 0){
        switch (op) {
            case "+":
                if (!esSigno()){
                    númerosIngresados.push("+");
                    numeroReal = "";
                    output__visual += " + ";
                } else {
                    actualizarOperación("+");
                }
                break;
            case "-":
                if (!esSigno()){
                    númerosIngresados.push("-");
                    numeroReal = "";
                    output__visual += " - ";
                } else {
                    actualizarOperación("-");
                }
                break;
            case "*":
                if (!esSigno()){
                    númerosIngresados.push("x");
                    numeroReal = "";
                    output__visual += " x ";
                } else {
                    actualizarOperación("x");
                }
                break;
            case "/":
                if (!esSigno()){
                    númerosIngresados.push("/");
                    numeroReal = "";
                    output__visual += " / ";
                } else {
                    actualizarOperación("/");
                }
                break;
            default:
                break;
        };
    };
    output__calculadora.innerHTML = output__visual;
    console.log(númerosIngresados);
}

const esSigno = ()=>{
    e = númerosIngresados[(númerosIngresados.length)-1]??0
    if (e == "+" || e == "-" || e == "x" || e == "/"){
        console.log("Si Signo")
        return true
    } else {
        console.log("No Signo")
        return false
    }
}

const resultado = ()=>{
    let num1, num2
    do {
        númerosIngresados.forEach(e => {
            if (esSigno) {
                let result
                switch (e) {
                    case "+":
                        num1 = parseInt(númerosIngresados.shift());
                        númerosIngresados.shift();
                        num2 = parseInt(númerosIngresados.shift());
                        result = num1 + num2;
                        númerosIngresados.unshift(result);
                        break;
                    case "-":
                        num1 = parseInt(númerosIngresados.shift());
                        númerosIngresados.shift();
                        num2 = parseInt(númerosIngresados.shift());
                        result = num1 - num2;
                        númerosIngresados.unshift(result);
                        break;
                    case "x":
                        num1 = parseInt(númerosIngresados.shift());
                        númerosIngresados.shift();
                        num2 = parseInt(númerosIngresados.shift());
                        result = num1 * num2;
                        númerosIngresados.unshift(result);
                        break;
                    case "/":
                        num1 = parseInt(númerosIngresados.shift());
                        númerosIngresados.shift();
                        num2 = parseInt(númerosIngresados.shift());
                        result = num1 / num2;
                        númerosIngresados.unshift(result);
                        break;
                    default:
                        break;
                }
            }
        })} while (númerosIngresados.length !== 1);
    output__visual = númerosIngresados.toString()
    console.log(output__visual)
    output__calculadora.innerHTML = output__visual;
}

const limpiarOutput = ()=>{
    númerosIngresados = []
    output__visual = ""
    numeroReal = ""
    output__calculadora.innerHTML = output__visual;
}
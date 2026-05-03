
/*
function somar(numero1, numero2) {
    return numero1 + numero2;
}

function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    if (numero2 != 0)
        return numero1 / numero2;
    else
        print("Não permitido divisão por zero.");
}
    */

const tela = document.querySelector('.tela');
const botoes = document.querySelectorAll('.btn-calc');

let expressao = "";

function atualizarTela() {
    tela.innerText = expressao || "0";
}

function converter(exp) {
    return exp
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-')
        .replace(/\+/g, '+');
}

botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        let valor = botao.innerText.trim();

        if (valor === "C") {
            expressao = "";
            atualizarTela();
            return;
        }

        if (valor === "Del") {
            expressao = expressao.slice(0, -1);
            atualizarTela();
            return;
        }

        if (valor === "=") {
            try {
                let resultado = Function("return " + converter(expressao))();
                expressao = resultado.toString();
                atualizarTela();
            } catch {
                tela.innerText = "Erro";
                expressao = "";
            }
            return;
        }

        if (expressao === "" && /[÷×−+]/.test(valor)) {
            return;
        }

        expressao += valor;
        atualizarTela();
    });
});
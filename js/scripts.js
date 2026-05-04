
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
let historico = [];

// Atualiza tela
function atualizarTela() {
    tela.innerText = expressao || "0";
}

// Converte símbolos
function converter(exp) {
    return exp
        .replace(/÷/g, '/')
        .replace(/×/g, '*')
        .replace(/−/g, '-')
        .replace(/\+/g, '+');
}

// Limita casas decimais
function formatarResultado(num) {
    if (!isFinite(num)) return "Erro";
    return Number(num.toFixed(8)).toString();
}

// Verifica se é operador
function ehOperador(valor) {
    return /[÷×−+]/.test(valor);
}

// Salvar histórico
function salvarHistorico(conta, resultado) {
    historico.push(`${conta} = ${resultado}`);

    // Mantém só os últimos 5
    if (historico.length > 5) {
        historico.shift();
    }

    console.log("Histórico:");
    historico.forEach(item => console.log(item));
}

// Eventos
botoes.forEach(botao => {
    botao.addEventListener('click', () => {

        let valor = botao.innerText.trim();

        // C
        if (valor === "C") {
            expressao = "";
            atualizarTela();
            return;
        }

        // DEL
        if (valor === "Del") {
            expressao = expressao.slice(0, -1);
            atualizarTela();
            return;
        }

        // =
        if (valor === "=") {
            try {
                let conta = converter(expressao);

                // Divisão por zero
                if (/\/0(?!\d)/.test(conta)) {
                    tela.innerText = "Erro";
                    expressao = "";
                    return;
                }

                let resultado = Function("return " + conta)();

                if (!isFinite(resultado)) {
                    tela.innerText = "Erro";
                    expressao = "";
                    return;
                }

                let resultadoFormatado = formatarResultado(resultado);

                // Salva histórico
                salvarHistorico(expressao, resultadoFormatado);

                expressao = resultadoFormatado;
                atualizarTela();

            } catch {
                tela.innerText = "Erro";
                expressao = "";
            }
            return;
        }

        // 🚨 BLOQUEIO DE OPERADORES DUPLOS
        if (ehOperador(valor)) {
            let ultimo = expressao.slice(-1);

            if (ehOperador(ultimo)) {
                // substitui o operador anterior
                expressao = expressao.slice(0, -1) + valor;
                atualizarTela();
                return;
            }

            // impede começar com operador
            if (expressao === "") return;
        }

        expressao += valor;
        atualizarTela();
    });
});
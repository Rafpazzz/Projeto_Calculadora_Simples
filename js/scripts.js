const tela = document.querySelector('.tela');
const botoes = document.querySelectorAll('.btn-calc');

let expressao = "";
let historico = [];

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

function formatarResultado(num) {
    if (!isFinite(num)) return "Erro";
    return Number(num.toFixed(8)).toString();
}

function ehOperador(valor) {
    return /[÷×−+]/.test(valor);
}

function salvarHistorico(conta, resultado) {
    historico.push(`${conta} = ${resultado}`);

    if (historico.length > 5) {
        historico.shift();
    }

    console.log("Histórico:");
    historico.forEach(item => console.log(item));
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
                let conta = converter(expressao);

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

                salvarHistorico(expressao, resultadoFormatado);

                expressao = resultadoFormatado;
                atualizarTela();

            } catch {
                tela.innerText = "Erro";
                expressao = "";
            }
            return;
        }

        if (ehOperador(valor)) {
            let ultimo = expressao.slice(-1);

            if (ehOperador(ultimo)) {
                expressao = expressao.slice(0, -1) + valor;
                atualizarTela();
                return;
            }

            if (expressao === "") return;
        }

        expressao += valor;
        atualizarTela();
    });
});
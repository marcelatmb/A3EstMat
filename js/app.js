function uniao(sets) {
    return [...new Set(sets.flat())];
}

function intersecao(sets) {
    return sets.reduce((acc, s) =>
        acc.filter(x => s.includes(x))
    );;
}

function diferenca(setA, setB) {
    return setA.filter(x => !setB.some(s => s.includes(x)));
}

function complemento(setA, setU) {
    return setU.filter(x => !setA.some(s => s.includes(x)));
}

function lerConjunto(id) {
    return document.getElementById(id).value
        .split(',')
        .map(v => v.trim())
        .filter(v => v.length > 0);
}

function realizarOperacao(usaA, usaB, usaC, operacao) {
    const A = lerConjunto('conjuntoA');
    const B = lerConjunto('conjuntoB');
    const C = lerConjunto('conjuntoC');

    const ativos = [];
    if (usaA) ativos.push(A);
    if (usaB) ativos.push(B);
    if (usaC) ativos.push(C);

    let resultadoSet;

    switch (operacao) {
        case 'uniao':
            resultadoSet = uniao(ativos);
            break;
        case 'intersecao':
            resultadoSet = intersecao(ativos);
            break;
		case 'diferenca':
            resultadoSet = diferenca(ativos[0], ativos[1]);
            break;
		case 'complemento':
            resultadoSet = complemento(ativos[0], ativos[1]);
            break;
        default:
            document.getElementById('resultado').innerHTML = '<h4>Operação desconhecida...</h4>';
            return;
    }

    const resultadoDiv = document.getElementById('resultado');
    
    const resultadoArray = Array.from(resultadoSet).sort();
    const resultadoString = `{ ${resultadoArray.join(', ')} }`;

    resultadoDiv.innerHTML = `
        <p>${resultadoString}</p>
        <p>Tamanho do Conjunto: ${resultadoArray.length}</p>
    `;
}

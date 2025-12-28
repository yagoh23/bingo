const gridBingo = document.getElementById('grid-bingo');
const numeroGrande = document.getElementById('numero-grande');
const listaVencedores = document.getElementById('lista-vencedores');
const inputVencedor = document.getElementById('nome-vencedor');
const modal = document.getElementById('modal');

let numerosSorteados = [];
let totalNumeros = 80;
let contadorSorteios = 0;

// Inicializa o Grid de 1 a 80
function criarGrid() {
    for (let i = 1; i <= totalNumeros; i++) {
        let div = document.createElement('div');
        div.innerText = i;
        div.id = `num-${i}`;
        div.classList.add('numero');
        gridBingo.appendChild(div);
    }
}

function sortearNumero() {
    if (numerosSorteados.length >= totalNumeros) {
        alert("Todos os números já foram sorteados!");
        return;
    }

    let numero;
    do {
        numero = Math.floor(Math.random() * totalNumeros) + 1;
    } while (numerosSorteados.includes(numero));

    numerosSorteados.push(numero);
    contadorSorteios++;
    
    // Atualiza Visores
    numeroGrande.innerText = numero;
    document.getElementById(`num-${numero}`).classList.add('sorteado');
}

// Lógica de Vencedores
function abrirModalVencedor() {
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.display = 'none';
    inputVencedor.value = '';
}

function confirmarVencedor() {
    const nome = inputVencedor.value;
    if (nome.trim() === "") return;

    const li = document.createElement('li');
    li.innerHTML = `<strong>${nome}</strong> - (Sorteados: ${contadorSorteios})`;
    listaVencedores.appendChild(li);

    fecharModal();
}

criarGrid();
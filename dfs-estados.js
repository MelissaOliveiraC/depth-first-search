const dfs = (grafo, inicio, meta) => {
    const visitados = new Set([inicio]);
    const pilha = [inicio];

    console.log("Visitado: " + inicio);

    while (pilha.length) {
        const atual = pilha[pilha.length - 1];

        if (atual === meta) {
            console.log("Destino alcançado: " + meta);
            return;
        }

        const prox = grafo.get(atual).filter(v => !visitados.has(v)).shift();

        if (prox) {
            console.log("Visitado: " + prox);
            visitados.add(prox);
            pilha.push(prox);
        } else {
            pilha.pop();
        }
    }
    console.log("O destino não foi alcançado: " + meta);
};

//criando o grafo
const grafo = new Map();

grafo.set('Arad', ['Zerind', 'Sibiu', 'Timisoara']);
grafo.set('Pitesti', ['Rimnicu Vilcea', 'Craiova', 'Bucharest']);
grafo.set('Urziceni', ['Bucharest', 'Hirsova', 'Vaslui']);
grafo.set('Eforie', ['Hirsova']);
grafo.set('Lugoj', ['Timisoara', 'Mehadia']);
grafo.set('Oradea', ['Zerind', 'Sibiu']);
grafo.set('Neamt', ['Iasi']);
grafo.set('Bucharest', ['Fagaras', 'Pitesti', 'Giurgiu', 'Urziceni']);
grafo.set('Giurgiu', ['Bucharest']);
grafo.set('Zerind', ['Oradea', 'Arad']);
grafo.set('Sibiu', ['Oradea', 'Arad', 'Fagaras', 'Rimnicu Vilcea']);
grafo.set('Mehadia', ['Lugoj', 'Dobreta']);
grafo.set('Iasi', ['Vaslui', 'Neamt']);
grafo.set('Fagaras', ['Sibiu', 'Bucharest']);
grafo.set('Rimnicu Vilcea', ['Sibiu', 'Craiova', 'Pitesti']);
grafo.set('Timisoara', ['Arad', 'Lugoj']);
grafo.set('Dobreta', ['Mehadia', 'Craiova']);
grafo.set('Hirsova', ['Urziceni', 'Eforie']);
grafo.set('Craiova', ['Dobreta', 'Rimnicu Vilcea', 'Pitesti']);
grafo.set('Vaslui', ['Urziceni', 'Iasi']);

const origem = 'Arad';
const destino = 'Bucharest';

dfs(grafo, origem, destino);
const btnBuscar = document.getElementById('btnBuscar');
const campoBusca = document.getElementById('campoBusca');
const resultadoArea = document.getElementById('resultado');
const msgErro = document.getElementById('msgErro');

function realizarBusca() {

    const nome = campoBusca.ariaValueMax.toLowerCase().trim();

    if (nome === "") {
        alert("Por favor, digite um nome, seu beta!");
        return;
    }

    const url = `https://pokerapi.co/api/v2/pokemon${nome}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon inexistente')
            }
            return response.json();
        })
        .then(data =>{
            msgErro.classList.add('d-none')
        })
        
    document.getElementById('pokeNome').textContent = data.name;
    document.getElementById('pokeId').textContent = data.id;
    document.getElementById('pokeAltura').textContent = data.height;
    document.getElementById('pokePeso').textContent = data.weight;
    document.getElementById('pokeTipo').textContent = data.type[0].type.name;
    document.getElementById('pokeImg').textContent = data.sprites.front_default;
}
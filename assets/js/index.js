const config = document.querySelectorAll('[data-config]')
const caixa = document.querySelector('.caixa-borda')
const css = document.querySelector('.codigo-css')
const tamanho = document.querySelectorAll('.tamanhos');
const check = document.getElementById('checkbox');
const container = document.querySelector('.container')
const btn = document.getElementById('copiar');


let topo = 100;
let fundo = 0;
let direita = 100;
let esquerda = 0;

gerarCss()

function atualizarCss (){
    caixa.style.borderRadius = `${topo}% ${100-topo}% ${100-fundo}% ${fundo}% / ${esquerda}% ${direita}% ${100-direita}% ${100-esquerda}%`
    gerarCss();
}

function gerarCss() {
    css.innerHTML = `.container {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-radius:${topo}% ${100-topo}% ${100-fundo}% ${fundo}% / ${esquerda}% ${direita}% ${100-direita}% ${100-esquerda}% ;<br>
    }`
}

function mostrarMensagem(mensagem, sucesso) {
    const copiado = document.createElement('p')
    copiado.className = 'copiado';
    copiado.innerHTML = mensagem;
    copiado.style.color = sucesso ? 'green' : 'red';
    container.appendChild(copiado);
    setTimeout(() => {
        copiado.remove();
    }, 5000);
}

width.addEventListener('change', () => {
    caixa.style.width = `${width.value}px`
});

height.addEventListener('change', () => {
    caixa.style.height = `${height.value}px`
});

config.forEach(elemento => {
    elemento.addEventListener('change', () => {
        if(elemento.classList.value === 'top'){
            topo = elemento.value;
        } else if (elemento.classList.value === 'bottom'){
            fundo = elemento.value;
        } else if (elemento.classList.value === 'left'){
            esquerda = elemento.value
        } else if (elemento.classList.value === 'right'){
            direita = elemento.value;
        }
        
        atualizarCss();
    })
})

check.addEventListener('change',() => {
    tamanho.forEach(elemento => {
        elemento.style.visibility = check.checked ? 'visible' : 'hidden';
    });
});



btn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(css.textContent);
        mostrarMensagem('Copiado com sucesso', true);
    } catch (err) {
        mostrarMensagem('Erro ao copiar, tente novamente', false);
    }
})


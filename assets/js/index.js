const config = document.querySelectorAll('[data-config]')
const caixa = document.querySelector('.caixa-borda')
const css = document.querySelector('.codigo-css')

let topo = 100;
let fundo = 0;
let direita = 100;
let esquerda = 0;

gerarCss()

config.forEach(function(elemento){
    elemento.addEventListener('change', function(){
        if(elemento.classList.value === 'top'){
            topo = elemento.value;
        } else if (elemento.classList.value === 'bottom'){
            fundo = elemento.value;
        } else if (elemento.classList.value === 'left'){
            esquerda = elemento.value
        } else if (elemento.classList.value === 'right'){
            direita = elemento.value;
        }
        caixa.style.borderRadius = `${topo}% ${100-topo}% ${100-fundo}% ${fundo}% / ${esquerda}% ${direita}% ${100-direita}% ${100-esquerda}%`
        gerarCss();
    })
})

function gerarCss() {
    css.innerHTML = `.border {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-radius:${topo}% ${100-topo}% ${100-fundo}% ${fundo}% / ${esquerda}% ${direita}% ${100-direita}% ${100-esquerda}% ;<br>
    }`
}

const check = document.getElementById('checkbox');
const tamanho = document.querySelectorAll('.tamanhos')

check.addEventListener('change',function(){
    if(this.checked) {
        tamanho.forEach(elemento => {
            elemento.style.visibility = 'visible'
        })
    } else {
        tamanho.forEach(elemento => {
            elemento.style.visibility = 'hidden'
        })
    }
})
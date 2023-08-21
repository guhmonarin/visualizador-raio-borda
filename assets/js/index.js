const config = document.querySelectorAll('[data-config]')
const caixa = document.querySelector('.caixa-borda')
const css = document.querySelector('.codigo-css')

let topLeft = 0;
let bottomLeft = 0;
let topRight = 0;
let bottomRight = 0;

config.forEach(function(elemento){
    elemento.addEventListener('change', function(){
        if(elemento.classList.value === 'top-left'){
            caixa.style.borderTopLeftRadius = `${elemento.value}%`;
            topLeft = elemento.value;
        } else if (elemento.classList.value === 'botton-left'){
            caixa.style.borderBottomLeftRadius = `${elemento.value}%`;
            bottomLeft = elemento.value;
        } else if (elemento.classList.value === 'top-right'){
            caixa.style.borderTopRightRadius = `${elemento.value}%`;
            topRight = elemento.value
        } else if (elemento.classList.value === 'botton-right'){
            caixa.style.borderBottomRightRadius = `${elemento.value}%`;
            bottomRight = elemento.value;
        }

        gerarCss();
    })
})

function gerarCss() {
    css.innerHTML = `.border {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-radius: ${topLeft}% ${bottomLeft}% ${topRight}% ${bottomRight}%;<br>
    }`
}
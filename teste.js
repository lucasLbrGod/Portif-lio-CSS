
const textTarget = "Lucas dos Santos Rosa";
const caracteresAmaldiçoados = "☠☠𖦹⚔👹🪓☠♃⚚⛓☠"; 
let index = 0;
let frame = 0;

function typeWriter() {
    const logoText = document.querySelector("#typing-logo .text");
    if (!logoText) return;

    let resultado = "";
    
    
    for (let i = 0; i < textTarget.length; i++) {
        if (frame / 2 > i) {
            resultado += textTarget[i];
        } else if (frame / 2 > i - 2) {
            resultado += caracteresAmaldiçoados[Math.floor(Math.random() * caracteresAmaldiçoados.length)];
        }
    }
    
    logoText.textContent = resultado;
    
    if (frame / 2 < textTarget.length + 1) {
        frame++;
        setTimeout(typeWriter, 50); // Velocidade do glitch
    }
}

// Inicializa o efeito de digitação ao carregar a página
window.addEventListener("DOMContentLoaded", typeWriter);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
}, {
    threshold: 0.1 
});

window.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
});



window.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.projeto');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', () => {
            // Intensifica a aura de energia vermelha ao redor da Expansão de Domínio
            card.style.boxShadow = "0 0 25px rgba(255, 26, 26, 0.6)";
            card.style.borderColor = "#ff1a1a";
        });
        
        card.addEventListener('mouseleave', () => {
           
            card.style.boxShadow = "none";
            card.style.borderColor = "#4a0d0d";
        });
    });
});


document.addEventListener("click", (e) => {
    
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;

    const corte = document.createElement("div");
    corte.className = "efeito-corte";
    
    
    corte.style.left = `${e.pageX}px`;
    corte.style.top = `${e.pageY}px`;
   
    const angulo = Math.floor(Math.random() * 360);
    corte.style.transform = `translate(-50%, -50%) rotate(${angulo}deg)`;
    
    document.body.appendChild(corte);
    
    setTimeout(() => {
        corte.remove();
    }, 400);
});


function abrirProjeto1(){
    window.location.href = "https://github.com/lucasLbrGod/Aula-HTML";
}
function abrirProjeto2(){
    window.location.href = "https://github.com/lucasLbrGod/TelaLoginSukuna";
}
function abrirProjeto3(){
    window.location.href = "https://github.com/lucasLbrGod/java_Primeiras_aplicacoes";
}
function abrirProjeto4(){
    window.location.href = "https://github.com/lucasLbrGod/TCC_pronto";
}
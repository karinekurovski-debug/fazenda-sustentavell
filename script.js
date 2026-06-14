const btn = document.getElementById("btnInfo");
const curiosidade = document.getElementById("curiosidade");

btn.addEventListener("click", () => {

    curiosidade.innerHTML =
    "🌎 Uma fazenda sustentável pode reduzir em até 70% o desperdício de água usando tecnologias modernas de irrigação.";

});

const contadores = document.querySelectorAll(".contador");

const animarContador = () => {

    contadores.forEach(contador => {

        const alvo = +contador.dataset.target;

        let valor = 0;

        const incremento = alvo / 100;

        const atualizar = () => {

            valor += incremento;

            if(valor < alvo){

                contador.textContent = Math.floor(valor);
                requestAnimationFrame(atualizar);

            }else{

                contador.textContent = alvo;

            }
        };

        atualizar();

    });

};

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animarContador();

        }

    });

});

observer.observe(document.querySelector(".impacto"));
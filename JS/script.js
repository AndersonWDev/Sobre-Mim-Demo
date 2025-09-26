const textoH1 = "Desenvolvedor Web Full-Stack";
let indexLetra = 0;

function digitarH1() {
  const el = document.getElementById("t1");

  if (indexLetra < textoH1.length) {
    el.innerHTML = textoH1.substring(0, indexLetra) + `<span class="cursor">|</span>`;
    indexLetra++;
    setTimeout(digitarH1, 80); // velocidade da digitação
  } else {
    el.innerHTML = textoH1; // remove cursor ao terminar
    // ativa o fade-in de h2 e p após a digitação do h1
    document.getElementById("t2").style.animationDelay = "0.2s";
    document.getElementById("t3").style.animationDelay = "0.5s";
  }
}

digitarH1();
const projetos = document.querySelectorAll(".projeto");

projetos.forEach(projeto => {
  projeto.addEventListener("click", () => {
    projeto.classList.toggle("flip");
  });
});
const modal = document.getElementById("modal-contato");
const btnContato = document.querySelector(".btn-contato button");
const fechar = document.querySelector(".fechar");

btnContato.addEventListener("click", () => {
  modal.style.display = "flex";
});
fechar.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
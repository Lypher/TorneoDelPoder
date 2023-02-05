let rondaFinal = 0;

//Arrays:

let partesDelCuerpo = [
  "la oreja",
  "la mano",
  "la cara",
  "el brazo",
  "el estomago",
  "las bolas",
  "los ojos",
  "la rodilla",
  "el ano",
  "el dedo chiquito del pie",
  "la mandibula",
];
let ataques = [
  "un tingazo",
  "un rodillazo",
  "una piña",
  "una patada",
  "una cachetada",
  "un cabezaso",
  "un codazo",
  "una mordida",
  "un ataque magico",
  "un kamehame ha",
  "un culaso",
];

//Funciones:
function elegirCaja() {
  let caja1 = document.getElementById("box1");
  caja1.addEventListener("click", () => {
    let campeon1 = prompt("elije el nombre de tu campeon");
    caja1.innerHTML = `<p>  ${campeon1} </p>`;
    sessionStorage.setItem("campeon1", campeon1);
  });
  let caja2 = document.getElementById("box2");
  caja2.addEventListener("click", () => {
    let campeon2 = prompt("elije el nombre de tu campeon");
    caja2.innerHTML = ` <p> ${campeon2} </p>`;
    sessionStorage.setItem("campeon2", campeon2);
  });

  let caja3 = document.getElementById("box3");
  caja3.addEventListener("click", () => {
    let campeon3 = prompt("elije el nombre de tu campeon");
    caja3.innerHTML = ` <p> ${campeon3} </p>`;
    sessionStorage.setItem("campeon3", campeon3);
  });

  let caja4 = document.getElementById("box4");
  caja4.addEventListener("click", () => {
    let campeon4 = prompt("elije el nombre de tu campeon");
    caja4.innerHTML = ` <p> ${campeon4} </p>`;
    sessionStorage.setItem("campeon4", campeon4);
  });
}

function simularCombate() {
  let botonCombate1 = document.getElementById("boton_combate_1");
  botonCombate1.addEventListener("click", () => {
    let campeon1 = sessionStorage.getItem("campeon1");
    let campeon2 = sessionStorage.getItem("campeon2");
    if (campeon1 === null || campeon2 === null) {
      alert("ingresa ambos participantes para iniciar pelea");
    } else {
      alert(campeon1 + " se enfrentara a " + campeon2);
      combateRandom1(campeon1, campeon2, 50, 50);
    }
  });
  let botonCombate2 = document.getElementById("boton_combate_2");
  botonCombate2.addEventListener("click", () => {
    let campeon3 = sessionStorage.getItem("campeon3");
    let campeon4 = sessionStorage.getItem("campeon4");
    if (campeon3 === null || campeon4 === null) {
      alert("ingresa ambos participantes para iniciar pelea");
    } else {
      alert(campeon3 + " se enfrentara a " + campeon4);
      combateRandom2(campeon3, campeon4, 50, 50);
    }
  });
}

function combateRandom1(campeon1, campeon2, vida1, vida2) {
  let situacion = Math.floor(Math.random() * 2) + 1;
  let ataque = Math.floor(Math.random() * 11);
  let lugarDelCuerpo = Math.floor(Math.random() * 11);
  if (situacion === 1) {
    let cajaDeComentarios = document.getElementById("cuadroDeDialogo");
    cajaDeComentarios.innerHTML = `<h3>${campeon1} le pega ${ataques[ataque]} en
      ${partesDelCuerpo[lugarDelCuerpo]} a
      ${campeon2}</h3>
      <button id="continuar">continuar</button>`;
    let botonContinuar = document.getElementById("continuar");
    botonContinuar.addEventListener("click", () => {
      let daño = Math.floor(Math.random() * 20);
      vida2 -= daño;
      cajaDeComentarios.innerHTML = `<h3>${campeon2} recibe ${daño} de daño,le quedan ${vida2} de vida</h3>
      <button id="continuar">continuar</button>`;
      let botonContinuar = document.getElementById("continuar");
      botonContinuar.addEventListener("click", () => {
        if (vida2 <= 0) {
          cajaDeComentarios.innerHTML = `<h3>${campeon1} ha ganado el combate! avanza a la siguiente ronda</h3>
      <button id="continuar">continuar</button>`;
          let cajaABorrar = document.getElementById("container1");
          cajaABorrar.innerHTML = `<div class="box1" id="box1"><p> ${campeon1} </p></div>`;
          rondaFinal += 1;
          sessionStorage.setItem("Finalista1", campeon1);

          combateFinal();
        }
        if (vida2 > 0) {
          combateRandom1(campeon1, campeon2, vida1, vida2);
        }
      });
    });
  } else if (situacion === 2) {
    let cajaDeComentarios = document.getElementById("cuadroDeDialogo");
    cajaDeComentarios.innerHTML = `<h3>${campeon2} le pega ${ataques[ataque]} en
      ${partesDelCuerpo[lugarDelCuerpo]} a
      ${campeon1}</h3>
      <button id="continuar">continuar</button>`;
    let botonContinuar = document.getElementById("continuar");
    botonContinuar.addEventListener("click", () => {
      let daño = Math.floor(Math.random() * 20);
      vida1 -= daño;
      cajaDeComentarios.innerHTML = `<h3>${campeon1} recibe ${daño} de daño,le quedan ${vida1} de vida</h3>
      <button id="continuar">continuar</button>`;
      let botonContinuar = document.getElementById("continuar");
      botonContinuar.addEventListener("click", () => {
        if (vida1 <= 0) {
          cajaDeComentarios.innerHTML = `<h3>${campeon2} ha ganado el combate! avanza a la siguiente ronda</h3>
          <button id="continuar">continuar</button>`;
          let cajaABorrar = document.getElementById("container1");
          cajaABorrar.innerHTML = `<div class="container1" id="container1">
          <div class="box2" id="box2"><p> ${campeon2} </p></div>
          </div>`;
          rondaFinal += 1;
          sessionStorage.setItem("Finalista1", campeon2);

          combateFinal();
        }
        if (vida1 > 0) {
          combateRandom1(campeon1, campeon2, vida1, vida2);
        }
      });
    });
  }
}

function combateRandom2(campeon1, campeon2, vida1, vida2) {
  let situacion = Math.floor(Math.random() * 2) + 1;
  let ataque = Math.floor(Math.random() * 11);
  let lugarDelCuerpo = Math.floor(Math.random() * 11);
  if (situacion === 1) {
    let cajaDeComentarios = document.getElementById("cuadroDeDialogo");
    cajaDeComentarios.innerHTML = `<h3>${campeon1} le pega ${ataques[ataque]} en
      ${partesDelCuerpo[lugarDelCuerpo]} a
      ${campeon2}</h3>
      <button id="continuar">continuar</button>`;
    let botonContinuar = document.getElementById("continuar");
    botonContinuar.addEventListener("click", () => {
      let daño = Math.floor(Math.random() * 20);
      vida2 -= daño;
      cajaDeComentarios.innerHTML = `<h3>${campeon2} recibe ${daño} de daño,le quedan ${vida2} de vida</h3>
      <button id="continuar">continuar</button>`;
      let botonContinuar = document.getElementById("continuar");
      botonContinuar.addEventListener("click", () => {
        if (vida2 <= 0) {
          cajaDeComentarios.innerHTML = `<h3>${campeon1} ha ganado el combate! avanza a la siguiente ronda</h3>
      <button id="continuar">continuar</button>`;
          let cajaABorrar = document.getElementById("container2");
          cajaABorrar.innerHTML = `<div class="box3" id="box3"><p> ${campeon1} </p></div>`;
          rondaFinal += 1;
          sessionStorage.setItem("Finalista2", campeon1);

          combateFinal();
        }
        if (vida2 > 0) {
          combateRandom2(campeon1, campeon2, vida1, vida2);
        }
      });
    });
  } else if (situacion === 2) {
    let cajaDeComentarios = document.getElementById("cuadroDeDialogo");
    cajaDeComentarios.innerHTML = `<h3>${campeon2} le pega ${ataques[ataque]} en
      ${partesDelCuerpo[lugarDelCuerpo]} a
      ${campeon1}</h3>
      <button id="continuar">continuar</button>`;
    let botonContinuar = document.getElementById("continuar");
    botonContinuar.addEventListener("click", () => {
      let daño = Math.floor(Math.random() * 20);
      vida1 -= daño;
      cajaDeComentarios.innerHTML = `<h3>${campeon1} recibe ${daño} de daño,le quedan ${vida1} de vida</h3>
      <button id="continuar">continuar</button>`;
      let botonContinuar = document.getElementById("continuar");
      botonContinuar.addEventListener("click", () => {
        if (vida1 <= 0) {
          cajaDeComentarios.innerHTML = `<h3>${campeon2} ha ganado el combate! avanza a la siguiente ronda</h3>
          <button id="continuar">continuar</button>`;
          let cajaABorrar = document.getElementById("container2");
          cajaABorrar.innerHTML = `<div class="container2" id="container2">
      <div class="box3" id="box3"><p> ${campeon2} </p></div>
      </div>`;
          rondaFinal += 1;
          sessionStorage.setItem("Finalista2", campeon2);

          combateFinal();
        }
        if (vida1 > 0) {
          combateRandom2(campeon1, campeon2, vida1, vida2);
        }
      });
    });
  }
}

function combateFinal() {
  if (rondaFinal == 2) {
    let botonACrear = document.getElementById("botonFinal");
    botonACrear.innerHTML = `<button class="combateFinal" id="boton_combate_1">Simular combate Final</button>`;
    let botonCombate2 = document.getElementById("boton_combate_1");
    botonCombate2.addEventListener("click", () => {
      let campeon1 = sessionStorage.getItem("Finalista1");
      let campeon2 = sessionStorage.getItem("Finalista2");
      if (campeon1 === null || campeon2 === null) {
        alert("ingresa ambos participantes para iniciar pelea");
      } else {
        alert(campeon1 + " se enfrentara a " + campeon2);
        combateRandomFinal(campeon1, campeon2, 50, 50);
      }
    });
  } else {
  }
}

function combateRandomFinal(campeon1, campeon2, vida1, vida2) {
  let situacion = Math.floor(Math.random() * 2) + 1;
  let ataque = Math.floor(Math.random() * 11);
  let lugarDelCuerpo = Math.floor(Math.random() * 11);
  if (situacion === 1) {
    let cajaDeComentarios = document.getElementById("cuadroDeDialogo");
    cajaDeComentarios.innerHTML = `<h3>${campeon1} le pega ${ataques[ataque]} en
      ${partesDelCuerpo[lugarDelCuerpo]} a
      ${campeon2}</h3>
      <button id="continuar">continuar</button>`;
    let botonContinuar = document.getElementById("continuar");
    botonContinuar.addEventListener("click", () => {
      let daño = Math.floor(Math.random() * 20);
      vida2 -= daño;
      cajaDeComentarios.innerHTML = `<h3>${campeon2} recibe ${daño} de daño,le quedan ${vida2} de vida</h3>
      <button id="continuar">continuar</button>`;
      let botonContinuar = document.getElementById("continuar");
      botonContinuar.addEventListener("click", () => {
        if (vida2 <= 0) {
          cajaDeComentarios.innerHTML = `<h3>${campeon1} ha ganado el combate! ${campeon1} es el campeon del torneo!!</h3>
      <button id="continuar">continuar</button>`;
          let cajaABorrar = document.getElementById("containerGeneral");
          cajaABorrar.innerHTML = `
      <div class="boxFinal" id="boxFinal"><p> ${campeon1} Campeon!</p></div>
      `;
        }
        if (vida2 > 0) {
          combateRandomFinal(campeon1, campeon2, vida1, vida2);
        }
      });
    });
  } else if (situacion === 2) {
    let cajaDeComentarios = document.getElementById("cuadroDeDialogo");
    cajaDeComentarios.innerHTML = `<h3>${campeon2} le pega ${ataques[ataque]} en
      ${partesDelCuerpo[lugarDelCuerpo]} a
      ${campeon1}</h3>
      <button id="continuar">continuar</button>`;
    let botonContinuar = document.getElementById("continuar");
    botonContinuar.addEventListener("click", () => {
      let daño = Math.floor(Math.random() * 20);
      vida1 -= daño;
      cajaDeComentarios.innerHTML = `<h3>${campeon1} recibe ${daño} de daño,le quedan ${vida1} de vida</h3>
      <button id="continuar">continuar</button>`;
      let botonContinuar = document.getElementById("continuar");
      botonContinuar.addEventListener("click", () => {
        if (vida1 <= 0) {
          cajaDeComentarios.innerHTML = `<h3>${campeon2} ha ganado el combate! ${campeon1} es el campeon del torneo!!</h3>
      <button id="continuar">continuar</button>`;
          let cajaABorrar = document.getElementById("containerGeneral");
          cajaABorrar.innerHTML = `
      <div class="boxFinal" id="boxFinal"><p> ${campeon2} Campeon!</p></div>
      `;
        }
        if (vida1 > 0) {
          combateRandomFinal(campeon1, campeon2, vida1, vida2);
        }
      });
    });
  }
}

elegirCaja();
simularCombate();

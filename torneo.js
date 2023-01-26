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
      combateRandom(campeon1, campeon2, 50, 50);
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
      combateRandom(campeon3, campeon4, 50, 50);
    }
  });
}

function combateRandom(campeon1, campeon2, vida1, vida2) {
  let situacion = Math.floor(Math.random() * 2) + 1;
  let ataque = Math.floor(Math.random() * 11);
  let lugarDelCuerpo = Math.floor(Math.random() * 11);
  if (situacion === 1) {
    alert(
      campeon1 +
        " le pega " +
        ataques[ataque] +
        " en " +
        partesDelCuerpo[lugarDelCuerpo] +
        " a " +
        campeon2
    );
    let daño = Math.floor(Math.random() * 20);
    vida2 -= daño;
    if (daño > 10) {
      alert(campeon2 + " recibe " + daño + " de daño!! " + "eso debio doler!");
      alert(campeon2 + "tiene " + vida2 + "de salud");
    }
    if (daño < 10) {
      alert(
        campeon2 + " recibe " + daño + " de daño!! " + "lo aguanta sin problema"
      );
      alert(campeon2 + "tiene " + vida2 + "de salud");
    }
    if (vida2 <= 0) {
      alert(campeon1 + "ha ganado el combate! avanza a la siguiente ronda");
      let cajaABorrar = document.getElementById("container1");
      cajaABorrar.innerHTML = `<div class="container1" id="container1">
      <div class="box1" id="box1">${campeon1}</div>
      </div>`;
    }
    if (vida2 > 0) {
      combateRandom(campeon1, campeon2, vida1, vida2);
    }
  } else if (situacion === 2) {
    alert(
      campeon2 +
        " le pega " +
        ataques[ataque] +
        " en " +
        partesDelCuerpo[lugarDelCuerpo] +
        " a " +
        campeon1
    );
    let daño = Math.floor(Math.random() * 20);
    vida1 -= daño;
    if (daño > 10) {
      alert(campeon1 + " recibe " + daño + " de daño!! " + "eso debio doler!");
      alert(campeon1 + "tiene " + vida1 + "de salud");
    }
    if (daño < 10) {
      alert(
        campeon1 + " recibe " + daño + " de daño!! " + "lo aguanta sin problema"
      );
      alert(campeon1 + "tiene " + vida1 + "de salud");
    }
    if (vida1 <= 0) {
      alert(campeon2 + "ha ganado el combate! avanza a la siguiente ronda");
      let cajaABorrar = document.getElementById("container1");
      cajaABorrar.innerHTML = `<div class="container1" id="container1">
      <div class="box2" id="box2">${campeon2}</div>
      </div>`;
    }
    if (vida1 > 0) {
      combateRandom(campeon1, campeon2, vida1, vida2);
    }
  }
}

elegirCaja();
simularCombate();

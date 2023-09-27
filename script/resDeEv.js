function contenedor(id) {
  let cont;

  let raiz = document.getElementById("fondo")

  cont = document.createElement("sectin")
  cont.setAttribute("id", id)
  cont.setAttribute("class", "uno1")

  raiz.appendChild(cont)
}

let n;

function nivel1() {
  n = "nivel1"
  
  document.getElementById("nivel1")
  .style.display = "inline-block"

  jugando()

}

function nivel2() {
    n = "nivel2"
  
  document.getElementById("nivel2").style.display = "inline-block"

  jugando()

}

function nivel3() {
  n = "nivel3"
  
  document.getElementById("nivel3"
  ).style.display = "inline-block"

  jugando()

}

function nivel4() {
  n = "nivel4"
  
  document.getElementById("nivel4")
  .style.display = "inline-block"

  jugando()

}


function nivel5() {
    n = "nivel5"
  
  document.getElementById("nivel5")
  .style.display = "inline-block"

  jugando()

}

function nivel6() {
  n = "nivel6"
  
  document.getElementById("nivel6").style.display = "inline-block"

  jugando()

}

function nivel7() {
  n = "nivel7"
  
  document.getElementById("nivel7"
  ).style.display = "inline-block"

  jugando()

}

function nivel8() {
  n = "nivel8"
  
  document.getElementById("nivel8")
  .style.display = "inline-block"

  jugando()

}

function nivel9() {
  n = "nivel9"
  
  document.getElementById("nivel9"
  ).style.display = "inline-block"

  jugando()

}

function nivel10() {
  n = "nivel10"
  
  document.getElementById("nivel10")
  .style.display = "inline-block"

  jugando()

}

function jugando() {
  document.getElementById("historia").style.display = "none"

  document.getElementById("fondo").style.display = "inline-block"
}

/*lista de palabras a usar*/

let lJ_a = ["uno", "dos", "cinco", "ocho", "dies"]
let lJ_b = ["one", "two", "five", "height", "ten"]

let lI_a = ["cabeza", "cuerpo", "brazos", "piernas", "pies"]
let lI_b = ["head", "body", "arms", "leg", "foot"]

let lH_a = ["hora", "dia", "semana", "mes", "año"]
let lH_b = ["hour", "day", "week", "mounth", "year"]

let lG_a = ["ropa", "camisa", "pantalon", "zapatos", "vestido"]
let lG_b = ["cloting", "shirt", "pant", "shoes", "dress"]

let lF_a = ["baño", "cuarto", "cocina", "ventana", "cama"]
let lF_b = ["bathroom", " bedroom", "kitchen", "window", "bed"]

let lA_a = ["juega", "trabajo", "vamos", "dia", "serrado"]
let lA_b = ["plays", "work", "come", "day", "close"]

let lB_a = ["table", "old"  ,"hat", "house", "blue" ]
let lB_b = ["tabla", "viejo", "sombrero", "casa", "azul"]

let lC_a = ["hola","adios","bueno","malo","uno"]
let lC_b = ["hello","bye","good","bad","one"]

let lD_a = ["blanco", "negro", "rojo","amarillo","verde"]
let lD_b = ["white", "black", "red", "yellow", "green"]

let lE_a = ["gris", "rosado", "azul", "cafe", "morado"]
let lE_b = ["grey", "pink", "blue", "brown", "purple"]

function inicia(lista) {
  let prueva;
  let newArr = []
  while (true) {

    if (newArr.length > lista.length || newArr.length < lista.length) {

      crearN()
    } else {
      break

    }

  }
  

  function crearN() {
    let nR;
    function random() {
      nR = Math.floor(Math.random()*lista.length)
    }
    random()
    
    if (newArr.length == 0) {} else {
      for (let i of newArr) {
        if (i == nR) {
          
          return
        }
      }
    }
    
    newArr.push(nR)

  }
  return newArr
}

//automatizar esta tarea

let a1 = inicia(lA_a)
let a2 = inicia(lA_b)

let b1 = inicia(lB_a)
let b2 = inicia(lB_b)

let c1 = inicia(lC_a)
let c2 = inicia(lC_b)

let d1 = inicia(lD_a)
let d2 = inicia(lD_b)

let e1 = inicia(lE_a)
let e2 = inicia(lE_b)

let f1 = inicia(lF_b)
let f2 = inicia(lF_b)

let g1 = inicia(lG_a)
let g2 = inicia(lG_b)

let h1 = inicia(lH_a)
let h2 = inicia(lH_b)

let i1 = inicia(lI_a)
let i2 = inicia(lI_b)

let j1 = inicia(lE_a)
let j2 = inicia(lJ_b)


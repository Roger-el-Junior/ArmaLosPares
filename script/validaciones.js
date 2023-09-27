//Salir de juego cuando se eqiboqe


let ar4 = []

function selct1(param, s) {

  if (ar3.length == 1) {

    ar3.push(param)

    let name = document.querySelector(`div[name="${param}"`)

    let cls = name.getAttribute("class")
    

    for (let i of ar3) {
      
      if (i == param) {
        

        
        estylos(cls)
        p += 1

        validaPuntos(p)

        document.querySelector("#puntos").textContent = p

        ar3 = []

        return
      } else {
        
        perdio()
        ar3 = []
        //p -= 1
        document.querySelector("#puntos").textContent = p
        
        return
      }
    }
  }

  if (ar4.length > 0) {
    for (let u of ar4) {
      if (u == param) {
        
        return
      }
    }
  }

  ar4.push(param)

  ar3.push(param)
}
let ar3 = []
let p = 0

function validaPuntos(puntos) {

  let ultimate = document.querySelector("#mensajeFinal")

  if (puntos == 5) {
    
    ultimate.style.display = "inline-block"

    let point = document.querySelector("#puntos")
    reiniciar()

    let d = n
    document.getElementById(d).style.display = "none"

  }
  return
}


function estylos(cl) {

  let c = cl;
  let elements = document.getElementsByClassName(c);

  // Verifica si se encontraron elementos con la clase "cls4"
  if (elements.length > 0) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#1CE20C";
    }
  } else {
    console.log(`No se encontraron elementos con la clase '${elementos}'`);
  }
  
}

function debuelveColor(color) {
  console.log("entro")
  let c = color
  let elementos = document.getElementsByClassName(c)

  if (elementos.length > 0) {
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.backgroundColor = "black"
    }
  } else {
    console.log(`no se encontraron elementos ${elementos}`)
  }
}

function reiniciar(){
  
    p=0
    document.querySelector("#puntos").textContent = p

    
  for(let i of ar4){
    let c = `cls${i}`
    debuelveColor(c)
  }
  ar4=[]
}

function perdio(){
    alert("perdistes")
    
    document.getElementById("historia").style.display="inline-block"
    
    document.getElementById("fondo").style.display="none"
    
    let d = n
    console.log(d)
    document.getElementById(d).style.display="none"
    /*
    document.querySelector("#mensajeFinal").style.display="none"
    n = ""
    */
    reiniciar()
    
  }
  

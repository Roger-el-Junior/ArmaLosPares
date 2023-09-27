//cremos boton de cada nivel
function crearBotonesDN(clase, eventoClick, texto, identifica) {
  let mundo = document.getElementById('historia')

  let btnDN = document.createElement("button");
  btnDN.setAttribute("class", clase)
  btnDN.setAttribute("onclick", eventoClick)
 let s= btnDN.setAttribute("id", identifica)

  btnDN.textContent = texto

  mundo.appendChild(btnDN)
  return identifica
}

let arr = []
let arr2 = []
//organisamos la posicion de cada nivel
function posicionDeNivel(NDV) {
  for (let i = 1; i <= NDV; i++) {
    // console.log(i)
    let clase;

//los de emmedio
    if (i%2 == 0) {
      clase = "dos"
      crearBotonesDN(clase, `nivel${i}()`, `nv${i}`, `id${i}`)
    }
    
//los q no vam  a ser conrados
    if(i==1){
      clase = "uno"
      crearBotonesDN(clase, `nivel${i}()`, `nv${i}`, `id${i}`)
    }
    if(i==3){
      clase = "tres"
      crearBotonesDN(clase, `nivel${i}()`, `nv${i}`, `id${i}`)
    }
    
//todos los de la derecha
    if(arr.length==4){

      clase = "uno"
      crearBotonesDN(clase, `nivel${i}()`, `nv${i}`, `id${i}`)

      arr=[]
      arr.push(1)
    }else{
      arr.push(1)
    }

//todos los de la izquierda
    if(i>=3){
      if(arr2.length==4){
        
        clase = "tres"
      crearBotonesDN(clase, `nivel${i}()`, `nv${i}`, `id${i}`)
        
        arr2=[]
        arr2.push(1)
      }else{
        arr2.push(1)
      }
    }
    
  }
}



//cada ves q el valor llege a 4 temga la clase uno

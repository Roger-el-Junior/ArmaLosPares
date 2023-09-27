
//bocabulario1, hhhh orden1 orden2b la caja donde comiensa
function cargado( list, list2, v1, v2, dir) {
  let url = dir
  let n1 = 0
  let n2 = 0

  let click;
  
  for (let nP = 1; nP <= 10; nP++) {
    let f = ""
    let name 
    let clase
    //agregan las palabras
    //evemto q evalua las respuestad
    if (nP%2 == 0) {
      
      f = list[v1[n1]]
      name =v1[n1]
      clase = `cls${name}`
      click=`selct1(${name},${url})`
      ++n1
      
    } else {
      
      f = list2[v2[n2]]
      name = v2[n2]
      clase = `cls${name}`
      click=`selct1(${name},${url})`
      ++n2
      
    }

    //creamos la id de cada div
    let pricipal = "palabra"
    let id = pricipal+nP
    
    crearDiv(id, f, click, url, name,clase)
    
  }
  
//crearmos el contendor
  function crearDiv(id, palabra, even, open, name, clas) {
    
    let init = document
    .getElementById(open)

    let div = document.createElement("div")
    
    div.setAttribute("id", id)
    div.setAttribute("onclick", even)
    div.setAttribute("class", clas)
    div.setAttribute("name", name)

    let p = document.createElement("p")
  
    p.textContent = palabra
    
    div.appendChild(p)

    init.appendChild(div)
    
  }
}
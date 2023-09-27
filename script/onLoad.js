
document.addEventListener('DOMContentLoaded', function(){
  posicionDeNivel(10)
  
  
  contenedor("nivel1")
  cargado(lA_a, lA_b, a1, a2, "nivel1")
  
  
  contenedor("nivel2")
  cargado(lB_a, lB_b, b1, b2, "nivel2")
  
  contenedor("nivel3")
  cargado(lC_a, lC_b, c1, c2, "nivel3")

    contenedor("nivel4")
  cargado(lD_a, lD_b, d1, d2, "nivel4")
  
  contenedor("nivel5")
  cargado(lE_a, lE_b, e1, e2, "nivel5")
  
  contenedor("nivel6")
  cargado(lF_a, lF_b, f1, f2, "nivel6")
  
  contenedor("nivel7")
  cargado(lG_a, lG_b, g1, g2, "nivel7")

  contenedor("nivel8")
  cargado(lH_a, lH_b, h1, h2, "nivel8")
  
  contenedor("nivel9")
  cargado(lI_a, lI_b, i1, i2, "nivel9")

  contenedor("nivel10")
  cargado(lJ_a, lJ_b, j1, j2, "nivel10")

});


document.getElementById('modoHistoria').addEventListener('click', agg) 
document.getElementById('flecha').addEventListener('click', atras) 

  function agg(){
    
    document.getElementById('paginaPrincipal').style.display="none"
    
  }
  
  function atras(){
    
    let d = n
    document.getElementById(d).style.display="none"
    
    document.getElementById("fondo").style.display="none"
    
    document.getElementById("historia").style.display="inline-block"
    document.querySelector("#mensajeFinal").style.display="none"
    n = ""
    reiniciar()
    console.log(d)
  }
  

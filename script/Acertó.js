function sigNivel(n) {
  
  document.querySelector("#mensajeFinal").style.display="none"
  
  switch (n) {
    case 'nivel1':
      nivel2()
      break;
    case 'nivel2':
      nivel3()
      break;
    case 'nivel2':
      nivel3()
      break;
    case 'nivel3':
      nivel4()
      break;
    case 'nivel4':
      nivel5()
      break;
    case 'nivel5':
      nivel6()
      break;
    case 'nivel6':
      nivel7()
      break;
    case 'nivel7':
      nivel8()
      break;
    case 'nivel8':
      nivel9()
      break;
    case 'nivel9':
      nivel10()
      break;
    default:
      alert("FELISIDADES HAS TERMINADO EL JUEGO")
  }
}
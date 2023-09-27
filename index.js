//nivel1

/*
q cada opcione se cree sola
cear un arr domde esten las palabras
aser un bucle q agg cada palabra
*/

function evalua1(){
    
    let pal1=document.getElementById("palabra1").name="play"
    let pal2=document.getElementById("palabra6").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("palabra6").style.borderColor="green"
            var cl2=document.getElementById("palabra1").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function resp1(){
    let pal1=document.getElementById("palabra6").name="play"
    let pal2=document.getElementById("palabra1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("palabra1").style.borderColor="green"
            document.getElementById("palabra6").style.borderColor="green"

     evaluaPuntos()       
        }else{
            console.log("esta mal echo")
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function evalua2(){
    let pal1=document.getElementById("palabra2").name="day"
    let pal2=document.getElementById("palabra7").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            console.log("esta bienbecho1")
            
            document.getElementById("palabra7").style.borderColor="green"
            document.getElementById("palabra2").style.borderColor="green"


evaluaPuntos()

        }else{
            console.log("has fallado")
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function resp2(){
    let pal1=document.getElementById("palabra7").name="day"
    let pal2=document.getElementById("palabra2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("palabra2").style.borderColor="green"
            document.getElementById("palabra7").style.borderColor="green"

evaluaPuntos()
        }else{
            console.log("esta mal echo")
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function evalua3(){
    let pal1=document.getElementById("palabra3").name="work"
    let pal2=document.getElementById("palabra10").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            console.log("esta bienbecho1")
            
            document.getElementById("palabra3").style.borderColor="green"
            document.getElementById("palabra10").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("has fallado")
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function resp3(){
    let pal1=document.getElementById("palabra10").name="work"
    let pal2=document.getElementById("palabra3").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("palabra3").style.borderColor="green"
            document.getElementById("palabra10").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function evalua4(){
    let pal1=document.getElementById("palabra4").name="closed"
    let pal2=document.getElementById("palabra9").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta muy biem")
           document.getElementById("palabra4").style.borderColor="green"
            document.getElementById("palabra9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            console.log("has fayado")
        }
    }
}

function resp4(){
    let pal1=document.getElementById("palabra9").name="closed"
    let pal2=document.getElementById("palabra4").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta bien echo")
            
            
            document.getElementById("palabra4").style.borderColor="green"
            document.getElementById("palabra9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            console.log("has fallado")
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function evalua5(){
    let pal1=document.getElementById("palabra5").name="go"
    let pal2=document.getElementById("palabra8").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta muy biem")
           document.getElementById("palabra5").style.borderColor="green"
            document.getElementById("palabra8").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
            console.log("has fayado")
        }
    }
}

function resp5(){
    let pal1=document.getElementById("palabra8").name="go"
    let pal2=document.getElementById("palabra5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            console.log("esta bien echo")
            
            
            document.getElementById("palabra5").style.borderColor="green"
            document.getElementById("palabra8").style.borderColor="green"
            evaluaPuntos()
        }
        else{
            console.log("has fallado")
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


/*nivel2*/

function table(){
    
    let pal1=document.getElementById("table").name="play"
    let pal2=document.getElementById("tabla").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("table").style.borderColor="green"
            document.getElementById("tabla").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function tabla(){
    let pal1=document.getElementById("tabla").name="play"
    let pal2=document.getElementById("table").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("tabla").style.borderColor="green"
            document.getElementById("table").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function old(){
    let pal1=document.getElementById("viejo").name="play"
    let pal2=document.getElementById("old").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("old").style.borderColor="green"
            document.getElementById("viejo").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function viejo(){
    
    let pal1=document.getElementById("old").name="play"
    let pal2=document.getElementById("viejo").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("old").style.borderColor="green"
            document.getElementById("viejo").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function sombrero(){
    
    let pal1=document.getElementById("hat").name="play"
    let pal2=document.getElementById("sombrero").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("hat").style.borderColor="green"
            document.getElementById("sombrero").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala3()
            pala3()
            pala5()
        }
        
    }
    
}

function hat(){
    let pal1=document.getElementById("sombrero").name="play"
    let pal2=document.getElementById("hat").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("hat").style.borderColor="green"
            document.getElementById("sombrero").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function casa(){
    
    let pal1=document.getElementById("house").name="play"
    let pal2=document.getElementById("casa").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("casa").style.borderColor="green"
            document.getElementById("house").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function house(){
    let pal1=document.getElementById("casa").name="play"
    let pal2=document.getElementById("house").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("house").style.borderColor="green"
            document.getElementById("casa").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function azul(){
    
    let pal1=document.getElementById("blue").name="play"
    let pal2=document.getElementById("azul").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            document.getElementById("blue").style.borderColor="green"
            document.getElementById("azul").style.borderColor="green"

            evaluaPuntos()
        }else{
            console.log("mal")
            pala2()
            pala3()
            pala4()
            pala1()
        }
        
    }
    
}

function blue(){
    let pal1=document.getElementById("azul").name="play"
    let pal2=document.getElementById("blue").name
    
    
    console.log()
    for(i=1; i<2; i++){
        if(pal1==pal2){
            console.log("esta bien echo2")
            document.getElementById("azul").style.borderColor="green"
            document.getElementById("blue").style.borderColor="green"
            evaluaPuntos()
            
        }else{
            console.log("esta mal echo")
            pala3()
            pala4()
            pala1()
            pala2()
        }
    }
}
/*fin nuvel 2*/
//nivel3

function pa_ni3_1(){
    
    let pal1=document.getElementById("pa_ni3_1").name="play"
    let pal2=document.getElementById("pa_ni3_10").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni3_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni3_10").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni3_10(){
    let pal1=document.getElementById("pa_ni3_10").name="play"
    let pal2=document.getElementById("pa_ni3_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni3_10").style.borderColor="green"
            document.getElementById("pa_ni3_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni3_2(){
    let pal1=document.getElementById("pa_ni3_2").name="day"
    let pal2=document.getElementById("pa_ni3_9").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni3_2").style.borderColor="green"
            document.getElementById("pa_ni3_9").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni3_9(){
    let pal1=document.getElementById("pa_ni3_9").name="day"
    let pal2=document.getElementById("pa_ni3_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni3_2").style.borderColor="green"
            document.getElementById("pa_ni3_9").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni3_3(){
    let pal1=document.getElementById("pa_ni3_3").name="work"
    let pal2=document.getElementById("pa_ni3_8").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni3_3").style.borderColor="green"
            document.getElementById("pa_ni3_8").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni3_8(){
    let pal1=document.getElementById("pa_ni3_8").name="work"
    let pal2=document.getElementById("pa_ni3_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni3_3").style.borderColor="green"
            document.getElementById("pa_ni3_8").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni3_4(){
    let pal1=document.getElementById("pa_ni3_4").name="what"
    let pal2=document.getElementById("pa_ni3_7").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni3_4").style.borderColor="green"
            document.getElementById("pa_ni3_7").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni3_7(){
    let pal1=document.getElementById("pa_ni3_7").name="what"
    let pal2=document.getElementById("pa_ni3_4").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni3_4").style.borderColor="green"
            document.getElementById("pa_ni3_7").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni3_5(){
    let pal1=document.getElementById("pa_ni3_5").name="hay"
    let pal2=document.getElementById("pa_ni3_6").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni3_5").style.borderColor="green"
            document.getElementById("pa_ni3_6").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni3_6(){
    let pal1=document.getElementById("pa_ni3_6").name="hay"
    let pal2=document.getElementById("pa_ni3_5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni3_5").style.borderColor="green"
            document.getElementById("pa_ni3_6").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel3
//nivel 4

function pa_ni4_1(){
    
    let pal1=document.getElementById("pa_ni4_1").name="play"
    let pal2=document.getElementById("pa_ni4_6").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni4_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni4_6").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni4_6(){
    let pal1=document.getElementById("pa_ni4_6").name="play"
    let pal2=document.getElementById("pa_ni4_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni4_6").style.borderColor="green"
            document.getElementById("pa_ni4_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni4_2(){
    let pal1=document.getElementById("pa_ni4_2").name="day"
    let pal2=document.getElementById("pa_ni4_5").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni4_2").style.borderColor="green"
            document.getElementById("pa_ni4_5").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni4_5(){
    let pal1=document.getElementById("pa_ni4_5").name="day"
    let pal2=document.getElementById("pa_ni4_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni4_2").style.borderColor="green"
            document.getElementById("pa_ni4_5").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni4_3(){
    let pal1=document.getElementById("pa_ni4_3").name="work"
    let pal2=document.getElementById("pa_ni4_4").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni4_3").style.borderColor="green"
            document.getElementById("pa_ni4_4").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni4_4(){
    let pal1=document.getElementById("pa_ni4_4").name="work"
    let pal2=document.getElementById("pa_ni4_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni4_3").style.borderColor="green"
            document.getElementById("pa_ni4_4").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni4_7(){
    let pal1=document.getElementById("pa_ni4_7").name="what"
    let pal2=document.getElementById("pa_ni4_10").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni4_7").style.borderColor="green"
            document.getElementById("pa_ni4_10").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni4_10(){
    let pal1=document.getElementById("pa_ni4_10").name="what"
    let pal2=document.getElementById("pa_ni4_7").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni4_7").style.borderColor="green"
            document.getElementById("pa_ni4_10").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni4_8(){
    let pal1=document.getElementById("pa_ni4_8").name="hay"
    let pal2=document.getElementById("pa_ni4_9").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni4_9").style.borderColor="green"
            document.getElementById("pa_ni4_8").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni4_9(){
    let pal1=document.getElementById("pa_ni4_9").name="hay"
    let pal2=document.getElementById("pa_ni4_8").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni4_9").style.borderColor="green"
            document.getElementById("pa_ni4_8").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel4
//nivel5

function pa_ni5_1(){
    
    let pal1=document.getElementById("pa_ni5_1").name="play"
    let pal2=document.getElementById("pa_ni5_4").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni5_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni5_4").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni5_4(){
    let pal1=document.getElementById("pa_ni5_4").name="play"
    let pal2=document.getElementById("pa_ni5_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni5_4").style.borderColor="green"
            document.getElementById("pa_ni5_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni5_2(){
    let pal1=document.getElementById("pa_ni5_2").name="day"
    let pal2=document.getElementById("pa_ni5_3").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni5_2").style.borderColor="green"
            document.getElementById("pa_ni5_3").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni5_3(){
    let pal1=document.getElementById("pa_ni5_3").name="day"
    let pal2=document.getElementById("pa_ni5_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni5_2").style.borderColor="green"
            document.getElementById("pa_ni5_3").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni5_5(){
    let pal1=document.getElementById("pa_ni5_5").name="work"
    let pal2=document.getElementById("pa_ni5_10").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni5_10").style.borderColor="green"
            document.getElementById("pa_ni5_5").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni5_10(){
    let pal1=document.getElementById("pa_ni5_10").name="work"
    let pal2=document.getElementById("pa_ni5_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni5_5").style.borderColor="green"
            document.getElementById("pa_ni5_10").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni5_6(){
    let pal1=document.getElementById("pa_ni5_6").name="what"
    let pal2=document.getElementById("pa_ni5_9").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni5_6").style.borderColor="green"
            document.getElementById("pa_ni5_9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni5_9(){
    let pal1=document.getElementById("pa_ni5_9").name="what"
    let pal2=document.getElementById("pa_ni5_6").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni5_6").style.borderColor="green"
            document.getElementById("pa_ni5_9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni5_8(){
    let pal1=document.getElementById("pa_ni5_8").name="hay"
    let pal2=document.getElementById("pa_ni5_7").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni5_8").style.borderColor="green"
            document.getElementById("pa_ni5_7").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni5_7(){
    let pal1=document.getElementById("pa_ni5_7").name="hay"
    let pal2=document.getElementById("pa_ni5_8").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni5_7").style.borderColor="green"
            document.getElementById("pa_ni5_8").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel5
//nivel 6 

function pa_ni6_1(){
    
    let pal1=document.getElementById("pa_ni6_1").name="play"
    let pal2=document.getElementById("pa_ni6_4").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni6_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni6_4").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni6_4(){
    let pal1=document.getElementById("pa_ni6_4").name="play"
    let pal2=document.getElementById("pa_ni6_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni6_4").style.borderColor="green"
            document.getElementById("pa_ni6_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni6_2(){
    let pal1=document.getElementById("pa_ni6_2").name="day"
    let pal2=document.getElementById("pa_ni6_3").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni6_2").style.borderColor="green"
            document.getElementById("pa_ni6_3").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni6_3(){
    let pal1=document.getElementById("pa_ni6_3").name="day"
    let pal2=document.getElementById("pa_ni6_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni6_2").style.borderColor="green"
            document.getElementById("pa_ni6_3").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni6_5(){
    let pal1=document.getElementById("pa_ni6_5").name="work"
    let pal2=document.getElementById("pa_ni6_6").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni6_6").style.borderColor="green"
            document.getElementById("pa_ni6_5").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni6_6(){
    let pal1=document.getElementById("pa_ni6_6").name="work"
    let pal2=document.getElementById("pa_ni6_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni6_5").style.borderColor="green"
            document.getElementById("pa_ni6_6").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni6_7(){
    let pal1=document.getElementById("pa_ni6_7").name="what"
    let pal2=document.getElementById("pa_ni6_10").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni6_7").style.borderColor="green"
            document.getElementById("pa_ni6_10").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni6_10(){
    let pal1=document.getElementById("pa_ni6_10").name="what"
    let pal2=document.getElementById("pa_ni6_7").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni6_7").style.borderColor="green"
            document.getElementById("pa_ni6_10").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni6_8(){
    let pal1=document.getElementById("pa_ni6_8").name="hay"
    let pal2=document.getElementById("pa_ni6_9").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni6_8").style.borderColor="green"
            document.getElementById("pa_ni6_9").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni6_9(){
    let pal1=document.getElementById("pa_ni6_9").name="hay"
    let pal2=document.getElementById("pa_ni6_8").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni6_9").style.borderColor="green"
            document.getElementById("pa_ni6_8").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel6
//nivel7

function pa_ni7_1(){
    
    let pal1=document.getElementById("pa_ni7_1").name="play"
    let pal2=document.getElementById("pa_ni7_8").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni7_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni7_8").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni7_8(){
    let pal1=document.getElementById("pa_ni7_8").name="play"
    let pal2=document.getElementById("pa_ni7_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni7_8").style.borderColor="green"
            document.getElementById("pa_ni7_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni7_2(){
    let pal1=document.getElementById("pa_ni7_2").name="day"
    let pal2=document.getElementById("pa_ni7_7").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni7_2").style.borderColor="green"
            document.getElementById("pa_ni7_7").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni7_7(){
    let pal1=document.getElementById("pa_ni7_7").name="day"
    let pal2=document.getElementById("pa_ni7_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni7_2").style.borderColor="green"
            document.getElementById("pa_ni7_7").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni7_3(){
    let pal1=document.getElementById("pa_ni7_3").name="work"
    let pal2=document.getElementById("pa_ni7_6").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni7_3").style.borderColor="green"
            document.getElementById("pa_ni7_6").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni7_6(){
    let pal1=document.getElementById("pa_ni7_6").name="work"
    let pal2=document.getElementById("pa_ni7_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni7_3").style.borderColor="green"
            document.getElementById("pa_ni7_6").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni7_4(){
    let pal1=document.getElementById("pa_ni7_4").name="what"
    let pal2=document.getElementById("pa_ni7_9").name
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni7_4").style.borderColor="green"
            document.getElementById("pa_ni7_9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni7_9(){
    let pal1=document.getElementById("pa_ni7_9").name="what"
    let pal2=document.getElementById("pa_ni7_4").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni7_4").style.borderColor="green"
            document.getElementById("pa_ni7_9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni7_5(){
    let pal1=document.getElementById("pa_ni7_5").name="hay"
    let pal2=document.getElementById("pa_ni7_10").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni7_10").style.borderColor="green"
            document.getElementById("pa_ni7_5").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni7_10(){
    let pal1=document.getElementById("pa_ni7_10").name="hay"
    let pal2=document.getElementById("pa_ni7_5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            document.getElementById("pa_ni7_5").style.borderColor="green"
            document.getElementById("pa_ni7_10").style.borderColor="green"
    evaluaPuntos()
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

//fin de nivel7
//nivel8 

function pa_ni8_1(){
    
    let pal1=document.getElementById("pa_ni8_1").name="play"
    let pal2=document.getElementById("pa_ni8_10").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni8_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni8_10").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni8_10(){
    let pal1=document.getElementById("pa_ni8_10").name="play"
    let pal2=document.getElementById("pa_ni8_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni8_10").style.borderColor="green"
            document.getElementById("pa_ni8_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni8_4(){
    let pal1=document.getElementById("pa_ni8_4").name="day"
    let pal2=document.getElementById("pa_ni8_3").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni8_4").style.borderColor="green"
            document.getElementById("pa_ni8_3").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni8_3(){
    let pal1=document.getElementById("pa_ni8_3").name="day"
    let pal2=document.getElementById("pa_ni8_4").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni8_2").style.borderColor="green"
            document.getElementById("pa_ni8_4").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni8_5(){
    let pal1=document.getElementById("pa_ni8_5").name="work"
    let pal2=document.getElementById("pa_ni8_2").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni8_5").style.borderColor="green"
            document.getElementById("pa_ni8_2").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni8_2(){
    let pal1=document.getElementById("pa_ni8_2").name="work"
    let pal2=document.getElementById("pa_ni8_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni8_5").style.borderColor="green"
            document.getElementById("pa_ni8_2").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni8_6(){
    let pal1=document.getElementById("pa_ni8_6").name="what"
    let pal2=document.getElementById("pa_ni8_9").name 
    
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni8_6").style.borderColor="green"
            document.getElementById("pa_ni8_9").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni8_9(){
    let pal1=document.getElementById("pa_ni8_9").name="what"
    let pal2=document.getElementById("pa_ni8_6").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni8_6").style.borderColor="green"
            document.getElementById("pa_ni8_9").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni8_8(){
    let pal1=document.getElementById("pa_ni8_8").name="hay"
    let pal2=document.getElementById("pa_ni8_7").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni8_8").style.borderColor="green"
            document.getElementById("pa_ni8_7").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni8_7(){
    let pal1=document.getElementById("pa_ni8_7").name="hay"
    let pal2=document.getElementById("pa_ni8_8").name

    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni8_8").style.borderColor="green"
            document.getElementById("pa_ni8_7").style.borderColor="green"
    evaluaPuntos()
        }
        else{
        
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nuvel8
//nivel9

function pa_ni9_1(){
    
    let pal1=document.getElementById("pa_ni9_1").name="play"
    let pal2=document.getElementById("pa_ni9_4").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni9_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni9_4").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni9_4(){
    let pal1=document.getElementById("pa_ni9_4").name="play"
    let pal2=document.getElementById("pa_ni9_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni9_4").style.borderColor="green"
            document.getElementById("pa_ni9_1").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni9_2(){
    let pal1=document.getElementById("pa_ni9_2").name="day"
    let pal2=document.getElementById("pa_ni9_7").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni9_2").style.borderColor="green"
            document.getElementById("pa_ni9_7").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni9_7(){
    let pal1=document.getElementById("pa_ni9_7").name="day"
    let pal2=document.getElementById("pa_ni9_2").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni9_7").style.borderColor="green"
            document.getElementById("pa_ni9_2").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni9_3(){
    let pal1=document.getElementById("pa_ni9_3").name="work"
    let pal2=document.getElementById("pa_ni9_10").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni9_3").style.borderColor="green"
            document.getElementById("pa_ni9_10").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni9_10(){
    let pal1=document.getElementById("pa_ni9_10").name="work"
    let pal2=document.getElementById("pa_ni9_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni9_10").style.borderColor="green"
            document.getElementById("pa_ni9_3").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni9_5(){
    let pal1=document.getElementById("pa_ni9_5").name="what"
    let pal2=document.getElementById("pa_ni9_8").name 
    
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni9_5").style.borderColor="green"
            document.getElementById("pa_ni9_8").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni9_8(){
    let pal1=document.getElementById("pa_ni9_8").name="what"
    let pal2=document.getElementById("pa_ni9_5").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni9_5").style.borderColor="green"
            document.getElementById("pa_ni9_8").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni9_6(){
    let pal1=document.getElementById("pa_ni9_6").name="hay"
    let pal2=document.getElementById("pa_ni9_9").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni9_6").style.borderColor="green"
            document.getElementById("pa_ni9_9").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni9_9(){
    let pal1=document.getElementById("pa_ni9_9").name="hay"
    let pal2=document.getElementById("pa_ni9_6").name

    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni9_6").style.borderColor="green"
            document.getElementById("pa_ni9_9").style.borderColor="green"
    evaluaPuntos()
        }
        else{
        
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}


//fin de nivel9
//nivel10
function pa_ni10_1(){
    
    let pal1=document.getElementById("pa_ni10_1").name="play"
    let pal2=document.getElementById("pa_ni10_2").name
    
    for (var i = 1; i < 2; i++) {
        
        if(pal1 == pal2){
            
            var cl1=document.getElementById("pa_ni10_1").style.borderColor="green"
            var cl2=document.getElementById("pa_ni10_2").style.borderColor="green"
            
            
            evaluaPuntos()
            
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni10_2(){
    let pal1=document.getElementById("pa_ni10_2").name="play"
    let pal2=document.getElementById("pa_ni10_1").name
    
    
    console.log()
    for(i=1; i<2; i++){
        console.log()
        if(pal1==pal2){
            document.getElementById("pa_ni10_1").style.borderColor="green"
            document.getElementById("pa_ni10_2").style.borderColor="green"

     evaluaPuntos()       
        }else{
            pala2()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni10_3(){
    let pal1=document.getElementById("pa_ni10_3").name="day"
    let pal2=document.getElementById("pa_ni10_4").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni10_3").style.borderColor="green"
            document.getElementById("pa_ni10_4").style.borderColor="green"

            evaluaPuntos()

        }else{
            pala1()
            pala3()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni10_4(){
    let pal1=document.getElementById("pa_ni10_4").name="day"
    let pal2=document.getElementById("pa_ni10_3").name
    
    
    console.log()
    for(i=1; i<2; i++){
        
        if(pal1==pal2){
            
            document.getElementById("pa_ni10_3").style.borderColor="green"
            document.getElementById("pa_ni10_4").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala3()
            pala4()
            pala5()
        }
    }
}

function pa_ni10_5(){
    let pal1=document.getElementById("pa_ni10_5").name="work"
    let pal2=document.getElementById("pa_ni10_6").name
    
    
    console.log()
    for (var i = 1; i < 2; i++) {
        
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni10_5").style.borderColor="green"
            document.getElementById("pa_ni10_6").style.borderColor="green"

            evaluaPuntos()
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
        
    }
    
}

function pa_ni10_6(){
    let pal1=document.getElementById("pa_ni10_6").name="work"
    let pal2=document.getElementById("pa_ni10_5").name
    
    
    console.log()
    for(i=1; i<2; i++){
    
        if(pal1==pal2){
            
            document.getElementById("pa_ni10_6").style.borderColor="green"
            document.getElementById("pa_ni10_5").style.borderColor="green"
    evaluaPuntos()
            
            
        }else{
            
            pala1()
            pala2()
            pala4()
            pala5()
        }
    }
}

function pa_ni10_7(){
    let pal1=document.getElementById("pa_ni10_7").name="what"
    let pal2=document.getElementById("pa_ni10_8").name 
    
    
    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
           document.getElementById("pa_ni10_7").style.borderColor="green"
            document.getElementById("pa_ni10_8").style.borderColor="green"
  
 evaluaPuntos()
            
        }else{
            pala1()
            pala2()
            pala3()
            pala5()
            
        }
    }
}

function pa_ni10_8(){
    let pal1=document.getElementById("pa_ni10_8").name="what"
    let pal2=document.getElementById("pa_ni10_7").name

    for(i=1;i<2;i++){
        if(pal1 == pal2){
            
            
            document.getElementById("pa_ni10_7").style.borderColor="green"
            document.getElementById("pa_ni10_8").style.borderColor="green"
            
 
   evaluaPuntos()          
        }
        else{
            
            pala1()
            pala2()
            pala3()
            pala5()
        }
    }
}

function pa_ni10_9(){
    let pal1=document.getElementById("pa_ni10_9").name="hay"
    let pal2=document.getElementById("pa_ni10_10").name
    
    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
           document.getElementById("pa_ni10_9").style.borderColor="green"
            document.getElementById("pa_ni10_10").style.borderColor="green"

    evaluaPuntos()
            
        }else{
            
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}

function pa_ni10_10(){
    let pal1=document.getElementById("pa_ni10_10").name="hay"
    let pal2=document.getElementById("pa_ni10_9").name

    for(i=1;i<2;i++){
        
        if(pal1 == pal2){
            
            document.getElementById("pa_ni10_10").style.borderColor="green"
            document.getElementById("pa_ni10_9").style.borderColor="green"
    evaluaPuntos()
        }
        else{
        
            pala1()
            pala2()
            pala3()
            pala4()
        }
    }
}
//fin de nivel10
function pala1(){
    document.getElementById("palabra1").name="hola"
    document.getElementById("palabra6").name="hola"
    
    document.getElementById("table").name="hola"
    document.getElementById("tabla").name="hola"
    
    document.getElementById("pa_ni3_1").name="hla"
    document.getElementById("pa_ni3_10").name="hla"
    
    document.getElementById("pa_ni4_1").name="hla"
    document.getElementById("pa_ni4_6").name="hla"
    
    document.getElementById("pa_ni5_1").name="abc"
    document.getElementById("pa_ni5_4").name="abc"
    
    document.getElementById("pa_ni6_1").name="abc"
    document.getElementById("pa_ni6_4").name="abc"
        
    document.getElementById("pa_ni7_1").name="abc"
    document.getElementById("pa_ni7_8").name="abc"
    
    document.getElementById("pa_ni8_1").name="abc"
    document.getElementById("pa_ni8_10").name="abc"
    
    document.getElementById("pa_ni9_1").name="abc"
    document.getElementById("pa_ni9_4").name="abc"
    
    document.getElementById("pa_ni10_1").name="abc"
    document.getElementById("pa_ni10_2").name="abc"
    
}
function pala2(){
    document.getElementById("palabra2").name="hola"
    document.getElementById("palabra7").name="hola"
    
    document.getElementById("old").name="hola"
    document.getElementById("viejo").name="hola"
    
    document.getElementById("pa_ni3_2").name="hola"
    document.getElementById("pa_ni3_9").name="hola"
    
        document.getElementById("pa_ni4_2").name="hola"
    document.getElementById("pa_ni4_5").name="hola"
    
    document.getElementById("pa_ni5_2").name="abc"
    document.getElementById("pa_ni5_3").name="abc"
    
    document.getElementById("pa_ni6_2").name="abc"
    document.getElementById("pa_ni6_3").name="abc"
    
    document.getElementById("pa_ni7_2").name="abc"
    document.getElementById("pa_ni7_7").name="abc"
    
    document.getElementById("pa_ni8_3").name="abc"
    document.getElementById("pa_ni8_4").name="abc"
    
    document.getElementById("pa_ni9_2").name="abc"
    document.getElementById("pa_ni9_7").name="abc"
    
    document.getElementById("pa_ni10_3").name="abc"
    document.getElementById("pa_ni10_4").name="abc"
    
}

function pala3(){
    document.getElementById("palabra3").name="hola"
    document.getElementById("palabra10").name="hola"
    
    document.getElementById("house").name="hola"
    document.getElementById("casa").name="hola"
    
    document.getElementById("pa_ni3_3").name="hello"
    document.getElementById("pa_ni3_8").name="hello"
    
    document.getElementById("pa_ni4_3").name="hello"
    document.getElementById("pa_ni4_4").name="hello"
    
    document.getElementById("pa_ni5_5").name="abc"
    document.getElementById("pa_ni5_10").name="abc"
    
    document.getElementById("pa_ni6_5").name="abc"
    document.getElementById("pa_ni6_6").name="abc"

    document.getElementById("pa_ni7_3").name="abc"
    document.getElementById("pa_ni7_6").name="abc"
    
    document.getElementById("pa_ni8_5").name="abc"
    document.getElementById("pa_ni8_2").name="abc"
    
    document.getElementById("pa_ni9_3").name="abc"
    document.getElementById("pa_ni9_10").name="abc"
        
    document.getElementById("pa_ni10_5").name="abc"
    document.getElementById("pa_ni10_6").name="abc"
        
}

function pala4(){
    document.getElementById("palabra4").name="hola"
    document.getElementById("palabra9").name="hola"
    
    document.getElementById("sombrero").name="hola"
    document.getElementById("hat").name="hola"
    
    document.getElementById("pa_ni3_7").name="hi"
    document.getElementById("pa_ni3_4").name="hi"
    
    document.getElementById("pa_ni4_7").name="hi"
    document.getElementById("pa_ni4_10").name="hi"

    document.getElementById("pa_ni5_6").name="abc"
    document.getElementById("pa_ni5_9").name="abc"
    
    document.getElementById("pa_ni6_7").name="abc"
    document.getElementById("pa_ni6_10").name="abc"
    
    document.getElementById("pa_ni7_4").name="abc"
    document.getElementById("pa_ni7_9").name="abc"
    
document.getElementById("pa_ni8_9").name="abc"
    document.getElementById("pa_ni8_6").name="abc"

    document.getElementById("pa_ni9_5").name="abc"
    document.getElementById("pa_ni9_8").name="abc"

    document.getElementById("pa_ni10_7").name="abc"
    document.getElementById("pa_ni10_8").name="abc"

}

function pala5(){
    document.getElementById("palabra5").name="hola"
    document.getElementById("palabra8").name="hola"
    
    document.getElementById("azul").name="hola"
    document.getElementById("blue").name="hola"
    
    document.getElementById("pa_ni3_6").name="hola"
     document.getElementById("pa_ni3_5").name="hola"

    document.getElementById("pa_ni4_8").name="hola"
     document.getElementById("pa_ni4_9").name="hola"

    document.getElementById("pa_ni5_8").name="abc"
    document.getElementById("pa_ni5_7").name="abc"

    document.getElementById("pa_ni6_8").name="abc"
    document.getElementById("pa_ni6_9").name="abc"

    document.getElementById("pa_ni7_5").name="abc"
    document.getElementById("pa_ni7_10").name="abc"

    document.getElementById("pa_ni8_7").name="abc"
    document.getElementById("pa_ni8_8").name="abc"

    document.getElementById("pa_ni9_6").name="abc"
    document.getElementById("pa_ni9_9").name="abc"

    document.getElementById("pa_ni10_10").name="abc"
    document.getElementById("pa_ni10_9").name="abc"

}
/*
function nivel1(){
    

    document.getElementById("dos")
    .style.display="inline-block"
        
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"

    document.getElementById("nivel4").style.display="none"

    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nivel6").style.display="none"

    document.getElementById("sigNivel").name="nivel2"
    
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("nivel10")
    .style.display="none"
    
    jugando()
    reiniciarpuntos()
    colorBerde()
    
}
*/
/*function nivel2(){
    cargado(z2,y2,"nv2")
    
    document.getElementById("nv2").style.display="inline-block"

    document.getElementById("dos").style.display="none"

    document.getElementById("sigNivel").name="nivel3"
    
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nivel6").style.display="none"
    
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("nivel10")
    .style.display="none"
    
    jugando()
    
    colorBerde()

    reiniciarpuntos()
    
}*/


/*function nivel3(){
    document.getElementById("nivel3"
    ).style.display="inline-block"

    document.getElementById('nv2')
    .style.display="none"
    
    document.getElementById('dos').style.display="none"
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nivel6").style.display="none"
    
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("nivel10")
    .style.display="none"
    
    document.getElementById("sigNivel")
    .name="nivel4"
    
    jugando()
    
    colorBerde()

    reiniciarpuntos()
}*/

function nivel4(){
    document.getElementById("nivel4")
    .style.display="inline-block"
        
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"
    
    document.getElementById("dos").style.display="none"

    document.getElementById("nivel5").style.display="none"

    document.getElementById("nivel6").style.display="none"

    document.getElementById("nivel7").style.display="none"

    document.getElementById("nivel8").style.display="none"

    document.getElementById("nivel9").style.display="none"

    document.getElementById("nivel10").style.display="none"

    document.getElementById("sigNivel")
    .name="nivel5"
    
    jugando()
    colorBerde()
    reiniciarpuntos()
}

function nivel5(){
    document.getElementById("nivel5")
    .style.display="inline-block"
        
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"
    
    document.getElementById("dos").style.display="none"
    
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel6").style.display="none"
    
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("nivel10")
    .style.display="none"
    
    document.getElementById("sigNivel")
    .name="nivel6"
    
    jugando()
    colorBerde()
    reiniciarpuntos()
}

function nivel6(){
    document.getElementById("nivel6")
    .style.display="inline-block"
        
    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"
    
    document.getElementById("dos").style.display="none"
    
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("nivel10").style.display="none"
    
    document.getElementById("sigNivel")
    .name="nivel7"
    
    jugando()
    colorBerde()
    reiniciarpuntos()
}

function nivel7(){
    document.getElementById("nivel7")
    .style.display="inline-block"
        
    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"
    
    document.getElementById("dos").style.display="none"
    
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel6").style.display="none"
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("nivel10").style.display="none"
    
    document.getElementById("sigNivel")
    .name="nivel8"
    
    jugando()
    colorBerde()
    reiniciarpuntos()
}

function nivel8(){
    document.getElementById("nivel8")
    .style.display="inline-block"
        
    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"
    
    document.getElementById("dos").style.display="none"
    
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel6").style.display="none"
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("nivel10").style.display="none"
    
    document.getElementById("sigNivel")
    .name="nivel9"
    
    jugando()
    colorBerde()
    reiniciarpuntos()
}

function nivel9(){
    document.getElementById("nivel9")
    .style.display="inline-block"
        
    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"
    
    document.getElementById("dos").style.display="none"
    
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel6").style.display="none"
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel10").style.display="none"
    
    document.getElementById("sigNivel")
    .name="nivel10"
    
    jugando()
    reiniciarpuntos()
    colorBerde()
}

function nivel10(){
    document.getElementById("nivel10")
    .style.display="inline-block"
        
    document.getElementById("nivel5").style.display="none"
    
    document.getElementById("nv2").style.display="none"
    
    document.getElementById("nivel3").style.display="none"
    
    document.getElementById("dos").style.display="none"
    
    document.getElementById("nivel4").style.display="none"
    
    document.getElementById("nivel6").style.display="none"
    document.getElementById("nivel7").style.display="none"
    
    document.getElementById("nivel8").style.display="none"
    
    document.getElementById("nivel9").style.display="none"
    
    document.getElementById("sigNivel")
    .name="nivel"
    
    jugando()
    reiniciarpuntos()
    colorBerde()
}
function evaluaBoton(){
    let both=document.getElementById("sigNivel").name
    
    switch (both) {
        case 'nivel2':
            alert("hola")
            nivel2()
            break;
            
        case 'nivel3':
            alert("sige el nivel3");
            nivel3()
            
            break;
        case 'nivel4':
            alert("vas al nivel 4")
            nivel4()
            break;
        case 'nivel5':
            alert("vas al nivel 5")
            nivel5()
            break;
        case 'nivel6':
            alert("vas al nivel 6")
            nivel6()
            break;
        case 'nivel7':
            alert("vas al nivel 7")
            nivel7();
            break;
        case 'nivel8':
            alert("vas al nivel 8")
            nivel8()
            break;
        case 'nivel9':
            alert("vas al nivel 9")
            nivel9()
            break;
        case 'nivel10' :
            alert("vas al nivel 10")
            nivel10()
            break;
        default:
            // code
    }
}

function evaluaPuntos(){
    pala1()
    pala2()
    pala3()
    pala4()
    pala5()
    var puntos=document.getElementById("puntos")
    .textContent

    
    switch (puntos){
        case "":
            document.getElementById("puntos")
            .innerText="1"
            break;
    
        case "1":
            document.getElementById("puntos")
            .innerText="2"
            break;
        
        case "2":
            document.getElementById("puntos")
                .innerText="3"
            break;
    
        case "3":
            document.getElementById("puntos")
                .innerText="4"
            break;
        
        case "4":
            document.getElementById("puntos")
            .textContent="5"
            mostraBot()
                    
            break;
    
        default:;
                    
    }

}

function mostraBot(){

    document.getElementById("dos")
    .style.display="none"
    document.getElementById("tres")
    .style.display="none"
    document.getElementById('fondo')
    .style.display="none"
    document.getElementById("mensajeFinal").style
    .display="inline-block"
    
    pala1()
    pala2()
    pala3()
    pala4()
    pala5()
    
    
}

function reiniciarpuntos(){
        
    document.getElementById("puntos").textContent=""
        
    document.getElementById("tres").style.display="inline-block"
    
    
    pala1()
    pala2()
    pala3()
    pala4()
    pala5()

}
function modoHistoria(){
    
    document.getElementById("paginaPrincipal").style.display="none"
    
    document.getElementById("historia")
    .style.display="inline-block"
}

function jugando(){
    document.getElementById("historia").style.display="none"

    document.getElementById("fondo").style.display="inline-block"
}

function finDeNivel(){
    document.getElementById("historia").style.display="inline-block"
    document.getElementById("mensajeFinal")
        .style.display="none"

}

function colorBerde(){
    document.getElementById("palabra1").style.borderColor="grey"
    
    document.getElementById("palabra2").style.borderColor="grey"
    
    document.getElementById("palabra3").style.borderColor="grey"
    
    document.getElementById("palabra4").style.borderColor="grey"
    
    document.getElementById("palabra5").style.borderColor="grey"
    
    document.getElementById("palabra6").style.borderColor="grey"
    
    document.getElementById("palabra7").style.borderColor="grey"
    
    document.getElementById("palabra8").style.borderColor="grey"
    
    document.getElementById("palabra9").style.borderColor="grey"
    
    document.getElementById("palabra10").style.borderColor="grey"
   
    //segundo nivel2
    document.getElementById("tabla").style.borderColor="grey"
    
    document.getElementById("table").style.borderColor="grey"
    
    document.getElementById("old").style.borderColor="grey"
    
    document.getElementById("viejo").style.borderColor="grey"
    
    document.getElementById("sombrero").style.borderColor="grey"
    
    document.getElementById("hat").style.borderColor="grey"
    
    document.getElementById("casa").style.borderColor="grey"
    
    document.getElementById("house").style.borderColor="grey"
    
    document.getElementById("azul").style.borderColor="grey"
    
    document.getElementById("blue").style.borderColor="grey"
    
    //segundo nivel3
    document.getElementById("pa_ni3_1").style.borderColor="grey"
    
    document.getElementById("pa_ni3_2").style.borderColor="grey"
    
    document.getElementById("pa_ni3_3").style.borderColor="grey"
    
    document.getElementById("pa_ni3_4").style.borderColor="grey"
    
    document.getElementById("pa_ni3_5").style.borderColor="grey"
    
    document.getElementById("pa_ni3_6").style.borderColor="grey"
    
    document.getElementById("pa_ni3_7").style.borderColor="grey"
    
    document.getElementById("pa_ni3_8").style.borderColor="grey"
    
    document.getElementById("pa_ni3_9").style.borderColor="grey"
    
    document.getElementById("pa_ni3_10").style.borderColor="grey"
    
//nivel4
    document.getElementById("pa_ni4_1").style.borderColor="grey"
    
    document.getElementById("pa_ni4_2").style.borderColor="grey"
    
    document.getElementById("pa_ni4_3").style.borderColor="grey"
    
    document.getElementById("pa_ni4_4").style.borderColor="grey"
    
    document.getElementById("pa_ni4_5").style.borderColor="grey"
    
    document.getElementById("pa_ni4_6").style.borderColor="grey"
    
    document.getElementById("pa_ni4_7").style.borderColor="grey"
    
    document.getElementById("pa_ni4_8").style.borderColor="grey"
    
    document.getElementById("pa_ni4_9").style.borderColor="grey"
    
    document.getElementById("pa_ni4_10").style.borderColor="grey"
    
//nivel5

    document.getElementById("pa_ni5_1").style.borderColor="grey"
    
    document.getElementById("pa_ni5_2").style.borderColor="grey"
    
    document.getElementById("pa_ni5_3").style.borderColor="grey"
    
    document.getElementById("pa_ni5_4").style.borderColor="grey"
    
    document.getElementById("pa_ni5_5").style.borderColor="grey"
    
    document.getElementById("pa_ni5_6").style.borderColor="grey"
    
    document.getElementById("pa_ni5_7").style.borderColor="grey"
    
    document.getElementById("pa_ni5_8").style.borderColor="grey"
    
    document.getElementById("pa_ni5_9").style.borderColor="grey"
    
    document.getElementById("pa_ni5_10").style.borderColor="grey"
    
//nivel6

    document.getElementById("pa_ni6_1").style.borderColor="grey"
    
    document.getElementById("pa_ni6_2").style.borderColor="grey"
    
    document.getElementById("pa_ni6_3").style.borderColor="grey"
    
    document.getElementById("pa_ni6_4").style.borderColor="grey"
    
    document.getElementById("pa_ni6_5").style.borderColor="grey"
    
    document.getElementById("pa_ni6_6").style.borderColor="grey"
    
    document.getElementById("pa_ni6_7").style.borderColor="grey"
    
    document.getElementById("pa_ni6_8").style.borderColor="grey"
    
    document.getElementById("pa_ni6_9").style.borderColor="grey"
    
    document.getElementById("pa_ni6_10").style.borderColor="grey"

//nivel7

    document.getElementById("pa_ni7_1").style.borderColor="grey"
    
    document.getElementById("pa_ni7_2").style.borderColor="grey"
    
    document.getElementById("pa_ni7_3").style.borderColor="grey"
    
    document.getElementById("pa_ni7_4").style.borderColor="grey"
    
    document.getElementById("pa_ni7_5").style.borderColor="grey"
    
    document.getElementById("pa_ni7_6").style.borderColor="grey"
    
    document.getElementById("pa_ni7_7").style.borderColor="grey"
    
    document.getElementById("pa_ni7_8").style.borderColor="grey"
    
    document.getElementById("pa_ni7_9").style.borderColor="grey"
    
    document.getElementById("pa_ni7_10").style.borderColor="grey"
    
//nivel8

    document.getElementById("pa_ni8_1").style.borderColor="grey"
    
    document.getElementById("pa_ni8_2").style.borderColor="grey"
    
    document.getElementById("pa_ni8_3").style.borderColor="grey"
    
    document.getElementById("pa_ni8_4").style.borderColor="grey"
    
    document.getElementById("pa_ni8_5").style.borderColor="grey"
    
    document.getElementById("pa_ni8_6").style.borderColor="grey"
    
    document.getElementById("pa_ni8_7").style.borderColor="grey"
    
    document.getElementById("pa_ni8_8").style.borderColor="grey"
    
    document.getElementById("pa_ni8_9").style.borderColor="grey"
    
    document.getElementById("pa_ni8_10").style.borderColor="grey"
    
//nivel9

    document.getElementById("pa_ni9_1").style.borderColor="grey"
    
    document.getElementById("pa_ni9_2").style.borderColor="grey"
    
    document.getElementById("pa_ni9_3").style.borderColor="grey"
    
    document.getElementById("pa_ni9_4").style.borderColor="grey"
    
    document.getElementById("pa_ni9_5").style.borderColor="grey"
    
    document.getElementById("pa_ni9_6").style.borderColor="grey"
    
    document.getElementById("pa_ni9_7").style.borderColor="grey"
    
    document.getElementById("pa_ni9_8").style.borderColor="grey"
    
    document.getElementById("pa_ni9_9").style.borderColor="grey"
    
    document.getElementById("pa_ni9_10").style.borderColor="grey"

//nivel10

    document.getElementById("pa_ni10_1").style.borderColor="grey"
    
    document.getElementById("pa_ni10_2").style.borderColor="grey"
    
    document.getElementById("pa_ni10_3").style.borderColor="grey"
    
    document.getElementById("pa_ni10_4").style.borderColor="grey"
    
    document.getElementById("pa_ni10_5").style.borderColor="grey"
    
    document.getElementById("pa_ni10_6").style.borderColor="grey"
    
    document.getElementById("pa_ni10_7").style.borderColor="grey"
    
    document.getElementById("pa_ni10_8").style.borderColor="grey"
    
    document.getElementById("pa_ni10_9").style.borderColor="grey"
    
    document.getElementById("pa_ni10_10").style.borderColor="grey"

}

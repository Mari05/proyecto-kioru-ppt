let userScore= 0;
let compScore= 0;
const userScore_span= document.getElementById('user-score');
const compScore_span= document.getElementById('comp-score');
const scoreBoard_div= document.querySelector('marcador');
const result_div= document.querySelector('.result p');
const piedra_div= document.getElementById('pi');
const papel_div= document.getElementById('pa');
const tijera_div= document.getElementById('ti');

function movidaComp(){
  const opciones= ['pi','pa','ti'];
  const random= Math.floor(Math.random() * 3);
  const movida= opciones[random];
  return (movida);
}
function convertirLetra(opcion){
  if (opcion == 'pi'){
    return "Piedra ";
}else if (opcion == 'pa') {
    return "Papel ";
  }else {
    return "Tijeras";
  }
}

function ganar(opcionUser, opcionPc){
  userScore++;
  userScore_span.innerHTML= userScore;
  const smallUser= "(USER)".fontsize(2);
  const smallPc= "(PC)".fontsize(2);
  result_div.innerHTML= convertirLetra(opcionUser)+smallUser+" le gana a "+convertirLetra(opcionPc)+smallPc+".<br> Tu ganaste!!";
  const userChoice_div= document.getElementById(opcionUser);
  const pcChoice_div= document.getElementById(opcionPc);
  userChoice_div.classList.add('verde');
  pcChoice_div.classList.add('rojo');
  setTimeout(function(){
    userChoice_div.classList.remove("verde");
    pcChoice_div.classList.remove("rojo");
  }, 2000);
}

function pierda(opcionUser, opcionPc){
  compScore++;
  compScore_span.innerHTML= compScore;
  const smallUser= "(USER)".fontsize(2);
  const smallPc= "(PC)".fontsize(2);
  result_div.innerHTML= convertirLetra(opcionPc)+smallPc+" le gana a "+convertirLetra(opcionUser)+smallUser+".<br> Tu perdiste";
  const userChoice_div= document.getElementById(opcionUser);
  const pcChoice_div= document.getElementById(opcionPc);
  userChoice_div.classList.add('rojo');
  pcChoice_div.classList.add('verde');
  setTimeout(function(){
    userChoice_div.classList.remove("rojo");
    pcChoice_div.classList.remove("verde");
  }, 2000);
}

function empate(opcionUser){
  result_div.innerHTML= "Ambos eligierón "+convertirLetra(opcionUser)+".<br> Es un empate!!";
  const opcion_div= document.getElementById(opcionUser);
  opcion_div.classList.add('gris');
  setTimeout(function(){
    opcion_div.classList.remove("gris");
  }, 2000);
}

function game(opcion){
  const movidaPc= movidaComp();
  const movidaUser= opcion;
  switch (movidaUser+movidaPc) {
    case 'piti':
    case 'papi':
    case 'tipa':
      ganar(movidaUser, movidaPc);
    break;
    case 'pipa':
    case 'pati':
    case 'tipi':
      pierda(movidaUser, movidaPc);
    break;
    case 'pipi':
    case 'papa':
    case 'titi':
      empate(movidaUser);
    break;
  }
}

function main(){
  piedra_div.addEventListener('click', () => game("pi"));
  papel_div.addEventListener('click', () => game("pa"));
  tijera_div.addEventListener('click', () => game("ti"));
}
main();

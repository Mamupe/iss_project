import { getData } from "../../service/service";
import { cleanPage } from "../../utils/cleanPage";
import { JugadorGallery } from "../../components/Jugadorgallery/Jugadorgallery";

let jugadorSelec;
const getJugadores = async () => {
    const jugadores = await getData("issplayers");
   printJugadores(jugadores);
   jugadorSelec = jugadores;
  };


  const printJugadores = (list) => {
    const jugadoresContainer = document.querySelector(".galeria");
    for (const element of list) {
        jugadoresContainer.innerHTML += JugadorGallery(element);
        
        
        
    }
  };


export const Jugadores = () => {
    const app = document.querySelector("#app");
cleanPage(app);
app.innerHTML += `
<section class="jugadores">

<div class="issplayer">

</div>
<div class="vs">
<input type="text">
</div>
<div class="realplayer">

</div>
<div class="galeria"></div>

</section>
`

    getJugadores();

/* 
const realplayerContainer = document.querySelector(".realplayer")
const input = document.querySelector("input");
const jugadoresFiltrados = (word) => {
    const filterPlayer = jugadorSelec.filter((player)=>{
        return player.realname.toLowerCase().includes(word.toLowerCase())
    });
    cleanPage(realplayerContainer);
    for (const player of filterPlayer) {
        realplayerContainer.innerHTML += `
        <img src="${player.realpicture}"/>
        `
    }
    return filterPlayer
};
input.addEventListener("input",(ev)=> jugadoresFiltrados(input.value)) */
    
const issplayerContainer = document.querySelector(".issplayer")
const input1 = document.querySelector("input");
const jugadoresFiltrados1 = (word) => {
    const filterPlayer1 = jugadorSelec.filter((player1)=>{
        return player1.issname.toLowerCase().includes(word.toLowerCase())
    });
    cleanPage(issplayerContainer);
    for (const player1 of filterPlayer1) {
        issplayerContainer.innerHTML += `
        <img src="${player1.isspicture}"/>
        `
    }
    return filterPlayer1
};
input1.addEventListener("input",(ev)=> jugadoresFiltrados1(input1.value))

}
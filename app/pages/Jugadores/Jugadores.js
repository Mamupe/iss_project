import { getData } from "../../service/service";
import { cleanPage } from "../../utils/cleanPage";
import { JugadorGallery } from "../../components/Jugadorgallery/Jugadorgallery";

const getJugadores = async () => {
    const jugadores = await getData("issplayers");
   printJugadores(jugadores);
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

}
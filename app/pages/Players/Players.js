import { getData } from "../../service/service";
import { cleanPage } from "../../utils/cleanPage";

const getPlayers = async () => {
    const players = await getData("issplayers");
    printPlayers(players);
  };
  

const printPlayers = (list) => {
    const section = document.createElement("section");
    section.classList.add("issplayers-sec");
    for (const item of list) {
        section.innerHTML += 
        `
         <div class="issplayer">
       
        <h1>$</h1>
        </div>
        <div class="vs">
        <input type="text">
        </div>
        <div class="realplayer">
        
        <h1></h1>
        </div>
        
        `;
        

    }
    const app = document.querySelector("#app");
        cleanPage(app);
        app.appendChild(section);
};
export const Players = () => {
    getPlayers();
};


import './home.css';
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = 
    `
 

    <div id="rc" class="home off" >BIENVENIDO, SI ESTÁS AQUÍ ES QUE ERES UN PURETA
    <div class="off" style="width:598px;  height:350px; background:black;">
    <img id="gif" src="public/pictures/gifpro.gif" alt="ini"/>
    </div>
    <button class="boton">on/off</button>
    </div>
    
   
    `;
 
};


document.addEventListener("click", event => {
if (event.target.className === "boton") {
    const img = document.querySelector("#gif");
    console.log(img);
    img.classList.toggle("disable");
};
})
  
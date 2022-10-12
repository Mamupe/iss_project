import './home.css';
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = 
    `
 

    <div id="rc" class="home" >
    <img id="gif" src="public/pictures/gifpro.gif" alt="ini"/>
     
    </div>
    
    <button class="boton">on/off</button>
    `;
 
};


document.addEventListener("click", event => {
if (event.target.className === "boton") {
    const img = document.querySelector("#gif");
    console.log(img);
    img.classList.toggle("disable");
};
})
  
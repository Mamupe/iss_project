import './home.css';
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = 
    `
 

    <div id="rc" class="home off" >
   
    <div class="off" style="width:448px;  height:300px; background:black;">
    <img id="gif" src="https://res.cloudinary.com/dghnwllrc/image/upload/v1665643109/gifpro_sjywax.gif" alt="ini"/>
    </div>
    <button class="boton">on/off</button>
    <br>
    <br>
    <h1>BIENVENIDO, SI ESTÁS AQUÍ ES QUE ERES UN PURETA</h1>
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
  
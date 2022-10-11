import './home.css';
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = 
    `
   
    <div class="home">
    
    
    <img id="gif" src="public/pictures/gifpro.gif" alt="ini"/>
    <button type="button" id="on-off">on/off</button>
    </div>
    
    `;
};






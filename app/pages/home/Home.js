import './home.css';
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const app = document.querySelector("#app");
    cleanPage(app);
    app.innerHTML = 
    `
    <button type="button">change</button>
    <div class="home">
    
    
    <img src="public/pictures/gifpro.gif" alt="pro"/>
   
    </div>
    
    `;
};







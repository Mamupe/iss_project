import './style.css'
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/home/Home.js";

import { linkPage } from './utils/linkPage';
import { Jugadores } from './pages/Jugadores/Jugadores';

const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();



linkPage("#homelink", Home);



linkPage("#jugadoreslink", Jugadores);
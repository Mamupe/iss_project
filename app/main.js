import './style.css'
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/home/Home.js";


const header = document.querySelector("header");
header.innerHTML = Nav();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();
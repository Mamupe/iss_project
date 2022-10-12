import "./Jugadorgallery.css";
export const JugadorGallery = (element) => `
<div class="jugador">
<img src=${element.isspicture} alt=${element.issname}/><img src=${element.realpicture} alt=${element.realname}/>
</div>
`;
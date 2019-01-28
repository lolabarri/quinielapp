import React from 'react';

import Card from "../components/Card";

const home = () => {
  return (
    <div>
      <img className="homeImage" alt="" src="https://d2jljza7x0a5yy.cloudfront.net/media/k2/items/cache/0bf7604ebabcc5bbe1045d2a5aab65b8_XL.jpg?t=1534508763" />
      <br />
      <br />
      <Card img="http://www.guidet.es/sites/default/files/styles/imagen_producto_nodo/public/imagenes_productos/logotipo-quiniela-azul-adhesivo-guidet-geydes.png?itok=B96lxlpv" to="/bet" linkText="Bet!" description="Here you can make your bet for next weekend" />
      <Card img="https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/football-icon-14-256.png" to="/matches" linkText="Matches" description="See results of the current matches. Click now!" />
      <Card img="http://iconsetc.com/icons-watermarks/flat-circle-white-on-red/layouts-rounded/layouts-rounded_short-list-view/layouts-rounded_short-list-view_flat-circle-white-on-red_512x512.png" to="/ranking" linkText="Ranking" description="Want to know which your position is?" />
      <Card img="http://www.aibifitness.com/commercial/wp-content/uploads/2016/07/user-5121.png" to="/" linkText="User" description="All important data about you (safely saved)" />
    </div>
  )
}

export default home;
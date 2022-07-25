import React from "react";
import './Home.css'
import SlideShow from "../SlideShow/SlideShow";
import frau_zeigt from "../../img/frau-zeigt.jpg"
import portrait from "../../img/quadrat.jpg"
import Dienstleistungen from "../dienstleistung/Dienstleistungen";
import Footer from "../footer/Footer";


const Home = () => {
  return (
    <div className="home">
      <SlideShow></SlideShow>
      <div className="home__about-finanzplanung">
        <div className="home__text">
          <h1>Warum Finanzplanung</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu at nibh
            consequat porta. Viverra posuere dapibus lectus tellus nisi. Ipsum
            netus rhoncus blandit non velit pulvinar in aenean. Nam pellentesque
            scelerisque lacus ullamcorper turpis. Nulla fermentum non cursus in
            magnis. Scelerisque quis aliquam vehicula venenatis. Mattis hendrerit
            fermentum placerat tortor. Ut donec viverra lobortis libero. Tincidunt
            semper orci, nisl volutpat sed sed tristique turpis. Nec aliquet
            lobortis id vel posuere morbi nunc. Donec facilisis a auctor sapien
            est tristique commodo eleifend. Turpis adipiscing dignissim sapien,
            consequat mattis risus quis. In volutpat integer tellus dictum
            tincidunt turpis elit iaculis. Sapien, pellentesque cursus id placerat
            turpis. Etiam ullamcorper tellus lectus a non morbi ac cursus.
            Vulputate faucibus tincidunt sagittis purus ullamcorper eget. Feugiat
            lobortis cras auctor luctus quisque euismod id tristique egestas.
            Tempor sollicitudin proin aliquam sed. Interdum id pulvinar bibendum
            gravida cras cursus odio.Aasdfsadfasdfasdf
          </p>
        </div>
        <img className="home__about-finazplannung-image" alt='' src={frau_zeigt}></img>
      </div>
      <Dienstleistungen></Dienstleistungen>
      <div className="home__miriam">
        <div className="home__miriam-image-container">
          <img className="home__miriam-image" alt='' src={portrait}></img>
        </div>
        <div className="home__miriam-text">
          <h2> Miriam über Finanzplanung</h2>
        <p>          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu at nibh
          consequat porta. Viverra posuere dapibus lectus tellus nisi. Ipsum
          netus rhoncus blandit non velit pulvinar in aenean. Nam pellentesque
          scelerisque lacus ullamcorper turpis. Nulla fermentum non cursus in
          magnis. Scelerisque quis aliquam vehicula venenatis. Mattis hendrerit
          fermentum placerat tortor. Ut donec viverra lobortis libero. Tincidunt
          semper orci, nisl volutpat sed sed tristique turpis. Nec aliquet
          lobortis id vel posuere morbi nunc. Donec facilisis a auctor sapien
          est tristique commodo eleifend. Turpis adipiscing dignissim sapien,
          consequat mattis risus quis. In volutpat integer tellus dictum
          tincidunt turpis elit iaculis. Sapien, pellentesque cursus id placerat
          turpis. Etiam ullamcorper tellus lectus a non morbi ac cursus.
          Vulputate faucibus tincidunt sagittis purus ullamcorper eget. Feugiat
          lobortis cras auctor luctus quisque euismod id tristique egestas.
          Tempor sollicitudin proin aliquam sed. Interdum id pulvinar bibendum
            gravida cras cursus odio.Aasdfsadfasdfasdf</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import './Eigenheim.css'
import eigenheim from "../../img/eigenheim.jpg"
import firstImage from "../../img/eigenheim/birgit-loit-sBjIRDC0H5Q-unsplash.jpg"
import secondImage from "../../img/eigenheim/ian-macdonald-W8z6aiwfi1E-unsplash.jpg"



const Eigenheim = () => {
  return (
    <div className="eigenheim">
      <img className="eigenheim__title-image" src={eigenheim}></img>
      <h1 className="eigenheim__title">Eigenheim</h1>
      <div className="eigenheim__grid">
        <div className="eigenheim__text">
          <h2 className="eigenheim__paragraph-title">Deep Paragraph</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu at nibh
            consequat porta. Viverra posuere dapibus lectus tellus nisi. Ipsum
            netus rhoncus blandit non velit pulvinar in aenean. Nam pellentesque
            scelerisque lacus ullamcorper turpis. Nulla fermentum non cursus in
            magnis. Scelerisque quis aliquam vehicula venenatis. Mattis hendrerit
            fermentum placerat tortor. Ut donec viverra lobortis libero. Tincidunt
            semper orci, nisl volutpat sed sed tristique turpis. Nec aliquet
            f</p>
        </div>
        <img className="eigenheim__image-left" alt='' src={firstImage}></img>
        
        <img className="eigenheim__image-left" alt='' src={secondImage}></img>
        <div className="eigenheim__text">
          <h2 className="eigenheim__paragraph-title">Deep Paragraph</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu at nibh
            consequat porta. Viverra posuere dapibus lectus tellus nisi. Ipsum
            netus rhoncus blandit non velit pulvinar in aenean. Nam pellentesque
            scelerisque lacus ullamcorper turpis. Nulla fermentum non cursus in
            magnis. Scelerisque quis aliquam vehicula venenatis. Mattis hendrerit
            fermentum</p>
        </div>
        

      </div>
    </div>
  );
};

export default Eigenheim;

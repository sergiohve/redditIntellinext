import React from "react";

import "./card.scss";

const Card = ({ name, title, description, images, url, coments }) => {
  const handleNavigateDetail = (lank) => {
    window.open(`https://www.reddit.com${lank}`);
    console.log(lank);
  };

  return (
    <div className="card mb-3 hi">
      <div>
        <p className="card-text">
          <small className="text-muted">
            publicado {name} Hace 2 días
          </small>
        </p>
        <div className="card-body">
          <h5 className="card-title" onClick={() => handleNavigateDetail(url)}>
            {title}
          </h5>
          <h5 className="card-title" onClick={() => handleNavigateDetail(url)}>
            {name}
          </h5>

          <p className="card-text">{description}</p>
          <img src={images} alt={images} width="100%" />
        </div>
        <div className="widgets">
          <div className="wid">Comentarios {coments}</div>
          <div className="wid">Compartir</div>
          <div className="wid">Guardar</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

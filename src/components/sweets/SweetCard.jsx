import React from "react";

const SweetCard = ({ image, title, description }) => {
  return (
    <article className="sweets__container__item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default SweetCard;

import React from "react";
import SweetCard from "./SweetCard";
import "./Sweets.scss";

const sweetsData = [
  {
    image: "./images/sweet-1.png",
    title: "Червоний мак",
    description:
      "Пралене з додаванням карамельної крихти, пасти ядер горіхів фундука та мигдалю, покрите шоколадною глазурʼю",
  },
  {
    image: "./images/sweet-3.png",
    title: "Сливки-ленивки",
    description:
      "Світлі вафельні листи, поєднані молочно-вершковою начинкою та покриті глазур’ю.",
  },
  {
    image: "./images/sweet-2.png",
    title: "Ліщина",
    description:
      "Праліне з додаванням подрібненої та тертої ліщини та мигдалю, покрите шоколадною глазур’ю.",
  },
];

const Sweets = () => {
  return (
    <section className="sweets" id="sweets">
      <div className="container">
        <h2 className="sweets__title">
          <span>мої улюбленні</span> солодощі
        </h2>
        <div className="sweets__container">
          {sweetsData.map((sweet, index) => (
            <SweetCard
              key={index}
              image={sweet.image}
              title={sweet.title}
              description={sweet.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sweets;

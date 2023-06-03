import { useContext } from "react";
import { CardsContext } from "context/cards";
import NoData from "./NoData";
import Card from "./Card";

const classes = {
  root: "overflow-y-auto flex flex-wrap justify-center items-start content-start p-3 gap-3 h-[calc(100vh-145px)]",
};

const Cards = () => {
  const { cards } = useContext(CardsContext);

  if (!cards.length) {
    return (
      <section className={classes.root}>
        <NoData />
      </section>
    );
  }

  return (
    <section className={classes.root}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};

export default Cards;

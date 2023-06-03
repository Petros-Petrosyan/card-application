import { useContext } from "react";
import { CardsContext } from "context/cards";
import { removeCard } from "context/cards/actions";
import { Card as CardType } from "types/cards";
import Button from "components/Button";

const classes = {
  root: "relative w-[200px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100",
  button:
    "w-10 h-10 rounded-full flex items-center justify-center absolute top-1 right-1 p-2 border-none",
  valueWrapper: "w-full h-full flex items-center justify-center",
  value: "text-lg font-bold",
};

interface CardProps {
  card: CardType;
}

const Card = ({ card }: CardProps) => {
  const { dispatch } = useContext(CardsContext);

  const onRemoveCard = () => {
    dispatch(removeCard(card));
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={onRemoveCard}
        className={classes.button}
        variant="dangerous"
      >
        X
      </Button>
      <div className={classes.valueWrapper}>
        <p className={classes.value}>{card.number}</p>
      </div>
    </div>
  );
};

export default Card;

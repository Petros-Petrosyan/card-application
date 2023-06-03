import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardsContext } from "context/cards";
import { addCard, removeAllCards, sortCards } from "context/cards/actions";
import Button from "components/Button";

const classes = {
  root: "flex item-center justify-between bg-white shadow-lg px-4 py-5 flex items-center space-x-4",
};

const Header = () => {
  const { cards, dispatch } = useContext(CardsContext);

  const onAddCard = () => {
    const id = uuidv4();
    const randomNumber = Math.floor(Math.random() * 1000);

    dispatch(addCard({ id, number: randomNumber }));
  };

  const onSortCards = () => {
    dispatch(sortCards());
  };

  const onRemoveAllCards = () => {
    dispatch(removeAllCards());
  };

  return (
    <header className={classes.root}>
      <div className="space-x-4">
        <Button variant="primary" onClick={onAddCard}>
          Add card
        </Button>
        <Button
          variant="secondary"
          disabled={cards.length <= 1}
          onClick={onSortCards}
        >
          Sort cards
        </Button>
      </div>

      <Button
        variant="dangerous"
        disabled={!cards.length}
        onClick={onRemoveAllCards}
      >
        Remove all cards
      </Button>
    </header>
  );
};

export default Header;

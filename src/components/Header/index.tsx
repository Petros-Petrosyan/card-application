import { useContext } from "react";
import { MainContext } from "context/main";
import { addNumber, sortNumbers, removeAllNumbers } from "context/main/actions";
import Button from "components/Button";

const classes = {
  root: "flex item-center justify-between bg-white shadow-lg px-4 py-5 flex items-center space-x-4",
};

const Header = () => {
  const { numbers, dispatch } = useContext(MainContext);

  const onAddRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    dispatch(addNumber(randomNumber));
  };

  const onSortNumbers = () => {
    dispatch(sortNumbers());
  };

  const onRemoveAllNumbers = () => {
    dispatch(removeAllNumbers());
  };

  return (
    <header className={classes.root}>
      <div className="space-x-4">
        <Button variant="promary" onClick={onAddRandomNumber}>
          Add card
        </Button>
        <Button
          variant="secundary"
          disabled={numbers.length <= 1}
          onClick={onSortNumbers}
        >
          Sort cards
        </Button>
      </div>

      <Button
        variant="dangerous"
        disabled={!numbers.length}
        onClick={onRemoveAllNumbers}
      >
        Remove all cards
      </Button>
    </header>
  );
};

export default Header;

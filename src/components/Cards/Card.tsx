import { useContext } from "react";
import { MainContext } from "context/main";
import { removeNumber } from "context/main/actions";
import Button from "components/Button";

const classes = {
  root: "relative w-[200px] h-[200px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100",
  button:
    "w-10 h-10 rounded-full flex items-center justify-center absolute top-1 right-1 p-2 border-none",
  valueWrapper: "w-full h-full flex items-center justify-center",
  value: "text-lg font-bold",
};

interface CardProps {
  value: number;
  index: number;
}

const Card = ({ value, index }: CardProps) => {
  const { dispatch } = useContext(MainContext);

  const onRemoveNumber = () => {
    dispatch(removeNumber(index));
  };

  return (
    <div className={classes.root}>
      <Button
        onClick={onRemoveNumber}
        className={classes.button}
        variant="dangerous"
      >
        X
      </Button>
      <div className={classes.valueWrapper}>
        <p className={classes.value}>{value}</p>
      </div>
    </div>
  );
};

export default Card;

import { Fragment, useContext } from "react";
import { MainContext } from "context/main";
import NoData from "./NoData";
import Card from "./Card";

const classes = {
  root: "overflow-y-auto flex flex-wrap justify-center items-start content-start p-3 gap-3 h-[calc(100vh-145px)]",
};

const Cards = () => {
  const { numbers } = useContext(MainContext);

  return (
    <section className={classes.root}>
      {numbers.length ? (
        <Fragment>
          {numbers.map((number: number, index: number) => {
            return (
              <Card key={`${number}-${index}`} value={number} index={index} />
            );
          })}
        </Fragment>
      ) : (
        <NoData />
      )}
    </section>
  );
};

export default Cards;

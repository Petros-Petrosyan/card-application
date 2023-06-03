import { useContext, useEffect } from "react";
import { CardsContext } from "context/cards";
import { initiateCards } from "context/cards/actions";
import Cards from "components/Cards";
import Footer from "components/Footer";
import Header from "components/Header";
import Sidebar from "components/Sidebar";

const classes = {
  main: "grid grid-cols-12",
  section: "relative overflow-hidden md:col-span-9 col-span-12",
  sidebar: "col-span-3 hidden md:block",
};

const Main = () => {
  const { dispatch } = useContext(CardsContext);

  useEffect(() => {
    dispatch(initiateCards());
  }, []);

  return (
    <main className={classes.main}>
      <section className={classes.section}>
        <Header />
        <Cards />
        <Footer />
      </section>
      <aside className={classes.sidebar}>
        <Sidebar />
      </aside>
    </main>
  );
};

export default Main;

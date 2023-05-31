import { useContext, useEffect } from "react";
import { MainContext } from "context/main";
import { addStoredNumbers } from "context/main/actions";
import Cards from "components/Cards";
import Footer from "components/Footer";
import Header from "components/Header";
import Sidebar from "components/Sidebar";

const classes = {
  main: "grid grid-cols-12",
  section: "relative overflow-hidden col-span-9",
  sidebar: "col-span-3",
};

const Main = () => {
  const { dispatch } = useContext(MainContext);

  useEffect(() => {
    dispatch(addStoredNumbers());
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

const classes = {
  root: "h-screen w-full bg-white border-l border-l-gray-200 overflow-hidden overflow-y-auto",
  title: "flex justify-center py-5 mb-4 text-xl text-green-800 font-bol",
  contentWrapper: "p-4 space-y-3",
};

const Sidebar = () => (
  <div className={classes.root}>
    <h1 className={classes.title}>Card Application</h1>
    <div className={classes.contentWrapper}>
      <p>Press the "Add card" button to add the new card.</p>
      <p>Use the "Sort cards" button to sort the cards by increases.</p>
      <p>Press an "X" icon on the top right to delete them.</p>
    </div>
  </div>
);

export default Sidebar;

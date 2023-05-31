const classes = {
  root: "flex items-center justify-center flex-col h-full space-y-3",
  title: "text-lg font-medium",
};

const NoData = () => {
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>You don't have any cards yet!</h2>
      <p>Please press the "Add card" button to add the new card.</p>
    </div>
  );
};

export default NoData;

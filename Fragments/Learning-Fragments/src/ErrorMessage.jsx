const ErrorMessage = ({ items }) => {
  const ListOfHealthyFood = [
    "अरहर की दाल",
    "हरी सब्जी",
    "भीगा हुआ चना",
    "फल",
    "दूध से बनी हुई चीजें",
  ];
  //const ListOfHealthyFood = [];
  return <>{items.length === 0 ? <h2>I am still hungry.</h2> : null}</>;
};
export default ErrorMessage;

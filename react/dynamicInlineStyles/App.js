import { useState } from "react";

const App = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!enteredValue.trim().length) setIsValid(false);
  };

  const globalInpurChangeHandler = (e) => {
    if (e.target.value.trim().length) setIsValid(true);
    setEnteredValue(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        onChange={globalInpurChangeHandler}
        style={{ backgroundColor: !isValid ? "salmon" : "white" }}
      />
      <button>click</button>
    </form>
  );
};

export default App;

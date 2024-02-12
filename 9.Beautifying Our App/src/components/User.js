import { useState, useEffect } from "react";

const User = (props) => {
  const [initialValue, setInitialValue] = useState(0);
  const [initialValue2, setInitialValue2] = useState(2);

  const OnSubmitHandle = () => {
    setInitialValue(initialValue + 1);
  };

  //* in functional component
  useEffect(() => {}, []);

  const githubUser = async () => {
    const data = await fetch("https://api.github.com/users/nitin-pandita");
  };

  return (
    <div className="user-card">
      <h3>Count: {initialValue}</h3>
      <button onClick={OnSubmitHandle}>Button One </button>
      <h3>Count2: {initialValue2}</h3>
      <h3>Name: {props.name}</h3>
      <h5>Age: 22</h5>
      <h6>Profession: Frontend Developer</h6>
    </div>
  );
};

export default User;

import { useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/action";
const Counter = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };

  const handleDecrement = () => {
    const action = decrementCounter(1);
    dispatch(action);
  };
  return (
    <div>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </div>
  );
};

export default Counter;

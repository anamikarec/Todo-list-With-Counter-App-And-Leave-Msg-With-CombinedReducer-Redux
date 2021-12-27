import { useState } from "react";
import { useDispatch } from "react-redux";
import { msgSuccess } from "../redux/msg/action";

function LeaveMsg() {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");

  const handleAdd = () => {
    const action = msgSuccess(msg);
    console.log(msg);
    dispatch(action);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Leave a msg"
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={handleAdd}>MSG</button>
    </div>
  );
}

export default LeaveMsg;

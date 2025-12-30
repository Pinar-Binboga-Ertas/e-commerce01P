import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
    </div>
  );
}

export default App;

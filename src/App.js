import React, { useState } from "react";

export default function App() {
  const [sum, setSum] = useState("");
  const [percentTip, setPercentTip] = useState(0);
  const [friendPercentTip, setFriendPercentTip] = useState(0);

  const tip = (sum * (percentTip + friendPercentTip)) / 2 / 100;

  function handleClearAll() {
    setSum("");
    setPercentTip(0);
    setFriendPercentTip(0);
  }

  return (
    <div>
      <Rating text="How much was the bill?">
        <input
          type="text"
          value={sum}
          onChange={(e) => setSum(Number(e.target.value))}
        />
      </Rating>

      <Rating text="How do you like the service?">
        <SelectInput percentTip={percentTip} onPercentTip={setPercentTip} />
      </Rating>

      <Rating text="How did your friend like the service?">
        <SelectInput
          percentTip={friendPercentTip}
          onPercentTip={setFriendPercentTip}
        />
      </Rating>

      {sum > 0 && (
        <>
          <h3>
            You pay ${sum + tip} ($
            {sum} + ${tip} tip)
          </h3>

          <button onClick={handleClearAll}>Reset</button>
        </>
      )}
    </div>
  );
}

function SelectInput({ percentTip, onPercentTip }) {
  return (
    <select
      value={percentTip}
      onChange={(e) => onPercentTip(Number(e.target.value))}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely amazing! (20%)</option>
    </select>
  );
}

function Rating({ text, children }) {
  return (
    <div>
      <p>{text}</p>
      {children}
    </div>
  );
}

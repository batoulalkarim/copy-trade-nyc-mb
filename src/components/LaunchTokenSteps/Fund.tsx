import { useState } from "react";
import { Button } from "../Button";

export function Fund({ handleNext }: { handleNext: () => void }) {
  const [state, setState] = useState({
    name: "Token",
    symbol: "TOK",
    targetRaise: "10ETH",
    pricePerPerson: ".1ETH",
    minRaise: "1ETH",
  });

  function handleChange(e: any) {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <p>Fund</p>
      <p>Hey! Fund your token</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="symbol">Symbol:</label>
          <input
            type="text"
            id="symbol"
            name="symbol"
            value={state.symbol}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="targetRaise">Target Raise:</label>
          <input
            type="text"
            id="targetRaise"
            name="targetRaise"
            value={state.targetRaise}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pricePerPerson">Price Per Person:</label>
          <input
            type="text"
            id="pricePerPerson"
            name="pricePerPerson"
            value={state.pricePerPerson}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="minRaise">Minimum Raise:</label>
          <input
            type="text"
            id="minRaise"
            name="minRaise"
            value={state.minRaise}
            onChange={handleChange}
          />
        </div>
      </form>
      <Button action={handleNext} text="Proceed" />
    </div>
  );
}

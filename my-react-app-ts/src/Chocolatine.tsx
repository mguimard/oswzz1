import { useState } from "react";

interface ChocolatineParams  {
    price: number;
    cuisson: string;
    onPriceChanged: Function
}

export default function Chocolatine({price, cuisson, onPriceChanged}:ChocolatineParams) {
  let [count, setCount] = useState(price);
  console.log("Call function Chocolatine");

  const handlePlus = function () {
    //setCount(count + 1);
    onPriceChanged(price + 1);
  };

  const handleMinus = function () {
    //setCount(count - 1);
    onPriceChanged(price - 1);
  };

  return (
    <>
      <p>Je suis une Chocolatine {cuisson}</p>
      <p>Prix : {price} </p>
      <button onClick={handlePlus}>Increment</button>
      <button onClick={handleMinus}>Decrement</button>
    </>
  );
}

import { useState } from "react";
import "./App.css";
import Chocolatine from "./Chocolatine";
import Users from "./Users";

interface choco {
  price: number;
  cuisson: string;
  id: number
}

let data : choco[] = [
  { price: 1.2, cuisson: "bien cuite", id: 1 },
  { price: 1.5, cuisson: " pas bien cuites", id: 2 },
];

function App() {
  let [chocolatines, setChocolatines] = useState(data);

  const handlePriceChanged = function (c: choco, newPrice: number) {
    //this = chocolatine
    console.log("Le prix a changé !", c, newPrice);
    c.price = newPrice;
    setChocolatines([...chocolatines]);
  };

  const incrementAll = () => {
    chocolatines.forEach((chocolatine) => chocolatine.price++);
    setChocolatines([...chocolatines]);
  };

  return (
    <>
      <h1>Hello react</h1>

      <Users />

      <button onClick={incrementAll}>Increment ALL</button>

      {chocolatines.map((chocolatine) => {
        return (
          <Chocolatine
            key={chocolatine.id}
            price={chocolatine.price}
            cuisson={chocolatine.cuisson}
            onPriceChanged={(newPrice:number) => { handlePriceChanged(chocolatine, newPrice)}}
          />
        );
      })}

      <p>
        Total:
        {chocolatines.reduce((acc, el) => acc + el.price, 0)}
      </p>
    </>
  );
}

export default App;

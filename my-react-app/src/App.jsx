import { useState } from "react";
import "./App.css";
import Chocolatine from "./Chocolatine";

const cuisson1 = "bien cuite";

let data = [
  { price: 1.2, cuisson: "bien cuite", id: 1 },
  { price: 1.5, cuisson: " pas bien cuites", id: 2 },
];

function App() {
  let [chocolatines, setChocolatines] = useState(data);

  const handlePriceChanged = function (newPrice) {
    //this = chocolatine
    console.log("Le prix a changé !", this, newPrice);
    this.price = newPrice;
    setChocolatines([...chocolatines]);
  };

  const incrementAll = () => {
    chocolatines.forEach((chocolatine) => chocolatine.price++);
    setChocolatines([...chocolatines]);
  };

  return (
    <>
      <h1>Hello react</h1>

      <button onClick={incrementAll}>Increment ALL</button>

      {chocolatines.map((chocolatine) => {
        return (
          <Chocolatine
            key={chocolatine.id}
            price={chocolatine.price}
            cuisson={chocolatine.cuisson}
            onPriceChanged={handlePriceChanged.bind(chocolatine)}
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

import { render } from "@testing-library/react";
import { ReactDOM } from "react";
import AddButton from "./index";

it("Expect render without crash.", () => {
  const div = document.createElement("div");
  const product = [{ name: "test", brand: "apple", _id: 6161, price: 61.99 }];
  const addItem = (product) => console.log(product);

  render(
    <AddButton
      onClick={() => {
        addItem(product[0]);
      }}
    />
  );
});


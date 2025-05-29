import React from "react";

export default function ProductItem() {
  return (
    <li>
      <Card>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

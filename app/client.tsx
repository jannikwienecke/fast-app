"use client";

import React from "react";

export const Client = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Client rendered", { count });
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

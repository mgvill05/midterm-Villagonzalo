import React, { useState } from 'react';

function Stack() {
  const [stack, setStack] = useState([]);

  const handlePush = (value) => {
    const newStack = [...stack];
    newStack.push(value);
    setStack(newStack);
  };

  const handlePop = () => {
    if (stack.length === 0) return;
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);
  };

  return (
    <div>
      <h2>Stack</h2>
      <div>
        <input type="number" id="numberInput" />
        <button onClick={() => handlePush(parseInt(document.getElementById("numberInput").value))}>Push</button>
      </div>
      <button onClick={handlePop}>Pop</button>
      <div>
        {stack.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
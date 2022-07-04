import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button data-testid="button"  onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default App;

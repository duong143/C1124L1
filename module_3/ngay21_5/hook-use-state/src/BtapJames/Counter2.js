import useIncrement from './useIncrement';

function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <h2>Counter 2: {count}</h2>
      <button onClick={increase}>Add 2</button>
    </div>
  );
}

export default Counter2;

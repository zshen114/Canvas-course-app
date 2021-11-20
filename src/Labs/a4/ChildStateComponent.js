function ChildStateComponent({ counter, setCounter }) {
  return (
    <div>
      <h3>Counter {counter}</h3>
      <button
        className="btn btn-success me-2" 
        onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button
        className="btn btn-danger" 
        onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default ChildStateComponent;

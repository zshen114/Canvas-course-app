const MapFunction = () => {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = a => a * a;

  const squares = numberArray1.map(square);
  const cubes = numberArray1.map(a => a * a * a);

  return (
    <div>
      <h3>Map</h3>
      squares = {squares.join('')}<br />
      cubes = {cubes.join('')}<br />
    </div>
  );
};

export default MapFunction;

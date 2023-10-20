const WorkingWithArrays = () => {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  let variableArray1 = [
     functionScoped,   blockScoped,
     constant1,        numberArray1,   stringArray1
  ];

  const renderArrayAsString = (arr) => {
    return arr.flatMap(item => {
      if (Array.isArray(item)) {
        return renderArrayAsString(item);
      } else if (typeof item === 'number' || typeof item === 'string') {
        return item;
      } else {
        return String(item);
      }
    }).join(''); 
  };

  return (
    <div>
      <h2>Working with Arrays</h2>
      numberArray1 = {renderArrayAsString(numberArray1)}<br />
      stringArray1 = {renderArrayAsString(stringArray1)}<br />
      variableArray1 = {renderArrayAsString(variableArray1)}<br />
    </div>
  );
};

export default WorkingWithArrays;

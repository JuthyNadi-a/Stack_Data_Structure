import React, {useState} from 'react';
import './App.css';


const App = () => {
  const [arrayValue, setArrayValue] = useState([]);
  
  const onPush = () => {
    const tempArray = [...arrayValue];
    tempArray.push(tempArray.length + 1);
    setArrayValue(tempArray);
  };

  const onPop = () => {
    const tempArray = [...arrayValue];
    tempArray.pop()
    setArrayValue(tempArray);
  };

  return (
    <div className='stackWrapper'>
      <div className='stackContainer'>
        <h1>Stack Data Structure</h1>
        <p> Last In First Out</p>
      </div>
      <div className='stackValueContainer'>
        {arrayValue.map((val) => {
          return <div className='stackValue'>{val}</div>
        })}
      </div>
      <div className='pushpopContainer'>
        <div className='pushBtn' onClick={onPush}>PUSH</div>
        <div className='popBtn' onClick={onPop}>POP</div>
      </div>
    </div>
  );
};

export default App;
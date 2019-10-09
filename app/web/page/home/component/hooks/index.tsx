import React, { CSSProperties, useState } from 'react';

const style: CSSProperties = {
  textAlign: 'center',
  fontSize: '30px',
};

function LocalReactive() {
  const textAfterClick = 'Local Test after Click';
  const [text, setText] = useState('Local Test');

  return (
    <div>
      <div style={style}>{text}</div>
      <div
        style={style}
        onClick={() => {
          setText(textAfterClick);
        }}
      >
        点我:{textAfterClick}
      </div>
      }
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{}}>
      <div
        style={{}}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我:{count}
      </div>
      <LocalReactive></LocalReactive>
    </div>
  );
}
export default App;

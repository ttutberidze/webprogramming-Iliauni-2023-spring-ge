import React, { useState } from 'react';
import './App.css';
// import Person, {user2 as Person2} from './User';
import Person from './User';

function App() {
  const [name, setName] = useState('James Bond')
  console.log('App was re-rendered')

  const onChangeHandler = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <p>Hello World</p>
      {/* <Person name='James Bond' username='Agent 007'>
        <Person2 />
      </Person> */}
      <Person name={name} onChange={onChangeHandler} />
      <Person name={name} onChange={onChangeHandler} />
      <Person name={name} onChange={onChangeHandler} />
      <button onClick={() => {
        setName('007')
      }}>Change name</button>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('p', {}, 'Hello World'));
}
// JSX
export default App;

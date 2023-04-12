import {useState, useCallback, useRef} from 'react';
import './App.css';
import Person from './User';

function App() {
  // const [name, setName] = useState('James');
  // const [age, setAge] = useState(50);

  // useEffect(() => {
  //   console.log('didMount')
  // }, [])

  // useEffect(() => {
  //   console.log('didUpdate')
  // })

  // useEffect(() => {
  //   console.log('age was updated')
  // }, [age])

  const [users, setUsers] = useState([{name: 'James'}, {name: 'Bond'}]);

  const inputRef = useRef();
  const secondRef = useRef(0);
  // const secondRef = 0
  
  const onChangeHandler = useCallback((name, index) => {
    setUsers((users) => {
      const clonedUsers = [...users];
      const user = {...clonedUsers[index]};
      user.name = name;
      clonedUsers[index] = user;
      return clonedUsers;
    })
    secondRef.current += 1;
  }, [])

  const addUser = () => {
    const clonedUsers = [...users];
    clonedUsers.push({name: ''});
    setUsers(clonedUsers);
  }

  const onDelete = useCallback((index) => {
    setUsers((users) => {
      const clonedUsers = [...users];
      clonedUsers.splice(index, 1);
      return clonedUsers;
    });
  }, [])

  // const calculatedValue = useMemo(() => {
  //   return 100 + 200
  // }, [])

  // console.log(calculatedValue);
  // console.log(100 + 200);
  console.log(inputRef);

  const onSubmit = () => {
    console.log('onSumit', inputRef.current.value, secondRef);
  }
  console.log('RENDER');
  return (
    <div className="App">
      {/* <button onClick={() => setAge(100)}>Change Age</button> */}
      {/* <Person name={name} onChange={(event) => setName(event.target.value)} /> */}
      {users.map((user, index) => (
        <Person 
          key={index} 
          name={user.name} 
          onChange={onChangeHandler} 
          onDelete={onDelete}
          index={index}
        />
      ))}
      <button onClick={addUser}>Add User</button>
      <input ref={inputRef} /><button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;

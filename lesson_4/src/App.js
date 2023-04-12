import { Component } from 'react';
import './App.css';
import Person from './User';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      users: [{name: 'James'}, {name: 'Bond'}],
      show: true
    }
  }

  componentDidMount = () => {
    console.log('componentDidMount')
  }

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log('shouldComponentUpdate', nextProps, nextState, this.props, this.state)
  //   return this.state.show !== nextState.show || this.state.users !== nextState.users
  // }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate', prevProps, prevState, this.props, this.state)
  }

  onChangeHandler = (event, index) => {
    // this.state.name = event.target.value; // Not allowed
    const usersArr = [...this.state.users]
    const user = {...usersArr[index]}
    user.name = event.target.value;
    usersArr[index] = user;
    this.setState({
      users: usersArr
    })
  }

  onAddUser = () => {
    // const usersArr = [...this.state.users];
    // usersArr.push({
    //   name: ''
    // })
    // this.setState({
    //   users: [
    //     ...this.state.users,
    //     {name: ''}
    //   ]
    // })
    this.setState((state) => {
      return {
          users: [
            ...state.users,
            {name: ''}
          ]
        }
    })
  }

  onDeleteuser = (index) => {
    this.setState((state) => {
      const users = [...state.users];
      users.splice(index, 1);
      return {
          users: users
        }
    })
  }

  onToggle = () => {
    this.setState((state) => {
      return {
        show: !state.show
      }
    })
  }
  
  render() {
    let content = null;
    if(this.state.show) {
      content = this.state.users.map((user, index) => {
        return (
          <Person 
            key={index}
            name={user.name} 
            onChange={this.onChangeHandler} 
            onDelete={this.onDeleteuser}
            index={index}
          />
        )
      })
    }

    return (
      <div className='App'>
        <button onClick={() => this.setState({show: true})}>Show</button>
        <button onClick={this.onToggle}>Toggle</button>
        {content}
        <button onClick={this.onAddUser}>Add User</button>
      </div>
    )
  }
}

export default App;

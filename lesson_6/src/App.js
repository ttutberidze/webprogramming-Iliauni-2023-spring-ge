import './App.css';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App;

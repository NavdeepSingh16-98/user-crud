import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

const BASE_URL = "https://user-crud-production.up.railway.app"


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

   
      <Form BASE_URL={BASE_URL} />
      <UserList BASE_URL={BASE_URL} />
    </div>
  );
}

export default App;

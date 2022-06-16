import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LoginForm from "./components/LoginForm";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <SearchForm/>
      <LoginForm/>
    </div>
  );
}

export default App;

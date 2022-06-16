import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LoginForm from "./components/LoginForm";
import SearchForm from "./components/SearchForm";
import CustomAlert from "./components/CustomAlert";
import {useEffect, useState} from "react";

function App() {
  const [showGlobalAlert, setShowGlobalAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowGlobalAlert(true);
    }, 10000)
  }, [])

  return (
    <div className="App">
      <SearchForm/>
      <LoginForm/>
      {showGlobalAlert && <CustomAlert closable>I am a global error alert which closes manually</CustomAlert>}
    </div>
  );
}

export default App;

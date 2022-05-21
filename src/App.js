import './App.css';
import logo from "./images/remigos.png";
import Form from './components/Form';
function App() {
  return (
    <>
        <div className="header">
            <img src={logo} alt="remigos" />
        </div>
        <div className="form-container">
        <Form />
        </div>
        <div className="button-container">
          <button id="transfer-button">Transfer Money</button>
        </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Form/>
    </div>
  );
}

export default App;
